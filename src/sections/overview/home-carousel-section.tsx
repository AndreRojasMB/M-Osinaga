import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export function HomeCarouselSection({ sx, ...other }: BoxProps) {
  const cards = Array.from({ length: 5 }, (_, i) => i);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'grey.50',
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, color: 'text.primary' }}>
          Nuestros Proyectos
        </Typography>

        {/* Carousel */}
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            overflowX: 'auto',
            pb: 2,
            '&::-webkit-scrollbar': { height: 8 },
            '&::-webkit-scrollbar-track': { bgcolor: 'grey.200', borderRadius: 1 },
            '&::-webkit-scrollbar-thumb': {
              bgcolor: 'primary.main',
              borderRadius: 1,
            },
          }}
        >
          {cards.map((card) => (
            <Box
              key={card}
              sx={{
                minWidth: 250,
                aspectRatio: '3/4',
                bgcolor: 'grey.700',
                borderRadius: 2,
                flexShrink: 0,
              }}
            />
          ))}
        </Box>

        {/* Dots */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mt: 4 }}>
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'primary.main' }} />
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'grey.300' }} />
        </Box>

        {/* Texto */}
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            mt: 4,
            maxWidth: 600,
            mx: 'auto',
            color: 'text.secondary',
          }}
        >
          Explora nuestra colección de trabajos destacados y descubre cómo podemos ayudarte a
          alcanzar tus objetivos.
        </Typography>
      </Container>
    </Box>
  );
}