import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

interface ServiceBenefitsProps extends BoxProps {
  benefits: string[];
}

export function ServiceBenefits({ benefits, sx, ...other }: ServiceBenefitsProps) {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: '#19304e',
        py: { xs: 8, md: 12 },
        ...sx,
      }}
      {...other}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: '2rem', md: '2.8rem' },
            fontWeight: 700,
            color: '#ffffff',
            mb: 2,
            textAlign: 'center',
          }}
        >
          Beneficios de nuestro servicio
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '1.2rem' },
            color: '#D6C5B5',
            textAlign: 'center',
            mb: 6,
            maxWidth: 700,
            mx: 'auto',
          }}
        >
          Calidad y profesionalismo garantizado
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: 4,
          }}
        >
          {benefits.map((benefit, index) => (
            <Box
              key={index}
              sx={{
                bgcolor: '#BBCCE2',
                p: 4,
                borderRadius: 4,
                transition: 'all 0.3s ease',
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
                '@keyframes fadeInUp': {
                  from: { opacity: 0, transform: 'translateY(30px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                },
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  bgcolor: '#0768E8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                }}
              >
                <Typography sx={{ fontSize: '1.5rem' }}>✓</Typography>
              </Box>

              <Typography
                sx={{
                  color: '#19304e',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  lineHeight: 1.6,
                }}
              >
                {benefit}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}