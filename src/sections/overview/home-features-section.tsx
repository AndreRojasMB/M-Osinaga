import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export function HomeFeaturesSection({ sx, ...other }: BoxProps) {
  const leftFeatures = [
    'Diseño responsive y moderno',
    'Optimizado para rendimiento',
    'Fácil de personalizar',
  ];

  const rightFeatures = [
    'Soporte multiplataforma',
    'Actualizaciones constantes',
    'Documentación completa',
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        color: 'white',
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 8 }}>
          Características Principales
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr auto 1fr' },
            gap: { xs: 4, md: 6 },
            alignItems: 'center',
          }}
        >
          {/* Features izquierda */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {leftFeatures.map((feature, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  bgcolor: 'rgba(255,255,255,0.1)',
                  p: 2.5,
                  borderRadius: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: 30,
                    height: 30,
                    bgcolor: 'white',
                    borderRadius: 0.75,
                    flexShrink: 0,
                  }}
                />
                <Typography variant="body1">{feature}</Typography>
              </Box>
            ))}
          </Box>

          {/* Imagen central */}
          <Box
            sx={{
              width: { xs: '100%', md: 300 },
              aspectRatio: '3/4',
              bgcolor: 'grey.700',
              borderRadius: 3,
              mx: 'auto',
            }}
          />

          {/* Features derecha */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {rightFeatures.map((feature, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  bgcolor: 'rgba(255,255,255,0.1)',
                  p: 2.5,
                  borderRadius: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: 30,
                    height: 30,
                    bgcolor: 'white',
                    borderRadius: 0.75,
                    flexShrink: 0,
                  }}
                />
                <Typography variant="body1">{feature}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}