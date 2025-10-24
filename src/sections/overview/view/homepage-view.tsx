import Box from '@mui/material/Box';

import { HomeNavbar } from '../home-navbar';
import { HomeFooter } from '../home-footer';
import { WhatsappButton } from '../whatsapp-button';
import { HomeHeroSection } from '../home-hero-section';
import { HomeAboutSection } from '../home-about-section';
import { HomeContactSection } from '../home-contact-section';
import { HomeProductsSection } from '../home-products-section';

// ----------------------------------------------------------------------

export function HomepageView() {
  return (
    <Box>
      <HomeNavbar />
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeProductsSection />
      <HomeContactSection />
      <HomeFooter />
      <WhatsappButton phoneNumber="51997425196" />
    </Box>
  );
}