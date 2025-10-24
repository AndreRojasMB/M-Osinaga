import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

// ----------------------------------------------------------------------

interface UseCaseData {
  title: string;
  image: string;
  description: string;
}

interface ProductUseCasesProps extends BoxProps {
  useCases: UseCaseData[];
}

export function ProductUseCases({ useCases, sx, ...other }: ProductUseCasesProps) {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: '#385882',
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
          Aplicaciones y Usos
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
          Descubre cómo nuestros equipos transforman diferentes industrias y espacios
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
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              sx={{
                bgcolor: '#BBCCE2',
                borderRadius: 4,
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s backwards`,
                '@keyframes fadeInUp': {
                  from: { opacity: 0, transform: 'translateY(30px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                },
                '&:hover': {
                  transform: 'translateY(-16px)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  '& .card-image': {
                    transform: 'scale(1.1)',
                  },
                },
              }}
            >
              <Box sx={{ position: 'relative', overflow: 'hidden', height: 280 }}>
                <CardMedia
                  component="img"
                  image={useCase.image}
                  alt={useCase.title}
                  className="card-image"
                  sx={{
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(25, 48, 78, 0.9), transparent)',
                    p: 3,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'white',
                      fontWeight: 700,
                    }}
                  >
                    {useCase.title}
                  </Typography>
                </Box>
              </Box>

              <CardContent sx={{ p: 3 }}>
                <Typography
                  sx={{
                    color: '#1F2732',
                    lineHeight: 1.7,
                    fontSize: '0.95rem',
                  }}
                >
                  {useCase.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}