import Box from '@mui/material/Box';

import { HomeNavbar } from 'src/sections/overview/home-navbar';
import { HomeFooter } from 'src/sections/overview/home-footer';
import { WhatsappButton } from 'src/sections/overview/whatsapp-button';

import { CatalogHero } from '../catalog-hero';
import { CatalogProductsCarousel } from '../catalog-products-carousel';

// ----------------------------------------------------------------------

export function CatalogView() {
  return (
    <Box>
      <HomeNavbar />
      <CatalogHero />
      <CatalogProductsCarousel />
      <HomeFooter />
      <WhatsappButton phoneNumber="51997425196" />
    </Box>
  );
}