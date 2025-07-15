import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-6 text-center text-softwhite/70 text-sm bg-charcoal border-t border-charcoal/60 mt-12">
      © {new Date().getFullYear()} Ibrahim Majid 
    </footer>
  );
} 