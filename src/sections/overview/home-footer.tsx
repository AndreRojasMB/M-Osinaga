import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

// ----------------------------------------------------------------------

export function HomeFooter({ sx, ...other }: BoxProps) {
  const socialLinks = [
    { icon: 'f', label: 'Facebook' },
    { icon: 'in', label: 'LinkedIn' },
    { icon: '@', label: 'Email' },
  ];

  return (
    <Box
      id="footer"
      component="footer"
      sx={{
        bgcolor: '#19304e',
        color: '#faf7f2',
        py: 6,
        borderTop: '2px solid #0768E8',
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
            mb: 4,
          }}
        >
          {/* Company Info */}
          <Box>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: '#0768E8' }}>
              MAQUINARIAS OSINAGA
            </Typography>
            <Typography variant="body2" sx={{ color: '#D6C5B5', lineHeight: 1.8 }}>
              Soluciones industriales de alta calidad. Innovación y excelencia en cada proyecto.
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Enlaces Rápidos
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Nosotros', 'Catálogo', 'Servicios', 'Contáctanos'].map((link) => (
                <Typography
                  key={link}
                  component="a"
                  href={`#${link.toLowerCase()}`}
                  sx={{
                    color: '#BBCCE2',
                    textDecoration: 'none',
                    fontSize: 14,
                    transition: 'color 0.3s',
                    '&:hover': { color: '#0768E8' },
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Contact */}
          <Box>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Contacto
            </Typography>
            <Typography variant="body2" sx={{ color: '#BBCCE2', mb: 1 }}>
              📍 Lima, Perú
            </Typography>
            <Typography variant="body2" sx={{ color: '#BBCCE2', mb: 1 }}>
              📞 +51 XXX XXX XXX
            </Typography>
            <Typography variant="body2" sx={{ color: '#BBCCE2', mb: 2 }}>
              ✉️ info@osinaga.com
            </Typography>

            {/* Social Icons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  sx={{
                    bgcolor: '#385882',
                    color: 'white',
                    width: 36,
                    height: 36,
                    '&:hover': { bgcolor: '#0768E8' },
                  }}
                >
                  <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>{social.icon}</Typography>
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Bottom Bar */}
        <Box
          sx={{
            pt: 3,
            borderTop: '1px solid #385882',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: '#D6C5B5' }}>
            © {new Date().getFullYear()} Maquinarias Osinaga. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}