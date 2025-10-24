import type { BoxProps } from '@mui/material/Box';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import { AppointmentModal } from './appointment-modal';

// ----------------------------------------------------------------------

const services = [
  {
    id: 'asesorias',
    title: 'Asesorías personalizadas 1:1',
    description: 'Conversemos de tu proyecto',
    features: ['Creación de planos', 'Implementación 3D'],
    icon: '💼',
  },
  {
    id: 'visitas',
    title: 'Visitas técnicas',
    description: 'Visitamos tu proyecto o negocio',
    features: ['Revisión de equipos y diagnóstico', '*Servicio disponible en Perú'],
    icon: '🔧',
  },
  {
    id: 'mantenimiento-preventivo',
    title: 'Mantenimiento preventivo',
    description: 'Revisamos tus equipos (fabricados por nosotros)',
    features: ['Realizamos el mantenimiento preventivo'],
    icon: '⚙️',
  },
  {
    id: 'mantenimiento-correctivo',
    title: 'Mantenimiento correctivo',
    description: 'Revisamos tus equipos (fabricados por nosotros)',
    features: ['Realizamos el diagnóstico respectivo', 'Reparamos el equipo y cambiamos las piezas dañadas'],
    icon: '🔨',
  },
];

export function ServicesCarousel({ sx, ...other }: BoxProps) {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const duplicatedServices = [...services, ...services];

  const handleServiceClick = (serviceId: string) => {
    navigate(`/servicios/${serviceId}`);
  };

  const handleAgendarClick = (e: React.MouseEvent, serviceTitle: string) => {
    e.stopPropagation();
    setSelectedService(serviceTitle);
    setModalOpen(true);
  };

  return (
    <>
      <Box
        component="section"
        sx={{
          bgcolor: '#19304e',
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
              mb: 2,
              textAlign: 'center',
            }}
          >
            Nuestros Servicios
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: '#D6C5B5',
              textAlign: 'center',
              mb: 6,
            }}
          >
            Soluciones profesionales para tu proyecto
          </Typography>

          {/* Carousel */}
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              pb: 4,
              animation: 'scroll 40s linear infinite',
              '&:hover': {
                animationPlayState: 'paused',
              },
              '@keyframes scroll': {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-50%)' },
              },
            }}
          >
            {duplicatedServices.map((service, index) => (
              <Card
                key={`${service.id}-${index}`}
                onClick={() => handleServiceClick(service.id)}
                sx={{
                  minWidth: { xs: 300, md: 380 },
                  flexShrink: 0,
                  bgcolor: '#faf7f2',
                  borderRadius: 5,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: '0 20px 40px rgba(7, 104, 232, 0.3)',
                  },
                }}
              >
                <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Icon */}
                  <Box
                    sx={{
                      fontSize: '3rem',
                      mb: 2,
                    }}
                  >
                    {service.icon}
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#19304e',
                      fontWeight: 700,
                      mb: 2,
                      fontSize: '1.4rem',
                    }}
                  >
                    {service.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      color: '#385882',
                      mb: 2,
                      fontSize: '0.95rem',
                    }}
                  >
                    {service.description}
                  </Typography>

                  {/* Features */}
                  <Box sx={{ mb: 3, flexGrow: 1 }}>
                    {service.features.map((feature, idx) => (
                      <Typography
                        key={idx}
                        sx={{
                          color: '#1F2732',
                          fontSize: '0.9rem',
                          mb: 1,
                          display: 'flex',
                          alignItems: 'flex-start',
                          '&::before': {
                            content: '"•"',
                            color: '#0768E8',
                            fontWeight: 'bold',
                            marginRight: 1,
                          },
                        }}
                      >
                        {feature}
                      </Typography>
                    ))}
                  </Box>

                  {/* Button */}
                  <Button
                    onClick={(e) => handleAgendarClick(e, service.title)}
                    fullWidth
                    variant="contained"
                    sx={{
                      bgcolor: '#D6C5B5',
                      color: '#19304e',
                      py: 1.5,
                      fontWeight: 700,
                      fontSize: '1rem',
                      borderRadius: 3,
                      '&:hover': {
                        bgcolor: '#c5b4a4',
                      },
                    }}
                  >
                    Agendar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* Note */}
          <Typography
            sx={{
              textAlign: 'center',
              color: '#BBCCE2',
              mt: 4,
              fontSize: { xs: '0.9rem', md: '1rem' },
            }}
          >
            Haz clic en cada servicio para conocer más detalles
          </Typography>
        </Container>
      </Box>

      {/* Modal */}
      <AppointmentModal open={modalOpen} onClose={() => setModalOpen(false)} serviceName={selectedService} />
    </>
  );
}