import type { BoxProps } from '@mui/material/Box';

import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

// ----------------------------------------------------------------------

// Datos de ejemplo - reemplaza con tus productos reales
const products = [
  {
    id: '44-120',
    name: 'Modelo 44-120',
    image: '../../../public/assets/images/machine/intercambiador-calor-44-120.png',
    category: 'Generador de Vapor',
  },
  {
    id: '44-150',
    name: 'Modelo 44-150',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400',
    category: 'Generador de Vapor',
  },
  {
    id: '44-180',
    name: 'Modelo 44-180',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=400',
    category: 'Generador de Vapor',
  },
  {
    id: '44-200',
    name: 'Modelo 44-200',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400',
    category: 'Intercambiador de Calor',
  },
  {
    id: '44-250',
    name: 'Modelo 44-250',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400',
    category: 'Calentador de Agua',
  },
  {
    id: '44-300',
    name: 'Modelo 44-300',
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=400',
    category: 'Calentador de Agua',
  },
];

export function CatalogProductsCarousel({ sx, ...other }: BoxProps) {
  const navigate = useNavigate();

  // Duplicamos los productos para el efecto de loop infinito
  const duplicatedProducts = [...products, ...products];

  const handleProductClick = (productId: string) => {
    navigate(`/catalogo/${productId}`);
  };

  return (
    <Box
      component="section"
      sx={{
        bgcolor: '#385882',
        py: { xs: 6, md: 10 },
        overflow: 'hidden',
        ...sx,
      }}
      {...other}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: '1.8rem', md: '2.5rem' },
            fontWeight: 700,
            color: '#ffffff',
            mb: 6,
            textAlign: 'left',
          }}
        >
          Generadores de vapor
        </Typography>

        {/* Carousel Container */}
        <Box
          sx={{
            position: 'relative',
            '&::before, &::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: 100,
              zIndex: 2,
              pointerEvents: 'none',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              animation: 'scroll 30s linear infinite',
              '&:hover': {
                animationPlayState: 'paused',
              },
              '@keyframes scroll': {
                '0%': {
                  transform: 'translateX(0)',
                },
                '100%': {
                  transform: 'translateX(-50%)',
                },
              },
            }}
          >
            {duplicatedProducts.map((product, index) => (
              <Card
                key={`${product.id}-${index}`}
                onClick={() => handleProductClick(product.id)}
                sx={{
                  minWidth: { xs: 280, md: 350 },
                  flexShrink: 0,
                  bgcolor: '#BBCCE2',
                  borderRadius: 4,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: '0 16px 32px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    objectFit: 'cover',
                  }}
                />
                <CardContent
                  sx={{
                    bgcolor: '#faf7f2',
                    textAlign: 'center',
                    py: 3,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#19304e',
                      fontWeight: 600,
                      fontSize: '1.2rem',
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#385882',
                      mt: 0.5,
                    }}
                  >
                    {product.category}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Scroll Progress Bar */}
        <Box
          sx={{
            width: '100%',
            height: 4,
            bgcolor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: 2,
            mt: 4,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: '30%',
              bgcolor: '#0768E8',
              borderRadius: 2,
              animation: 'progressBar 30s linear infinite',
              '@keyframes progressBar': {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(333%)' },
              },
            }}
          />
        </Box>

        {/* Note */}
        <Typography
          sx={{
            textAlign: 'center',
            color: '#D6C5B5',
            mt: 4,
            fontSize: { xs: '0.9rem', md: '1rem' },
          }}
        >
          Haz clic en cada modelo para ver más detalles y especificaciones
        </Typography>
      </Container>
    </Box>
  );
}