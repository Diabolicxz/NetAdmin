import React, { useState } from 'react';
import { LayoutDashboard, FileText, CheckSquare, Package, Network, Shield } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Sidebar from '../components/layout/Sidebar';
import { useAuth } from '../hooks/useAuth';

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const { user } = useAuth();

  // Datos para el gráfico de tráfico
  const trafficData = [
    { time: '00:00', entrada: 45, salida: 30 },
    { time: '04:00', entrada: 28, salida: 18 },
    { time: '08:00', entrada: 80, salida: 65 },
    { time: '12:00', entrada: 95, salida: 92 },
    { time: '16:00', entrada: 88, salida: 72 },
    { time: '20:00', entrada: 68, salida: 55 }
  ];

  // Datos de equipos en tiempo real
  const equiposData = [
    { nombre: 'SRV-CONTROLADORA-SITECRA7', cpu: '92%', memoria: '80%', uptime: '212 días', estado: 'ONLINE' },
    { nombre: 'SER_CONTROLADORA-SITE7', cpu: '67%', memoria: '79%', uptime: '321 días', estado: 'ONLINE' },
    { nombre: 'SW-RH-R2-A1', cpu: '87%', memoria: '55%', uptime: '285 días', estado: 'ONLINE' },
    { nombre: 'SW-RH-R2-A1', cpu: '53%', memoria: '90%', uptime: '218 días', estado: 'ONLINE' },
    { nombre: 'fortianalyzer.groupcos.com', cpu: '76%', memoria: '18%', uptime: '112 días', estado: 'ONLINE' },
    { nombre: 'FW_ITG_MASTER', cpu: '58%', memoria: '68%', uptime: '114 días', estado: 'ONLINE' },
    { nombre: 'SW-SBQ-RC-C2', cpu: '32%', memoria: '81%', uptime: '150 días', estado: 'ONLINE' },
    { nombre: 'SW-SBQ-RC-C1', cpu: '31%', memoria: '40%', uptime: '232 días', estado: 'ONLINE' },
    { nombre: 'SW-SB-D1-A1', cpu: '94%', memoria: '51%', uptime: '282 días', estado: 'ONLINE' },
    { nombre: 'SW-SC93-P1-G1-A1', cpu: '37%', memoria: '60%', uptime: '202 días', estado: 'ONLINE' }
  ];

  // Documentos recientes
  const documentosRecientes = [
    { nombre: 'SRV-CONTROLADORA-SITECRA7', ip: '172.30.2.6', tipo: 'CONTROLADORA' },
    { nombre: 'SER_CONTROLADORA-SITE7', ip: '10.12.4.80', tipo: 'CONTROLADORA' },
    { nombre: 'SW-RH-R2-A1', ip: '10.70.0.82', tipo: 'SWITCH' },
    { nombre: 'SW-RH-R2-A1', ip: '10.70.0.82', tipo: 'SWITCH' },
    { nombre: 'fortianalyzer.groupcos.com', ip: '172.66.7.63', tipo: 'FORTIANALYZER' }
  ];

  const DashboardView = () => (
    <div className="space-y-4 lg:space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 border border-gray-200">
        <div className="flex items-center gap-3 lg:gap-4">
          <div className="bg-red-600 p-2 lg:p-3 rounded-lg">
            <LayoutDashboard className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800">Dashboard</h2>
            <p className="text-gray-600 text-xs lg:text-sm">Resumen de la infraestructura de red y monitoreo en tiempo real</p>
          </div>
        </div>
      </div>

      {/* Metrics Cards - Primera fila */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        {/* Total Equipos */}
        <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 border border-red-100">
          <div className="flex items-center gap-2 lg:gap-3 mb-3 lg:mb-4">
            <div className="bg-red-50 p-1.5 lg:p-2 rounded">
              <Package className="w-4 h-4 lg:w-5 lg:h-5 text-red-600" />
            </div>
          </div>
          <div className="text-3xl lg:text-4xl font-bold text-red-600 mb-1 lg:mb-2">11</div>
          <div className="text-xs lg:text-sm text-gray-600">Total Equipos</div>
        </div>

        {/* Switches */}
        <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 border border-red-100">
          <div className="flex items-center gap-2 lg:gap-3 mb-3 lg:mb-4">
            <div className="bg-red-50 p-1.5 lg:p-2 rounded">
              <Network className="w-4 h-4 lg:w-5 lg:h-5 text-red-600" />
            </div>
          </div>
          <div className="text-3xl lg:text-4xl font-bold text-red-600 mb-1 lg:mb-2">0</div>
          <div className="text-xs lg:text-sm text-gray-600">Switches</div>
        </div>

        {/* Firewalls */}
        <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 border border-red-100">
          <div className="flex items-center gap-2 lg:gap-3 mb-3 lg:mb-4">
            <div className="bg-red-50 p-1.5 lg:p-2 rounded">
              <Shield className="w-4 h-4 lg:w-5 lg:h-5 text-red-600" />
            </div>
          </div>
          <div className="text-3xl lg:text-4xl font-bold text-red-600 mb-1 lg:mb-2">0</div>
          <div className="text-xs lg:text-sm text-gray-600">Firewalls</div>
        </div>

        {/* Equipos Online */}
        <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 border border-orange-100">
          <div className="flex items-center gap-2 lg:gap-3 mb-3 lg:mb-4">
            <div className="bg-orange-50 p-1.5 lg:p-2 rounded">
              <LayoutDashboard className="w-4 h-4 lg:w-5 lg:h-5 text-orange-600" />
            </div>
          </div>
          <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-1 lg:mb-2">10</div>
          <div className="text-xs lg:text-sm text-gray-600">Equipos Online</div>
        </div>
      </div>

      {/* Metrics Cards - Segunda fila */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
        {/* En Funcionamiento */}
        <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 border border-green-100">
          <div className="flex items-center gap-2 lg:gap-3 mb-3 lg:mb-4">
            <div className="bg-green-50 p-1.5 lg:p-2 rounded">
              <Network className="w-4 h-4 lg:w-5 lg:h-5 text-green-600" />
            </div>
          </div>
          <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-1 lg:mb-2">10</div>
          <div className="text-xs lg:text-sm text-gray-600">En Funcionamiento</div>
        </div>

        {/* Fuera de Servicio */}
        <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 border border-red-100">
          <div className="flex items-center gap-2 lg:gap-3 mb-3 lg:mb-4">
            <div className="bg-red-50 p-1.5 lg:p-2 rounded">
              <Network className="w-4 h-4 lg:w-5 lg:h-5 text-red-600" />
            </div>
          </div>
          <div className="text-3xl lg:text-4xl font-bold text-red-600 mb-1 lg:mb-2">1</div>
          <div className="text-xs lg:text-sm text-gray-600">Fuera de Servicio</div>
        </div>

        {/* Disponibilidad Total */}
        <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 border border-blue-100">
          <div className="flex items-center gap-2 lg:gap-3 mb-3 lg:mb-4">
            <div className="bg-blue-50 p-1.5 lg:p-2 rounded">
              <LayoutDashboard className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600" />
            </div>
          </div>
          <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-1 lg:mb-2">90.9%</div>
          <div className="text-xs lg:text-sm text-gray-600">Disponibilidad Total</div>
        </div>
      </div>

      {/* Tráfico de Red */}
      <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 border border-gray-200">
        <h3 className="text-base lg:text-lg font-semibold text-gray-800 mb-4">Tráfico de Red (Mbps)</h3>
        <div className="h-64 lg:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="time" 
                stroke="#6b7280"
                style={{ fontSize: '10px' }}
                className="lg:text-xs"
              />
              <YAxis 
                stroke="#6b7280"
                style={{ fontSize: '10px' }}
                className="lg:text-xs"
                domain={[0, 100]}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '8px',
                  fontSize: '12px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="entrada" 
                stroke="#dc2626" 
                strokeWidth={2}
                dot={{ fill: '#dc2626', r: 4 }}
                activeDot={{ r: 6 }}
                name="Entrada"
              />
              <Line 
                type="monotone" 
                dataKey="salida" 
                stroke="#2563eb" 
                strokeWidth={2}
                dot={{ fill: '#2563eb', r: 4 }}
                activeDot={{ r: 6 }}
                name="Salida"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tabla de Equipos en Tiempo Real */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 lg:p-6 border-b border-gray-200">
          <h3 className="text-base lg:text-lg font-semibold text-gray-800">Equipos en Tiempo Real</h3>
        </div>
        
        {/* Vista móvil - Cards */}
        <div className="lg:hidden divide-y divide-gray-100">
          {equiposData.map((equipo, index) => (
            <div key={index} className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm text-gray-800 truncate pr-2">{equipo.nombre}</p>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded flex-shrink-0">
                  {equipo.estado}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <span className="text-gray-500">CPU:</span>
                  <span className="ml-1 font-medium text-gray-800">{equipo.cpu}</span>
                </div>
                <div>
                  <span className="text-gray-500">RAM:</span>
                  <span className="ml-1 font-medium text-gray-800">{equipo.memoria}</span>
                </div>
                <div>
                  <span className="text-gray-500">Uptime:</span>
                  <span className="ml-1 font-medium text-gray-800">{equipo.uptime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vista desktop - Tabla */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Equipo
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  CPU
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Memoria
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Uptime
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {equiposData.map((equipo, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-50 p-2 rounded">
                        <Network className="w-4 h-4 text-red-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-800">{equipo.nombre}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-red-600 h-2 rounded-full" 
                          style={{ width: equipo.cpu }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-700">{equipo.cpu}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: equipo.memoria }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-700">{equipo.memoria}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-700">{equipo.uptime}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">
                      {equipo.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-4 lg:px-6 py-3 bg-gray-50 border-t border-gray-200 text-xs lg:text-sm text-gray-600">
          Mostrando 10 de 11 equipos
        </div>
      </div>

      {/* Documentos Recientes */}
      <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 border border-gray-200">
        <h3 className="text-base lg:text-lg font-semibold text-gray-800 mb-4">Documentos Recientes</h3>
        <div className="space-y-2">
          {documentosRecientes.map((doc, index) => (
            <div 
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 lg:p-4 hover:bg-gray-50 rounded-lg transition-colors border border-gray-100"
            >
              <div className="flex items-center gap-2 lg:gap-3 flex-1 min-w-0">
                <div className="bg-red-50 p-1.5 lg:p-2 rounded flex-shrink-0">
                  <Package className="w-4 h-4 lg:w-5 lg:h-5 text-red-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm lg:text-base text-gray-800 truncate">{doc.nombre}</p>
                  <p className="text-xs lg:text-sm text-gray-500">{doc.ip}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="px-2 lg:px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded">
                  {doc.tipo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const PlaceholderView = ({ title }) => (
    <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">Esta sección está en desarrollo</p>
    </div>
  );

  const renderView = () => {
    switch(activeMenu) {
      case 'dashboard':
        return <DashboardView />;
      case 'hoja-vida':
        return <PlaceholderView title="Hoja de Vida" />;
      case 'tareas':
        return <PlaceholderView title="Tareas" />;
      case 'inventario':
        return <PlaceholderView title="Inventario" />;
      case 'switch':
        return <PlaceholderView title="Switch" />;
      case 'vlan':
        return <PlaceholderView title="VLAN" />;
      case 'configuracion':
        return <PlaceholderView title="Configuración" />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar Component */}
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-4 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg lg:text-xl font-semibold text-gray-800 capitalize">
              {activeMenu.replace('-', ' ')}
            </h2>
            <p className="text-xs lg:text-sm text-gray-500 mt-0.5">
              Bienvenido, {user?.nombre || 'Usuario'}
            </p>
          </div>
          <div className="text-xs lg:text-sm text-gray-500">
            {new Date().toLocaleDateString('es-ES', { 
              weekday: 'short', 
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          <div className="p-4 lg:p-8">
            {renderView()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;