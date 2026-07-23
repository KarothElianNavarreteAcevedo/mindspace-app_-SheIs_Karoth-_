import React from 'react';

const SosPage = () => {
    return (
        <main className="flex flex-col items-center justify-center px-margin-mobile pt-24 pb-32 max-w-lg mx-auto text-center w-full min-h-screen">
            <section className="mb-12">
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-4 uppercase tracking-[0.2em] text-neon-cyan">Ayuda Directa</h2>
                <p className="font-body-md text-on-surface-variant font-bold max-w-sm mx-auto leading-tight">
                    No estás solo. Conéctate inmediatamente con profesionales capacitados para apoyarte.
                </p>
            </section>

            <div className="w-full space-y-8">
                <a className="group relative flex flex-col items-center justify-center p-10 rounded-xl glass-card transition-all duration-300 active:scale-95 neon-glow-primary overflow-hidden" href="tel:106">
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="material-symbols-outlined text-primary text-6xl mb-4 group-hover:scale-110 transition-transform text-neon-cyan" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                    <span className="font-headline-lg-mobile text-2xl text-primary mb-2 text-neon-cyan">Llamar a Línea 106</span>
                    <span className="font-label-caps text-label-caps text-on-surface font-bold">01 8000 112 439</span>
                </a>

                <a className="group relative flex flex-col items-center justify-center p-10 rounded-xl glass-card transition-all duration-300 active:scale-95 neon-glow-secondary overflow-hidden border-secondary/30" href="https://wa.me/573007548933" target="_blank" rel="noreferrer">
                    <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="material-symbols-outlined text-secondary text-6xl mb-4 group-hover:scale-110 transition-transform text-neon-magenta" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
                    <span className="font-headline-lg-mobile text-2xl text-secondary mb-2 text-neon-magenta">Chat WhatsApp Línea Psicoactiva</span>
                    <span className="font-label-caps text-label-caps text-on-surface font-bold">300 754 8933</span>
                </a>
            </div>

            <footer className="mt-14 flex flex-col items-center space-y-6 w-full">
                <div className="glass-card p-5 rounded-lg flex items-start gap-3 text-left w-full border-primary/20 bg-surface-container/40">
                    <span className="material-symbols-outlined text-primary text-2xl">verified_user</span>
                    <div>
                        <p className="font-label-caps text-[11px] text-primary font-bold mb-2 tracking-widest">PRIVACIDAD Y SEGURIDAD</p>
                        <p className="text-[14px] leading-relaxed text-on-surface-variant font-medium">
                            Servicio confidencial y gratuito. Información oficial proporcionada por la <strong>Secretaría de Salud de Bogotá</strong>. Tus datos están protegidos por la Ley de Salud Mental.
                        </p>
                    </div>
                </div>
                <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_10px_rgba(0,243,255,0.8)]"></div>
            </footer>
        </main>
    );
};

export default SosPage;