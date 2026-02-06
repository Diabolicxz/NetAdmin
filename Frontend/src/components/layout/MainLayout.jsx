import { useState } from 'react';
import Sidebar from './sidebar.jsx';

const MainLayout = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      
      <main className="flex-1 overflow-auto">
        {/* Puedes pasar activeMenu como prop a children si es necesario */}
        {typeof children === 'function' 
          ? children({ activeMenu, setActiveMenu })
          : children
        }
      </main>
    </div>
  );
};

export default MainLayout;