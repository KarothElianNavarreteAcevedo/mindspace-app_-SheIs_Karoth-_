import React, { useState } from 'react';

const FeedbackPage = () => {
    const [rating, setRating] = useState(null);
    const [buttonText, setButtonText] = useState('Enviar Feedback');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setButtonText('¡RECIBIDO!');
        
        setTimeout(() => {
            alert('Conexión establecida. Tu feedback ha sido integrado en la red.');
            setIsSubmitted(false);
            setButtonText('Enviar Feedback');
            setRating(null); // Resetea el formulario
        }, 1200);
    };

    return (
        <main className="pt-24 pb-32 px-margin-mobile max-w-2xl mx-auto min-h-screen">
            <section className="mb-12 text-center">
                <h2 className="retrowave-title text-4xl mb-4 leading-tight uppercase tracking-[0.1em] italic text-glow-cyan text-primary">Tu Opinión Cuenta</h2>
                <p className="text-secondary font-label-caps text-[13px] opacity-90 tracking-widest uppercase">Mejora el sistema. Feedback prioritario.</p>
            </section>

            <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="neon-gradient-card p-6 rounded-xl space-y-6">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary-fixed-dim glow-icon">bolt</span>
                        <label className="font-label-caps text-label-caps uppercase text-primary-fixed-dim tracking-widest">Utilidad del Sistema</label>
                    </div>
                    <p className="text-on-surface text-lg font-headline-lg-mobile leading-snug">¿Qué tan vital es MindSpace en tu rutina?</p>
                    <div className="flex justify-between items-center gap-3 pt-2">
                        {[1, 2, 3, 4, 5].map((val) => (
                            <button 
                                key={val}
                                type="button"
                                onClick={() => setRating(val)}
                                className={`neon-outline-btn w-12 h-12 flex items-center justify-center rounded-lg font-headline-lg-mobile text-xl ${rating === val ? 'bg-primary text-black shadow-[0_0_25px_rgba(0,243,255,0.7)]' : 'border-2 border-primary text-primary'}`}
                            >
                                {val}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="neon-gradient-card p-6 rounded-xl space-y-6">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-secondary glow-icon">palette</span>
                        <label className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Vibe Aesthetic</label>
                    </div>
                    <p className="text-on-surface text-lg font-headline-lg-mobile leading-snug">¿La estética "Retrowave" conecta contigo?</p>
                    <select className="retro-select bg-surface-container-high w-full p-4 font-body-md text-on-surface rounded-lg appearance-none cursor-pointer focus:ring-2 focus:ring-secondary/50 outline-none border border-primary/30">
                        <option disabled selected value="">Selecciona frecuencia...</option>
                        <option value="love">¡Espectacular! Pura nostalgia 🔥</option>
                        <option value="cool">Está muy bien lograda.</option>
                        <option value="meh">Es un poco saturada.</option>
                        <option value="no">Prefiero algo minimalista.</option>
                    </select>
                </div>

                <div className="neon-gradient-card p-6 rounded-xl space-y-6">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-tertiary-fixed-dim glow-icon">forum</span>
                        <label className="font-label-caps text-label-caps uppercase text-tertiary-fixed-dim tracking-widest">Transmisión Abierta</label>
                    </div>
                    <p className="text-on-surface text-lg font-headline-lg-mobile leading-snug">¿Ideas para la evolución del espacio?</p>
                    <textarea className="glass-textarea bg-black/30 w-full p-4 font-body-md text-on-surface placeholder:text-on-surface-variant/40 rounded-xl resize-none border border-outline/30 focus:border-secondary focus:shadow-[0_0_20px_rgba(254,0,254,0.2)]" placeholder="Escribe tu mensaje aquí..." rows="4"></textarea>
                </div>

                <div className="pt-6">
                    <button 
                        type="submit" 
                        className={`w-full py-5 font-headline-lg-mobile text-xl rounded-xl active:scale-95 uppercase tracking-[0.2em] font-extrabold transition-all duration-300 ${isSubmitted ? 'bg-gradient-to-r from-tertiary-fixed-dim to-green-900 shadow-[0_0_40px_rgba(42,229,0,0.8)] text-white' : 'high-impact-btn bg-gradient-to-br from-secondary to-purple-900 text-white shadow-[0_0_20px_rgba(254,0,254,0.4)]'}`}
                    >
                        {buttonText}
                    </button>
                </div>
            </form>
        </main>
    );
};

export default FeedbackPage;