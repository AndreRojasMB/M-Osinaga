import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

// ----------------------------------------------------------------------

export function HomeGridSection({ sx, ...other }: BoxProps) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'white',
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 3,
          }}
        >
          {/* 3 Grid Items */}
          <Box
            sx={{
              aspectRatio: '3/4',
              bgcolor: 'grey.700',
              borderRadius: 2,
            }}
          />
          <Box
            sx={{
              aspectRatio: '3/4',
              bgcolor: 'grey.700',
              borderRadius: 2,
            }}
          />
          <Box
            sx={{
              aspectRatio: '3/4',
              bgcolor: 'grey.700',
              borderRadius: 2,
            }}
          />

          {/* Panel de controles */}
          <Box
            sx={{
              aspectRatio: '3/4',
              bgcolor: 'grey.100',
              borderRadius: 2,
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: 'white',
                color: 'text.primary',
                boxShadow: 1,
                '&:hover': { bgcolor: 'grey.200' },
              }}
            >
              Opción 1
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: 'white',
                color: 'text.primary',
                boxShadow: 1,
                '&:hover': { bgcolor: 'grey.200' },
              }}
            >
              Opción 2
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: 'white',
                color: 'text.primary',
                boxShadow: 1,
                '&:hover': { bgcolor: 'grey.200' },
              }}
            >
              Opción 3
            </Button>

            {/* Dots */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
              <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'grey.400' }} />
              <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'grey.400' }} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}