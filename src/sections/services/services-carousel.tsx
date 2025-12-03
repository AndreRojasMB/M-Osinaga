import type { BoxProps } from '@mui/material/Box';
import type React from 'react';

import { useEffect, useRef, useState } from 'react';
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

// 🔢 Configuración del carrusel
const WHATSAPP_NUMBER = '51997425196';
const SCROLL_SPEED = 0.8;          // velocidad auto-scroll
const FRICTION = 0.95;             // fricción del momentum
const MIN_VELOCITY = 0.1;          // velocidad mínima antes de parar
const DRAG_CLICK_THRESHOLD = 10;   // px para distinguir drag vs click
const RESET_THRESHOLD = 5;         // margen para reset sin salto

export function ServicesCarousel({ sx, ...other }: BoxProps) {
  const navigate = useNavigate();

  // REFS del carrusel
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const velocityRef = useRef(0);
  const lastPosRef = useRef(0);
  const lastTimeRef = useRef(0);
  const momentumAnimationRef = useRef<number | null>(null);

  // STATES del carrusel
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [dragDistance, setDragDistance] = useState(0);

  // Triplicar servicios para loop infinito
  const triplicatedServices = [...services, ...services, ...services];

  // Click de card con detección de drag
  const handleItemClick = (serviceId: string) => {
    if (Math.abs(dragDistance) < DRAG_CLICK_THRESHOLD) {
      navigate(`/servicios/${serviceId}`);
    }
  };

  // Botón "Agendar" → modal (mantiene tu comportamiento original)
  const handleAgendarClick = (e: React.MouseEvent, serviceTitle: string) => {
    e.stopPropagation(); // evita que se dispare el click de la card
    setSelectedService(serviceTitle);
    setModalOpen(true);
  };

  // Botón WhatsApp → abre API con mensaje personalizado
  const handleWhatsappClick = (e: React.MouseEvent, serviceTitle: string) => {
    e.stopPropagation(); // evita navegación de la card

    const message = `Hola, me gustaría agendar un servicio con Maquinarias Osinaga. Estoy interesado en el servicio: ${serviceTitle}. ¿Podemos coordinar detalles?`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  };

  // Aplicar momentum después de soltar
  const applyMomentum = () => {
    const container = scrollRef.current;
    if (!container) return;

    const animate = () => {
      const el = scrollRef.current;
      if (!el) return;

      velocityRef.current *= FRICTION;

      if (Math.abs(velocityRef.current) > MIN_VELOCITY) {
        el.scrollLeft += velocityRef.current;
        momentumAnimationRef.current = requestAnimationFrame(animate);
      } else {
        velocityRef.current = 0;
        setTimeout(() => {
          setIsAutoScrolling(true);
        }, 500);
      }
    };

    animate();
  };

  // MOUSE HANDLERS
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!container) return;

    if (momentumAnimationRef.current !== null) {
      cancelAnimationFrame(momentumAnimationRef.current);
      momentumAnimationRef.current = null;
    }

    e.preventDefault();
    setIsDragging(true);
    setIsAutoScrolling(false);
    setDragDistance(0);
    velocityRef.current = 0;

    setStartX(e.clientX);
    setScrollLeft(container.scrollLeft);
    lastPosRef.current = e.clientX;
    lastTimeRef.current = Date.now();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!isDragging || !container) return;

    e.preventDefault();

    const currentTime = Date.now();
    const deltaTime = currentTime - lastTimeRef.current;
    const currentX = e.clientX;
    const deltaX = currentX - startX;

    if (deltaTime > 0) {
      velocityRef.current = ((currentX - lastPosRef.current) / deltaTime) * 16;
    }

    setDragDistance(deltaX);
    container.scrollLeft = scrollLeft - deltaX;

    lastPosRef.current = currentX;
    lastTimeRef.current = currentTime;
  };

  const endDrag = () => {
    if (!isDragging) return;

    setIsDragging(false);

    if (Math.abs(velocityRef.current) > 1) {
      applyMomentum();
    } else {
      setTimeout(() => {
        setIsAutoScrolling(true);
      }, 1000);
    }
  };

  const handleMouseUp = () => endDrag();
  const handleMouseLeave = () => endDrag();

  // TOUCH HANDLERS
  const handleTouchStart = (e: React.TouchEvent) => {
    const container = scrollRef.current;
    if (!container) return;

    if (momentumAnimationRef.current !== null) {
      cancelAnimationFrame(momentumAnimationRef.current);
      momentumAnimationRef.current = null;
    }

    setIsDragging(true);
    setIsAutoScrolling(false);
    setDragDistance(0);
    velocityRef.current = 0;

    const touch = e.touches[0];
    setStartX(touch.clientX);
    setScrollLeft(container.scrollLeft);
    lastPosRef.current = touch.clientX;
    lastTimeRef.current = Date.now();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const container = scrollRef.current;
    if (!isDragging || !container) return;

    const touch = e.touches[0];
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTimeRef.current;
    const currentX = touch.clientX;
    const deltaX = currentX - startX;

    if (deltaTime > 0) {
      velocityRef.current = ((currentX - lastPosRef.current) / deltaTime) * 16;
    }

    setDragDistance(deltaX);
    container.scrollLeft = scrollLeft - deltaX;

    lastPosRef.current = currentX;
    lastTimeRef.current = currentTime;
  };

  const handleTouchEnd = () => endDrag();

  // AUTO-SCROLL INFINITO SIN SALTOS
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number | null = null;

    const autoScroll = () => {
      const el = scrollRef.current;
      if (!el || !isAutoScrolling) return;

      el.scrollLeft += SCROLL_SPEED;

      const oneSetWidth = el.scrollWidth / 3;
      const currentScroll = el.scrollLeft;

      // reset adelante
      if (currentScroll >= oneSetWidth * 2 - RESET_THRESHOLD) {
        const originalBehavior = el.style.scrollBehavior;
        el.style.scrollBehavior = 'auto';
        el.scrollLeft = oneSetWidth;
        requestAnimationFrame(() => {
          el.style.scrollBehavior = originalBehavior;
        });
      }
      // reset atrás
      else if (currentScroll <= RESET_THRESHOLD) {
        const originalBehavior = el.style.scrollBehavior;
        el.style.scrollBehavior = 'auto';
        el.scrollLeft = oneSetWidth;
        requestAnimationFrame(() => {
          el.style.scrollBehavior = originalBehavior;
        });
      }

      animationId = requestAnimationFrame(autoScroll);
    };

    if (isAutoScrolling) {
      animationId = requestAnimationFrame(autoScroll);
    }

    return () => {
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isAutoScrolling]);

  // Inicializar carrusel en el segundo set (centro)
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.style.scrollBehavior = 'auto';
      const initialScroll = el.scrollWidth / 3;
      el.scrollLeft = initialScroll;

      requestAnimationFrame(() => {
        const el2 = scrollRef.current;
        if (el2) {
          el2.style.scrollBehavior = 'smooth';
        }
      });
    }

    return () => {
      if (momentumAnimationRef.current !== null) {
        cancelAnimationFrame(momentumAnimationRef.current);
      }
    };
  }, []);

  // Props del contenedor scroll
  const scrollContainerProps = {
    ref: scrollRef,
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp,
    onMouseLeave: handleMouseLeave,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
  };

  // Estilos del contenedor scroll
  const scrollContainerSx = {
    display: 'flex',
    gap: 3,
    pb: 4,
    overflowX: 'auto',
    overflowY: 'hidden',
    scrollBehavior: isDragging ? 'auto' : 'smooth',
    cursor: isDragging ? 'grabbing' : 'grab',
    userSelect: 'none',
    touchAction: 'pan-y pinch-zoom',
    WebkitOverflowScrolling: 'touch',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
  } as const;

  // Gradientes laterales (como en el otro carrusel)
  const gradientsWrapperSx = {
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 100,
      background: 'linear-gradient(to right, #19304e, transparent)',
      zIndex: 2,
      pointerEvents: 'none',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: 100,
      background: 'linear-gradient(to left, #19304e, transparent)',
      zIndex: 2,
      pointerEvents: 'none',
    },
  } as const;

  // Estilos base de las cards
  const cardItemSx = {
    minWidth: { xs: 300, md: 380 },
    flexShrink: 0,
    bgcolor: '#faf7f2',
    borderRadius: 5,
    transition: isDragging ? 'none' : 'all 0.3s ease',
    cursor: isDragging ? 'grabbing' : 'pointer',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      transform: isDragging ? 'none' : 'translateY(-12px)',
      boxShadow: isDragging ? 'none' : '0 20px 40px rgba(7, 104, 232, 0.3)',
    },
  } as const;

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

          {/* Carrusel con drag + auto-scroll infinito */}
          <Box sx={gradientsWrapperSx}>
            <Box {...scrollContainerProps} sx={scrollContainerSx}>
              {triplicatedServices.map((service, index) => (
                <Card
                  key={`${service.id}-${index}`}
                  onClick={() => handleItemClick(service.id)}
                  sx={cardItemSx}
                >
                  <CardContent
                    sx={{
                      p: 4,
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
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

                    {/* Botones: Agendar + WhatsApp */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: 1.5,
                      }}
                    >
                      <Button
                        onClick={(e) => handleAgendarClick(e, service.title)}
                        variant="contained"
                        sx={{
                          flex: 1,
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

                      <Button
                        onClick={(e) => handleWhatsappClick(e, service.title)}
                        variant="contained"
                        sx={{
                          flex: 1,
                          bgcolor: '#25D366',
                          color: '#ffffff',
                          py: 1.5,
                          fontWeight: 700,
                          fontSize: '1rem',
                          borderRadius: 3,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 1,
                          '&:hover': {
                            bgcolor: '#20BD5A',
                          },
                        }}
                      >
                        <span>💬</span>
                        <span>WhatsApp</span>
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
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
      <AppointmentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceName={selectedService}
      />
    </>
  );
}
