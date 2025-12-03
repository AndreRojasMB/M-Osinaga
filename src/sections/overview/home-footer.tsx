import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

// ----------------------------------------------------------------------

export function HomeFooter({ sx, ...other }: BoxProps) {
  const socialLinks = [
    {
      iconSrc: '/assets/images/icon/youtube.png',
      label: 'YouTube',
      link: 'https://www.youtube.com/@MaquinariasOsinaga',
    },
    {
      iconSrc: '/assets/images/icon/instagram.png',
      label: 'Instagram',
      link: 'https://www.instagram.com/maquinariasosinaga/',
    },
    {
      iconSrc: '/assets/images/icon/tik-tok.png',
      label: 'TikTok',
      link: 'https://www.tiktok.com/@maquinariasosinaga',
    },
    {
      iconSrc: '/assets/images/icon/facebook.png',
      label: 'Facebook',
      link: 'https://www.facebook.com/MaquinariasOsinaga/',
    },
  ];

  const quickLinks = [
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contáctanos', href: '#contacto' },
  ];

  return (
    <Box
      id="footer"
      component="footer"
      sx={{
        bgcolor: '#19304e',
        color: '#faf7f2',
        py: { xs: 6, md: 8 },
        borderTop: '3px solid #faf7f2',
        position: 'relative',
        overflow: 'hidden',
        ...sx,
      }}
      {...other}
    >
      {/* Decorative background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: -50,
          right: -50,
          width: 300,
          height: 300,
          borderRadius: '50%',
          bgcolor: 'rgba(7, 104, 232, 0.03)',
          filter: 'blur(80px)',
        }}
      />

      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: { xs: 4, md: 6 },
            mb: 5,
          }}
        >
          {/* Company Info */}
          <Box
            sx={{
              animation: 'fadeIn 0.6s ease-out',
              '@keyframes fadeIn': {
                from: { opacity: 0, transform: 'translateY(20px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            <Box
              sx={{
                display: 'inline-block',
                mb: 2,
                p: 1.5,
                bgcolor: 'rgba(7, 104, 232, 0.1)',
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  color: '#faf7f2',
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  letterSpacing: '0.5px',
                }}
              >
                MAQUINARIAS OSINAGA
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: '#BBCCE2',
                lineHeight: 1.8,
                fontSize: '0.95rem',
                mb: 2,
              }}
            >
              Soluciones industriales de alta calidad. Innovación y excelencia en cada proyecto desde 1990.
            </Typography>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                bgcolor: 'rgba(187, 204, 226, 0.1)',
                px: 2,
                py: 1,
                borderRadius: 2,
                border: '1px solid rgba(187, 204, 226, 0.2)',
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  bgcolor: '#25D366',
                  borderRadius: '50%',
                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.5 },
                  },
                }}
              />
              <Typography variant="caption" sx={{ color: '#BBCCE2', fontWeight: 500 }}>
                Disponibles 24/7
              </Typography>
            </Box>
          </Box>

          {/* Quick Links */}
          <Box
            sx={{
              animation: 'fadeIn 0.6s ease-out 0.1s backwards',
              '@keyframes fadeIn': {
                from: { opacity: 0, transform: 'translateY(20px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontWeight: 700,
                color: '#faf7f2',
                fontSize: '1.1rem',
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: '50%',
                  height: 3,
                  bgcolor: '#faf7f2',
                  borderRadius: 1,
                },
              }}
            >
              Enlaces Rápidos
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {quickLinks.map((link, index) => (
                <Typography
                  key={link.name}
                  component="a"
                  href={link.href}
                  sx={{
                    color: '#BBCCE2',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    animation: `slideIn 0.4s ease-out ${0.1 + index * 0.05}s backwards`,
                    '@keyframes slideIn': {
                      from: { opacity: 0, transform: 'translateX(-10px)' },
                      to: { opacity: 1, transform: 'translateX(0)' },
                    },
                    '&::before': {
                      content: '"▸"',
                      color: '#faf7f2',
                      fontSize: '0.9rem',
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover': {
                      color: '#faf7f2',
                      transform: 'translateX(5px)',
                      '&::before': {
                        transform: 'translateX(3px)',
                      },
                    },
                  }}
                >
                  {link.name}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Contact & Social */}
          <Box
            sx={{
              animation: 'fadeIn 0.6s ease-out 0.2s backwards',
              '@keyframes fadeIn': {
                from: { opacity: 0, transform: 'translateY(20px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontWeight: 700,
                color: '#faf7f2',
                fontSize: '1.1rem',
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: '50%',
                  height: 3,
                  bgcolor: '#faf7f2',
                  borderRadius: 1,
                },
              }}
            >
              Contacto
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
              {/* Dirección */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    bgcolor: 'rgba(7, 104, 232, 0.15)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    component="img"
                    src="/assets/images/icon/locacion.png"
                    alt="Ubicación"
                    sx={{
                      width: 22,
                      height: 22,
                      objectFit: 'contain',
                    }}
                  />
                </Box>
                <Typography variant="body2" sx={{ color: '#BBCCE2', fontSize: '0.95rem' }}>
                  Calle Las Retamas 260<br />Salamanca, Ate - Lima
                </Typography>
              </Box>

              {/* Teléfono */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    bgcolor: 'rgba(7, 104, 232, 0.15)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    component="img"
                    src="/assets/images/icon/telefono.png"
                    alt="Teléfono"
                    sx={{
                      width: 22,
                      height: 22,
                      objectFit: 'contain',
                    }}
                  />
                </Box>
                <Typography
                  component="a"
                  href="tel:+51997425196"
                  variant="body2"
                  sx={{
                    color: '#BBCCE2',
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                    '&:hover': { color: '#faf7f2' },
                  }}
                >
                  +51 997 425 196
                </Typography>
              </Box>

              {/* Correo */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    bgcolor: 'rgba(7, 104, 232, 0.15)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    component="img"
                    src="/assets/images/icon/correo-electronico.png"
                    alt="Correo electrónico"
                    sx={{
                      width: 22,
                      height: 22,
                      objectFit: 'contain',
                    }}
                  />
                </Box>
                <Typography
                  component="a"
                  href="mailto:info@maquinasosinaga.com"
                  variant="body2"
                  sx={{
                    color: '#BBCCE2',
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                    '&:hover': { color: '#faf7f2' },
                  }}
                >
                  info@maquinasosinaga.com
                </Typography>
              </Box>
            </Box>

            {/* Social Icons */}
            <Box>
              <Typography
                variant="body2"
                sx={{
                  color: '#faf7f2',
                  mb: 2,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                }}
              >
                Síguenos en:
              </Typography>
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={social.label}
                    component="a"
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      bgcolor: 'rgba(187, 204, 226, 0.15)',
                      color: 'white',
                      width: 44,
                      height: 44,
                      border: '2px solid rgba(187, 204, 226, 0.2)',
                      transition: 'all 0.3s ease',
                      animation: `popIn 0.4s ease-out ${0.2 + index * 0.1}s backwards`,
                      '@keyframes popIn': {
                        from: { opacity: 0, transform: 'scale(0)' },
                        to: { opacity: 1, transform: 'scale(1)' },
                      },
                      '&:hover': {
                        bgcolor: '#faf7f2',
                        transform: 'translateY(-4px) scale(1.05)',
                        boxShadow: '0 8px 20px rgba(7, 104, 232, 0.4)',
                        borderColor: '#faf7f2',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={social.iconSrc}
                      alt={social.label}
                      sx={{
                        width: 22,
                        height: 22,
                        objectFit: 'contain',
                      }}
                    />
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Bottom Bar */}
        <Box
          sx={{
            pt: 4,
            borderTop: '1px solid rgba(187, 204, 226, 0.2)',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: '#BBCCE2',
              fontSize: '0.9rem',
            }}
          >
            © {new Date().getFullYear()} Maquinarias Osinaga. Todos los derechos reservados.
          </Typography>

          <Box sx={{ display: 'flex', gap: 3 }}>
            <Typography
              component="a"
              href="#privacidad"
              variant="body2"
              sx={{
                color: '#BBCCE2',
                textDecoration: 'none',
                fontSize: '0.85rem',
                transition: 'color 0.3s',
                '&:hover': { color: '#faf7f2' },
              }}
            >
              Política de Privacidad
            </Typography>
            <Typography
              component="a"
              href="#terminos"
              variant="body2"
              sx={{
                color: '#BBCCE2',
                textDecoration: 'none',
                fontSize: '0.85rem',
                transition: 'color 0.3s',
                '&:hover': { color: '#faf7f2' },
              }}
            >
              Términos y Condiciones
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
