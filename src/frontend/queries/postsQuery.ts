// queries/postsQuery.ts
import { gql } from '@apollo/client';

// Definimos la consulta GraphQL para obtener los datos de los posts
export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
    }
  }
`;