import React, { useState } from 'react';
import { Dog, Cat, Bird, Power, Clock, Calendar, Scale, History, Heart, Info, AlertCircle, Settings, ChevronDown } from 'lucide-react';

function App() {
  const [dispenserOn, setDispenserOn] = useState(false);
  const [selectedPet, setSelectedPet] = useState('');
  const [selectedFood, setSelectedFood] = useState('');
  const [activeTab, setActiveTab] = useState('alimentacion');

  const getFeedingRecommendation = (petType: string) => {
    switch (petType) {
      case 'perro':
        return '2-3 veces al día';
      case 'gato':
        return '3-4 veces al día';
      case 'ave':
        return '1-2 veces al día';
      default:
        return 'Seleccione un tipo de mascota';
    }
  };

  const getNutritionalInfo = (petType: string) => {
    switch (petType) {
      case 'perro':
        return {
          proteinas: '25-30%',
          grasas: '15-20%',
          carbohidratos: '30-35%',
          calorias: '350-400 kcal/taza'
        };
      case 'gato':
        return {
          proteinas: '35-40%',
          grasas: '20-24%',
          carbohidratos: '20-25%',
          calorias: '250-300 kcal/taza'
        };
      case 'ave':
        return {
          proteinas: '12-15%',
          grasas: '4-6%',
          carbohidratos: '50-55%',
          calorias: '100-150 kcal/taza'
        };
      default:
        return null;
    }
  };

  const feedingHistory = [
    { fecha: '2024-03-10', hora: '07:00', cantidad: '100g', tipo: 'Alimento Seco' },
    { fecha: '2024-03-10', hora: '14:00', cantidad: '100g', tipo: 'Alimento Seco' },
    { fecha: '2024-03-09', hora: '07:00', cantidad: '100g', tipo: 'Alimento Húmedo' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-indigo-900 mb-4">
              Sistema de Gestión de Alimentos para Mascotas
            </h1>
            <p className="text-lg text-indigo-600">Control inteligente de alimentación para tu mascota</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Estado del Dispensador */}
            <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <Power className={`w-8 h-8 ${dispenserOn ? 'text-green-500' : 'text-red-500'} mr-3`} />
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">Dispensador</h2>
                    <p className="text-sm text-gray-500">Estado actual del sistema</p>
                  </div>
                </div>
                <button
                  onClick={() => setDispenserOn(!dispenserOn)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    dispenserOn
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'bg-red-500 text-white hover:bg-red-600'
                  }`}
                >
                  {dispenserOn ? 'Encendido' : 'Apagado'}
                </button>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  Última activación: Hoy, 07:00 AM
                </p>
                <p className="text-sm text-gray-600">
                  Próxima comida: 02:00 PM
                </p>
              </div>
            </div>

            {/* Selección de Mascota */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Tipo de Mascota</h2>
              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={() => setSelectedPet('perro')}
                  className={`flex flex-col items-center p-4 rounded-xl transition-all ${
                    selectedPet === 'perro' 
                      ? 'bg-indigo-100 border-2 border-indigo-500' 
                      : 'bg-gray-50 hover:bg-indigo-50'
                  }`}
                >
                  <Dog className="w-10 h-10 mb-2 text-indigo-600" />
                  <span className="font-medium">Perro</span>
                </button>
                <button
                  onClick={() => setSelectedPet('gato')}
                  className={`flex flex-col items-center p-4 rounded-xl transition-all ${
                    selectedPet === 'gato' 
                      ? 'bg-indigo-100 border-2 border-indigo-500' 
                      : 'bg-gray-50 hover:bg-indigo-50'
                  }`}
                >
                  <Cat className="w-10 h-10 mb-2 text-indigo-600" />
                  <span className="font-medium">Gato</span>
                </button>
                <button
                  onClick={() => setSelectedPet('ave')}
                  className={`flex flex-col items-center p-4 rounded-xl transition-all ${
                    selectedPet === 'ave' 
                      ? 'bg-indigo-100 border-2 border-indigo-500' 
                      : 'bg-gray-50 hover:bg-indigo-50'
                  }`}
                >
                  <Bird className="w-10 h-10 mb-2 text-indigo-600" />
                  <span className="font-medium">Ave</span>
                </button>
              </div>
            </div>

            {/* Tipo de Alimento */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Tipo de Alimento</h2>
              <div className="relative">
                <select
                  value={selectedFood}
                  onChange={(e) => setSelectedFood(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-xl appearance-none bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Seleccionar alimento</option>
                  <option value="seco">Alimento Seco Premium</option>
                  <option value="humedo">Alimento Húmedo Natural</option>
                  <option value="mixto">Alimentación Mixta Balanceada</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
              {selectedFood && (
                <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
                  <p className="text-sm text-indigo-700">
                    Recomendación: {selectedFood === 'seco' ? 'Ideal para control de peso y salud dental' : 
                                  selectedFood === 'humedo' ? 'Excelente para hidratación y palatabilidad' : 
                                  'Combina beneficios de ambos tipos'}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Tabs de Navegación */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab('alimentacion')}
                className={`flex-1 py-4 px-6 text-center font-medium ${
                  activeTab === 'alimentacion' 
                    ? 'bg-indigo-50 text-indigo-600 border-b-2 border-indigo-500' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Horarios de Alimentación
                </div>
              </button>
              <button
                onClick={() => setActiveTab('nutricion')}
                className={`flex-1 py-4 px-6 text-center font-medium ${
                  activeTab === 'nutricion' 
                    ? 'bg-indigo-50 text-indigo-600 border-b-2 border-indigo-500' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-center">
                  <Heart className="w-5 h-5 mr-2" />
                  Información Nutricional
                </div>
              </button>
              <button
                onClick={() => setActiveTab('historial')}
                className={`flex-1 py-4 px-6 text-center font-medium ${
                  activeTab === 'historial' 
                    ? 'bg-indigo-50 text-indigo-600 border-b-2 border-indigo-500' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-center">
                  <History className="w-5 h-5 mr-2" />
                  Historial
                </div>
              </button>
            </div>

            <div className="p-6">
              {activeTab === 'alimentacion' && (
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                    <Clock className="w-8 h-8 text-blue-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Frecuencia Recomendada</h3>
                      <p className="text-gray-700 mb-4">{getFeedingRecommendation(selectedPet)}</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <h4 className="font-semibold text-indigo-600 mb-2">Mañana</h4>
                          <p className="text-gray-600">7:00 AM</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <h4 className="font-semibold text-indigo-600 mb-2">Tarde</h4>
                          <p className="text-gray-600">2:00 PM</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <h4 className="font-semibold text-indigo-600 mb-2">Noche</h4>
                          <p className="text-gray-600">8:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-xl p-4 flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-yellow-600" />
                    <p className="text-sm text-yellow-700">
                      Recuerda mantener agua fresca disponible en todo momento y ajustar las porciones según el peso y actividad de tu mascota.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'nutricion' && selectedPet && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.entries(getNutritionalInfo(selectedPet) || {}).map(([key, value]) => (
                      <div key={key} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <h4 className="text-sm font-medium text-gray-500 mb-1 capitalize">
                          {key}
                        </h4>
                        <p className="text-lg font-semibold text-indigo-600">{value}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-4 flex items-start gap-4">
                    <Info className="w-6 h-6 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Consejos Nutricionales</h4>
                      <ul className="list-disc list-inside text-sm text-green-700 space-y-2">
                        <li>Mantén un horario regular de alimentación</li>
                        <li>Evita cambios bruscos en la dieta</li>
                        <li>Ajusta las porciones según la edad y actividad</li>
                        <li>Consulta con tu veterinario para necesidades específicas</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'historial' && (
                <div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hora</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cantidad</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {feedingHistory.map((item, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.fecha}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.hora}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.cantidad}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.tipo}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer con Configuración */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <Settings className="w-6 h-6 text-gray-400" />
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Configuración del Sistema</h3>
                  <p className="text-xs text-gray-500">Última actualización: Hoy, 10:30 AM</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                Ajustes Avanzados
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;