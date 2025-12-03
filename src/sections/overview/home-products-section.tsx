import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

// ICONOS ACTUALIZADOS CON IMÁGENES
const vaporProducts = [
  { iconSrc: '/assets/images/icon/IM1.jpeg', label: 'Casa' },
  { iconSrc: '/assets/images/icon/IM2.jpeg', label: 'Saunas' },
  { iconSrc: '/assets/images/icon/IM3.jpeg', label: 'Industria' },
];

const waterProducts = [
  { iconSrc: '/assets/images/icon/IM4.jpeg', label: 'Jacuzzis' },
  { iconSrc: '/assets/images/icon/IM5.jpeg', label: 'Piscinas' },
  { iconSrc: '/assets/images/icon/IM6.jpeg', label: 'Duchas' },
  { iconSrc: '/assets/images/icon/IM7.jpeg', label: 'Industria' },
];

const saunaProducts = [
  { iconSrc: '/assets/images/icon/IM1.jpeg', label: 'Pino Americano' },
  { iconSrc: '/assets/images/icon/IM2.jpeg', label: 'Pino Canadiense' },
  { iconSrc: '/assets/images/icon/IM3.jpeg', label: 'Hemlock' },
];

export function HomeProductsSection({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      id="catalogo"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        bgcolor: '#19304e',
        py: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'hidden',
        ...sx,
      }}
      {...other}
    >
      <Container maxWidth="xl">
        {/* ======= SECCIÓN 1 ======= */}
        <Box sx={{ mb: { xs: 10, md: 14 } }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.4rem', md: '2rem' },
                fontWeight: 700,
                color: '#ffffff',
                mb: 1.5,
                letterSpacing: '0.5px',
              }}
            >
              GENERADORES DE VAPOR E INTERCAMBIADORES DE CALOR
            </Typography>
            <Typography
              sx={{
                color: '#BBCCE2',
                fontSize: { xs: '1rem', md: '1.2rem' },
                fontStyle: 'italic',
                fontWeight: 300,
              }}
            >
              para:
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
              gap: { xs: 3, md: 4 },
              maxWidth: 1100,
              mx: 'auto',
            }}
          >
            {vaporProducts.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </Box>
        </Box>

        {/* ======= SECCIÓN 2 ======= */}
        <Box sx={{ mb: { xs: 10, md: 14 } }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.4rem', md: '2rem' },
                fontWeight: 700,
                color: '#ffffff',
                mb: 1.5,
                letterSpacing: '0.5px',
              }}
            >
              CALENTADORES DE AGUA
            </Typography>
            <Typography
              sx={{
                color: '#BBCCE2',
                fontSize: { xs: '1rem', md: '1.2rem' },
                fontStyle: 'italic',
                fontWeight: 300,
              }}
            >
              para:
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              gap: { xs: 3, md: 4 },
            }}
          >
            {waterProducts.map((product, index) => (
              <ProductCard key={index} product={product} index={index + 3} />
            ))}
          </Box>
        </Box>

        {/* ======= SECCIÓN 3 ======= */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.4rem', md: '2rem' },
                fontWeight: 700,
                color: '#ffffff',
                mb: 1.5,
                letterSpacing: '0.5px',
              }}
            >
              CABINAS PERSONALES PARA SAUNA
            </Typography>
            <Typography
              sx={{
                color: '#BBCCE2',
                fontSize: { xs: '1rem', md: '1.2rem' },
                fontStyle: 'italic',
                fontWeight: 300,
              }}
            >
              en:
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
              gap: { xs: 3, md: 4 },
              maxWidth: 1100,
              mx: 'auto',
            }}
          >
            {saunaProducts.map((product, index) => (
              <ProductCard key={index} product={product} index={index + 7} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

// =========================================================
// 🎨 COMPONENTE CARD MINIMALISTA
// =========================================================

function ProductCard({ product, index }: any) {
  return (
    <Box
      sx={{
        bgcolor: '#faf7f2',
        borderRadius: 3,
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards`,

        '@keyframes fadeInUp': {
          from: {
            opacity: 0,
            transform: 'translateY(15px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },

        '&:hover': {
          transform: 'translateY(-8px) scale(1.02)',
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
          bgcolor: '#ffffff',

          '& .product-image': {
            transform: 'scale(1.05)',
          },
        },
      }}
    >
      {/* Imagen rectangular */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: 160, md: 200 },
          overflow: 'hidden',
          bgcolor: '#e8eef5',
        }}
      >
        <Box
          component="img"
          src={product.iconSrc}
          alt={product.label}
          className="product-image"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </Box>

      {/* Label del producto - SIN SEPARADOR, PADDING REDUCIDO */}
      <Box
        sx={{
          p: { xs: 1.5, md: 2 },
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: '#19304e',
            fontWeight: 700,
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            letterSpacing: '0.3px',
            lineHeight: 1.3,
          }}
        >
          {product.label}
        </Typography>
      </Box>
    </Box>
  );
}