import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';

import { HomeNavbar } from 'src/sections/overview/home-navbar';
import { HomeFooter } from 'src/sections/overview/home-footer';
import { WhatsappButton } from 'src/sections/overview/whatsapp-button';

import { ProductUseCases } from '../product-use-cases';
import { ProductDetailHero } from '../product-detail-hero';
import { productData, type Product } from '../product-data';


// ----------------------------------------------------------------------

export function ProductDetailView() {
  const { productId } = useParams<{ productId: string }>();

  // Producto encontrado o fallback al 44-120
  const product: Product =
    (productId && productData[productId]) || productData['44-120'];

  return (
    <Box>
      <HomeNavbar />
      <ProductDetailHero product={product} />
      <ProductUseCases useCases={product.useCases} />
      <HomeFooter />
      <WhatsappButton phoneNumber="51997425196" />
    </Box>
  );
}
