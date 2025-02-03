// lib/apolloClient.ts
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Configura el cliente Apollo
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:8000/graphql', // Aquí va la URL de tu API GraphQL
  }),
  cache: new InMemoryCache(),
});

export default client;