import Box from '@mui/material/Box';

import { HomeNavbar } from 'src/sections/overview/home-navbar';
import { HomeFooter } from 'src/sections/overview/home-footer';
import { WhatsappButton } from 'src/sections/overview/whatsapp-button';

import { CatalogHero } from '../catalog-hero';
import { CatalogProductsCarousel } from '../catalog-products-carousel';
import { CatalogProductsCarousel2} from '../catalog-products-carousel-2';
import { CatalogProductsCarousel3} from '../catalog-products-carousel-3';
import { CatalogProductsCarousel4} from '../catalog-products-carousel-4';
import { CatalogProductsCarousel5} from '../catalog-products-carousel-5';
import { CatalogProductsCarousel6} from '../catalog-products-carousel-6';
// ----------------------------------------------------------------------

export function CatalogView() {
  return (
    <Box>
      <HomeNavbar />
      <CatalogHero />
      <CatalogProductsCarousel />
      <CatalogProductsCarousel2 />
      <CatalogProductsCarousel3 />
      <CatalogProductsCarousel4 />
      <CatalogProductsCarousel5 />
      <CatalogProductsCarousel6 />
      <HomeFooter />
      <WhatsappButton phoneNumber="51997425196" />
    </Box>
  );
}