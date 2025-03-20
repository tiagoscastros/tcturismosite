import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Hotel, Shield, Car, Users, Map, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import EventCard from '../components/EventCard';
import NewsCard from '../components/NewsCard';

const Home = () => {
  const services = [
    {
      title: 'Passagens Aéreas',
      description: 'Realizamos cotações, reservas e emissões para viagens nacionais e internacionais com as principais companhias aéreas do mundo.',
      icon: Plane
    },
    {
      title: 'Hospedagens',
      description: 'Seja para lazer, eventos ou negócios, buscamos as melhores cotações com hotéis de rede ou próprios.',
      icon: Hotel
    },
    {
      title: 'Seguro Viagem',
      description: 'A ideia é não precisar, mas e se precisar? Conte com o seguro viagem para a tranquilidade em toda sua viagem.',
      icon: Shield
    },
    {
      title: 'Aluguel de Carros',
      description: 'Não dependa de transfers ou carros por aplicativos. Com o aluguel de carro, você pode fazer a viagem do seu jeito!',
      icon: Car
    },
    {
      title: 'Excursões',
      description: 'Realizamos excursões próprias e personalizadas. Quer realizar uma viagem personalizada com seu grupo? Nós organizamos!',
      icon: Users
    },
    {
      title: 'Roteiros',
      description: 'Para provar que realizamos todos os passos de sua viagem, também oferecemos o serviço de criação de roteiro personalizado.',
      icon: Map
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
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Sua viagem começa aqui" 
        subtitle="Especialistas em viagens corporativas e eventos. Conte com a TC Turismo para tornar sua próxima viagem inesquecível."
        image="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        buttonText="Solicite um orçamento"
      />
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Nossos Serviços</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços turísticos para atender todas as suas necessidades de viagem, seja a negócios ou lazer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/servicos" 
              className="inline-flex items-center text-primary font-bold hover:text-primary-light transition-colors"
            >
              Ver todos os serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sobre a TC Turismo</h2>
              <p className="mb-4">
                Criada em 2021 para atender as demandas de excursões rodoviárias em um período pós-pandemia, a TC Turismo passou a oferecer, em 2023, demais serviços turísticos como venda de passagens aéreas, hospedagens, aluguel de carros, seguro viagem, entre outros serviços.
              </p>
              <p className="mb-6">
                Esta oferta de serviços conta com vasta experiência do proprietário, Tiago Castro, profissional Turismólogo formado pela PUCRS, além de possuir formação em Guia de Turismo pelo SENAC, entre outras experiências.
              </p>
              <Link 
                to="/sobre" 
                className="bg-white text-primary hover:bg-secondary font-bold py-3 px-6 rounded-lg transition-colors inline-flex items-center"
              >
                Conheça nossa história
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/img1.jpeg" 
                alt="TC Turismo" 
                className="rounded-lg shadow-lg h-64 w-full object-cover"
              />
              <img 
                src="/img2.jpeg" 
                alt="TC Turismo" 
                className="rounded-lg shadow-lg h-64 w-full object-cover"
              />
              <img 
                src="/img3.jpeg" 
                alt="TC Turismo" 
                className="rounded-lg shadow-lg h-64 w-full object-cover"
              />
              <img 
                src="/img5.jpeg" 
                alt="TC Turismo" 
                className="rounded-lg shadow-lg h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">O que nossos clientes dizem</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A satisfação de nossos clientes é nossa maior prioridade. Confira alguns depoimentos de quem já confiou em nossos serviços.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
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
      
      {/* Events Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Próximos Eventos</h2>
              <p className="text-gray-600">
                Confira os eventos que estamos organizando e participe!
              </p>
            </div>
            <Link 
              to="/eventos" 
              className="inline-flex items-center text-primary font-bold hover:text-primary-light transition-colors"
            >
              Ver todos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard 
              title="Excursão para Gramado"
              date="15 de Abril, 2025"
              description="Venha conhecer as belezas de Gramado e Canela em uma excursão especial de 3 dias com hospedagem e passeios inclusos."
              image="https://cdn.pixabay.com/photo/2019/12/29/23/23/garden-4728405_1280.jpg"
            />
            <EventCard 
              title="Feira de Turismo Corporativo"
              date="22 de Maio, 2025"
              description="Participe da maior feira de turismo corporativo do sul do Brasil. Networking, palestras e oportunidades de negócios."
              image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            />
            <EventCard 
              title="Workshop de Viagens Corporativas"
              date="10 de Junho, 2025"
              description="Aprenda como otimizar suas viagens corporativas e reduzir custos sem perder qualidade. Workshop exclusivo para empresas."
              image="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </section>
      
      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Últimas Notícias</h2>
              <p className="text-gray-600">
                Fique por dentro das novidades do mundo do turismo e da TC Turismo.
              </p>
            </div>
            <Link 
              to="/noticias" 
              className="inline-flex items-center text-primary font-bold hover:text-primary-light transition-colors"
            >
              Ver todas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NewsCard 
              title="TC Turismo expande serviços para eventos corporativos"
              date="10 de Março, 2025"
              summary="A TC Turismo anuncia a expansão de seus serviços para incluir a organização completa de eventos corporativos, desde a escolha do local até a logística de transporte."
              image="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            />
            <NewsCard 
              title="Novas parcerias com redes hoteleiras internacionais"
              date="25 de Fevereiro, 2025"
              summary="Firmamos novas parcerias com redes hoteleiras internacionais para oferecer ainda mais opções de hospedagem de qualidade para nossos clientes."
              image="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            />
            <NewsCard 
              title="Dicas para viagens corporativas mais sustentáveis"
              date="15 de Fevereiro, 2025"
              summary="Confira nossas dicas para tornar suas viagens corporativas mais sustentáveis, reduzindo o impacto ambiental sem comprometer a qualidade."
              image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para planejar sua próxima viagem?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Entre em contato conosco e descubra como podemos tornar sua próxima viagem ou evento corporativo uma experiência inesquecível.
          </p>
          <Link 
            to="/contato" 
            className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-full text-lg transition-colors inline-block"
          >
            Solicite um orçamento
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;