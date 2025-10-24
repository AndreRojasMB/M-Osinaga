import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export function ServicesHero({ sx, ...other }: BoxProps) {
  return (
    <Box
      sx={{
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#385882',
        pt: { xs: 12, md: 15 },
        pb: { xs: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden',
        ...sx,
      }}
      {...other}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          bgcolor: 'rgba(7, 104, 232, 0.1)',
          filter: 'blur(100px)',
        }}
      />

      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4.5rem' },
              fontWeight: 700,
              color: '#ffffff',
              mb: 2,
              animation: 'fadeInUp 0.8s ease-out',
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(30px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            SERVICIOS
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '1.1rem', md: '1.5rem' },
              color: '#D6C5B5',
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.6,
              animation: 'fadeInUp 0.8s ease-out 0.2s backwards',
            }}
          >
            Brindamos soluciones integrales desde la asesoría hasta el mantenimiento de tus equipos
          </Typography>

          {/* Stats */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
              gap: 4,
              mt: 6,
              animation: 'fadeInUp 0.8s ease-out 0.4s backwards',
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: '2.5rem', md: '3rem' },
                  fontWeight: 700,
                  color: '#0768E8',
                }}
              >
                +25
              </Typography>
              <Typography sx={{ color: '#faf7f2', fontSize: '1rem' }}>
                Años de experiencia
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: '2.5rem', md: '3rem' },
                  fontWeight: 700,
                  color: '#0768E8',
                }}
              >
                500+
              </Typography>
              <Typography sx={{ color: '#faf7f2', fontSize: '1rem' }}>
                Proyectos completados
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: '2.5rem', md: '3rem' },
                  fontWeight: 700,
                  color: '#0768E8',
                }}
              >
                24/7
              </Typography>
              <Typography sx={{ color: '#faf7f2', fontSize: '1rem' }}>Soporte técnico</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}