// src/sections/catalogo/product-data.ts

export type ProductSpecification = {
  label: string;
  value: string;
};

export type ProductUseCase = {
  title: string;
  image: string;
  description: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  images: string[];
  specifications: ProductSpecification[];
  useCases: ProductUseCase[];
};

/**
 * Mapa de productos por ID.
 * IMPORTANTE: el ID debe coincidir con el que usas en las cards de los carruseles
 * (por ejemplo: '20-40', '60-180-reforzado', 'C-1', etc.)
 */
export const productData: Record<string, Product> = {
  // =========================
  // GENERADORES DE VAPOR
  // =========================
  '20-40': {
    id: '20-40',
    name: 'Modelo 20-40',
    category: 'Generador de Vapor',
    description:
      'Generador de vapor compacto ideal para cabinas de sauna residenciales o pequeños negocios. Fabricado en acero inoxidable 304, ofrece una excelente relación tamaño-potencia con bajo consumo de energía y mantenimiento sencillo.',
    images: [
      '/assets/images/machine/generador-vapor-20-40.png',
    ],
    specifications: [
      { label: 'Equipo', value: 'Generador de vapor' },
      { label: 'Modelo', value: '20-40' },
      { label: 'Fábrica', value: 'Maquinarias Osinaga' },
      { label: 'Material utilizado', value: 'Acero inoxidable 304' },
      { label: 'Sistema de energía', value: 'Gas: GN / GLP' },
      { label: 'Medida del equipo', value: 'Alto: 100 cm · Diámetro: 22 cm + tablero: 15 cm' },
      { label: 'Capacidad recomendada', value: 'Cabinas de sauna hasta aprox. 6–8 m³' },
      { label: 'Aplicación principal', value: 'Saunas residenciales, pequeños gimnasios y spas' },
    ],
    useCases: [
      {
        title: 'Saunas residenciales',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600',
        description:
          'Ideal para hogares que desean implementar una cabina de sauna compacta, con un equipo de alta durabilidad y fácil instalación.',
      },
      {
        title: 'Pequeños gimnasios',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600',
        description:
          'Perfecto para gimnasios boutique que necesitan brindar un servicio adicional de relajación a sus clientes.',
      },
    ],
  },

  '30-60': {
    id: '30-60',
    name: 'Modelo 30-60',
    category: 'Generador de Vapor',
    description:
      'Generador de vapor versátil para saunas residenciales y comerciales pequeñas. Su mayor capacidad lo hace ideal para cabinas medianas con uso frecuente.',
    images: [
      '/assets/images/machine/generador-vapor-30-60.png',
    ],
    specifications: [
      { label: 'Equipo', value: 'Generador de vapor' },
      { label: 'Modelo', value: '30-60' },
      { label: 'Fábrica', value: 'Maquinarias Osinaga' },
      { label: 'Material utilizado', value: 'Acero inoxidable 304' },
      { label: 'Sistema de energía', value: 'Gas: GN / GLP' },
      { label: 'Medida del equipo', value: 'Alto: 120 cm · Diámetro: 30 cm + tablero: 15 cm' },
      { label: 'Capacidad recomendada', value: 'Cabinas de sauna hasta aprox. 10–12 m³' },
      { label: 'Aplicación principal', value: 'Saunas residenciales premium, spas pequeños' },
    ],
    useCases: [
      {
        title: 'Spas boutique',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600',
        description:
          'Brinda vapor constante y uniforme para tratamientos de relajación en spas de tamaño reducido.',
      },
      {
        title: 'Hoteles pequeños',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600',
        description:
          'Se integra fácilmente en áreas de bienestar de hoteles pequeños y alojamientos turísticos.',
      },
    ],
  },

  '39-90': {
    id: '39-90',
    name: 'Modelo 39-90',
    category: 'Generador de Vapor',
    description:
      'Generador de vapor diseñado para cabinas de mayor volumen y uso frecuente. Construido totalmente en acero inoxidable 304 para garantizar máxima resistencia y larga vida útil.',
    images: [
      '/assets/images/machine/generador-vapor-30-90.png', // ajusta si tienes otro archivo
    ],
    specifications: [
      { label: 'Equipo', value: 'Generador de vapor' },
      { label: 'Modelo', value: '39-90' },
      { label: 'Fábrica', value: 'Maquinarias Osinaga' },
      { label: 'Material utilizado', value: 'Acero inoxidable 304' },
      { label: 'Sistema de energía', value: 'Gas: GN / GLP' },
      { label: 'Medida del equipo', value: 'Alto: 150 cm · Diámetro: 39 cm + tablero: 15 cm' },
      { label: 'Capacidad recomendada', value: 'Cabinas de sauna hasta aprox. 14–16 m³' },
      { label: 'Aplicación principal', value: 'Saunas comerciales, centros de bienestar' },
    ],
    useCases: [
      {
        title: 'Centros de bienestar',
        image: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=600',
        description:
          'Perfecto para centros de bienestar que requieren equipos robustos preparados para jornadas largas de trabajo.',
      },
      {
        title: 'Clubs y gimnasios grandes',
        image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600',
        description:
          'Soporta cargas de uso intensivo en clubes deportivos con alta rotación de usuarios.',
      },
    ],
  },

  '44-120': {
    id: '44-120',
    name: 'Modelo 44-120',
    category: 'Generador de Vapor',
    description:
      'Generador de vapor de alta eficiencia diseñado para saunas residenciales y comerciales. Fabricado en acero inoxidable 304, garantiza durabilidad y resistencia a la corrosión. Ideal para espacios de hasta 18–20 m³, con excelente estabilidad térmica.',
    images: [
      '/assets/images/machine/generador-vapor-44-120.png',
    ],
    specifications: [
      { label: 'Equipo', value: 'Generador de vapor' },
      { label: 'Modelo', value: '44-120' },
      { label: 'Fábrica', value: 'Maquinarias Osinaga' },
      { label: 'Año de fabricación', value: '2025 (según lote)' },
      { label: 'Material utilizado', value: 'Acero inoxidable 304' },
      { label: 'Sistema de energía', value: 'Gas: GN / GLP' },
      { label: 'Medida del equipo', value: 'Alto: 150 cm · Diámetro: 39 cm + tablero: 15 cm' },
      { label: 'Capacidad recomendada', value: 'Cabinas de sauna hasta aprox. 18–20 m³' },
      { label: 'Tiempo de calentamiento', value: 'Aprox. 10–15 minutos (según instalación)' },
    ],
    useCases: [
      {
        title: 'Cabinas para sauna comerciales',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600',
        description:
          'Proporciona vapor constante y uniforme en cabinas de sauna con alta rotación de usuarios.',
      },
      {
        title: 'Spas y centros de bienestar',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600',
        description:
          'Ideal para spas profesionales que buscan ofrecer experiencias de relajación de alta calidad con equipos confiables y fáciles de mantener.',
      },
      {
        title: 'Hoteles y resorts',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600',
        description:
          'Solución perfecta para áreas de wellness en hoteles y resorts, optimizando el espacio sin sacrificar rendimiento.',
      },
    ],
  },

  '55-150': {
    id: '55-150',
    name: 'Modelo 55-150',
    category: 'Generador de Vapor',
    description:
      'Generador de vapor de gran capacidad para instalaciones comerciales exigentes. Diseñado para trabajar en cabinas amplias o en operación casi continua.',
    images: [
      '/assets/images/machine/generador-vapor-55-150.png',
    ],
    specifications: [
      { label: 'Equipo', value: 'Generador de vapor' },
      { label: 'Modelo', value: '55-150' },
      { label: 'Fábrica', value: 'Maquinarias Osinaga' },
      { label: 'Año de fabricación', value: '2025 (según lote)' },
      { label: 'Material utilizado', value: 'Acero inoxidable 304' },
      { label: 'Sistema de energía', value: 'Gas: GN / GLP' },
      { label: 'Medida del equipo', value: 'Alto: 200 cm · Diámetro: 55 cm + tablero: 15 cm' },
      { label: 'Aplicación principal', value: 'Saunas grandes, hoteles, clubes y spas de alto tráfico' },
    ],
    useCases: [
      {
        title: 'Saunas de alto tráfico',
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600',
        description:
          'Preparado para jornadas extensas de funcionamiento en saunas con uso intensivo durante todo el día.',
      },
      {
        title: 'Complejos deportivos y clubes',
        image: 'https://images.unsplash.com/photo-1526401485004-2fa806b226e1?w=600',
        description:
          'Aporta estabilidad y seguridad en la generación de vapor para complejos deportivos y clubes privados.',
      },
    ],
  },

  '55-150-reforzado': {
    id: '55-150-reforzado',
    name: 'Modelo 55-150 Reforzado',
    category: 'Generador de Vapor',
    description:
      'Versión reforzada del modelo 55-150, diseñada para condiciones de trabajo aún más exigentes, con mejoras estructurales y componentes dimensionados para uso continuo.',
    images: [
      '/assets/images/machine/generador-vapor-55-150.png', // usa la misma o una específica si la tienes
    ],
    specifications: [
      { label: 'Equipo', value: 'Generador de vapor' },
      { label: 'Modelo', value: '55-150 Reforzado' },
      { label: 'Fábrica', value: 'Maquinarias Osinaga' },
      { label: 'Año de fabricación', value: '2025' },
      { label: 'Material utilizado', value: 'Acero inoxidable 304 espesor incrementado en zonas críticas' },
      { label: 'Sistema de energía', value: 'Gas: GN / GLP' },
      { label: 'Medida del equipo', value: 'Alto: 200 cm · Diámetro: 55 cm + tablero: 15 cm' },
      { label: 'Aplicación principal', value: 'Instalaciones que requieren trabajo prácticamente continuo' },
    ],
    useCases: [
      {
        title: 'Centros de spa de gran capacidad',
        image: 'https://images.unsplash.com/photo-1599057593902-383dcc66c67a?w=600',
        description:
          'Pensado para spas que operan durante todo el día, con múltiples cabinas y alta demanda de vapor.',
      },
    ],
  },

  '60-180': {
    id: '60-180',
    name: 'Modelo 60-180',
    category: 'Generador de Vapor',
    description:
      'Generador de vapor de gran tamaño para proyectos especiales, cabinas de gran volumen y aplicaciones semi-industriales que requieren alta producción de vapor.',
    images: [
      '/assets/images/machine/generador-vapor-60-180.png',
    ],
    specifications: [
      { label: 'Equipo', value: 'Generador de vapor' },
      { label: 'Modelo', value: '60-180' },
      { label: 'Fábrica', value: 'Maquinarias Osinaga' },
      { label: 'Año de fabricación', value: '2025 (según lote)' },
      { label: 'Material utilizado', value: 'Acero inoxidable 304' },
      { label: 'Sistema de energía', value: 'Gas: GN / GLP' },
      { label: 'Medida del equipo', value: 'Alto: 235 cm · Diámetro: 60 cm + tablero: 15 cm' },
      { label: 'Aplicación principal', value: 'Saunas XXL, proyectos especiales y aplicaciones semi-industriales' },
    ],
    useCases: [
      {
        title: 'Saunas de gran volumen',
        image: 'https://images.unsplash.com/photo-1503437313881-503a91226402?w=600',
        description:
          'Proporciona el caudal de vapor necesario para cabinas de gran tamaño manteniendo estabilidad en la temperatura.',
      },
    ],
  },

  '60-180-reforzado': {
    id: '60-180-reforzado',
    name: 'Modelo 60-180 Reforzado',
    category: 'Generador de Vapor',
    description:
      'La versión reforzada del modelo 60-180 está pensada para instalaciones que trabajan prácticamente 24/7, con refuerzos estructurales y componentes de alta durabilidad.',
    images: [
      '/assets/images/machine/generador-vapor-60-180-reforzado.png',
    ],
    specifications: [
      { label: 'Equipo', value: 'Generador de vapor' },
      { label: 'Modelo', value: '60-180 Reforzado' },
      { label: 'Fábrica', value: 'Maquinarias Osinaga' },
      { label: 'Año de fabricación', value: '2025' },
      { label: 'Material utilizado', value: 'Acero inoxidable 304 reforzado' },
      { label: 'Sistema de energía', value: 'Gas: GN / GLP' },
      { label: 'Medida del equipo', value: 'Alto: 235 cm · Diámetro: 60 cm + tablero: 15 cm' },
      { label: 'Aplicación principal', value: 'Proyectos con demanda continua y condiciones exigentes de trabajo' },
    ],
    useCases: [
      {
        title: 'Instalaciones de uso continuo',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
        description:
          'Ideal para complejos hoteleros, centros de bienestar y proyectos especiales que operan durante largas jornadas sin interrupción.',
      },
    ],
  },

  // Aquí luego puedes definir:
  // '3': { ... }      → 3 vías manifold
  // '7': { ... }      → 7 vías manifold
  // 'D': { ... }      → dispensador de hierba
  // 'C-1': { ... }    → cabina personal sauna
};
