import type { Theme, SxProps } from '@mui/material/styles';

import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

interface HomeNavbarProps {
  sx?: SxProps<Theme>;
}

export function HomeNavbar({ sx }: HomeNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const navItems = [
  { label: 'Nosotros', href: '#nosotros', type: 'scroll' },
  { label: 'Catálogo', href: '/catalogo', type: 'route' },
  { label: 'Servicios', href: '/servicios', type: 'route' },
  { label: 'Contáctanos', href: '#footer', type: 'scroll' },
];

  const handleNavigation = (item: { label: string; href: string; type: string }) => {
    if (item.type === 'route') {
      navigate(item.href);
    } else if (item.type === 'scroll') {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: scrolled ? 'rgba(25, 48, 78, 0.95)' : 'transparent',
        boxShadow: scrolled ? 2 : 0,
        transition: 'all 0.3s ease-in-out',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        ...sx,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 0, minHeight: 10 }}>
          {/* Logo - Click para ir al home */}
          <Box
              onClick={() => navigate('/')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                animation: 'slideInLeft 0.8s ease-out',
                '@keyframes slideInLeft': {
                  from: { opacity: 0, transform: 'translateX(-50px)' },
                  to: { opacity: 1, transform: 'translateX(0)' },
                },
              }}
            >
              <Box
                component="img"
                src="../../../public/assets/icons/workspaces/logo-osinaga.png" // ajusta esta ruta a donde tengas el logo
                alt="Logo Osinaga"
                sx={{
                  height: 100,
                  width: 'auto',
                }}
              />
            </Box>

          {/* Nav Items */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            {navItems.map((item, index) => {
              const isActive =
                (item.type === 'route' && location.pathname === item.href) ||
                (item.type === 'scroll' && location.pathname === '/' && index === 0); // destacar "Nosotros" en home

              return (
                <Button
                  key={item.label}
                  onClick={() => handleNavigation(item)}
                  sx={{
                    color: isActive ? '#1D2E4A' : '#faf7f2',
                    px: 7,
                    py: 2,
                    borderRadius: 8,
                    fontSize: 15,
                    fontWeight: 600,
                    textTransform: 'none',
                    transition: 'all 0.3s ease',
                    animation: `fadeIn 0.5s ease-out ${index * 0.1}s backwards`,
                    '@keyframes fadeIn': {
                      from: { opacity: 0, transform: 'translateY(-10px)' },
                      to: { opacity: 1, transform: 'translateY(0)' },
                    },
                    bgcolor: isActive ? '#BBCCE2' : 'transparent',
                    '&:hover': {
                      bgcolor: '#BBCCE2',
                      color: '#1D2E4A',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          {/* Profile Icon */}
          <Box
            sx={{
              width: 45,
              height: 45,
              bgcolor: '#BBCCE2',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <Typography sx={{ color: 'white', fontSize: 18 }}>👤</Typography>
          </Box>
        </Toolbar>
                   {/* Línea decorativa centrada */}
          <Box
            sx={{
              height: '2px',
              width: '950px',      // ancho ajustable
              bgcolor: '#BBCCE2',
              mx: 'auto',          // centra horizontalmente
              mr: 25,
              mb: 0,               // separación inferior (opcional)
            }}
          />
      </Container>
    </AppBar>
  );
}
