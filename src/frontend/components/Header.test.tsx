// src/components/Header.test.tsx
import { render, screen } from '@testing-library/react';
import Header from './Header';  // Importa tu componente Header
import '@testing-library/jest-dom';

describe('Header', () => {
  test('Verifica que los enlaces de navegación aparecen correctamente', () => {
    render(<Header />);

    // Verificamos que los enlaces estén en el documento
    const inicioLink = screen.getByText(/inicio/i);
    const acercaDeLink = screen.getByText(/acerca de/i);
    const serviciosLink = screen.getByText(/servicios/i);
    const contactoLink = screen.getByText(/contacto/i);

    expect(inicioLink).toBeInTheDocument();
    expect(acercaDeLink).toBeInTheDocument();
    expect(serviciosLink).toBeInTheDocument();
    expect(contactoLink).toBeInTheDocument();
  });
});