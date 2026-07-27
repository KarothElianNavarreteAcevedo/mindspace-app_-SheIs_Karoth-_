import { NavLink } from 'react-router-dom';

const navItems = [
    { href: "/", icon: "neurology", label: "Brain", activeClasses: "text-tertiary-container drop-shadow-[0_0_25px_rgba(54,253,15,1)] bg-tertiary-container/30 rounded-xl px-4 py-3 border-2 border-tertiary-container/50" },
    { href: "/ciencia", icon: "movie", label: "Learn", activeClasses: "text-tertiary-container drop-shadow-[0_0_25px_rgba(54,253,15,1)] bg-tertiary-container/30 rounded-xl px-4 py-3 border-2 border-tertiary-container/50" },
    { href: "/calma", icon: "graphic_eq", label: "Calma", activeClasses: "text-tertiary-container drop-shadow-[0_0_25px_rgba(54,253,15,1)] bg-tertiary-container/30 rounded-xl px-4 py-3 border-2 border-tertiary-container/50" },
    { href: "/sos", icon: "emergency", label: "SOS", activeClasses: "text-black neon-glow-green bg-tertiary-fixed-dim rounded-full w-14 h-14 scale-110 border-2 border-white/40" },
    { href: "/progreso", icon: "monitoring", label: "Progreso", activeClasses: "text-primary drop-shadow-[0_0_25px_rgba(0,243,255,1)] bg-primary/30 rounded-xl px-4 py-3 border-2 border-primary/50" },
    { href: "/descompresion", icon: "self_improvement", label: "Decom", activeClasses: "text-secondary drop-shadow-[0_0_25px_rgba(254,0,254,1)] bg-secondary/30 rounded-xl px-4 py-3 border-2 border-secondary/50" },
    { href: "/misiones", icon: "stars", label: "Retos", activeClasses: "text-tertiary-fixed drop-shadow-[0_0_25px_rgba(42,229,0,1)] bg-tertiary-container/30 rounded-xl px-4 py-3 border-2 border-tertiary-fixed/50" },
    { href: "/feedback", icon: "forum", label: "Feedback", activeClasses: "text-tertiary-container drop-shadow-[0_0_25px_rgba(54,253,15,1)] bg-tertiary-container/30 rounded-xl px-4 py-3 border-2 border-tertiary-container/50" },
];

const BottomNav = () => {
    return (
        <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-surface-container-lowest/95 backdrop-blur-3xl border-t-4 border-primary shadow-[0_-15px_60px_rgba(0,0,0,0.9)]">
            {navItems.map((item) => {
                const baseClasses = "flex flex-col items-center justify-center transition-all duration-300 group";
                const inactiveClasses = "text-on-surface-variant/70 hover:text-primary px-4";

                return (
                    <NavLink
                        key={item.href}
                        to={item.href}
                        className={({ isActive }) => `${baseClasses} ${isActive ? item.activeClasses : inactiveClasses}`}
                    >
                        {({ isActive }) => (
                            <>
                                <span 
                                    className={`material-symbols-outlined transition-transform ${isActive && item.href === '/' ? 'scale-150' : 'group-hover:scale-125'}`} 
                                    style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                                >
                                    {item.icon}
                                </span>
                                <span className="font-label-caps mt-2">
                                    {item.label}
                                </span>
                            </>
                        )}
                    </NavLink>
                );
            })}
        </nav>
    );
};

export default BottomNav;