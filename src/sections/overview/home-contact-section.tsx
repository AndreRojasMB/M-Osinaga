import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

const contactInfo = [
  {
    icon: '📞',
    label: 'Teléfono',
    value: '+51 997 425 196',
    link: 'tel:+51997425196',
  },
  {
    icon: '📘',
    label: 'Facebook',
    value: 'facebook',
    link: 'https://facebook.com/maquinasosinaga',
  },
  {
    icon: '📺',
    label: 'YouTube',
    value: 'youtube',
    link: 'https://youtube.com/@maquinasosinaga',
  },
  {
    icon: '📍',
    label: 'Ubicación',
    value: 'Calle Las Retamas 260\nSalamanca, Ate - Lima\nPerú',
    link: 'https://maps.google.com/?q=Calle+Las+Retamas+260+Salamanca+Ate+Lima+Peru',
  },
];

export function HomeContactSection({ sx, ...other }: BoxProps) {
  return (
    <Box
      id="contacto"
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#19304e',
        py: { xs: 8, md: 12 },
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
          bottom: -100,
          left: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          bgcolor: 'rgba(7, 104, 232, 0.05)',
          filter: 'blur(100px)',
        }}
      />

      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: { xs: 6, md: 10 },
            alignItems: 'center',
          }}
        >
          {/* Imagen y Frase - Izquierda */}
          <Box
            sx={{
              animation: 'slideInLeft 0.8s ease-out',
              '@keyframes slideInLeft': {
                from: { opacity: 0, transform: 'translateX(-50px)' },
                to: { opacity: 1, transform: 'translateX(0)' },
              },
            }}
          >
            {/* Imagen con persona */}
            <Box
              sx={{
                position: 'relative',
                borderRadius: 4,
                overflow: 'hidden',
                mb: 4,
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                border: '4px solid #0768E8',
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600"
                alt="Equipo Osinaga"
                sx={{
                  width: '100%',
                  aspectRatio: '16/10',
                  objectFit: 'cover',
                }}
              />
            </Box>

            {/* Frase */}
            <Box
              sx={{
                bgcolor: 'rgba(187, 204, 226, 0.1)',
                border: '2px solid #0768E8',
                borderRadius: 3,
                p: 4,
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1.3,
                }}
              >
                Hagámos tu
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 700,
                  color: '#0768E8',
                  lineHeight: 1.3,
                }}
              >
                proyecto realidad
              </Typography>
            </Box>
          </Box>

          {/* Información de Contacto - Derecha */}
          <Box
            sx={{
              animation: 'slideInRight 0.8s ease-out',
              '@keyframes slideInRight': {
                from: { opacity: 0, transform: 'translateX(50px)' },
                to: { opacity: 1, transform: 'translateX(0)' },
              },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                color: '#ffffff',
                mb: 6,
              }}
            >
              Contáctanos
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {contactInfo.map((item, index) => (
                <Button
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                    bgcolor: '#BBCCE2',
                    p: 2.5,
                    borderRadius: 4,
                    textAlign: 'left',
                    textTransform: 'none',
                    transition: 'all 0.3s ease',
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
                    '@keyframes fadeInUp': {
                      from: { opacity: 0, transform: 'translateY(20px)' },
                      to: { opacity: 1, transform: 'translateY(0)' },
                    },
                    '&:hover': {
                      bgcolor: '#c5d5e8',
                      transform: 'translateX(8px)',
                      boxShadow: '0 8px 24px rgba(7, 104, 232, 0.3)',
                    },
                  }}
                >
                  {/* Icon Circle */}
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      bgcolor: '#19304e',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.8rem',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </Box>

                  {/* Text */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        color: '#19304e',
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        fontWeight: 600,
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                </Button>
              ))}
            </Box>

            {/* WhatsApp CTA Extra */}
            <Box
              sx={{
                mt: 4,
                p: 3,
                bgcolor: 'rgba(37, 211, 102, 0.1)',
                border: '2px solid #25D366',
                borderRadius: 3,
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  color: '#faf7f2',
                  mb: 2,
                  fontSize: '1.1rem',
                }}
              >
                ¿Necesitas una respuesta rápida?
              </Typography>
              <Button
                href="https://wa.me/51997425196?text=Hola,%20me%20gustaría%20más%20información"
                target="_blank"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: '#25D366',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  '&:hover': {
                    bgcolor: '#20BD5A',
                  },
                }}
              >
                <Box component="span" sx={{ mr: 1, fontSize: '1.3rem' }}>
                  💬
                </Box>
                Chatear por WhatsApp
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}