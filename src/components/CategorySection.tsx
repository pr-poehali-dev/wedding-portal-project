import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

// Это имитация данных, в реальном приложении они будут приходить с сервера
const dummyServices = {
  hosts: [
    {
      id: "host1",
      title: "Александр Петров",
      category: "Ведущий",
      description: "Профессиональный ведущий с 10-летним опытом проведения свадеб и торжеств. Индивидуальный подход к каждой паре.",
      rating: 4.9,
      price: "от 30 000 ₽",
      imageUrl: "/placeholder.svg"
    },
    {
      id: "host2",
      title: "Екатерина Иванова",
      category: "Ведущая",
      description: "Харизматичная ведущая, которая сделает ваш праздник незабываемым. Работаю с любыми форматами мероприятий.",
      rating: 4.8,
      price: "от 25 000 ₽",
      imageUrl: "/placeholder.svg"
    },
    {
      id: "host3",
      title: "Михаил Соколов",
      category: "Ведущий",
      description: "Креативный подход к сценарию. Море позитива и отличное настроение гарантированы!",
      rating: 4.7,
      price: "от 35 000 ₽",
      imageUrl: "/placeholder.svg"
    }
  ],
  cars: [
    {
      id: "car1",
      title: "Мерседес S-класс",
      category: "Автомобиль",
      description: "Роскошный белый Mercedes-Benz S-Class для вашего особенного дня. С украшениями и опытным водителем.",
      rating: 4.9,
      price: "от 10 000 ₽/день",
      imageUrl: "/placeholder.svg"
    },
    {
      id: "car2",
      title: "Ретро Кадиллак",
      category: "Автомобиль",
      description: "Элегантный винтажный Кадиллак для классической свадебной фотосессии и поездки.",
      rating: 4.7,
      price: "от 15 000 ₽/день",
      imageUrl: "/placeholder.svg"
    },
    {
      id: "car3",
      title: "Лимузин Lincoln",
      category: "Автомобиль",
      description: "Просторный белый лимузин на 10 персон. Идеально для свадебного кортежа.",
      rating: 4.8,
      price: "от 20 000 ₽/день",
      imageUrl: "/placeholder.svg"
    }
  ],
  venues: [
    {
      id: "venue1",
      title: "Ресторан 'Империал'",
      category: "Банкетный зал",
      description: "Элегантный банкетный зал в центре города. Вместимость до 100 гостей, собственная парковка.",
      rating: 4.8,
      price: "от 5 000 ₽/гость",
      imageUrl: "/placeholder.svg"
    },
    {
      id: "venue2",
      title: "Усадьба 'Лазурный берег'",
      category: "Загородная площадка",
      description: "Живописная усадьба на берегу озера. Открытая и закрытая площадки, размещение гостей.",
      rating: 4.9,
      price: "от 250 000 ₽",
      imageUrl: "/placeholder.svg"
    },
    {
      id: "venue3",
      title: "Отель 'Гранд Палас'",
      category: "Банкетный зал",
      description: "Роскошный зал с панорамными окнами и видом на город. Европейский сервис.",
      rating: 4.7,
      price: "от 6 000 ₽/гость",
      imageUrl: "/placeholder.svg"
    }
  ]
};

const CategorySection = () => {
  const [activeTab, setActiveTab] = useState("hosts");
  const isMobile = useIsMobile();

  return (
    <section className="py-10 md:py-12 bg-wedding-muted">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Лучшие свадебные услуги</h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Выбирайте из сотен проверенных профессионалов для вашего особенного дня
          </p>
        </div>

        <Tabs defaultValue="hosts" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-6 sm:mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="hosts" className="text-xs sm:text-sm">Ведущие</TabsTrigger>
              <TabsTrigger value="cars" className="text-xs sm:text-sm">Автомобили</TabsTrigger>
              <TabsTrigger value="venues" className="text-xs sm:text-sm">Банкетные залы</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="hosts" className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {dummyServices.hosts.slice(0, isMobile ? 2 : 3).map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cars" className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {dummyServices.cars.slice(0, isMobile ? 2 : 3).map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="venues" className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {dummyServices.venues.slice(0, isMobile ? 2 : 3).map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8 sm:mt-10 text-center">
          <Button asChild variant="outline" className="gap-1 w-full sm:w-auto">
            <Link to={`/services/${activeTab}`}>
              Показать все {activeTab === "hosts" ? "ведущие" : activeTab === "cars" ? "автомобили" : "банкетные залы"}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;