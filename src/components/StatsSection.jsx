import React from 'react';
import {
  ImBuilding,
  ImFileText2,
  ImUserTie,
  ImHome3
} from 'react-icons/im';

const StatsSection = () => {
  const stats = [
    {
      id: 'stats_departments',
      icon: <ImBuilding className="w-12 h-12 text-indigo-600 mb-4" />,
      number: '+67k',
      label: 'Departamentos',
    },
    {
      id: 'stats_invoices',
      icon: <ImFileText2 className="w-12 h-12 text-indigo-600 mb-4" />,
      number: '+2.15m',
      label: 'Recibos',
    },
    {
      id: 'stats_companies',
      icon: <ImUserTie className="w-12 h-12 text-indigo-600 mb-4" />,
      number: '+130',
      label: 'Administradoras',
    },
    {
      id: 'stats_buildings',
      icon: <ImHome3 className="w-12 h-12 text-indigo-600 mb-4" />,
      number: '+920',
      label: 'Edificios',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ id, icon, number, label }) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
            >
              <div>{icon}</div>
              <h4
                id={id}
                className="text-4xl font-extrabold text-indigo-700 uppercase mb-2"
              >
                {number}
              </h4>
              <p className="text-lg font-medium text-gray-700">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;