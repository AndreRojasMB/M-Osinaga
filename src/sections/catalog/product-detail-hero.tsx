import type { BoxProps } from '@mui/material/Box';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

// ----------------------------------------------------------------------

interface ProductDetailHeroProps extends BoxProps {
  product: {
    name: string;
    category: string;
    description: string;
    images: string[];
    specifications: { label: string; value: string }[];
  };
}

export function ProductDetailHero({ product, sx, ...other }: ProductDetailHeroProps) {
  const [selectedImage, setSelectedImage] = useState(0);

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
            gridTemplateColumns: { xs: '1fr', lg: '1.2fr 1fr' },
            gap: { xs: 4, md: 8 },
            alignItems: 'center',
          }}
        >
          {/* Galería de Imágenes - Izquierda */}
          <Box
            sx={{
              animation: 'slideInLeft 0.8s ease-out',
              '@keyframes slideInLeft': {
                from: { opacity: 0, transform: 'translateX(-50px)' },
                to: { opacity: 1, transform: 'translateX(0)' },
              },
            }}
          >
            {/* Imagen Principal */}
            <Box
              sx={{
                position: 'relative',
                borderRadius: 4,
                overflow: 'hidden',
                mb: 2,
                bgcolor: '#BBCCE2',
                aspectRatio: '4/3',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              }}
            >
              <Box
                component="img"
                src={product.images[selectedImage]}
                alt={product.name}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />

              {/* Navegación de imágenes */}
              {product.images.length > 1 && (
                <>
                  <IconButton
                    onClick={() =>
                      setSelectedImage((prev) =>
                        prev === 0 ? product.images.length - 1 : prev - 1
                      )
                    }
                    sx={{
                      position: 'absolute',
                      left: 16,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                      '&:hover': { bgcolor: 'white' },
                    }}
                  >
                    ←
                  </IconButton>
                  <IconButton
                    onClick={() =>
                      setSelectedImage((prev) =>
                        prev === product.images.length - 1 ? 0 : prev + 1
                      )
                    }
                    sx={{
                      position: 'absolute',
                      right: 16,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                      '&:hover': { bgcolor: 'white' },
                    }}
                  >
                    →
                  </IconButton>
                </>
              )}
            </Box>

            {/* Miniaturas */}
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              {product.images.map((image, index) => (
                <Box
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: 2,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: selectedImage === index ? '3px solid #0768E8' : '3px solid transparent',
                    transition: 'all 0.3s ease',
                    opacity: selectedImage === index ? 1 : 0.6,
                    '&:hover': {
                      opacity: 1,
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>

          {/* Información del Producto - Derecha */}
          <Box
            sx={{
              animation: 'slideInRight 0.8s ease-out',
              '@keyframes slideInRight': {
                from: { opacity: 0, transform: 'translateX(50px)' },
                to: { opacity: 1, transform: 'translateX(0)' },
              },
            }}
          >
            <Chip
              label={product.category}
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
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                color: '#ffffff',
                mb: 3,
              }}
            >
              {product.name}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                color: '#D6C5B5',
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              {product.description}
            </Typography>

            {/* Especificaciones */}
            <Box
              sx={{
                bgcolor: 'rgba(187, 204, 226, 0.1)',
                borderRadius: 3,
                p: 3,
                border: '1px solid rgba(187, 204, 226, 0.2)',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#0768E8',
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Especificaciones Técnicas
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {product.specifications.map((spec, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      pb: 1.5,
                      borderBottom:
                        index < product.specifications.length - 1
                          ? '1px solid rgba(187, 204, 226, 0.2)'
                          : 'none',
                    }}
                  >
                    <Typography sx={{ color: '#BBCCE2', fontWeight: 500 }}>
                      {spec.label}:
                    </Typography>
                    <Typography sx={{ color: '#faf7f2', fontWeight: 600 }}>
                      {spec.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}