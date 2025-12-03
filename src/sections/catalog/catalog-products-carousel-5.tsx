// 1) Librerías externas
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

// 2) MUI (orden que le gusta al linter)
import Box, { type BoxProps } from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

const products = [
  {
    id: 'disp-D',
    name: 'Modelo 1',
    image: '../../../public/assets/images/machine/dispensador-hierba.png',
    category: 'Dispensador de Hierba',
  },
];


export function CatalogProductsCarousel5({ sx, ...other }: BoxProps) {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const velocityRef = useRef(0);
  const lastPosRef = useRef(0);
  const lastTimeRef = useRef(0);
  const momentumAnimationRef = useRef<number | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [dragDistance, setDragDistance] = useState(0);

  // Triplicamos los productos para un loop perfecto
  const triplicatedProducts = [...products, ...products, ...products];

  const handleProductClick = (productId: string) => {
    // Solo navegar si no hubo un drag significativo (threshold de 10px)
    if (Math.abs(dragDistance) < 10) {
      navigate(`/catalogo/${productId}`);
    }
  };

  // Función para aplicar momentum después de soltar el drag
  const applyMomentum = () => {
    const container = scrollRef.current;
    if (!container) return;

    const friction = 0.95; // Factor de fricción (0.9-0.98 para diferentes sensaciones)
    const minVelocity = 0.1; // Velocidad mínima antes de detener

    const animate = () => {
      const el = scrollRef.current;
      if (!el) return;

      velocityRef.current *= friction;

      if (Math.abs(velocityRef.current) > minVelocity) {
        el.scrollLeft += velocityRef.current;
        momentumAnimationRef.current = requestAnimationFrame(animate);
      } else {
        // Detener momentum y reactivar auto-scroll
        velocityRef.current = 0;
        setTimeout(() => {
          setIsAutoScrolling(true);
        }, 500);
      }
    };

    animate();
  };

  // Inicio del drag
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!container) return;

    // Cancelar cualquier momentum activo
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

    // Bloquear scroll de página
    document.body.style.overflow = 'hidden';
    document.body.style.userSelect = 'none';
  };

  // Movimiento durante el drag
  const handleMouseMove = (e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!isDragging || !container) return;

    e.preventDefault();

    const currentTime = Date.now();
    const deltaTime = currentTime - lastTimeRef.current;
    const currentX = e.clientX;
    const deltaX = currentX - startX;

    // Calcular velocidad para el momentum
    if (deltaTime > 0) {
      velocityRef.current = ((currentX - lastPosRef.current) / deltaTime) * 16; // Normalizar a ~60fps
    }

    setDragDistance(deltaX);

    // Scroll directo 1:1 (más preciso)
    container.scrollLeft = scrollLeft - deltaX;

    lastPosRef.current = currentX;
    lastTimeRef.current = currentTime;
  };

  // Finalizar drag
  const endDrag = () => {
    if (!isDragging) return;

    setIsDragging(false);

    // Restaurar scroll de página
    document.body.style.overflow = '';
    document.body.style.userSelect = '';

    // Aplicar momentum solo si la velocidad es significativa
    if (Math.abs(velocityRef.current) > 1) {
      applyMomentum();
    } else {
      // Si no hay momentum, reactivar auto-scroll después de un rato
      setTimeout(() => {
        setIsAutoScrolling(true);
      }, 1000);
    }
  };

  const handleMouseUp = () => {
    endDrag();
  };

  const handleMouseLeave = () => {
    endDrag();
  };

  // Soporte para touch (móviles/tablets)
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

  const handleTouchEnd = () => {
    endDrag();
  };

  // Auto-scroll infinito suave (arreglado consistent-return)
  useEffect(() => {
    let animationId: number | null = null;
    const scrollSpeed = 0.8; // Velocidad ajustable

    const autoScroll = () => {
      const scrollContainer = scrollRef.current;
      if (!scrollContainer || !isAutoScrolling) return;

      scrollContainer.scrollLeft += scrollSpeed;

      // Loop infinito - reinicia en 1/3 del ancho total
      const oneSetWidth = scrollContainer.scrollWidth / 3;
      const currentScroll = scrollContainer.scrollLeft;

      if (currentScroll >= oneSetWidth * 2) {
        // Si llegamos al final del tercer set, volvemos al segundo
        scrollContainer.scrollLeft = oneSetWidth;
      } else if (currentScroll <= 0) {
        // Si llegamos antes del primer set, saltamos al segundo
        scrollContainer.scrollLeft = oneSetWidth;
      }

      animationId = requestAnimationFrame(autoScroll);
    };

    if (isAutoScrolling && scrollRef.current) {
      animationId = requestAnimationFrame(autoScroll);
    }

    return () => {
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isAutoScrolling]);

  // Inicializar posición en el segundo set
  useEffect(() => {
    const container = scrollRef.current;

    if (container) {
      const initialScroll = container.scrollWidth / 3;
      container.scrollLeft = initialScroll;
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.userSelect = '';
      if (momentumAnimationRef.current !== null) {
        cancelAnimationFrame(momentumAnimationRef.current);
      }
    };
  }, []);

  return (
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
            mb: 6,
            textAlign: 'left',
          }}
        >
          Dispensador de Hierba
        </Typography>

        {/* Carousel Container */}
        <Box
          sx={{
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
          }}
        >
          <Box
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            sx={{
              display: 'flex',
              gap: 3,
              overflowX: 'auto',
              overflowY: 'hidden',
              scrollBehavior: isDragging ? 'auto' : 'smooth',
              cursor: isDragging ? 'grabbing' : 'grab',
              userSelect: 'none',
              touchAction: 'pan-y pinch-zoom', // Permite scroll vertical pero controla el horizontal
              WebkitOverflowScrolling: 'touch',
              // Ocultar scrollbar
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none',
            }}
          >
            {triplicatedProducts.map((product, index) => (
              <Card
                key={`${product.id}-${index}`}
                onClick={() => handleProductClick(product.id)}
                sx={{
                  minWidth: { xs: 280, md: 350 },
                  maxWidth: { xs: 280, md: 350 },
                  flexShrink: 0,
                  bgcolor: '#BBCCE2',
                  borderRadius: 4,
                  transition: isDragging ? 'none' : 'all 0.3s ease',
                  cursor: isDragging ? 'grabbing' : 'pointer',
                  '&:hover': {
                    transform: isDragging ? 'none' : 'translateY(-12px)',
                    boxShadow: isDragging ? 'none' : '0 16px 32px rgba(0, 0, 0, 0.2)',
                  },
                  // Prevenir selección de contenido
                  '& *': {
                    pointerEvents: isDragging ? 'none' : 'auto',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={product.image}
                  alt={product.name}
                  draggable={false}
                  sx={{
                    objectFit: 'cover',
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                />
                <CardContent
                  sx={{
                    bgcolor: '#faf7f2',
                    textAlign: 'center',
                    py: 3,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#19304e',
                      fontWeight: 600,
                      fontSize: '1.2rem',
                      userSelect: 'none',
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#385882',
                      mt: 0.5,
                      userSelect: 'none',
                    }}
                  >
                    {product.category}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
