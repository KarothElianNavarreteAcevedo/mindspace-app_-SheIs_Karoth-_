import React, { useState } from 'react';

const MINI_GAMES = [
  {
    title: 'RESPIRACIÓN GUIADA',
    icon: 'air',
    desc: 'Inhala 4s — Sostén 4s — Exhala 6s. Sigue el ritmo.',
    color: 'text-primary',
  },
  {
    title: 'BURBUJAS ANTI-ESTRÉS',
    icon: 'bubble_chart',
    desc: 'Explota las burbujas de pensamiento negativo.',
    color: 'text-secondary',
  },
  {
    title: 'JARDÍN VIRTUAL',
    icon: 'forest',
    desc: 'Siembra una planta cada día que completes.',
    color: 'text-tertiary-fixed',
  },
];

const DescompresionPage = () => {
  const [vitality, setVitality] = useState(65);
  const [activeGame, setActiveGame] = useState(null);

  return (
    <main className="pt-24 pb-32 px-4 max-w-2xl mx-auto min-h-screen">
      <section className="mb-10 text-center">
        <h2 className="font-display-lg-mobile md:font-display-lg text-secondary drop-shadow-[0_0_30px_rgba(254,0,254,0.6)] text-glow-magenta uppercase italic">Zona de Descompresión</h2>
        <div className="h-1 w-32 acid-gradient mx-auto my-6"></div>
        <p className="text-secondary font-label-caps drop-shadow-[0_0_10px_rgba(254,0,254,0.4)]">Tu espacio seguro para recargar energía</p>
      </section>

      <div className="glass-card p-6 rounded-xl mb-8 border-secondary/30">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="font-label-caps text-secondary">VITALIDAD</p>
            <p className="text-3xl font-bold text-secondary">{vitality}%</p>
          </div>
          <div className="w-16 h-16 rounded-full bg-secondary-container/30 flex items-center justify-center border-2 border-secondary shadow-[0_0_20px_rgba(254,0,254,0.3)]">
            <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>self_improvement</span>
          </div>
        </div>
        <div className="h-3 bg-white/5 rounded-full overflow-hidden border border-secondary/20">
          <div className="h-full bg-gradient-to-r from-secondary to-primary rounded-full transition-all duration-700" style={{ width: `${vitality}%` }}></div>
        </div>
        <div className="flex gap-2 mt-4">
          {['Baja', 'Media', 'Alta', 'Recargado'].map((label, i) => {
            const val = i * 33 + 10;
            return (
                <button key={label} onClick={() => setVitality(val)}
                  className="flex-1 py-2 font-label-caps rounded-lg border border-secondary/30 hover:bg-secondary/10 transition-all active:scale-95"
                >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <section className="mb-8">
        <h3 className="font-label-caps text-primary mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">stadia_controller</span>
          MINIJUEGOS DE MINDFULNESS
        </h3>
        <div className="grid grid-cols-1 gap-4">
          {MINI_GAMES.map((game) => (
            <button key={game.title} onClick={() => setActiveGame(game.title)}
              className={`glass-card p-5 rounded-xl flex items-center gap-4 text-left transition-all active:scale-95 border ${activeGame === game.title ? 'border-primary bg-primary/5' : 'border-primary/20 hover:border-primary/50'}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center">
                <span className={`material-symbols-outlined text-2xl ${game.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{game.icon}</span>
              </div>
              <div className="flex-1">
                <p className={`font-label-caps ${game.color}`}>{game.title}</p>
                <p className="font-label-md text-on-surface-variant mt-1">{game.desc}</p>
              </div>
              <span className="material-symbols-outlined text-primary">play_circle</span>
            </button>
          ))}
        </div>
        {activeGame && (
          <div className="mt-6 glass-card p-8 rounded-xl text-center border-primary/30 animate-pulse-intense">
            <span className="material-symbols-outlined text-primary text-6xl mb-4">self_improvement</span>
            <p className="text-primary font-headline-md mb-2">{activeGame} ACTIVADO</p>
            <p className="font-body-md text-on-surface-variant">Concentra tu mente en el presente. Respira profundo.</p>
            <button onClick={() => setActiveGame(null)} className="mt-6 px-8 py-3 bg-primary text-on-primary font-label-caps rounded-xl active:scale-95 transition-all">
              CERRAR SESIÓN
            </button>
          </div>
        )}
      </section>

      <section>
        <h3 className="font-label-caps text-primary mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">assignment</span>
          MISIÓN DEL DÍA
        </h3>
        <div className="glass-card p-6 rounded-xl border-tertiary-fixed/30">
          <div className="flex items-start gap-4">
            <span className="material-symbols-outlined text-tertiary-fixed text-3xl">check_circle</span>
            <div>
              <p className="text-tertiary-fixed font-headline-md">5 minutos de respiración consciente</p>
              <p className="font-body-md text-on-surface-variant mt-1">Completa esta misión para ganar +10% de vitalidad.</p>
              <button className="mt-3 px-6 py-2 bg-tertiary-container/20 text-tertiary-fixed font-label-caps rounded-lg border border-tertiary-fixed/30 hover:bg-tertiary-container/30 transition-all active:scale-95">
                COMPLETAR MISIÓN
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DescompresionPage;