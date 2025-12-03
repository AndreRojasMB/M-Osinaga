import type { BoxProps } from '@mui/material/Box';

import { useRef, useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

const features = [
  {
    iconSrc: '/assets/images/icon/ic1.png',
    text: 'Diseñamos y fabricamos maquinaria en Acero Inoxidable 304.',
  },
  {
    iconSrc: '/assets/images/icon/ic2.png',
    text: 'Especialistas en maquinaria para sauna y spa.',
  },
  {
    iconSrc: '/assets/images/icon/ic 3.png',
    text: 'Brindamos asesoría técnica personalizada.',
  },
  {
    iconSrc: '/assets/images/icon/ic 4.png',
    text: 'Equipos automatizados con tecnología de última generación.',
  },
  {
    iconSrc: '/assets/images/icon/ic 5.png',
    text: 'Compromiso con la seguridad, eficiencia y ahorro energético.',
  },
];

export function HomeAboutSection({ sx, ...other }: BoxProps) {
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
            justifyContent: 'flex-start',
            mb: { xs: 6, md: 8 },
            gap: { xs: 2, md: 4 },
            animation: 'fadeInUp 0.8s ease-out',
            '@keyframes fadeInUp': {
              from: { opacity: 0, transform: 'translateY(30px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
            flexWrap: { xs: 'wrap', md: 'nowrap' },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.2rem', lg: '3.8rem' },
              fontWeight: 900,
              color: 'white',
              letterSpacing: 3,
              flexShrink: 0,
            }}
          >
            NOSOTROS
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              flexShrink: 0,
              ml: { xs: 1.5, md: 3 },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '2.4rem', sm: '3rem', md: '3.6rem', lg: '4rem' },
                fontWeight: 900,
                color: '#BBCCE2',
                lineHeight: 1,
              }}
            >
              + {counter}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.2rem', lg: '1.35rem' },
                color: '#BBCCE2',
                fontWeight: 500,
                lineHeight: 1.3,
                maxWidth: { xs: 150, sm: 200, md: 250 },
              }}
            >
              años de experiencia en la industria
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
              key={feature.text}
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
              {/* Icono como imagen dentro del círculo */}
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  bgcolor: '#faf7f2',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(10deg) scale(1.1)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={feature.iconSrc}
                  alt={feature.text}
                  sx={{
                    width: 40,
                    height: 40,
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
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
