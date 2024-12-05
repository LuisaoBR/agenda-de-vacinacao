import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: 'linear-gradient(to right, #1e90ff, #00bfff)',
        color: 'white',
        textAlign: 'center',
        padding: '1rem 0',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        fontSize: '0.9rem',
      }}
    >
      <p>© 2024 Agenda de Vacinação. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
