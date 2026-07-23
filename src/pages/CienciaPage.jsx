import React from 'react';

const CienciaPage = () => {
    return (
        <main className="min-h-screen bg-background text-white font-syne max-w-md mx-auto relative overflow-x-hidden border-x border-primary/5 pt-24 pb-32 px-4">
            <header className="mb-10 relative">
                <h2 className="font-display-lg text-[42px] leading-none text-white uppercase tracking-tighter mb-4 italic text-glow-cyan">
                    CIENCIA <span className="text-secondary italic">&amp;</span> FUTURO
                </h2>
                <div className="h-1 w-24 acid-gradient mb-4"></div>
                <p className="font-body-md text-on-surface-variant max-w-sm font-bold border-l-2 border-primary pl-4">
                    Explora el cableado de tu cerebro y las misiones que están redefiniendo el mañana.
                </p>
            </header>

            <section className="mb-12">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-label-caps text-label-caps text-secondary font-black text-glow-magenta">VIDEO INMERSIVO: NEUROHACKING</h3>
                    <span className="material-symbols-outlined text-secondary text-xl icon-glow-magenta">arrow_forward</span>
                </div>
                
                {/* Contenedor de Videos Embebidos */}
                <div className="flex gap-5 overflow-x-auto hide-scrollbar snap-x pb-4">
                    
                    {/* Video Card 1 */}
                    <div className="flex-none w-[290px] snap-start group relative">
                        <div className="glass-card neon-border-magenta aspect-[9/16] overflow-hidden rounded-xl relative">
                            {/* Reemplaza la URL en src por tu enlace embebido real */}
                            <iframe 
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/rWE_siLlyiw?controls=0" 
                                title="Qué es la DOPAMINA y CÓMO HACKEARLA" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-5 pt-10 pointer-events-none">
                                <span className="bg-secondary text-on-secondary font-label-caps text-[10px] px-3 py-1 mb-2 inline-block font-black">STEM_HUB</span>
                                <h4 className="font-headline-lg-mobile text-xl leading-tight text-white text-glow-magenta uppercase italic tracking-tighter">Dopamina: El motor invisible</h4>
                            </div>
                        </div>
                    </div>

                    {/* Video Card 2 */}
                    <div className="flex-none w-[290px] snap-start group relative">
                        <div className="glass-card neon-border-cyan aspect-[9/16] overflow-hidden rounded-xl relative">
                             {/* Reemplaza la URL en src por tu enlace embebido real */}
                            <iframe 
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/zuc2xsoTkok?controls=0" 
                                title="La IA que te enseña a programar | Devin" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-5 pt-10 pointer-events-none">
                                <span className="bg-primary text-on-primary font-label-caps text-[10px] px-3 py-1 mb-2 inline-block font-black">CAREERS</span>
                                <h4 className="font-headline-lg-mobile text-xl leading-tight text-white text-glow-cyan uppercase italic tracking-tighter">IA y el Futuro del Código</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="mb-12">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-label-caps text-label-caps text-tertiary font-black text-glow-green">DATA &amp; CIENCIA</h3>
                    <span className="material-symbols-outlined text-tertiary text-xl icon-glow-green">grid_view</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 glass-card neon-border-cyan p-6 rounded-xl relative overflow-hidden group">
                        <div className="absolute -top-4 -right-4 opacity-10 pointer-events-none group-hover:opacity-30 transition-opacity">
                            <span className="material-symbols-outlined text-[120px] text-primary icon-glow-cyan -rotate-12">neurology</span>
                        </div>
                        <div className="relative z-10">
                            <h4 className="font-display-lg text-3xl text-primary mb-3 uppercase italic tracking-tighter text-glow-cyan">Neuro-Génesis</h4>
                            <p className="font-body-md text-white font-medium mb-6 text-sm leading-relaxed max-w-[85%]">Descubre cómo tu cerebro crea nuevas neuronas cada vez que aprendes algo nuevo.</p>
                            <div className="space-y-5">
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between text-[11px] font-label-caps text-primary font-black">
                                        <span>OPTIMIZACIÓN NEURONAL</span>
                                        <span>84%</span>
                                    </div>
                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-primary/20">
                                        <div className="h-full acid-gradient w-[84%] shadow-[0_0_15px_#00f3ff]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CienciaPage;