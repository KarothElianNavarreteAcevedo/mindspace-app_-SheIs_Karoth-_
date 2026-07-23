import React, { useState, useEffect, useRef } from 'react';

const timerOptions = [5, 10, 20];

const soundMix = [
    { name: 'Lluvia', initialValue: 75, url: 'https://assets.mixkit.co/active_storage/sfx/1243/1243-preview.mp3' },
    { name: 'Piano Armónico', initialValue: 40 },
    { name: 'Binaural Alfa (8Hz)', initialValue: 60, freq: 8 },
    { name: 'Binaural Beta (15Hz)', initialValue: 30, freq: 15 },
    { name: 'Binaural Gamma (40Hz)', initialValue: 20, freq: 40 },
];

const emotionEmbeds = {
    'Ataque de Ansiedad': 'https://open.spotify.com/embed/playlist/1nAd9W6i53T8QOiwFY3t1k?utm_source=generator&theme=0',
    'No puedo dormir': 'https://open.spotify.com/embed/episode/34nJeqm8HTkpLPH8y2RpPd?utm_source=generator&theme=0',
    'Estoy estresado': 'https://open.spotify.com/embed/playlist/4Qae0dgANMiqlHivUplPPI?utm_source=generator&theme=0',
    'Necesito fuerza': 'https://open.spotify.com/embed/playlist/1nAd9W6i53T8QOiwFY3t1k?utm_source=generator&theme=0',
    'Recaí y me siento mal': 'https://open.spotify.com/embed/playlist/4Qae0dgANMiqlHivUplPPI?utm_source=generator&theme=0',
};

const emotionButtons = [
    { icon: 'bolt', label: 'Ataque de Ansiedad', color: 'text-error' },
    { icon: 'bedtime', label: 'No puedo dormir', color: 'text-primary' },
    { icon: 'self_improvement', label: 'Estoy estresado', color: 'text-tertiary-fixed' },
    { icon: 'fitness_center', label: 'Necesito fuerza', color: 'text-secondary' },
    { icon: 'heart_broken', label: 'Recaí y me siento mal', color: 'text-error', special: true },
];

const CalmaPage = () => {
    const [activeTimer, setActiveTimer] = useState(10);
    const [mixValues, setMixValues] = useState(
        soundMix.reduce((acc, sound) => ({ ...acc, [sound.name]: sound.initialValue }), {})
    );
    const [isPlaying, setIsPlaying] = useState(false);
    const [journalText, setJournalText] = useState('');
    const [mood, setMood] = useState('sentiment_satisfied');
    const [currentEmbedUrl, setCurrentEmbedUrl] = useState(emotionEmbeds['Ataque de Ansiedad']);
    const [activeEmotionLabel, setActiveEmotionLabel] = useState('Ataque de Ansiedad');

    const audioRainRef = useRef(null);
    const audioCtxRef = useRef(null);
    const pianoIntervalRef = useRef(null);
    const binauralNodesRef = useRef({});
    const masterGainRef = useRef(null);

    useEffect(() => {
        // Inicializar audio de lluvia original
        const rain = new Audio(soundMix[0].url);
        rain.loop = true;
        rain.volume = soundMix[0].initialValue / 100;
        audioRainRef.current = rain;

        return () => {
            stopEngine();
        };
    }, []);

    const startEngine = () => {
        if (!audioCtxRef.current) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            audioCtxRef.current = new AudioContext();
        }
        const ctx = audioCtxRef.current;
        if (ctx.state === 'suspended') ctx.resume();

        if (audioRainRef.current && isPlaying) {
            audioRainRef.current.play().catch(e => console.log(e));
        }

        // Master Gain
        if (!masterGainRef.current) {
            masterGainRef.current = ctx.createGain();
            masterGainRef.current.connect(ctx.destination);
        }

        // --- 1. PIANO TIPO RICHARD CLAYDERMAN (Arpegios armónicos románticos y fluidos) ---
        if (!pianoIntervalRef.current) {
            // Acordes celestiales en frecuencias Hz (Do mayor / La menor en octava cálida)
            const claydermanArpeggio = [261.63, 329.63, 392.00, 523.25, 587.33, 659.25, 783.99];
            
            pianoIntervalRef.current = setInterval(() => {
                if (!audioCtxRef.current || audioCtxRef.current.state !== 'running') return;

                const baseFreq = claydermanArpeggio[Math.floor(Math.random() * claydermanArpeggio.length)];
                
                const osc1 = ctx.createOscillator();
                const osc2 = ctx.createOscillator();
                const gainNode = ctx.createGain();

                osc1.type = 'sine'; // Suavidad de piano acústico
                osc2.type = 'triangle'; // Cuerpo armónico

                osc1.frequency.setValueAtTime(baseFreq, ctx.currentTime);
                osc2.frequency.setValueAtTime(baseFreq * 1.005, ctx.currentTime); // Efecto chorus sutil estilo concierto

                const pianoVol = (mixValues['Piano Armónico'] / 100) * 0.25;
                const now = ctx.currentTime;

                gainNode.gain.setValueAtTime(0, now);
                gainNode.gain.linearRampToValueAtTime(pianoVol, now + 0.3); // Ataque de tecla suave
                gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 5.5); // Sostenido largo y romántico

                osc1.connect(gainNode);
                osc2.connect(gainNode);
                gainNode.connect(masterGainRef.current);

                osc1.start(now);
                osc2.start(now);
                osc1.stop(now + 5.6);
                osc2.stop(now + 5.6);
            }, 600); // Ritmo de arpegio fluido
        }

        // --- 2. SONIDOS BINAURALES (Alfa, Beta, Gamma) ---
        ['Binaural Alfa (8Hz)', 'Binaural Beta (15Hz)', 'Binaural Gamma (40Hz)'].forEach(name => {
            const soundItem = soundMix.find(s => s.name === name);
            const freq = soundItem ? soundItem.freq : 8;
            const targetVol = (mixValues[name] / 100) * 0.15;

            if (!binauralNodesRef.current[name]) {
                const merger = ctx.createChannelMerger(2);
                const left = ctx.createOscillator();
                const right = ctx.createOscillator();
                const binGain = ctx.createGain();

                const baseCarrier = 220; // Frecuencia base relajante
                left.frequency.value = baseCarrier;
                right.frequency.value = baseCarrier + freq; // Genera la diferencia binaural exacta

                binGain.gain.setValueAtTime(targetVol, ctx.currentTime);

                left.connect(merger, 0, 0); // Canal izquierdo
                right.connect(merger, 0, 1); // Canal derecho
                merger.connect(binGain);
                binGain.connect(masterGainRef.current);

                left.start();
                right.start();

                binauralNodesRef.current[name] = { left, right, gain: binGain };
            } else {
                binauralNodesRef.current[name].gain.gain.setValueAtTime(targetVol, ctx.currentTime);
            }
        });
    };

    const stopEngine = () => {
        if (audioRainRef.current) audioRainRef.current.pause();
        if (pianoIntervalRef.current) {
            clearInterval(pianoIntervalRef.current);
            pianoIntervalRef.current = null;
        }
        Object.values(binauralNodesRef.current).forEach(node => {
            try {
                node.left.stop();
                node.right.stop();
            } catch(e){}
        });
        binauralNodesRef.current = {};
        if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
            audioCtxRef.current.suspend();
        }
    };

    const handleSliderChange = (name, value) => {
        setMixValues(prev => ({ ...prev, [name]: value }));
        
        if (name === 'Lluvia' && audioRainRef.current) {
            audioRainRef.current.volume = value / 100;
        }
        
        if (binauralNodesRef.current[name] && audioCtxRef.current) {
            const targetVol = (value / 100) * 0.15;
            binauralNodesRef.current[name].gain.gain.setValueAtTime(targetVol, audioCtxRef.current.currentTime);
        }
    };

    const handlePlayPause = () => {
        const nextState = !isPlaying;
        setIsPlaying(nextState);
        if (nextState) {
            startEngine();
        } else {
            stopEngine();
        }
    };

    const handleEmotionSelect = (label) => {
        if (emotionEmbeds[label]) {
            setCurrentEmbedUrl(emotionEmbeds[label]);
            setActiveEmotionLabel(label);
        }
    };

    const handleSaveMixAndJournal = () => {
        const userPayload = {
            timestamp: new Date().toISOString(),
            mixPreferences: mixValues,
            journal: { mood, reflection: journalText },
            activeTimer,
            emotionContext: activeEmotionLabel
        };
        localStorage.setItem('mindspace_last_mix', JSON.stringify(userPayload));
        alert('¡Mezcla armónica y diario guardados exitosamente!');
    };

    return (
        <div className="min-h-screen bg-background text-white font-syne max-w-md mx-auto relative overflow-x-hidden border-x border-primary/5">
            <div className="grid-background fixed inset-0" style={{ transform: 'perspective(500px) rotateX(60deg) translateY(-100px)', opacity: 0.4, zIndex: -1 }}></div>
            <section className="text-center space-y-4 py-8">
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary-fixed-dim neon-glow-cyan">Frecuencias de Calma</h2>
                <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto italic">Terapia sonora con piano armónico estilo Clayderman, lluvia natural y frecuencias binaurales.</p>
            </section>

            <section className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                    <h3 className="font-label-caps text-secondary-fixed">CALMA POR EMOCIÓN</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {emotionButtons.map(btn => {
                        const isActive = activeEmotionLabel === btn.label;
                        return (
                            <button
                                key={btn.label}
                                onClick={() => handleEmotionSelect(btn.label)}
                                className={`glass-panel p-4 flex flex-col items-center justify-center gap-3 text-center active:scale-95 group transition-all ${
                                    isActive ? 'border-primary bg-primary/10 shadow-[0_0_15px_rgba(0,220,230,0.4)]' : ''
                                } ${btn.special ? 'col-span-2 md:col-span-1 border-error/20 bg-error/5' : ''}`}
                            >
                                <span className={`material-symbols-outlined ${btn.color} group-hover:scale-110 transition-transform`}>{btn.icon}</span>
                                <span className="font-label-caps text-[10px] uppercase leading-tight">{btn.label}</span>
                            </button>
                        );
                    })}
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                <div className="lg:col-span-2 space-y-8">
                    <section className="glass-panel p-6 rounded-xl relative overflow-hidden">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-headline-lg-mobile text-primary">Reproductor Inmersivo ({activeEmotionLabel})</h3>
                            <span className="material-symbols-outlined text-primary-fixed-dim animate-pulse">waves</span>
                        </div>
                        
                        <div className="w-full rounded-xl overflow-hidden shadow-2xl bg-surface-container-high/50 border border-primary/30 mb-6">
                            <iframe
                                style={{ borderRadius: '12px' }}
                                src={currentEmbedUrl}
                                width="100%"
                                height="230"
                                frameBorder="0"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                                title="MindSpace Audio Stream"
                            ></iframe>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-2 timer-buttons">
                            {timerOptions.map(time => (
                                <button
                                    key={time}
                                    onClick={() => setActiveTimer(time)}
                                    className={`py-2 px-4 rounded-full text-[10px] font-label-caps transition-colors ${
                                        activeTimer === time
                                            ? 'border border-primary bg-primary/20 text-primary shadow-[0_0_10px_rgba(0,220,230,0.3)]'
                                            : 'border border-primary/30 hover:bg-primary/10'
                                    }`}
                                >
                                    {time} MIN
                                </button>
                            ))}
                        </div>
                    </section>
                </div>

                <aside className="space-y-8">
                    <section className="glass-panel p-6 rounded-xl border-secondary/40 shadow-[0_0_20px_rgba(254,0,254,0.1)]">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-label-caps text-secondary neon-glow-magenta">MI MEZCLA</h3>
                            <button onClick={() => {
                                setMixValues({ 'Lluvia': 75, 'Piano Armónico': 40, 'Binaural Alfa (8Hz)': 60, 'Binaural Beta (15Hz)': 30, 'Binaural Gamma (40Hz)': 20 });
                            }} className="material-symbols-outlined text-secondary text-sm hover:rotate-180 transition-transform">refresh</button>
                        </div>
                        <div className="space-y-6">
                            <div className="space-y-4">
                                {soundMix.map(sound => (
                                    <div key={sound.name} className="space-y-2">
                                        <div className="flex justify-between text-xs font-label-caps">
                                            <span>{sound.name}</span>
                                            <span className="text-secondary">{mixValues[sound.name]}%</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={mixValues[sound.name]}
                                            onChange={(e) => handleSliderChange(sound.name, Number(e.target.value))}
                                            className="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-secondary shadow-[0_0_10px_rgba(254,0,254,0.5)]"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center justify-between bg-surface-container-low p-4 rounded-xl border border-primary/20">
                                <div>
                                    <h4 className="text-sm font-bold text-primary">Mezcla Natural y Binaural</h4>
                                    <p className="text-[10px] text-on-surface-variant uppercase">Control de audio simultáneo</p>
                                </div>
                                <button 
                                    onClick={handlePlayPause} 
                                    className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container shadow-[0_0_15px_rgba(0,220,230,0.6)] active:scale-90 transition-all"
                                >
                                    <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                                        {isPlaying ? 'pause' : 'play_arrow'}
                                    </span>
                                </button>
                            </div>

                            <div className="pt-4 border-t border-surface-container-highest">
                                <button 
                                    onClick={handleSaveMixAndJournal}
                                    className="w-full py-3 bg-secondary-container text-on-secondary-container font-label-caps rounded-xl shadow-[0_0_15px_rgba(254,0,254,0.4)] active:scale-95 transition-all"
                                >
                                    GUARDAR MEZCLA Y DIARIO
                                </button>
                            </div>
                        </div>
                    </section>
                    
                    <section className="glass-panel p-6 rounded-xl">
                        <h3 className="font-label-caps text-tertiary-fixed mb-4">DIARIO DE SONIDO</h3>
                        <p className="text-sm mb-4">¿Cómo te sientes después de escuchar?</p>
                        <div className="flex justify-between gap-2">
                            {['sentiment_dissatisfied', 'sentiment_neutral', 'sentiment_satisfied', 'sentiment_very_satisfied'].map(m => (
                                <button key={m} onClick={() => setMood(m)} className={`w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary/20 transition-colors ${mood === m ? 'border border-primary/40 shadow-[0_0_8px_rgba(0,220,230,0.2)]' : ''}`}>
                                    <span className={`material-symbols-outlined text-lg ${mood === m ? 'text-primary' : ''}`}>{m}</span>
                                </button>
                            ))}
                        </div>
                        <textarea
                            className="w-full mt-4 bg-surface-container-low border border-outline/20 rounded-lg p-3 text-sm focus:border-primary/50 focus:ring-0 placeholder:text-on-surface-variant/30 text-white"
                            placeholder="Escribe tu reflexión..."
                            rows="3"
                            value={journalText}
                            onChange={(e) => setJournalText(e.target.value)}
                        ></textarea>
                    </section>
                </aside>
            </div>
        </div>
    );
};

export default CalmaPage;
