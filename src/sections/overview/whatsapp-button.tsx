import type { ButtonProps } from '@mui/material/Button';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface WhatsappButtonProps extends ButtonProps {
  phoneNumber?: string;
  message?: string;
}

export function WhatsappButton({
  phoneNumber = '51997425196',
  message = 'Hola, me gustaría solicitar una cotización',
  sx,
  ...other
}: WhatsappButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 30,
        right: 0,
        width: 200,                // 🟢 Zona segura para hover
        height: 60,
        display: 'flex',
        justifyContent: 'flex-end',
        pointerEvents: 'none',     // 🟢 Este contenedor no bloquea clicks
        zIndex: 999,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{
          pointerEvents: 'all',     // 🟢 el botón SÍ recibe eventos
          bgcolor: '#faf7f2',
          color: '#19304e',
          borderRadius: '999px',
          height: 60,
          minWidth: 60,
          pl: isHovered ? 3 : 1,
          pr: isHovered ? 5 : 1,
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',

          // ⭐ AHORA SI FUNCIONA SIN BUGS
          position: 'absolute',
          right: isHovered ? -30 : 20,
          transition:
            'right .40s cubic-bezier(0.4, 0, 0.2, 1), padding-right .40s cubic-bezier(0.4, 0, 0.2, 1)',

          '&:hover': {
            bgcolor: '#f5f5f5',
            boxShadow: '0 12px 32px rgba(37, 211, 102, 0.5)',
          },

          ...sx,
        }}
        {...other}
      >
        <Box
          component="svg"
          width={36}
          height={36}
          viewBox="0 0 24 24"
          fill="none"
          sx={{ flexShrink: 0 }}
        >
          <path
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
          fill="#25D366"
          />
        </Box>

        <Typography
          sx={{
            whiteSpace: 'nowrap',
            fontSize: 17,
            fontWeight: 600,
            fontFamily: '"Poppins", sans-serif',
            color: '#19304e',
            maxWidth: isHovered ? 140 : 0,
            opacity: isHovered ? 1 : 0,
            ml: isHovered ? 1.5 : 0,
            overflow: 'hidden',
            transition: 'max-width .4s ease, opacity .3s ease, margin .4s ease',
          }}
        >
          Cotiza ahora
        </Typography>
      </Button>
    </Box>
  );
}
