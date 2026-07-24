import React, { useState } from 'react';

const affirmations = [
  { text: 'Eres más fuerte de lo que crees', icon: 'shield', color: 'text-primary' },
  { text: 'Cada día es una nueva oportunidad', icon: 'restart_alt', color: 'text-secondary' },
  { text: 'Tu mente es tu aliada, no tu enemiga', icon: 'psychology', color: 'text-tertiary-fixed' },
  { text: 'Estás exactamente donde necesitas estar', icon: 'explore', color: 'text-primary' },
];

const playlists = [
  { name: 'Calma Profunda', desc: 'Sonidos binaurales para dormir', embed: 'https://open.spotify.com/embed/playlist/1nAd9W6i53T8QOiwFY3t1k?utm_source=generator&theme=0' },
  { name: 'Anti-Ansiedad', desc: 'Frecuencias que tranquilizan', embed: 'https://open.spotify.com/embed/playlist/4Qae0dgANMiqlHivUplPPI?utm_source=generator&theme=0' },
];

const SeguraPage = () => {
  const [entry, setEntry] = useState('');
  const [burned, setBurned] = useState(false);

  const handleBurn = () => {
    if (!entry.trim()) return;
    setBurned(true);
    setTimeout(() => {
      setEntry('');
      setBurned(false);
    }, 2000);
  };

  return (
    <main className="pt-24 pb-32 px-4 max-w-2xl mx-auto min-h-screen">
      <section className="mb-10 text-center">
        <h2 className="retrowave-title text-4xl mb-2 uppercase tracking-[0.1em] italic text-glow-magenta">Mi Zona Segura</h2>
        <p className="text-secondary font-label-caps text-[13px] tracking-widest uppercase">Tu espacio personal de paz y reflexión</p>
      </section>

      <section className="mb-8">
        <h3 className="font-label-caps text-primary text-sm tracking-[0.2em] mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">auto_awesome</span>
          AFIRMACIONES DEL DÍA
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {affirmations.map((a) => (
            <div key={a.text} className="glass-card p-5 rounded-xl border-primary/20 text-center group hover:border-primary/50 transition-all">
              <span className={`material-symbols-outlined text-3xl ${a.color} group-hover:scale-110 transition-transform`} style={{ fontVariationSettings: "'FILL' 1" }}>{a.icon}</span>
              <p className="text-sm font-bold mt-3 leading-tight">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h3 className="font-label-caps text-primary text-sm tracking-[0.2em] mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">local_fire_department</span>
          DIARIO "ESCRIBE Y QUEMA"
        </h3>
        <div className="glass-card p-6 rounded-xl border-secondary/30">
          <p className="text-sm text-on-surface-variant mb-4">Escribe lo que sientes. Al quemarlo, lo liberas.</p>
          <textarea value={entry} onChange={(e) => setEntry(e.target.value)}
            className="w-full bg-black/30 border border-outline/30 rounded-lg p-4 text-sm focus:border-secondary focus:shadow-[0_0_20px_rgba(254,0,254,0.2)] outline-none resize-none text-white placeholder:text-on-surface-variant/40"
            placeholder="Escribe aquí lo que necesitas soltar..." rows="4" disabled={burned}
          ></textarea>
          <button onClick={handleBurn} disabled={burned || !entry.trim()}
            className={`mt-4 w-full py-3 font-label-caps rounded-xl transition-all active:scale-95 ${
              burned
                ? 'bg-gradient-to-r from-tertiary-fixed-dim to-green-900 text-white shadow-[0_0_40px_rgba(42,229,0,0.8)]'
                : 'bg-secondary/20 text-secondary border border-secondary/40 hover:bg-secondary/30'
            }`}
          >
            {burned ? '¡LIBERADO! ✦' : 'QUEMAR Y SOLTAR'}
          </button>
        </div>
      </section>

      <section>
        <h3 className="font-label-caps text-primary text-sm tracking-[0.2em] mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">headphones</span>
          PLAYLISTS ANTI-ANSIEDAD
        </h3>
        <div className="grid grid-cols-1 gap-6">
          {playlists.map((p) => (
            <div key={p.name} className="glass-card p-5 rounded-xl border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">library_music</span>
                <div>
                  <p className="font-bold text-sm text-primary">{p.name}</p>
                  <p className="text-[11px] text-on-surface-variant">{p.desc}</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-primary/20">
                <iframe src={p.embed} width="100%" height="152" frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
                  title={p.name} className="block"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default SeguraPage;