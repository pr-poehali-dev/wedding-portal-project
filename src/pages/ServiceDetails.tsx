import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Star, MessageCircle, Calendar as CalendarIcon, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Временные данные для демонстрации
const servicesData = {
  "host1": {
    id: "host1",
    title: "Александр Петров - Ведущий",
    category: "Ведущие",
    description: "Профессиональный ведущий с опытом более 10 лет. Проведение свадеб, юбилеев, корпоративов. Индивидуальный подход к каждому мероприятию, работа с любой аудиторией.",
    longDescription: "Александр Петров - опытный ведущий, который знает, как сделать ваше мероприятие незабываемым. С его чувством юмора, харизмой и профессионализмом ваша свадьба пройдет на высшем уровне. Он умеет находить подход к гостям любого возраста и темперамента, создавая атмосферу веселья и комфорта. В программу входят оригинальные конкурсы, музыкальное сопровождение и многое другое.",
    rating: 4.9,
    reviews: 47,
    price: "от 30 000 ₽",
    imageUrl: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    availableDates: [new Date(2023, 6, 15), new Date(2023, 6, 20), new Date(2023, 7, 5)]
  },
  "car1": {
    id: "car1",
    title: "Mercedes S-Class",
    category: "Аренда авто",
    description: "Роскошный белый Mercedes S-Class для вашей свадьбы. Комфорт, элегантность, пунктуальность.",
    longDescription: "Роскошный белый Mercedes S-Class - идеальный выбор для свадебного кортежа. Этот автомобиль сочетает в себе элегантность, комфорт и статус, что сделает ваш особенный день еще более запоминающимся. В услугу входит профессиональный водитель, украшение автомобиля и красная дорожка для фотосессии. Мы гарантируем пунктуальность и безупречный сервис.",
    rating: 4.7,
    reviews: 23,
    price: "от 15 000 ₽",
    imageUrl: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    availableDates: [new Date(2023, 6, 10), new Date(2023, 6, 17), new Date(2023, 6, 24)]
  }
};

const ServiceDetails = () => {
  const { id } = useParams();
  const service = servicesData[id as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-10 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Сервис не найден</h1>
          <p className="text-muted-foreground mb-6">К сожалению, запрашиваемый сервис не существует или был удален.</p>
          <Button asChild>
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" className="mb-4" asChild>
            <Link to="/" className="flex items-center gap-1">
              <ChevronLeft className="h-4 w-4" />
              Назад к списку
            </Link>
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-3xl font-bold">{service.title}</h1>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge>{service.category}</Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{service.rating}</span>
                        <span className="text-muted-foreground">({service.reviews} отзывов)</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-primary">{service.price}</p>
                  </div>
                </div>
              </div>

              <div className="aspect-video mb-6 overflow-hidden rounded-lg">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <Tabs defaultValue="about" className="mb-8">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="about">О сервисе</TabsTrigger>
                  <TabsTrigger value="gallery">Галерея</TabsTrigger>
                  <TabsTrigger value="reviews">Отзывы</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="mt-4">
                  <div className="prose max-w-none">
                    <p>{service.longDescription}</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="gallery" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {service.gallery.map((img, index) => (
                      <div key={index} className="aspect-square rounded-lg overflow-hidden">
                        <img 
                          src={img} 
                          alt={`${service.title} ${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews" className="mt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Марина С.</h3>
                        <p className="text-sm text-muted-foreground">14 июня 2023</p>
                      </div>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className={`h-4 w-4 ${star <= 5 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <p>Отличный сервис! Рекомендую всем, кто планирует свадьбу. Всё было организовано на высшем уровне.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <Card className="sticky top-4">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Забронировать</h3>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      Доступные даты
                    </h4>
                    <Calendar 
                      mode="single"
                      selected={new Date()}
                      className="rounded-md border"
                      disabled={(date) => !service.availableDates.some(
                        avDate => avDate.getDate() === date.getDate() && 
                                 avDate.getMonth() === date.getMonth() && 
                                 avDate.getFullYear() === date.getFullYear()
                      )}
                    />
                  </div>

                  <div className="space-y-4">
                    <Button className="w-full">Забронировать</Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="#" className="flex items-center justify-center gap-2">
                        <MessageCircle className="h-4 w-4" />
                        Написать сообщение
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetails;