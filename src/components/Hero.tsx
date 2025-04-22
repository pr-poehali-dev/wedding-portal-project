import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-10 md:py-20 hero-gradient relative overflow-hidden">
      {/* Добавляем фоновый градиент поверх изображения */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-pink-900/50 z-10"></div>
      
      {/* Фоновое изображение */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Свадебная церемония" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container px-4 md:px-6 relative z-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-white">
                Организуйте свадьбу своей мечты с ПРОСвадьбу
              </h1>
              <p className="max-w-[600px] text-gray-100 text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Все лучшие свадебные услуги города в одном месте. Ведущие, автомобили, банкетные залы,
                декораторы и артисты — всё для вашего идеального дня.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-gray-100 w-full sm:w-auto">
                <Link to="/services/all">
                  Найти услуги
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10 w-full sm:w-auto">
                <Link to="/become-partner">
                  Стать партнёром
                </Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto lg:order-last hidden sm:flex items-center justify-center relative">
            <img
              src="https://images.unsplash.com/photo-1525328302834-764f29849fe1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
              alt="Свадебный букет"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-lg"
              width={500}
              height={310}
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in text-sm sm:text-base">
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-wedding" />
              <span className="font-medium">1000+ успешных свадеб</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;