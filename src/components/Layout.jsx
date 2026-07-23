import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';

const Layout = () => {
    return (
        <div className="bg-background text-on-background font-body-md min-h-screen">
            <div className="scanline-overlay"></div>
            <main className="pt-24 pb-32 px-margin-mobile">
                <Outlet /> {/* Aquí se renderizará la página activa */}
            </main>
            <BottomNav />
        </div>
    );
};

export default Layout;