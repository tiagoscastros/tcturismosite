import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Calendar, MapPin, } from 'lucide-react';
import Hero from '../components/Hero';
import TestimonialCard from '../components/TestimonialCard';

const About = () => {
  // Estado do modal para exibir imagens
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string>('');

  // Função para abrir o modal com a imagem
  const openModal = (imgSrc: string) => {
    setCurrentImage(imgSrc);
    setIsOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsOpen(false);
  };
  const imageLocations = [
    { src: '/img4.jpeg', location: 'Portland/EUA' },
    { src: '/img6.jpeg', location: 'Rio de Janeiro/RJ' },
    { src: '/img7.jpeg', location: 'Vespasiano Corrêa/RS' },
    { src: '/img8.jpeg', location: 'Seattle/EUA' },
    { src: '/img3.jpeg', location: 'San José/Costa Rica' },
    { src: '/img1.jpeg', location: 'Encantado/RS' },
    { src: '/img2.jpeg', location: 'São Francisco de Paula/RS' },
    { src: '/img5.jpeg', location: 'Porto Seguro/BA' },
  ];
  const milestones = [
    {
      year: '2021',
      title: 'Fundação',
      description: 'Início das operações com foco em excursões rodoviárias no período pós-pandemia.'
    },
    {
      year: '2022',
      title: 'Expansão',
      description: 'Ampliação da carteira de clientes e início de parcerias estratégicas.'
    },
    {
      year: '2023',
      title: 'Novos Serviços',
      description: 'Expansão para oferecer passagens aéreas, hospedagens, aluguel de carros e seguro viagem.'
    },
    {
      year: '2025',
      title: 'Foco Corporativo',
      description: 'Especialização em viagens corporativas e eventos empresariais.'
    }
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'Diretor de Eventos',
      testimonial: 'A TC Turismo foi fundamental para o sucesso do nosso evento corporativo. Toda a logística de transporte e hospedagem foi impecável.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    {
      name: 'Ana Ferreira',
      role: 'Gerente de RH',
      testimonial: 'Contratamos a TC Turismo para nossa convenção anual e o atendimento foi excepcional. Recomendo para qualquer empresa.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    {
      name: 'Roberto Mendes',
      role: 'Empresário',
      testimonial: 'Sempre que preciso viajar a negócios, conto com a TC Turismo. Profissionalismo e eficiência em todos os detalhes.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    {
      name: 'Juliana Costa',
      role: 'Coordenadora de Marketing',
      testimonial: 'A organização da nossa viagem corporativa foi perfeita. A TC Turismo cuidou de cada detalhe com muita atenção.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    {
      name: 'Marcelo Santos',
      role: 'CEO',
      testimonial: 'Excelente atendimento e profissionalismo. A TC Turismo entende as necessidades específicas de viagens corporativas.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    {
      name: 'Patricia Lima',
      role: 'Diretora Financeira',
      testimonial: 'A TC Turismo nos ajudou a otimizar nossos gastos com viagens corporativas sem comprometer a qualidade do serviço.',
      image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excelência',
      description: 'Buscamos a excelência em cada detalhe, garantindo que sua experiência seja impecável do início ao fim.'
    },
    {
      icon: Users,
      title: 'Personalização',
      description: 'Entendemos que cada cliente tem necessidades únicas, por isso oferecemos soluções personalizadas.'
    },
    {
      icon: Calendar,
      title: 'Pontualidade',
      description: 'Respeitamos seu tempo e garantimos que todos os serviços sejam entregues dentro do prazo combinado.'
    },
    {
      icon: MapPin,
      title: 'Conhecimento Local',
      description: 'Nossa equipe possui amplo conhecimento sobre destinos, garantindo as melhores recomendações.'
    }
  ];
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Nossa História"
        subtitle="Conheça a TC Turismo e descubra como podemos transformar suas viagens corporativas e eventos."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Sobre a TC Turismo</h2>
              <p className="text-gray-600 mb-4">
                Criada em 2021 para atender as demandas de excursões rodoviárias em um período pós-pandemia, a TC Turismo passou a oferecer, em 2023, demais serviços turísticos como venda de passagens aéreas, hospedagens, aluguel de carros, seguro viagem, entre outros serviços.
              </p>
              <p className="text-gray-600 mb-4">
                Esta oferta de serviços conta com a vasta experiência do diretor, Tiago Castro, profissional Turismólogo formado pela PUCRS, além de possuir formação em Guia de Turismo pelo SENAC, entre outras experiências como atendente de reservas de hospedagens e profissional de eventos.
              </p>
              <p className="text-gray-600 mb-4">
                Além disso, a TC Turismo é formada pelos nossos clientes, afinal, são eles que confiam suas viagens, seus sonhos e seus compromissos à agência. Para demonstrar esta simbiose, confira na "Galeria de Momentos" logo abaixo algumas fotos de nossos passeios e clientes em viagens. Inspire-se e venha planejar conosco a sua próxima viagem!
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="TC Turismo Team"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 rounded-lg p-4 shadow-lg">
                <p className="text-blue-900 font-bold text-xl">Desde 2021</p>
                <p className="text-blue-800">Realizando sonhos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-blue-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
              <p className="text-gray-200">
                Proporcionar experiências de viagem excepcionais para nossos clientes corporativos,
                oferecendo soluções personalizadas que atendam às suas necessidades específicas,
                com eficiência, qualidade e atenção aos detalhes.
              </p>
            </div>
            <div className="bg-blue-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
              <p className="text-gray-200">
                Ser reconhecida como a principal agência de turismo corporativo do Sul do Brasil,
                referência em qualidade de serviço, inovação e compromisso com a satisfação do cliente,
                contribuindo para o sucesso dos negócios de nossos parceiros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Nossa Trajetória</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Conheça os principais marcos da história da TC Turismo e como evoluímos para melhor atender nossos clientes.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2"></div>
                  <div className="hidden md:flex items-center justify-center">
                    <div className="bg-blue-800 rounded-full h-8 w-8 z-10 flex items-center justify-center">
                      <div className="bg-yellow-400 rounded-full h-4 w-4"></div>
                    </div>
                  </div>
                  <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg md:mt-0 mt-4">
                    <div className="flex items-center mb-2">
                      <span className="text-yellow-500 font-bold text-xl mr-2">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-blue-900">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Nossos Valores</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Estes são os princípios que guiam nossas ações e decisões diariamente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">Galeria de Momentos</h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        Confira alguns momentos especiais de nossas viagens e eventos organizados.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {imageLocations.map((image, index) => (
        <div key={index} className="relative">
          <img 
            src={image.src} 
            alt={`Imagem ${index + 1}`} 
            className="rounded-lg shadow-lg h-48 w-full object-cover cursor-pointer"
            onClick={() => openModal(image.src)}
          />
          {/* Título da localização fixo abaixo da imagem */}
          <div className="text-center text-black mt-2 font-semibold">
  {image.location}
</div>

        </div>
      ))}
    </div>

    {/* Modal com transição e estilização do card */}
    {isOpen && (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity opacity-100"
        style={{ transition: 'opacity 0.3s ease-in-out' }}
      >
        <div className="relative max-w-3xl mx-auto bg-white rounded-lg p-4 shadow-xl transform transition-all duration-300 scale-95">
          <img 
            src={currentImage} 
            alt="Imagem Ampliada" 
            className="max-w-full max-h-screen object-contain rounded-lg shadow-lg"
            aria-label="Imagem ampliada em modal"
          />
          
          {/* Botão de Fechar Estilizado */}
          <button 
            className="absolute top-4 right-4 text-white bg-blue-600 p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors transform hover:scale-110"
            onClick={closeModal}
            aria-label="Fechar modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    )}
  </div>
</section>
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">O que nossos clientes dizem</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A satisfação de nossos clientes é nossa maior prioridade. Confira alguns depoimentos de quem já confiou em nossos serviços.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                testimonial={testimonial.testimonial}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para trabalhar conosco?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Entre em contato e descubra como podemos ajudar sua empresa com soluções personalizadas de viagens corporativas e eventos.
          </p>
          <Link
            to="/contato"
            className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-full text-lg transition-colors inline-block"
          >
            Fale com nossos especialistas

          </Link>
        </div>
      </section>
    </div>
  );
  
};

export default About;
