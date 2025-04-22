import { Calendar, Users, MessageCircle } from 'lucide-react';

const FeatureSection = () => {
  return (
    <section className="py-10 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl">
                Всё необходимое для организации свадьбы
              </h2>
              <p className="max-w-[600px] text-gray-500 text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                ПРОСвадьбу объединяет всех специалистов и услуги для организации вашего идеального дня
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mx-auto">
            <div className="flex flex-col items-center space-y-3 p-4 sm:p-6 rounded-lg bg-muted border border-border">
              <div className="bg-wedding p-2 sm:p-3 rounded-full text-white">
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-center">Календарь свободных дат</h3>
              <p className="text-xs sm:text-sm text-center text-muted-foreground">
                Сразу видите доступность специалистов и площадок на нужную вам дату, без долгих переписок
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-4 sm:p-6 rounded-lg bg-muted border border-border">
              <div className="bg-wedding p-2 sm:p-3 rounded-full text-white">
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-center">Удобный мессенджер</h3>
              <p className="text-xs sm:text-sm text-center text-muted-foreground">
                Общайтесь со всеми подрядчиками в одном месте, храните историю переписок и документы
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-4 sm:p-6 rounded-lg bg-muted border border-border">
              <div className="bg-wedding p-2 sm:p-3 rounded-full text-white">
                <Users className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-center">Проверенные специалисты</h3>
              <p className="text-xs sm:text-sm text-center text-muted-foreground">
                Мы тщательно отбираем и проверяем каждого специалиста перед публикацией на платформе
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;