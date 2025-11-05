import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-slate-200/70 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} Nuovo Progetto Digitale • Blueprint di Sviluppo Web
        </p>
        <p>
          Realizzato con React + Tailwind • Mobile-first • Accessibile
        </p>
      </div>
    </footer>
  );
};

export default Footer;
