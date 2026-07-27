import React, { useState, useEffect } from 'react';

const achievements = [
  { icon: 'stars', label: '7 Días', desc: 'Primera semana completa', color: 'text-primary', earned: true },
  { icon: 'auto_awesome', label: '14 Días', desc: 'Dos semanas de constancia', color: 'text-secondary', earned: true },
  { icon: 'explosion', label: '21 Días', desc: ' tres semanas', color: 'text-tertiary-fixed', earned: true },
  { icon: 'diamond', label: '30 Días', desc: 'Un mes de progreso', color: 'text-primary', earned: false },
  { icon: 'psychiatry', label: '60 Días', desc: 'Dos meses imparable', color: 'text-secondary', earned: false },
  { icon: 'rocket_launch', label: '90 Días', desc: 'Meta triple dígito', color: 'text-tertiary-fixed', earned: false },
];

const ProgresoPage = () => {
  const [startDate] = useState(() => {
    const saved = localStorage.getItem('mindspace_start');
    if (saved) return new Date(saved);
    const now = new Date();
    localStorage.setItem('mindspace_start', now.toISOString());
    return now;
  });
  const [days, setDays] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
      setDays(diff);
    }, 1000);
    return () => clearInterval(interval);
  }, [startDate]);

  const health = Math.min(100, days * 3);
  const savings = days * 25000;

  return (
    <main className="pt-24 pb-32 px-4 max-w-2xl mx-auto min-h-screen">
      <section className="mb-10 text-center">
        <h2 className="font-display-lg-mobile md:font-display-lg text-primary drop-shadow-[0_0_30px_rgba(0,243,255,0.6)] text-glow-cyan uppercase italic">Mi Progreso</h2>
        <div className="h-1 w-32 acid-gradient mx-auto my-6"></div>
        <p className="text-secondary font-label-caps drop-shadow-[0_0_10px_rgba(254,0,254,0.4)]">Cada día cuenta en tu evolución</p>
      </section>

      <div className="glass-card p-8 rounded-xl mb-8 text-center border-primary/30">
        <span className="material-symbols-outlined text-primary text-6xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
        <p className="font-label-caps text-primary mb-2">DÍAS DE RECUPERACIÓN</p>
        <p className="font-display-lg text-primary neon-glow-cyan">{days}</p>
        <p className="font-body-md text-on-surface-variant mt-2">días desde que comenzaste</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="glass-card p-6 rounded-xl border-secondary/30">
          <span className="material-symbols-outlined text-secondary text-3xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          <p className="font-label-caps text-secondary mb-1">SALUD RECUPERADA</p>
          <p className="text-3xl font-bold text-secondary">{health}%</p>
          <div className="mt-3 h-2 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-secondary to-primary rounded-full transition-all duration-1000" style={{ width: `${health}%` }}></div>
          </div>
        </div>
        <div className="glass-card p-6 rounded-xl border-tertiary-fixed/30">
          <span className="material-symbols-outlined text-tertiary-fixed text-3xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>savings</span>
          <p className="font-label-caps text-tertiary-fixed mb-1">AHORRO ESTIMADO</p>
          <p className="text-3xl font-bold text-tertiary-fixed">${savings.toLocaleString()}</p>
          <p className="font-label-md text-on-surface-variant mt-1">COP — en consumo evitable</p>
        </div>
      </div>

      <section>
        <h3 className="font-label-caps text-primary mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">military_tech</span>
          MEDALLAS DE LOGRO
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {achievements.map((a) => (
            <div key={a.label} className={`glass-card p-4 rounded-xl text-center transition-all ${a.earned ? 'border-primary/40' : 'border-white/5 opacity-50'}`}>
              <span className={`material-symbols-outlined text-3xl ${a.color} ${a.earned ? 'animate-pulse-intense' : ''}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                {a.icon}
              </span>
              <p className={`font-label-caps mt-2 ${a.earned ? 'text-white' : 'text-on-surface-variant'}`}>{a.label}</p>
              <p className="font-label-md text-on-surface-variant">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProgresoPage;