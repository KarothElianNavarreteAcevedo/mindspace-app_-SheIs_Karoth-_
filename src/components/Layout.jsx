import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';

const Layout = () => {
    return (
        <div className="bg-background text-on-background font-body-md min-h-screen relative">
            <div className="grid-background"></div>
            <div className="scanline-overlay"></div>
            <div className="scanline-animated"></div>
            <main className="pt-24 pb-32 px-margin-mobile relative z-10">
                <Outlet />
            </main>
            <BottomNav />
        </div>
    );
};

export default Layout;