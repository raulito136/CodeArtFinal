// components/Posts.tsx
import { useQuery } from '@apollo/client'; // Importamos el hook useQuery
import { GET_POSTS } from '../queries/postsQuery'; // Importamos la consulta GET_POSTS

const Posts = () => {
  const { loading, error, data } = useQuery(GET_POSTS); // Usamos el hook useQuery para ejecutar la consulta

  if (loading) return <p>Loading...</p>; // Mostramos un mensaje de carga
  if (error) return <p>Error: {error.message}</p>; // Mostramos un mensaje si hay un error

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <ul>
        {data.posts.map((post: { id: string; title: string }) => (
          <li key={post.id} className="mb-2">
            <h2 className="text-xl font-semibold">{post.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;