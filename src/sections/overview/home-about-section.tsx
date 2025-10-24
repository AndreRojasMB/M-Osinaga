import type { BoxProps } from '@mui/material/Box';

import { useRef, useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

const features = [
  {
    icon: '🔧',
    text: 'Diseñamos y fabricamos maquinaria en Acero inoxidable',
  },
  {
    icon: '💧',
    text: 'Especialistas en Generadores de vapor',
  },
  {
    icon: '🌡️',
    text: 'Intercambiadores de calor y Calentadores de agua',
  },
  {
    icon: '📍',
    text: 'Brindamos tecnología peruana fabricada localmente',
  },
  {
    icon: '💡',
    text: 'Te asesoramos para hacer realidad tu proyecto',
  },
];

export function HomeAboutSection({ sx, ...other }: BoxProps) {
  const theme = useTheme();
  const [counter, setCounter] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animación del contador cuando la sección es visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = () => {
    const target = 25;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCounter(target);
        clearInterval(interval);
      } else {
        setCounter(Math.floor(current));
      }
    }, duration / steps);
  };

  return (
    <Box
      ref={sectionRef}
      component="section"
      id="nosotros"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#19304e',
        py: { xs: 8, md: 12 },
        ...sx,
      }}
      {...other}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: { xs: 6, md: 8 },
            flexWrap: 'wrap',
            gap: 4,
            animation: 'fadeInUp 0.8s ease-out',
            '@keyframes fadeInUp': {
              from: { opacity: 0, transform: 'translateY(30px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: 2,
            }}
          >
            NOSOTROS
          </Typography>

          {/* Contador de años */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: '2rem',
                color: '#0768E8',
                fontWeight: 700,
              }}
            >
              +
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '3rem', md: '3.5rem' },
                fontWeight: 700,
                color: '#0768E8',
                lineHeight: 1,
                minWidth: 60,
              }}
            >
              {counter}
            </Typography>
            <Typography
              sx={{
                fontSize: '1rem',
                color: '#D6C5B5',
                fontWeight: 500,
              }}
            >
              años de experiencia
            </Typography>
          </Box>
        </Box>

        {/* Features Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(5, 1fr)',
            },
            gap: 3,
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                bgcolor: '#BBCCE2',
                p: 4,
                borderRadius: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 2,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
                '&:hover': {
                  transform: 'translateY(-12px)',
                  boxShadow: '0 12px 24px rgba(7, 104, 232, 0.2)',
                  bgcolor: '#c5d5e8',
                },
              }}
            >
              {/* Icon Circle */}
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  bgcolor: '#faf7f2',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  flexShrink: 0,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(10deg) scale(1.1)',
                  },
                }}
              >
                {feature.icon}
              </Box>

              <Typography
                variant="body1"
                sx={{
                  color: '#1F2732',
                  fontWeight: 500,
                  lineHeight: 1.6,
                }}
              >
                {feature.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}