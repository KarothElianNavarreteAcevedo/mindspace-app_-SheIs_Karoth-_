import React, { useState } from 'react';

const infoData = {
    cortex: {
        title: "Corteza Prefrontal",
        text: "Es el centro de mando del cerebro. Las sustancias pueden interferir con tu capacidad de planificar, resolver problemas y controlar impulsos, especialmente durante la adolescencia.",
        icon: "bolt",
        color: "#00f3ff",
        shadow: "rgba(0, 243, 255, 0.4)"
    },
    amygdala: {
        title: "Amígdala",
        text: "Controla tus emociones y el estrés. El consumo de sustancias puede hipersensibilizar esta zona, causando que te sientas ansioso o irritable frecuentemente.",
        icon: "favorite",
        color: "#fe00fe",
        shadow: "rgba(254, 0, 254, 0.4)"
    },
    nucleus: {
        title: "Núcleo Accumbens",
        text: "El centro de recompensa. Las drogas inundan este canal con señales artificiales masivas, lo que puede llevar al cerebro a ignorar los placeres naturales.",
        icon: "ward", // 'reward' corregido a un icono válido 'ward'
        color: "#36fd0f",
        shadow: "rgba(54, 253, 15, 0.4)"
    },
    hippocampus: {
        title: "Hipocampo",
        text: "Fundamental para la memoria y el aprendizaje. Ciertas sustancias pueden dañar las neuronas aquí, dificultando la formación de nuevos recuerdos.",
        icon: "menu_book",
        color: "#fe00fe",
        shadow: "rgba(254, 0, 254, 0.4)"
    }
};

const HomePage = () => {
    const [activeRegion, setActiveRegion] = useState(null);
    const data = activeRegion ? infoData[activeRegion] : null;

    return (
        <main className="min-h-screen bg-background text-white font-syne max-w-md mx-auto relative overflow-x-hidden border-x border-primary/5">
            <section className="w-full max-w-2xl mb-10 text-center relative z-20">
                <h2 className="font-headline-lg-mobile text-[40px] leading-none mb-4 text-primary text-glow-primary uppercase italic tracking-tighter">EXPLORA TU CEREBRO</h2>
                <p className="font-body-md text-primary/80 font-bold bg-primary/5 py-2 px-4 rounded border-x border-primary/20 inline-block">Interactúa con el biosistema neural para diagnosticar efectos.</p>
            </section>

            <section className="relative w-full max-w-lg aspect-square flex items-center justify-center z-20 mb-4">
                <div className="relative w-full h-full flex items-center justify-center p-2 rounded-2xl border-2 border-primary/20 bg-surface-container-lowest shadow-[0_0_40px_rgba(0,0,0,0.8)]">
                    <div className="w-full h-full bg-contain bg-no-repeat bg-center relative rounded-xl overflow-hidden" style={{ backgroundImage: "url('/images/brain.png')" }}>
                        
                        <button onClick={() => setActiveRegion('cortex')} className="brain-hotspot absolute top-[25%] left-[60%] w-9 h-9 bg-primary-container rounded-full neon-glow-primary animate-pulse-intense flex items-center justify-center cursor-pointer text-on-primary z-30">
                            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                        </button>
                        <button onClick={() => setActiveRegion('amygdala')} className="brain-hotspot absolute top-[55%] left-[45%] w-7 h-7 bg-secondary-container rounded-full neon-glow-secondary animate-pulse-intense flex items-center justify-center cursor-pointer text-white z-30">
                            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                        </button>
                        <button onClick={() => setActiveRegion('nucleus')} className="brain-hotspot absolute top-[45%] left-[55%] w-8 h-8 bg-tertiary-container rounded-full neon-glow-tertiary animate-pulse-intense flex items-center justify-center cursor-pointer text-on-tertiary z-30">
                            <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>ward</span>
                        </button>
                        <button onClick={() => setActiveRegion('hippocampus')} className="brain-hotspot absolute top-[58%] left-[38%] w-6 h-6 bg-secondary-container rounded-full neon-glow-secondary animate-pulse-intense flex items-center justify-center cursor-pointer text-white z-30">
                            <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>menu_book</span>
                        </button>
                    </div>
                </div>
            </section>

            <div className="w-full max-w-2xl mt-8 grid grid-cols-1 gap-4 relative z-20">
                {!data ? (
                    <div className="col-span-full glass-card p-10 rounded-xl flex flex-col items-center text-center border-2 border-primary-container shadow-[0_0_30px_rgba(0,243,255,0.15)] cyber-border">
                        <span className="material-symbols-outlined text-primary-container text-6xl mb-6 animate-bounce drop-shadow-[0_0_10px_rgba(0,243,255,0.8)]">touch_app</span>
                        <h3 className="font-headline-lg-mobile text-primary-container mb-4 tracking-[0.2em] uppercase italic text-glow-primary">Interacción Neural</h3>
                        <p className="font-body-md text-on-surface-variant max-w-sm font-medium leading-relaxed">
                            SISTEMA LISTO. SELECCIONE REGIÓN CORTICAL PARA ANALIZAR EL IMPACTO QUÍMICO EN EL POTENCIAL COGNITIVO.
                        </p>
                        <div className="mt-6 flex gap-2">
                            <span className="w-2 h-2 bg-primary-container rounded-full animate-ping"></span>
                            <span className="w-2 h-2 bg-primary-container rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></span>
                            <span className="w-2 h-2 bg-primary-container rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></span>
                        </div>
                    </div>
                ) : (
                    <div className="col-span-full glass-card p-8 rounded-xl border-l-[6px] shadow-[0_0_40px_rgba(0,243,255,0.1)] cyber-border animate-fade-in" style={{ borderLeftColor: data.color, boxShadow: `0 0 40px ${data.shadow}` }}>
                        <div className="flex justify-between items-center mb-8 pb-4 border-b border-primary/20">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-label-caps text-primary/60 tracking-[0.3em] mb-1">ANALIZANDO_ZONA</span>
                                <h3 className="font-headline-lg-mobile text-3xl italic" style={{ color: data.color, textShadow: `0 0 10px ${data.color}` }}>{data.title}</h3>
                            </div>
                            <div className="p-3 bg-primary-container/20 border rounded-lg" style={{ borderColor: data.color }}>
                                <span className="material-symbols-outlined text-4xl" style={{ color: data.color }}>{data.icon}</span>
                            </div>
                        </div>
                        <div className="flex gap-4 mb-8">
                            <div className="w-1 bg-gradient-to-b from-primary-container to-transparent opacity-50"></div>
                            <p className="font-body-md text-on-surface text-lg leading-relaxed font-medium italic">{data.text}</p>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default HomePage;