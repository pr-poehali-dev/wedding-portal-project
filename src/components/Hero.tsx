import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-12 md:py-20 hero-gradient">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Организуйте свадьбу своей мечты с СвадьбаПлюс
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Все лучшие свадебные услуги города в одном месте. Ведущие, автомобили, банкетные залы,
                декораторы и артисты — всё для вашего идеального дня.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-wedding hover:bg-wedding-dark">
                <Link to="/services/all">
                  Найти услуги
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/become-partner">
                  Стать партнёром
                </Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto lg:order-last flex items-center justify-center relative">
            <img
              src="/placeholder.svg"
              alt="Свадебное торжество"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              width={500}
              height={310}
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in">
              <Heart className="h-5 w-5 text-wedding" />
              <span className="font-medium">1000+ успешных свадеб</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;