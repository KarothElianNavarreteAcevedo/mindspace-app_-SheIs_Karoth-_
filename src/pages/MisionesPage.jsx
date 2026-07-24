import React, { useState } from 'react';

const initialStats = [
  { name: 'Dopamina Sana', icon: 'bolt', value: 72, color: 'text-primary', barColor: 'bg-primary' },
  { name: 'Serenidad', icon: 'self_improvement', value: 58, color: 'text-secondary', barColor: 'bg-secondary' },
  { name: 'Resiliencia', icon: 'shield', value: 85, color: 'text-tertiary-fixed', barColor: 'bg-tertiary-fixed' },
];

const challenges = [
  { title: 'RETO DEL DÍA', desc: '30 min sin pantallas antes de dormir', reward: '+50 XP', icon: 'bedtime' },
  { title: 'RETO SEMANAL', desc: 'Completa 5 misiones diarias', reward: '+200 XP', icon: 'calendar_view_week' },
  { title: 'LOGRO ESPECIAL', desc: '7 días de meditación consecutiva', reward: 'Medalla Bronze', icon: 'military_tech' },
];

const shopItems = [
  { name: 'Tema Retro', cost: 500, icon: 'palette', color: 'text-primary' },
  { name: 'Sonido Binaural', cost: 300, icon: 'graphic_eq', color: 'text-secondary' },
  { name: 'Sticker Pack', cost: 150, icon: 'stickers', color: 'text-tertiary-fixed' },
];

const MisionesPage = () => {
  const [stats, setStats] = useState(initialStats);
  const [xp, setXp] = useState(1250);

  const handleCompleteChallenge = (index) => {
    setXp(prev => prev + 50);
    const newStats = [...stats];
    newStats[0] = { ...newStats[0], value: Math.min(100, newStats[0].value + 2) };
    newStats[1] = { ...newStats[1], value: Math.min(100, newStats[1].value + 3) };
    setStats(newStats);
  };

  return (
    <main className="pt-24 pb-32 px-4 max-w-2xl mx-auto min-h-screen">
      <section className="mb-10 text-center">
        <h2 className="retrowave-title text-4xl mb-2 uppercase tracking-[0.1em] italic text-glow-cyan">Misiones y Recompensas</h2>
        <p className="text-secondary font-label-caps text-[13px] tracking-widest uppercase">Desbloquea tu mejor versión</p>
      </section>

      <div className="glass-card p-6 rounded-xl mb-8 border-primary/30 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="material-symbols-outlined text-primary text-3xl">stars</span>
          <p className="text-4xl font-bold text-primary font-syne">{xp}</p>
          <span className="font-label-caps text-primary text-[10px] tracking-widest">XP</span>
        </div>
        <div className="h-2 bg-white/5 rounded-full overflow-hidden max-w-xs mx-auto">
          <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all" style={{ width: `${(xp % 500) / 5}%` }}></div>
        </div>
        <p className="text-[11px] text-on-surface-variant mt-2">Siguiente nivel: {500 - (xp % 500)} XP</p>
      </div>

      <section className="mb-8">
        <h3 className="font-label-caps text-primary text-sm tracking-[0.2em] mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">bar_chart</span>
          TUS STATS
        </h3>
        <div className="grid grid-cols-1 gap-4">
          {stats.map((stat) => (
            <div key={stat.name} className="glass-card p-4 rounded-xl border-white/10">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className={`material-symbols-outlined ${stat.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{stat.icon}</span>
                  <span className={`font-bold text-sm ${stat.color}`}>{stat.name}</span>
                </div>
                <span className={`text-lg font-bold ${stat.color}`}>{stat.value}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className={`h-full rounded-full transition-all duration-700 ${stat.barColor}`} style={{ width: `${stat.value}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h3 className="font-label-caps text-primary text-sm tracking-[0.2em] mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">flag</span>
          DESAFÍOS ACTIVOS
        </h3>
        <div className="grid grid-cols-1 gap-4">
          {challenges.map((c, i) => (
            <div key={c.title} className="glass-card p-5 rounded-xl border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">{c.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-sm text-primary">{c.title}</p>
                      <p className="text-[12px] text-on-surface-variant mt-1">{c.desc}</p>
                    </div>
                    <span className="font-label-caps text-[10px] text-tertiary-fixed bg-tertiary-container/20 px-2 py-1 rounded">{c.reward}</span>
                  </div>
                  <button onClick={() => handleCompleteChallenge(i)}
                    className="mt-3 px-5 py-1.5 bg-primary/20 text-primary font-label-caps text-[10px] rounded-lg border border-primary/30 hover:bg-primary/30 transition-all active:scale-95"
                  >
                    COMPLETAR
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="font-label-caps text-primary text-sm tracking-[0.2em] mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">store</span>
          TIENDA DE RECOMPENSAS
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {shopItems.map((item) => (
            <button key={item.name} className="glass-card p-4 rounded-xl text-center border-primary/20 hover:border-primary/50 transition-all active:scale-95 group">
              <span className={`material-symbols-outlined text-3xl ${item.color} group-hover:scale-110 transition-transform`} style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
              <p className="text-[11px] font-bold mt-2">{item.name}</p>
              <p className="text-[10px] text-primary mt-1">{item.cost} XP</p>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MisionesPage;