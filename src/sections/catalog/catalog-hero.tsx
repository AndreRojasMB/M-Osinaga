import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export function CatalogHero({ sx, ...other }: BoxProps) {
  return (
    <Box
      sx={{
        minHeight: '40vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#19304e',
        pt: { xs: 12, md: 15 },
        pb: { xs: 6, md: 8 },
        ...sx,
      }}
      {...other}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem' },
            fontWeight: 700,
            color: '#ffffff',
            textAlign: 'center',
            mb: 2,
            animation: 'fadeInUp 0.8s ease-out',
            '@keyframes fadeInUp': {
              from: { opacity: 0, transform: 'translateY(30px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          CATÁLOGO
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '1.3rem' },
            color: '#D6C5B5',
            textAlign: 'center',
            animation: 'fadeInUp 0.8s ease-out 0.2s backwards',
          }}
        >
          Conoce todos nuestros modelos de maquinaria industrial
        </Typography>
      </Container>
    </Box>
  );
}