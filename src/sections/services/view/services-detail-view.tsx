import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';

import { HomeNavbar } from 'src/sections/overview/home-navbar';
import { HomeFooter } from 'src/sections/overview/home-footer';
import { WhatsappButton } from 'src/sections/overview/whatsapp-button';

import { ServiceBenefits } from '../service-benefits';
import { AppointmentModal } from '../appointment-modal';
import { ServiceDetailHero } from '../service-detail-hero';

// ----------------------------------------------------------------------

// Mock data - reemplaza con tu API o base de datos
const servicesData = {
  asesorias: {
    title: 'Asesorías Personalizadas 1:1',
    subtitle: 'Conversemos de tu proyecto',
    description:
      'Ofrecemos asesoramiento personalizado para llevar tu proyecto al siguiente nivel. Nuestro equipo de expertos te acompañará en cada etapa del proceso, desde la conceptualización hasta la implementación final.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    features: [
      'Análisis detallado de tus necesidades',
      'Creación de planos profesionales',
      'Modelado 3D de tu proyecto',
      'Implementación y seguimiento',
      'Presupuesto personalizado',
    ],
    benefits: [
      'Ahorro de tiempo y recursos',
      'Diseño optimizado para tus necesidades',
      'Visualización 3D antes de la fabricación',
      'Garantía de calidad en el proyecto',
      'Soporte continuo post-implementación',
      'Experiencia de más de 25 años',
    ],
  },
  visitas: {
    title: 'Visitas Técnicas',
    subtitle: 'Visitamos tu proyecto o negocio',
    description:
      'Nuestro equipo técnico se desplaza a tu ubicación para realizar una evaluación completa de tus instalaciones y equipos. Identificamos oportunidades de mejora y brindamos soluciones inmediatas.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    features: [
      'Inspección técnica completa',
      'Revisión de equipos instalados',
      'Diagnóstico profesional',
      'Reporte técnico detallado',
      'Recomendaciones de mejora',
      '*Servicio disponible en Perú',
    ],
    benefits: [
      'Detección temprana de problemas',
      'Optimización de tus equipos',
      'Prevención de fallas costosas',
      'Asesoría in-situ personalizada',
      'Reporte fotográfico completo',
      'Presupuesto inmediato',
    ],
  },
  'mantenimiento-preventivo': {
    title: 'Mantenimiento Preventivo',
    subtitle: 'Revisamos tus equipos fabricados por nosotros',
    description:
      'El mantenimiento preventivo es clave para prolongar la vida útil de tus equipos. Realizamos inspecciones periódicas y ajustes necesarios para garantizar un funcionamiento óptimo.',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800',
    features: [
      'Inspección periódica programada',
      'Limpieza profunda de componentes',
      'Ajuste y calibración',
      'Reemplazo de piezas de desgaste',
      'Certificado de mantenimiento',
    ],
    benefits: [
      'Mayor vida útil de los equipos',
      'Reducción de costos operativos',
      'Minimización de paros inesperados',
      'Eficiencia energética mejorada',
      'Cumplimiento de normativas',
      'Tranquilidad operativa',
    ],
  },
  'mantenimiento-correctivo': {
    title: 'Mantenimiento Correctivo',
    subtitle: 'Reparación de equipos fabricados por nosotros',
    description:
      'Cuando tus equipos presentan fallas, nuestro equipo técnico especializado realiza el diagnóstico y reparación necesaria para devolverlos a su funcionamiento óptimo en el menor tiempo posible.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800',
    features: [
      'Diagnóstico técnico especializado',
      'Reparación de componentes',
      'Cambio de piezas dañadas',
      'Pruebas de funcionamiento',
      'Garantía del servicio',
    ],
    benefits: [
      'Reparación rápida y efectiva',
      'Piezas originales garantizadas',
      'Técnicos especializados',
      'Soporte técnico continuo',
      'Presupuesto transparente',
      'Respuesta inmediata',
    ],
  },
};

export function ServiceDetailView() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [modalOpen, setModalOpen] = useState(false);

  const service =
    servicesData[serviceId as keyof typeof servicesData] || servicesData.asesorias;

  return (
    <Box>
      <HomeNavbar />
      <ServiceDetailHero service={service} onSchedule={() => setModalOpen(true)} />
      <ServiceBenefits benefits={service.benefits} />
      <HomeFooter />
      <WhatsappButton phoneNumber="51999999999" />
      <AppointmentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceName={service.title}
      />
    </Box>
  );
}