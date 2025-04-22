import { Link } from "react-router-dom";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Calendar, UserCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-wedding" />
          <span className="font-bold text-xl text-wedding">СвадьбаПлюс</span>
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Услуги</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] lg:grid-cols-3">
                  <Link to="/services/hosts" className="group grid h-full w-full items-center justify-center rounded-md bg-muted p-4 hover:bg-wedding hover:text-white transition-colors">
                    <div className="text-sm font-medium leading-none">Ведущие</div>
                  </Link>
                  <Link to="/services/cars" className="group grid h-full w-full items-center justify-center rounded-md bg-muted p-4 hover:bg-wedding hover:text-white transition-colors">
                    <div className="text-sm font-medium leading-none">Аренда машин</div>
                  </Link>
                  <Link to="/services/venues" className="group grid h-full w-full items-center justify-center rounded-md bg-muted p-4 hover:bg-wedding hover:text-white transition-colors">
                    <div className="text-sm font-medium leading-none">Банкетные залы</div>
                  </Link>
                  <Link to="/services/decorations" className="group grid h-full w-full items-center justify-center rounded-md bg-muted p-4 hover:bg-wedding hover:text-white transition-colors">
                    <div className="text-sm font-medium leading-none">Оформление</div>
                  </Link>
                  <Link to="/services/artists" className="group grid h-full w-full items-center justify-center rounded-md bg-muted p-4 hover:bg-wedding hover:text-white transition-colors">
                    <div className="text-sm font-medium leading-none">Артисты</div>
                  </Link>
                  <Link to="/services/all" className="group grid h-full w-full items-center justify-center rounded-md bg-muted p-4 hover:bg-wedding hover:text-white transition-colors">
                    <div className="text-sm font-medium leading-none">Все услуги</div>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/about" className={navigationMenuTriggerStyle()}>
                О нас
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/blog" className={navigationMenuTriggerStyle()}>
                Блог
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/messages">
              <MessageCircle className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/calendar">
              <Calendar className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="default" asChild>
            <Link to="/profile">
              <UserCircle className="h-5 w-5 mr-2" />
              Войти
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;