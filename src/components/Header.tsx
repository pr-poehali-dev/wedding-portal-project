import { useState } from "react";
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
import { Heart, MessageCircle, Calendar, UserCircle, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const MobileMenu = () => (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-6 py-4">
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <Heart className="h-6 w-6 text-wedding" />
            <span className="font-bold text-xl text-wedding">ПРОСвадьбу</span>
          </Link>
          
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-medium">Услуги</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/services/hosts" className="text-sm p-2 rounded-md hover:bg-muted" onClick={() => setIsMenuOpen(false)}>Ведущие</Link>
              <Link to="/services/cars" className="text-sm p-2 rounded-md hover:bg-muted" onClick={() => setIsMenuOpen(false)}>Аренда машин</Link>
              <Link to="/services/venues" className="text-sm p-2 rounded-md hover:bg-muted" onClick={() => setIsMenuOpen(false)}>Банкетные залы</Link>
              <Link to="/services/decorations" className="text-sm p-2 rounded-md hover:bg-muted" onClick={() => setIsMenuOpen(false)}>Оформление</Link>
              <Link to="/services/artists" className="text-sm p-2 rounded-md hover:bg-muted" onClick={() => setIsMenuOpen(false)}>Артисты</Link>
              <Link to="/services/all" className="text-sm p-2 rounded-md hover:bg-muted" onClick={() => setIsMenuOpen(false)}>Все услуги</Link>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <Link to="/about" className="text-sm p-2 rounded-md hover:bg-muted" onClick={() => setIsMenuOpen(false)}>О нас</Link>
            <Link to="/blog" className="text-sm p-2 rounded-md hover:bg-muted" onClick={() => setIsMenuOpen(false)}>Блог</Link>
          </div>
          
          <div className="flex flex-col gap-2 mt-4">
            <Button variant="default" asChild className="w-full justify-start">
              <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                <UserCircle className="h-5 w-5 mr-2" />
                Войти
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full justify-start">
              <Link to="/messages" onClick={() => setIsMenuOpen(false)}>
                <MessageCircle className="h-5 w-5 mr-2" />
                Сообщения
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full justify-start">
              <Link to="/calendar" onClick={() => setIsMenuOpen(false)}>
                <Calendar className="h-5 w-5 mr-2" />
                Календарь
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  const DesktopMenu = () => (
    <>
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
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-wedding" />
          <span className="font-bold text-xl text-wedding">ПРОСвадьбу</span>
        </Link>
        
        {isMobile ? <MobileMenu /> : <DesktopMenu />}
      </div>
    </header>
  );
};

export default Header;