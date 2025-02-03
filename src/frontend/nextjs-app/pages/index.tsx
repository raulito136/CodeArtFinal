// pages/index.tsx
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Posts from '../components/Posts'; // Importamos el componente que muestra los datos de GraphQL

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Posts /> {/* Aquí es donde se mostrarán los posts obtenidos desde GraphQL */}
      <Footer />
    </div>
  );
}