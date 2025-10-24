import Box from '@mui/material/Box';

import { HomeNavbar } from 'src/sections/overview/home-navbar';
import { HomeFooter } from 'src/sections/overview/home-footer';
import { WhatsappButton } from 'src/sections/overview/whatsapp-button';

import { ServicesHero } from '../services-hero';
import { ServicesCarousel } from '../services-carousel';

// ----------------------------------------------------------------------

export function ServicesView() {
  return (
    <Box>
      <HomeNavbar />
      <ServicesHero />
      <ServicesCarousel />
      <HomeFooter />
      <WhatsappButton phoneNumber="51997425196" />
    </Box>
  );
}