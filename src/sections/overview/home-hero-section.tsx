import type { BoxProps } from '@mui/material/Box';

import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// ----------------------------------------------------------------------

// Simulación de imágenes - reemplaza con tus URLs reales
const imagesSets = [
  [
    '../../../public/assets/images/machine/intercambiador-calor-30-60-1.png',
    '../../../public/assets/images/machine/generador-vapor-44-120.png',
    '../../../public/assets/images/machine/generador-vapor-30-90.png',
    '../../../public/assets/images/machine/generador-vapor-60-180.png',
  ],
  [
    '../../../public/assets/images/machine/dispensador-hierba4-1.png',
    '../../../public/assets/images/machine/generador-vapor-60-180-reforzado.png',
    '../../../public/assets/images/machine/generador-vapor-55-150.png',
    '../../../public/assets/images/machine/intercambiador-calor-44-120.png',
  ],
  [
    '../../../public/assets/images/machine/generador-vapor-20-40.png',
    '../../../public/assets/images/machine/tanque-1500L.png',
    '../../../public/assets/images/machine/generador-vapor-60-180.png',
    '../../../public/assets/images/machine/calentador-agua-55-150.png',
  ],
];

export function HomeHeroSection({ sx, ...other }: BoxProps) {
  const [currentSet, setCurrentSet] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSet((prev) => (prev + 1) % imagesSets.length);
        setIsTransitioning(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentImages = imagesSets[currentSet];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#19304e',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 10, md: 0 },
        ...sx,
      }}
      {...other}
    >
      <Container maxWidth="xl" sx={{ height: '100%' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '450px 1fr' },
            gap: { xs: 4, md: 8 },
            alignItems: 'center',
            height: '100%',
          }}
        >
          {/* Logo Section - Izquierda */}
          <Box
            sx={{
              animation: 'slideInLeft 1s ease-out',
              '@keyframes slideInLeft': {
                from: { opacity: 0, transform: 'translateX(-100px)' },
                to: { opacity: 1, transform: 'translateX(0)' },
              },
            }}
          >
            {/* Imagen del logo */}
            <Box
              sx={{
                position: 'relative',
                maxWidth: { xs: 400, md: 500 },
                mx: { xs: 0, lg: 5 },
                mt: -25, // sube la imagen ligeramente (ajusta el valor según necesidad)
              }}
            >
              <Box
                component="img"
                src="/assets/icons/workspaces/logo-osinaga.png"
                alt="Maquinarias Osinaga"
                sx={{
                  width: '440px', // más grande
                  height: 'auto',
                  filter: 'drop-shadow(0 10px 30px rgba(7, 104, 232, 0.3))',
                  borderRadius: 2,
                }}
              />
            </Box>

          </Box>

          {/* Carousel 4 bloques diagonales - Derecha (pegado al borde) */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 2.5,
              height: { xs: 450, md: 600 },
              ml: { lg: 'auto' },
              mr: { lg: -6 },
              width: { lg: 'calc(100% + 48px)' },
            }}
          >
            {currentImages.map((image, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  bgcolor: '#BBCCE2',
                  transform: 'skewX(-5deg)',
                  transition: 'all 0.5s ease-in-out',
                  opacity: isTransitioning ? 0 : 1,
                  ...(index === 0 && {
                    borderRadius: '75px 0 0 75px',
                  }),
                  ...(index === 3 && {
                    borderRadius: '0 75px 75px 0',
                  }),
                }}
              >
                <Box
                  component="img"
                  src={image}
                  alt={`Maquinaria ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'skewX(5deg) scale(1.2)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'skewX(5deg) scale(1.3)',
                    },
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}