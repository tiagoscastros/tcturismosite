import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone / WhatsApp',
      details: '(51) 98055-6647',
      description: 'Disponível de segunda a sexta, das 9h às 18h Atendimento 24 horas para clientes em viagem'
    },
    {
      icon: Mail,
      title: 'E-mail',
      details: 'contato@tcturismors.com',
      description: 'Respondemos em até 24 horas úteis'
    },
    {
      icon: MapPin,
      title: 'Atendimento em Todo o Brasil',
      details: 'Atendemos clientes em todo o território nacional',
      description: 'Em qualquer localização que você esteja, nosso atendimento remoto irá suprir suas necessidades'
    }    
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Entre em Contato"
        subtitle="Estamos prontos para ajudar você a planejar sua próxima viagem!"
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-[#093e72]" />
                </div>
                <h3 className="text-xl font-bold text-[#093e72] mb-2">{item.title}</h3>
                <p className="text-[#093e72] font-semibold mb-2">{item.details}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#093e72] mb-6">Como podemos ajudar?</h2>
              <p className="text-gray-600 mb-4">
                Estamos prontos para atender às suas necessidades de viagem.
                Preencha o formulário ao lado e entraremos em contato o mais breve possível.
              </p>
              <p className="text-gray-600 mb-8">
                Nossa equipe de especialistas está pronta para oferecer soluções personalizadas
                que atendam as suas necessidades.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-lg font-bold text-[#093e72] mb-3">Horário de Atendimento</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Segunda a Sexta-feira:</span>
                    <span>9h às 18h</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sábado:</span>
                    <span>9h às 12h</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Para clientes em viagem:</span>
                    <span>24 horas por dia, todos os dias!</span>
                  </li>
                </ul>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título - Onde estamos */}
          <div className=" py-8 px-4   text-center">
            <h2 className="text-3xl font-semibold text-secondary hover:text-blue-900 transition-colors">
              Onde estamos?
            </h2>
          </div>

          {/* Mapa */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="relative w-full h-96">
              <img
                src="./brasilMap.png"
                alt="Mapa do Brasil"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Texto de Atendimento Nacional */}
          <div className="mt-6 text-center">
            <h3 className="text-xl font-bold text-[#093e72] transition-transform transform hover:scale-105">
              Atendemos em todo o Brasil
            </h3>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Contact;
