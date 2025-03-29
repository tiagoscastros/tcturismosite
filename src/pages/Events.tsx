import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

const Events = () => {
  return (
    <div>
         <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center"
      >
        <AlertCircle className="text-blue-500 w-12 h-12 mb-4 animate-pulse" />
        <h1 className="text-2xl font-semibold text-gray-800 text-center">
          Os Eventos ficarão disponíveis em breve
        </h1>
      </motion.div>
    </div>
      {/* Custom Event */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Evento personalizado"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#093e72] mb-6">Eventos</h2>
              <p className="text-gray-600 mb-4">
                Se o evento é importante para você, é importante para nós! Nosso time de especialistas está pronto para ser a agência de turismo oficial.
              </p>
              <p className="text-gray-600 mb-4">
                Sejam congressos, convenções, reuniões, shows, festividades ou viagens de incentivo, podemos planejar, executar e atender as suas necessidades.
              </p>
              <p className="text-gray-600 mb-6">
                Cuidaremos de todos os detalhes de logística e hospedagem de seu evento!
              </p>

              <button className="bg-[#093e72] hover:bg-[#0a4a8a] text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Solicite uma proposta
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
