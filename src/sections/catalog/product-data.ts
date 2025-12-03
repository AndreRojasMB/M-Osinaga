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

  // =========================
  // INTERCAMBIADORES DE CALOR
  // =========================
  'int-30-60': {
    id: 'int-30-60',
    name: 'Intercambiador 30-60',
    category: 'Intercambiador de Calor',
    description:
      'Intercambiador de calor compacto para aplicaciones de sauna y calentamiento de agua sanitaria. Ideal para pequeños hoteles, spas y gimnasios.',
    images: ['/assets/images/machine/intercambiador-calor-30-60.png'],
    specifications: [
      { label: 'Equipo', value: 'Intercambiador de calor' },
      { label: 'Modelo', value: '30-60' },
      { label: 'Fábrica', value: 'Maquinarias Osinaga' },
      { label: 'Material utilizado', value: 'Acero inoxidable 304' },
      { label: 'Aplicación principal', value: 'Transferencia de calor entre circuito de vapor y agua' },
      { label: 'Capacidad recomendada', value: 'Pequeños sistemas de sauna y duchas calientes' },
    ],
    useCases: [
      {
        title: 'Calentamiento de agua sanitaria',
        image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=600',
        description:
          'Permite aprovechar el vapor generado para calentar agua sanitaria en duchas y servicios higiénicos.',
      },
      {
        title: 'Spas y gimnasios',
        image: 'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?w=600',
        description:
          'Solución eficiente para integrar sauna y duchas calientes en instalaciones deportivas y centros de bienestar.',
      },
    ],
  },

  'int-39-90': {
    id: 'int-39-90',
    name: 'Intercambiador 39-90',
    category: 'Intercambiador de Calor',
    description:
      'Intercambiador de calor de mayor capacidad, diseñado para instalaciones comerciales con demanda media de agua caliente.',
    images: ['/assets/images/machine/intercambiador-calor-39-90.png'],
    specifications: [
      { label: 'Equipo', value: 'Intercambiador de calor' },
      { label: 'Modelo', value: '39-90' },
      { label: 'Fábrica', value: 'Maquinarias Osinaga' },
      { label: 'Material utilizado', value: 'Acero inoxidable 304' },
      { label: 'Aplicación principal', value: 'Sistemas de agua caliente en spas y hoteles pequeños' },
    ],
    useCases: [
      {
        title: 'Hoteles boutique',
        image: 'https://images.unsplash.com/photo-1501117716987-c8e1ecb2108a?w=600',
        description:
          'Brinda estabilidad en la temperatura del agua caliente para habitaciones y áreas de spa.',
      },
    ],
  },

  'int-44-120': {
    id: 'int-44-120',
    name: 'Intercambiador 44-120',
    category: 'Intercambiador de Calor',
    description:
      'Intercambiador robusto para proyectos con mayor cantidad de puntos de consumo de agua caliente.',
    images: ['/assets/images/machine/intercambiador-calor-44-120.png'],
    specifications: [
      { label: 'Equipo', value: 'Intercambiador de calor' },
      { label: 'Modelo', value: '44-120' },
      { label: 'Fábrica', value: 'Maquinarias Osinaga' },
      { label: 'Material utilizado', value: 'Acero inoxidable 304' },
      { label: 'Aplicación principal', value: 'Hoteles, clubes y centros de bienestar' },
    ],
    useCases: [
      {
        title: 'Centros de bienestar',
        image: 'https://images.unsplash.com/photo-1519823551271-9d2de6a9b0f4?w=600',
        description:
          'Integra el sistema de sauna con duchas de contraste y zonas de hidroterapia.',
      },
    ],
  },

  'int-55-150': {
    id: 'int-55-150',
    name: 'Intercambiador 55-150',
    category: 'Intercambiador de Calor',
    description:
      'Intercambiador de gran capacidad, recomendado para complejos deportivos, hoteles grandes y proyectos con alta demanda de agua caliente.',
    images: ['/assets/images/machine/intercambiador-calor-55-150.png'],
    specifications: [
      { label: 'Equipo', value: 'Intercambiador de calor' },
      { label: 'Modelo', value: '55-150' },
      { label: 'Fábrica', value: 'Maquinarias Osinaga' },
      { label: 'Material utilizado', value: 'Acero inoxidable 304' },
      { label: 'Aplicación principal', value: 'Sistemas centralizados de agua caliente' },
    ],
    useCases: [
      {
        title: 'Complejos deportivos',
        image: 'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?w=600',
        description:
          'Soporta múltiples duchas y servicios simultáneos sin pérdida significativa de temperatura.',
      },
    ],
  },

  // =========================
  // CALENTADORES DE AGUA
  // =========================
  'cal-30-60': {
    id: 'cal-30-60',
    name: 'Calentador 30-60',
    category: 'Calentador de Agua',
    description:
      'Calentador de agua compacto para aplicaciones residenciales o pequeños negocios con demanda moderada.',
    images: ['/assets/images/machine/calentador-agua-30-60.png'],
    specifications: [
      { label: 'Equipo', value: 'Calentador de agua' },
      { label: 'Modelo', value: '30-60' },
      { label: 'Fábrica', value: 'Maquinarias Osinaga' },
      { label: 'Material utilizado', value: 'Acero inoxidable 304' },
      { label: 'Sistema de energía', value: 'Gas: GN / GLP' },
    ],
    useCases: [
      {
        title: 'Duchas y servicios higiénicos',
        image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600',
        description:
          'Calentamiento eficiente de agua para duchas individuales o pequeños grupos de uso.',
      },
    ],
  },

  'cal-39-90': {
    id: 'cal-39-90',
    name: 'Calentador 39-90',
    category: 'Calentador de Agua',
    description:
      'Calentador de agua para instalaciones con varios puntos de consumo simultáneo.',
    images: ['/assets/images/machine/calentador-agua-39-90.png'],
    specifications: [
      { label: 'Equipo', value: 'Calentador de agua' },
      { label: 'Modelo', value: '39-90' },
      { label: 'Fábrica', value: 'Maquinarias Osinaga' },
      { label: 'Material utilizado', value: 'Acero inoxidable 304' },
      { label: 'Sistema de energía', value: 'Gas: GN / GLP' },
    ],
    useCases: [
      {
        title: 'Spas y gimnasios',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600',
        description:
          'Permite abastecer varias duchas de forma estable, ideal para spas y centros deportivos.',
      },
    ],
  },

  'cal-44-120': {
    id: 'cal-44-120',
    name: 'Calentador 44-120',
    category: 'Calentador de Agua',
    description:
      'Calentador de agua diseñado para hoteles pequeños, saunas comerciales y proyectos con demanda continua.',
    images: ['/assets/images/machine/calentador-agua-44-120.png'],
    specifications: [
      { label: 'Equipo', value: 'Calentador de agua' },
      { label: 'Modelo', value: '44-120' },
      { label: 'Fábrica', value: 'Maquinarias Osinaga' },
      { label: 'Material utilizado', value: 'Acero inoxidable 304' },
      { label: 'Sistema de energía', value: 'Gas: GN / GLP' },
    ],
    useCases: [
      {
        title: 'Hoteles y hospedajes',
        image: 'https://images.unsplash.com/photo-1508255139162-e1f7b7288ab7?w=600',
        description:
          'Provee agua caliente constante para habitaciones y zonas comunes.',
      },
    ],
  },

  'cal-55-150': {
    id: 'cal-55-150',
    name: 'Calentador 55-150',
    category: 'Calentador de Agua',
    description:
      'Calentador de alta capacidad para proyectos con gran cantidad de duchas y puntos de consumo.',
    images: ['/assets/images/machine/calentador-agua-55-150.png'],
    specifications: [
      { label: 'Equipo', value: 'Calentador de agua' },
      { label: 'Modelo', value: '55-150' },
      { label: 'Fábrica', value: 'Maquinarias Osinaga' },
      { label: 'Material utilizado', value: 'Acero inoxidable 304' },
      { label: 'Sistema de energía', value: 'Gas: GN / GLP' },
    ],
    useCases: [
      {
        title: 'Complejos deportivos y clubes',
        image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600',
        description:
          'Diseñado para soportar horarios pico con muchas duchas activas al mismo tiempo.',
      },
    ],
  },

  'cal-60-180': {
    id: 'cal-60-180',
    name: 'Calentador 60-180',
    category: 'Calentador de Agua',
    description:
      'Calentador de gran tamaño utilizado en proyectos especiales e instalaciones con consumo intensivo de agua caliente.',
    images: ['/assets/images/machine/calentador-agua-60-180.png'],
    specifications: [
      { label: 'Equipo', value: 'Calentador de agua' },
      { label: 'Modelo', value: '60-180' },
      { label: 'Fábrica', value: 'Maquinarias Osinaga' },
      { label: 'Material utilizado', value: 'Acero inoxidable 304' },
      { label: 'Sistema de energía', value: 'Gas: GN / GLP' },
    ],
    useCases: [
      {
        title: 'Proyectos especiales',
        image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600',
        description:
          'Puede integrarse a sistemas centralizados de agua caliente en hoteles grandes o centros de bienestar.',
      },
    ],
  },

  'cal-60-180R': {
    id: 'cal-60-180R',
    name: 'Calentador 60-180 Reforzado',
    category: 'Calentador de Agua',
    description:
      'Versión reforzada del modelo 60-180, pensada para trabajo en condiciones exigentes y operación prácticamente continua.',
    images: ['/assets/images/machine/calentador-agua-60-180-reforzado.png'],
    specifications: [
      { label: 'Equipo', value: 'Calentador de agua' },
      { label: 'Modelo', value: '60-180 Reforzado' },
      { label: 'Fábrica', value: 'Maquinarias Osinaga' },
      { label: 'Material utilizado', value: 'Acero inoxidable 304 reforzado' },
      { label: 'Sistema de energía', value: 'Gas: GN / GLP' },
    ],
    useCases: [
      {
        title: 'Instalaciones de uso continuo',
        image: 'https://images.unsplash.com/photo-1522648485144-849409408aee?w=600',
        description:
          'Preparado para operar en proyectos con demanda constante de agua caliente durante todo el día.',
      },
    ],
  },

  // =========================
  // VÍAS MANIFOLD
  // =========================
  'man-3': {
    id: 'man-3',
    name: 'Manifold 3 vías',
    category: 'Vías de Manifold',
    description:
      'Múltiple distribuidor de vapor de 3 vías, utilizado para alimentar varias líneas de sauna desde un solo generador.',
    images: ['/assets/images/machine/3-vias-manifold.png'],
    specifications: [
      { label: 'Equipo', value: 'Manifold distribuidor de vapor' },
      { label: 'Modelo', value: '3 vías' },
      { label: 'Fábrica', value: 'Maquinarias Osinaga' },
      { label: 'Material utilizado', value: 'Acero inoxidable 304' },
      { label: 'Número de salidas', value: '3 líneas de vapor' },
    ],
    useCases: [
      {
        title: 'Múltiples cabinas de sauna',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600',
        description:
          'Permite distribuir el vapor generado hacia varias cabinas o zonas de trabajo.',
      },
    ],
  },

  'man-7': {
    id: 'man-7',
    name: 'Manifold 7 vías',
    category: 'Vías de Manifold',
    description:
      'Múltiple distribuidor de 7 vías diseñado para proyectos con varias cabinas o puntos de consumo de vapor.',
    images: ['/assets/images/machine/7-vias-manifold.png'],
    specifications: [
      { label: 'Equipo', value: 'Manifold distribuidor de vapor' },
      { label: 'Modelo', value: '7 vías' },
      { label: 'Fábrica', value: 'Maquinarias Osinaga' },
      { label: 'Material utilizado', value: 'Acero inoxidable 304' },
      { label: 'Número de salidas', value: '7 líneas de vapor' },
    ],
    useCases: [
      {
        title: 'Complejos con múltiples cabinas',
        image: 'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?w=600',
        description:
          'Ideal para spas o centros de bienestar con varios ambientes de sauna trabajando en paralelo.',
      },
    ],
  },

  // =========================
  // DISPENSADOR DE HIERBA
  // =========================
  'disp-D': {
    id: 'disp-D',
    name: 'Dispensador de Hierba',
    category: 'Dispensador de Hierba',
    description:
      'Dispensador diseñado para aromatizar cabinas de sauna mediante hierbas naturales, mejorando la experiencia del usuario.',
    images: ['/assets/images/machine/dispensador-hierba.png'],
    specifications: [
      { label: 'Equipo', value: 'Dispensador de hierba para sauna' },
      { label: 'Modelo', value: 'D' },
      { label: 'Fábrica', value: 'Maquinarias Osinaga' },
      { label: 'Material utilizado', value: 'Acero inoxidable y elementos resistentes al calor' },
      { label: 'Aplicación principal', value: 'Aromaterapia en cabinas de sauna' },
    ],
    useCases: [
      {
        title: 'Saunas aromáticas',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600',
        description:
          'Permite incorporar hierbas o mezclas naturales para ofrecer experiencias diferenciadas de relajación.',
      },
    ],
  },

  // =========================
  // CABINA PERSONAL DE SAUNA
  // =========================
  'cab-C-1': {
    id: 'cab-C-1',
    name: 'Cabina Personal C-1',
    category: 'Cabina Personal Sauna',
    description:
      'Cabina de sauna individual, compacta y lista para instalar, ideal para departamentos, casas o espacios reducidos.',
    images: ['/assets/images/machine/cabina-personal-sauna.png'],
    specifications: [
      { label: 'Equipo', value: 'Cabina personal de sauna' },
      { label: 'Modelo', value: 'C-1' },
      { label: 'Fábrica', value: 'Maquinarias Osinaga' },
      { label: 'Capacidad', value: '1 persona' },
      { label: 'Aplicación principal', value: 'Uso residencial o consultas de bienestar' },
    ],
    useCases: [
      {
        title: 'Sauna en casa',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600',
        description:
          'Solución compacta para personas que desean contar con una sauna propia sin grandes obras civiles.',
      },
    ],
  },
};
