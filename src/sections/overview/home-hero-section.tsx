import type { BoxProps } from '@mui/material/Box';

import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

const imagesSets = [
  [
    '/assets/images/machine/intercambiador-calor-30-60-1.png',
    '/assets/images/machine/generador-vapor-44-120.png',
    '/assets/images/machine/generador-vapor-30-90.png',
    '/assets/images/machine/generador-vapor-60-180.png',
  ],
  [
    '/assets/images/machine/dispensador-hierba4-1.png',
    '/assets/images/machine/generador-vapor-60-180-reforzado.png',
    '/assets/images/machine/generador-vapor-55-150.png',
    '/assets/images/machine/intercambiador-calor-44-120.png',
  ],
  [
    '/assets/images/machine/generador-vapor-20-40.png',
    '/assets/images/machine/tanque-1500L.png',
    '/assets/images/machine/generador-vapor-60-180.png',
    '/assets/images/machine/calentador-agua-55-150.png',
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
        setTimeout(() => {
          setIsTransitioning(false);
        }, 100);
      }, 600);
    }, 4000);

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
      <Container maxWidth="xl" sx={{ height: '100%', position: 'relative' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '450px 1fr' },
            gap: { xs: 6, md: 8 },
            alignItems: 'center',
            height: '100%',
          }}
        >
          {/* Carousel 4 bloques - MÁS DIAGONALES Y CURVOS */}
          <Box
            sx={{
              order: { xs: 1, lg: 2 },
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 3,
              height: { xs: 300, sm: 360, md: 540, lg: 620 },
              ml: { lg: 'auto' },
              mr: { lg: -6 },
              width: { lg: 'calc(100% + 48px)' },
            }}
          >
            {currentImages.map((image, index) => (
              <Box
                key={`${currentSet}-${index}`}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  bgcolor: '#BBCCE2',
                  transform: 'skewX(-8deg) rotate(-2deg)',
                  opacity: isTransitioning ? 0.4 : 1,
                  transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  ...(index === 0 && {
                    borderRadius: '60px 20px 20px 60px',
                  }),
                  ...(index === 1 && {
                    borderRadius: '20px',
                  }),
                  ...(index === 2 && {
                    borderRadius: '20px',
                  }),
                  ...(index === 3 && {
                    borderRadius: '20px 60px 60px 20px',
                  }),
                  '&:hover': {
                    transform: 'skewX(-8deg) rotate(-2deg) translateY(-12px) scale(1.02)',
                    boxShadow: '0 20px 50px rgba(7, 104, 232, 0.4)',
                    zIndex: 10,
                  },
                }}
              >
                {/* Overlay gradient para más profundidad */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(7, 104, 232, 0.1) 0%, transparent 50%)',
                    pointerEvents: 'none',
                    zIndex: 1,
                  }}
                />

                <Box
                  component="img"
                  src={image}
                  alt={`Maquinaria ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'skewX(8deg) rotate(2deg) scale(1.15)',
                    transition: 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    filter: isTransitioning ? 'brightness(0.6) blur(2px)' : 'brightness(1)',
                    '&:hover': {
                      transform: 'skewX(8deg) rotate(2deg) scale(1.25)',
                    },
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* Logo + Frases - LÍNEAS DESDE EL BORDE IZQUIERDO */}
          <Box
            sx={{
              order: { xs: 2, lg: 1 },
              animation: 'slideInLeft 1s ease-out',
              '@keyframes slideInLeft': {
                from: { opacity: 0, transform: 'translateX(-50px)' },
                to: { opacity: 1, transform: 'translateX(0)' },
              },
              textAlign: { xs: 'center', lg: 'left' },
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                position: 'relative',
                maxWidth: { xs: 280, sm: 340, md: 420, lg: 480 },
                mx: { xs: 'auto', lg: 0 },
              }}
            >
              <Box
                component="img"
                src="/assets/icons/workspaces/logo-osinaga.png"
                alt="Maquinarias Osinaga"
                sx={{
                  width: '100%',
                  height: 'auto',
                  filter: 'drop-shadow(0 15px 35px rgba(7, 104, 232, 0.4))',
                  borderRadius: 3,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              />
            </Box>

            {/* Frases con líneas DESDE EL BORDE IZQUIERDO */}
            <Box
              sx={{
                mt: { xs: 5, md: 7 },
                position: 'relative',
              }}
            >
              {/* Frase 1 con línea completa */}
              <Box
                sx={{
                  mb: 4,
                  animation: 'fadeInUp 1s ease-out 0.3s both',
                  '@keyframes fadeInUp': {
                    from: { opacity: 0, transform: 'translateY(20px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: { xs: 20, md: 24 },
                    lineHeight: 1.4,
                    mb: 1.5,
                    textAlign: { xs: 'center', lg: 'left' },
                  }}
                >
                  +25 años fabricando maquinaria
                </Typography>

                {/* Línea que va desde el borde izquierdo hasta el final del texto */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '3px',
                    background: 'linear-gradient(90deg, #0768E8 0%, rgba(255,255,255,0.8) 100%)',
                    borderRadius: '2px',
                    boxShadow: '0 2px 8px rgba(7, 104, 232, 0.3)',
                  }}
                />
              </Box>

              {/* Frase 2 con línea completa */}
              <Box
                sx={{
                  animation: 'fadeInUp 1s ease-out 0.5s both',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: { xs: 20, md: 24 },
                    lineHeight: 1.4,
                    mb: 1.5,
                    textAlign: { xs: 'center', lg: 'left' },
                  }}
                >
                  Tecnología peruana fabricada localmente
                </Typography>

                {/* Línea que va desde el borde izquierdo hasta el final del texto */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '3px',
                    background: 'linear-gradient(90deg, #0768E8 0%, rgba(255,255,255,0.8) 100%)',
                    borderRadius: '2px',
                    boxShadow: '0 2px 8px rgba(7, 104, 232, 0.3)',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}