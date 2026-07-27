import React from 'react';

const SosPage = () => {
    return (
        <main className="flex flex-col items-center justify-center px-4 pt-24 pb-32 max-w-md mx-auto text-center w-full min-h-screen">
            <section className="mb-12">
                <h2 className="font-display-lg-mobile md:font-display-lg text-primary drop-shadow-[0_0_30px_rgba(0,243,255,0.6)] uppercase italic">Ayuda Directa</h2>
                <div className="h-1 w-32 acid-gradient mx-auto my-6"></div>
                <p className="font-body-md text-primary drop-shadow-[0_0_10px_rgba(0,243,255,0.3)] font-bold max-w-sm mx-auto leading-tight">
                    No estás solo. Conéctate inmediatamente con profesionales capacitados para apoyarte.
                </p>
            </section>

            <div className="w-full space-y-8">
                <a className="group relative flex flex-col items-center justify-center p-10 rounded-xl bg-surface/90 backdrop-blur-xl border border-primary/20 transition-all duration-300 active:scale-95 hover:shadow-neon-cyan overflow-hidden" href="tel:106">
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="material-symbols-outlined text-primary text-6xl mb-4 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                    <span className="font-headline-lg-mobile text-primary mb-2">Llamar a Línea 106</span>
                    <span className="font-label-md text-on-surface font-bold">01 8000 112 439</span>
                </a>

                <a className="group relative flex flex-col items-center justify-center p-10 rounded-xl bg-surface/90 backdrop-blur-xl border border-secondary/20 transition-all duration-300 active:scale-95 hover:shadow-neon-magenta overflow-hidden" href="https://wa.me/573007548933" target="_blank" rel="noreferrer">
                    <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="material-symbols-outlined text-secondary-text text-6xl mb-4 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
                    <span className="font-headline-lg-mobile text-secondary-text mb-2">Chat WhatsApp Línea Psicoactiva</span>
                    <span className="font-label-md text-on-surface">300 754 8933</span>
                </a>
            </div>

            <footer className="mt-14 flex flex-col items-center space-y-6 w-full">
                <div className="bg-surface/90 backdrop-blur-xl border border-primary/20 p-5 rounded-lg flex items-start gap-3 text-left w-full">
                    <span className="material-symbols-outlined text-primary text-2xl">verified_user</span>
                    <div>
                        <p className="font-label-md text-primary mb-2">PRIVACIDAD Y SEGURIDAD</p>
                        <p className="text-sm leading-relaxed text-on-surface-variant font-medium">
                            Servicio confidencial y gratuito. Información oficial proporcionada por la <strong>Secretaría de Salud de Bogotá</strong>. Tus datos están protegidos por la Ley de Salud Mental.
                        </p>
                    </div>
                </div>
                <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-primary to-transparent shadow-neon-cyan"></div>
            </footer>
        </main>
    );
};

export default SosPage;