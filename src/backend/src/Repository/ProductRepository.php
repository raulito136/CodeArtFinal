<?php

namespace App\Repository;

use App\Entity\Product;
use AsyncAws\DynamoDb\DynamoDbClient;
use AsyncAws\DynamoDb\Input\DeleteItemInput;
use AsyncAws\DynamoDb\Input\PutItemInput;
use AsyncAws\DynamoDb\Input\QueryInput;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Product>
 */
class ProductRepository extends ServiceEntityRepository
{
    private DynamoDbClient $dynamoDbClient;

    public function __construct(ManagerRegistry $registry, DynamoDbClient $dynamoDbClient)
    {
        parent::__construct($registry, Product::class);
        $this->dynamoDbClient = $dynamoDbClient;
    }

    public function findById($id): ?Product
    {
        $input = new QueryInput([
            'TableName' => 'products',
            'KeyConditionExpression' => 'id = :id',
            'ExpressionAttributeValues' => [
                ':id' => ['S' => $id],
            ],
        ]);

        $result = $this->dynamoDbClient->query($input);

        if (!$result->getItems()) {
            return null;
        }

        $item = $result->getItems()[0];
        return new Product($item['id']['S'], $item['name']['S'], (float) $item['price']['N']);
    }

    public function save(Product $product): string
    {
        $input = new PutItemInput([
            'TableName' => 'products',
            'Item' => [
                'id' => ['S' => $product->getId()],
                'name' => ['S' => $product->getName()],
                'price' => ['N' => (string) $product->getPrice()],
            ],
        ]);

        $this->dynamoDbClient->putItem($input);
        return $product->getId();
    }

    public function delete(string $id): void
    {
        $input = new DeleteItemInput([
            'TableName' => 'products',
            'Key' => [
                'id' => ['S' => $id],
            ],
        ]);

        $this->dynamoDbClient->deleteItem($input);
    }

    public function createTable(): void
    {
        $existingTables = $this->dynamoDbClient->listTables()->getTableNames();

        foreach ($existingTables as $table) {
            if ('products' === $table) {
                return; // La tabla ya existe
            }
        }

        $this->dynamoDbClient->createTable([
            'TableName' => 'products',
            'AttributeDefinitions' => [
                ['AttributeName' => 'id', 'AttributeType' => 'S'],
            ],
            'KeySchema' => [
                ['AttributeName' => 'id', 'KeyType' => 'HASH'],
            ],
            'BillingMode' => 'PAY_PER_REQUEST',
        ]);
    }

    public function deleteAll(): void
    {
        $items = $this->dynamoDbClient->scan(['TableName' => 'products'])->getItems();

        foreach ($items as $item) {
            $this->delete($item['id']->getS());
        }
    }
}
