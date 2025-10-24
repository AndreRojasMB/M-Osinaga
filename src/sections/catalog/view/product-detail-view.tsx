import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';

import { HomeNavbar } from 'src/sections/overview/home-navbar';
import { HomeFooter } from 'src/sections/overview/home-footer';
import { WhatsappButton } from 'src/sections/overview/whatsapp-button';

import { ProductUseCases } from '../product-use-cases';
import { ProductDetailHero } from '../product-detail-hero';

// ----------------------------------------------------------------------

// Mock data - reemplaza con tu API o base de datos
const productData = {
  '44-120': {
    name: 'Modelo 44-120',
    category: 'Generador de Vapor',
    description:
      'Generador de vapor de alta eficiencia diseñado para saunas residenciales y comerciales. Fabricado en acero inoxidable 304, garantiza durabilidad y resistencia a la corrosión. Ideal para espacios de hasta 12m³.',
    images: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800',
      'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800',
    ],
    specifications: [
      { label: 'Capacidad', value: '12 kW' },
      { label: 'Voltaje', value: '220V / 380V' },
      { label: 'Dimensiones', value: '45 x 30 x 25 cm' },
      { label: 'Peso', value: '18 kg' },
      { label: 'Material', value: 'Acero Inoxidable 304' },
      { label: 'Tiempo de calentamiento', value: '10-15 min' },
    ],
    useCases: [
      {
        title: 'Cabinas para Sauna',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600',
        description:
          'Perfectas para saunas residenciales y comerciales. Proporciona vapor constante y uniforme, creando el ambiente perfecto para relajación y bienestar.',
      },
      {
        title: 'Spas y Centros de Bienestar',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600',
        description:
          'Ideales para spas profesionales que buscan ofrecer experiencias de alta calidad. Bajo mantenimiento y operación silenciosa.',
      },
      {
        title: 'Hoteles y Resorts',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600',
        description:
          'Solución perfecta para instalaciones hoteleras premium. Diseño compacto que se adapta a cualquier espacio sin comprometer rendimiento.',
      },
    ],
  },
};

export function ProductDetailView() {
  const { productId } = useParams<{ productId: string }>();
  const product = productData[productId as keyof typeof productData] || productData['44-120'];

  return (
    <Box>
      <HomeNavbar />
      <ProductDetailHero product={product} />
      <ProductUseCases useCases={product.useCases} />
      <HomeFooter />
      <WhatsappButton phoneNumber="51999999999" />
    </Box>
  );
}