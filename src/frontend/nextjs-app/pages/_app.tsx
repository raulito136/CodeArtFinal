// pages/_app.tsx
import { ApolloProvider } from '@apollo/client'; // Importamos ApolloProvider
import client from '../lib/apolloClient'; // Importamos el cliente Apollo que configuramos
import type { AppProps } from 'next/app';
import '@/styles/globals.css'; // Mantén la importación de tus estilos globales

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}> {/* Envolvemos la aplicación con ApolloProvider */}
      <Component {...pageProps} />
    </ApolloProvider>
  );
}