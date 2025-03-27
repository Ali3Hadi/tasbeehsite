"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-slate-800 text-white/90">
      <div className="container">
        <p className="text-center text-sm">
          © {currentYear} The Guided Light. All rights reserved. | Developed by Ali Hadi Fadel
        </p>
      </div>
    </footer>
  );
}
