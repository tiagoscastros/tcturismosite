import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Hotel, Shield, Car, Users, Map, ArrowRight, Check } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Passagens Aéreas',
      description: 'Realizamos cotações, reservas e emissões para viagens nacionais e internacionais com as principais companhias aéreas do mundo.',
      icon: Plane,
      features: [
        'Cotações com foco nas necessidades do cliente',
        'Emissão de bilhetes nacionais e internacionais',
        'Remarcações e cancelamentos',
        'Tarifas corporativas exclusivas'
      ]
    },
    
    {
      title: 'Hospedagens',
      description: 'Seja para lazer, eventos ou negócios, buscamos as melhores cotações com hotéis de rede ou próprios.',
      icon: Hotel,
      features: [
        'Ampla rede de hotéis parceiros',
        'Tarifas negociadas para empresas',
        'Reservas para grupos corporativos',
        'Opções para todos os orçamentos',
        'Suporte 24h durante a estadia'
      ]
    },
    {
      title: 'Seguro Viagem',
      description: 'A ideia é não precisar, mas e se precisar? Conte com o seguro viagem para a tranquilidade em toda sua viagem, seja ela nacional ou internacional.',
      icon: Shield,
      features: [
        'Cobertura médica, hospitalar, bagagem e muito mais',
        'Assistência 24h em português',
        'Trabalhamos com as melhores seguradoras do mercado',
      ]
    },
    {
      title: 'Transporte terrestre',
      description: 'Aqui a viagem é feita do seu jeito e no seu tempo!',
      icon: Car,
      features: [
        'Aluguel de carros',
        'Passagem de ônibus',
        'Transfer privativo',
      ]
    },
    {
      title: 'Excursões',
      description: 'Realizamos excursões próprias e personalizadas. Quer realizar uma viagem exclusiva com seu grupo? Nós organizamos para você!',
      icon: Users,
      features: [
        'Excursões corporativas',
        'Viagens de incentivo para equipes',
        'Roteiros personalizados para grupos',
        'Guia de Turismo CADASTUR',
        'Logística completa de transporte'
      ]
    },
    {
      title: 'Roteiros',
      description: 'Para provar que realizamos todos os passos de sua viagem, também oferecemos o serviço de criação de roteiro. Com algumas informações, montamos o roteiro completo para sua viagem!',
      icon: Map,
      features: [
        'Roteiros personalizados por perfil',
        'Sugestões de atrações e experiências',
        'Planejamento detalhado dia a dia',
        'Dicas exclusivas de destinos',
        'Adaptação para viagens corporativas'
      ]
    }
  ];

  const corporateServices = [
    {
      title: 'Gestão de Viagens Corporativas',
      description: 'Sistema completo para gerenciamento de viagens corporativas, com relatórios detalhados e controle de gastos.'
    },
    {
      title: 'Atendimento agilizado',
      description: 'Seu tempo é precioso, por isso, nosso atendimento é agilizado e feito para você focar no que é mais importante para sua empresa.'
    },
    {
      title: 'Viagens de Incentivo',
      description: 'Programas de incentivo para colaboradores, com destinos exclusivos e experiências memoráveis.'
    },
    {
      title: 'Consultoria em Turismo Corporativo',
      description: 'Assessoria especializada para otimização de processos e redução de custos com viagens corporativas.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Nossos Serviços" 
        subtitle="Soluções completas para viagens corporativas e eventos."
        image="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
      
      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Serviços Completos para sua Viagem</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços turísticos para atender todas as suas necessidades, 
              seja para viagens corporativas, eventos ou lazer.
            </p>
          </div>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                <div className="lg:w-1/2">
                  <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-blue-800" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <img 
                    src={`https://images.unsplash.com/photo-${index % 6 === 0 ? '1436491865332-7a61a109cc05' : 
                      index % 6 === 1 ? '1566073771259-6a8506099945' : 
                      index % 6 === 2 ? '1557862921-37829c790f19' : 
                      index % 6 === 3 ? '1533473359331-0135ef1b58bf' : 
                      index % 6 === 4 ? '1544735716-ea9ef790f501?q' : 
                      '1452421822248-d4c2b47f0c81'}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80`} 
                    alt={service.title} 
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Corporate Services */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Serviços Corporativos Especializados</h2>
            <p className="text-gray-200 max-w-3xl mx-auto">
              Soluções exclusivas para empresas que buscam otimizar seus processos de viagens e eventos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corporateServices.map((service, index) => (
              <div key={index} className="bg-blue-700 rounded-lg p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-200 mb-4">{service.description}</p>
                <Link 
                  to="/contato" 
                  className="inline-flex items-center text-yellow-400 font-bold hover:text-yellow-300 transition-colors"
                >
                  Saiba mais
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Por que escolher a TC Turismo?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Entendemos as necessidades específicas do mercado corporativo e oferecemos soluções personalizadas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Atendimento Personalizado</h3>
              <p className="text-gray-600">
                Sua empresa é única, entendemos isso e garantimos um atendimento personalizado para suas necessidades.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Segurança e Confiabilidade</h3>
              <p className="text-gray-600">
                Trabalhamos apenas com fornecedores confiáveis e oferecemos suporte 24h para qualquer emergência em viagem.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Map className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Experiência no Mercado</h3>
              <p className="text-gray-600">
                Nossa equipe possui ampla experiência no mercado de turismo corporativo e conhecimento técnico.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Como Trabalhamos</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nosso processo é transparente e focado em entregar a melhor experiência para nossos clientes.
            </p>
          </div>
          
          <div className="relative">
            {/* Process line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 pr-8 text-right hidden md:block">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Entendimento das Necessidades</h3>
                  <p className="text-gray-600">
                    Realizamos uma análise detalhada das necessidades da sua empresa para oferecer as melhores soluções.
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="bg-blue-800 rounded-full h-8 w-8 z-10 flex items-center justify-center">
                    <div className="bg-yellow-400 rounded-full h-4 w-4"></div>
                  </div>
                </div>
                <div className="md:w-1/2 pl-8 md:hidden">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Entendimento das Necessidades</h3>
                  <p className="text-gray-600">
                    Realizamos uma análise detalhada das necessidades da sua empresa para oferecer as melhores soluções.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 pr-8 hidden md:block"></div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="bg-blue-800 rounded-full h-8 w-8 z-10 flex items-center justify-center">
                    <div className="bg-yellow-400 rounded-full h-4 w-4"></div>
                  </div>
                </div>
                <div className="md:w-1/2 pl-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Planejamento Estratégico</h3>
                  <p className="text-gray-600">
                    Desenvolvemos um plano personalizado que atenda às suas necessidades específicas e otimize recursos.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 pr-8 text-right hidden md:block">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Execução Impecável</h3>
                  <p className="text-gray-600">
                    Cuidamos de todos os detalhes para garantir que sua viagem ocorra sem contratempos.
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="bg-blue-800 rounded-full h-8 w-8 z-10 flex items-center justify-center">
                    <div className="bg-yellow-400 rounded-full h-4 w-4"></div>
                  </div>
                </div>
                <div className="md:w-1/2 pl-8 md:hidden">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Execução Impecável</h3>
                  <p className="text-gray-600">
                    Cuidamos de todos os detalhes para garantir que sua viagem ocorra sem contratempos.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 pr-8 hidden md:block"></div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="bg-blue-800 rounded-full h-8 w-8 z-10 flex items-center justify-center">
                    <div className="bg-yellow-400 rounded-full h-4 w-4"></div>
                  </div>
                </div>
                <div className="md:w-1/2 pl-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Acompanhamento e Suporte</h3>
                  <p className="text-gray-600">
                    Oferecemos suporte contínuo durante toda a viagem, garantindo tranquilidade e segurança.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para transformar suas viagens corporativas?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a otimizar processos e reduzir custos com viagens.
          </p>
          <Link 
            to="/contato" 
            className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-full text-lg transition-colors inline-block"
          >
            Solicite uma proposta
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
