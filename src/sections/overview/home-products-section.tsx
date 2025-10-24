import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

const vaporProducts = [
  {
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline points="9 22 9 12 15 12 15 22" strokeWidth="2" />
      </svg>
    ),
    label: 'Casa',
  },
  {
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="11" width="18" height="11" rx="2" strokeWidth="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeWidth="2" strokeLinecap="round" />
        <circle cx="8" cy="4" r="1" fill="currentColor" />
        <circle cx="16" cy="4" r="1" fill="currentColor" />
        <path d="M8 3c0 1 1 2 4 2s4-1 4-2" strokeWidth="1.5" />
      </svg>
    ),
    label: 'Saunas',
  },
  {
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          d="M12 2L2 7v10c0 5.5 4.5 9 10 9s10-3.5 10-9V7L12 2z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="9" y="10" width="6" height="4" rx="1" fill="currentColor" opacity="0.3" />
        <rect x="8" y="8" width="8" height="1" fill="currentColor" />
      </svg>
    ),
    label: 'Industria',
  },
];

const waterProducts = [
  {
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          d="M21 10c0-4-3-8-9-8S3 6 3 10c0 3 2 6 6 7v4h6v-4c4-1 6-4 6-7z"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="7" r="1.5" fill="currentColor" />
        <path d="M9 17h6" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    label: 'Jacuzzis',
  },
  {
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="2" y="13" width="20" height="7" rx="2" strokeWidth="2" />
        <path d="M6 13V8c0-1.5 1-2 2-2s2 .5 2 2v5" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 8c0-1.5 1-2 2-2s2 .5 2 2v5" strokeWidth="2" strokeLinecap="round" />
        <path d="M2 13h20" strokeWidth="1.5" />
        <path d="M4 16c.5-1 1-1 1.5-1s1 0 1.5 1" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 16c.5-1 1-1 1.5-1s1 0 1.5 1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Piscinas',
  },
  {
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          d="M12 2v3m0 0c-2 0-4 1-5 3m5-3c2 0 4 1 5 3M7 8l-2 2m14-2l2 2M7 8h10M7 8c-1 2-1 4-1 6h12c0-2 0-4-1-6"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M8 14l1 3 3-1 3 1 1-3" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Duchas',
  },
  {
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          d="M12 2L2 7v10c0 5.5 4.5 9 10 9s10-3.5 10-9V7L12 2z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="9" y="10" width="6" height="4" rx="1" fill="currentColor" opacity="0.3" />
        <rect x="8" y="8" width="8" height="1" fill="currentColor" />
      </svg>
    ),
    label: 'Industria',
  },
];



export function HomeProductsSection({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        bgcolor: '#19304e',
        py: { xs: 8, md: 12 },
        ...sx,
      }}
      {...other}
    >
      <Container maxWidth="xl">
        {/* Título Principal */}
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700,
            color: '#ffffff',
            mb: 6,
            letterSpacing: 1,
          }}
        >
          FABRICAMOS
        </Typography>

        {/* Sección Generadores de Vapor */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              fontSize: { xs: '1.3rem', md: '1.8rem' },
              fontWeight: 600,
              color: '#faf7f2',
              mb: 1,
            }}
          >
            GENERADORES DE VAPOR e INTERCAMBIADORES DE CALOR
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: '#D6C5B5',
              mb: 4,
            }}
          >
            para:
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(3, 1fr)',
              },
              gap: 3,
              maxWidth: 900,
              mx: 'auto',
            }}
          >
            {vaporProducts.map((product, index) => (
              <Box
                key={index}
                sx={{
                  bgcolor: '#BBCCE2',
                  p: 4,
                  borderRadius: 6,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s backwards`,
                  '@keyframes fadeInUp': {
                    from: { opacity: 0, transform: 'translateY(30px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                  },
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
                    bgcolor: '#c5d5e8',
                  },
                }}
              >
                <Box sx={{ color: '#19304e' }}>{product.icon}</Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#19304e',
                    fontWeight: 600,
                    fontSize: '1.2rem',
                  }}
                >
                  {product.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Sección Calentadores de Agua */}
        <Box>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              fontSize: { xs: '1.3rem', md: '1.8rem' },
              fontWeight: 600,
              color: '#faf7f2',
              mb: 1,
            }}
          >
            CALENTADORES DE AGUA
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: '#D6C5B5',
              mb: 4,
            }}
          >
            para:
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)',
              },
              gap: 3,
              mb: 8,
            }}
          >
            {waterProducts.map((product, index) => (
              <Box
                key={index}
                sx={{
                  bgcolor: '#BBCCE2',
                  p: 4,
                  borderRadius: 6,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  animation: `fadeInUp 0.6s ease-out ${(index + 3) * 0.15}s backwards`,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
                    bgcolor: '#c5d5e8',
                  },
                }}
              >
                <Box sx={{ color: '#19304e' }}>{product.icon}</Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#19304e',
                    fontWeight: 600,
                    fontSize: '1.2rem',
                  }}
                >
                  {product.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Sección Generadores de Vapor */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              fontSize: { xs: '1.3rem', md: '1.8rem' },
              fontWeight: 600,
              color: '#faf7f2',
              mb: 1,
            }}
          >
            CABINAS PERSONALES PARA SAUNA
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: '#D6C5B5',
              mb: 4,
            }}
          >
            en:
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(3, 1fr)',
              },
              gap: 3,
              maxWidth: 900,
              mx: 'auto',
            }}
          >
            {vaporProducts.map((product, index) => (
              <Box
                key={index}
                sx={{
                  bgcolor: '#BBCCE2',
                  p: 4,
                  borderRadius: 6,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s backwards`,
                  '@keyframes fadeInUp': {
                    from: { opacity: 0, transform: 'translateY(30px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                  },
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
                    bgcolor: '#c5d5e8',
                  },
                }}
              >
                <Box sx={{ color: '#19304e' }}>{product.icon}</Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#19304e',
                    fontWeight: 600,
                    fontSize: '1.2rem',
                  }}
                >
                  {product.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Frase Final */}
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: { xs: '1.8rem', md: '2.5rem' },
            fontWeight: 700,
            color: '#0768E8',
            mt: 4,
            animation: 'fadeIn 1s ease-out 1.5s backwards',
            '@keyframes fadeIn': {
              from: { opacity: 0 },
              to: { opacity: 1 },
            },
          }}
        >
          Hacemos realidad tu proyecto
        </Typography>
      </Container>
    </Box>
  );
}