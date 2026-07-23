import { NavLink } from 'react-router-dom';

const navItems = [
    { href: "/", icon: "neurology", label: "Brain", activeClasses: "text-tertiary-container drop-shadow-[0_0_25px_rgba(54,253,15,1)] bg-tertiary-container/30 rounded-xl px-7 py-3.5 border-2 border-tertiary-container/50" },
    { href: "/ciencia", icon: "movie", label: "Learn", activeClasses: "text-tertiary-container drop-shadow-[0_0_25px_rgba(54,253,15,1)] bg-tertiary-container/30 rounded-xl px-7 py-3.5 border-2 border-tertiary-container/50" },
    { href: "/calma", icon: "graphic_eq", label: "Calma", activeClasses: "text-tertiary-container drop-shadow-[0_0_25px_rgba(54,253,15,1)] bg-tertiary-container/30 rounded-xl px-7 py-3.5 border-2 border-tertiary-container/50" },
    { href: "/sos", icon: "emergency", label: "SOS", activeClasses: "text-black neon-glow-green bg-tertiary-fixed-dim rounded-full w-16 h-16 scale-110 border-2 border-white/40" },
    { href: "/feedback", icon: "forum", label: "Feedback", activeClasses: "text-tertiary-container drop-shadow-[0_0_25px_rgba(54,253,15,1)] bg-tertiary-container/30 rounded-xl px-7 py-3.5 border-2 border-tertiary-container/50" },
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
                                <span className={`font-label-caps mt-2 font-black tracking-[0.2em] ${isActive && item.href === '/' ? 'text-[11px]' : 'text-[10px]'}`}>
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