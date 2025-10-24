import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

interface ServiceDetailHeroProps extends BoxProps {
  service: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    features: string[];
    benefits: string[];
  };
  onSchedule: () => void;
}

export function ServiceDetailHero({ service, onSchedule, sx, ...other }: ServiceDetailHeroProps) {
  return (
    <Box
      sx={{
        minHeight: '90vh',
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
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: { xs: 4, md: 8 },
            alignItems: 'center',
          }}
        >
          {/* Content - Izquierda */}
          <Box
            sx={{
              animation: 'slideInLeft 0.8s ease-out',
              '@keyframes slideInLeft': {
                from: { opacity: 0, transform: 'translateX(-50px)' },
                to: { opacity: 1, transform: 'translateX(0)' },
              },
            }}
          >
            <Chip
              label="Servicio Profesional"
              sx={{
                bgcolor: '#0768E8',
                color: 'white',
                fontWeight: 600,
                mb: 2,
              }}
            />

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3.5rem' },
                fontWeight: 700,
                color: '#ffffff',
                mb: 2,
              }}
            >
              {service.title}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                color: '#0768E8',
                fontWeight: 600,
                mb: 3,
              }}
            >
              {service.subtitle}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: '#D6C5B5',
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              {service.description}
            </Typography>

            {/* Features List */}
            <Box sx={{ mb: 4 }}>
              <Typography
                sx={{
                  color: '#0768E8',
                  fontWeight: 700,
                  mb: 2,
                  fontSize: '1.1rem',
                }}
              >
                ¿Qué incluye?
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {service.features.map((feature, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        bgcolor: '#0768E8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Typography sx={{ color: 'white', fontSize: '0.8rem' }}>✓</Typography>
                    </Box>
                    <Typography sx={{ color: '#faf7f2', fontSize: '1rem' }}>
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* CTA Button */}
            <Button
              onClick={onSchedule}
              variant="contained"
              size="large"
              sx={{
                bgcolor: '#0768E8',
                color: 'white',
                px: 5,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 700,
                borderRadius: 3,
                '&:hover': {
                  bgcolor: '#0556c7',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Agendar Ahora
            </Button>
          </Box>

          {/* Image - Derecha */}
          <Box
            sx={{
              animation: 'slideInRight 0.8s ease-out',
              '@keyframes slideInRight': {
                from: { opacity: 0, transform: 'translateX(50px)' },
                to: { opacity: 1, transform: 'translateX(0)' },
              },
            }}
          >
            <Box
              sx={{
                position: 'relative',
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                aspectRatio: '4/3',
              }}
            >
              <Box
                component="img"
                src={service.image}
                alt={service.title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}