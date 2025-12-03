import type { BoxProps } from '@mui/material/Box';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

// ----------------------------------------------------------------------

interface AppointmentModalProps extends BoxProps {
  open: boolean;
  onClose: () => void;
  serviceName?: string;
}

export function AppointmentModal({ open, onClose, serviceName, ...other }: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar a tu backend o WhatsApp
    console.log('Form data:', formData);
    setSubmitted(true);

    // Opcional: Enviar a WhatsApp
    const message = `Hola, me gustaría agendar: ${serviceName}\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\nEmpresa: ${formData.company}\nMensaje: ${formData.message}`;
    const whatsappUrl = `https://wa.me/51999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Reset after 2 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      onClose();
    }, 2000);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '90%',
          maxWidth: 600,
          bgcolor: '#faf7f2',
          borderRadius: 4,
          boxShadow: 24,
          p: 4,
          maxHeight: '90vh',
          overflowY: 'auto',
          animation: 'modalAppear 0.3s ease-out',
          '@keyframes modalAppear': {
            from: { opacity: 0, transform: 'scale(0.9)' },
            to: { opacity: 1, transform: 'scale(1)' },
          },
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 16,
            top: 16,
            color: '#19304e',
          }}
        >
          ✕
        </IconButton>

        {/* Header */}
        <Typography
          variant="h4"
          sx={{
            color: '#19304e',
            fontWeight: 700,
            mb: 1,
          }}
        >
          Agendar Servicio
        </Typography>

        {serviceName && (
          <Typography
            sx={{
              color: '#19304e',
              fontWeight: 600,
              mb: 3,
            }}
          >
            {serviceName}
          </Typography>
        )}

        {submitted ? (
          <Alert severity="success" sx={{ mb: 3 }}>
            ¡Solicitud enviada! Nos pondremos en contacto contigo pronto.
          </Alert>
        ) : (
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              required
              name="name"
              label="Nombre completo"
              value={formData.name}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              required
              type="email"
              name="email"
              label="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              required
              name="phone"
              label="Teléfono / WhatsApp"
              value={formData.phone}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              name="company"
              label="Empresa (opcional)"
              value={formData.company}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              multiline
              rows={4}
              name="message"
              label="Cuéntanos sobre tu proyecto"
              value={formData.message}
              onChange={handleChange}
              sx={{ mb: 3 }}
            />

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
              <Button
                variant="outlined"
                onClick={onClose}
                sx={{
                  color: '#19304e',
                  borderColor: '#19304e',
                  '&:hover': {
                    borderColor: '#19304e',
                    bgcolor: 'rgba(25, 48, 78, 0.05)',
                  },
                }}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: '#19304e',
                  color: 'white',
                  px: 4,
                  '&:hover': {
                    bgcolor: '#19304e',
                  },
                }}
              >
                Enviar Solicitud
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Modal>
  );
}