import { Link } from "react-router-dom";
import { Heart, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-wedding-muted border-t py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-wedding" />
            <span className="font-bold text-xl text-wedding">СвадьбаПлюс</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Платформа, объединяющая лучших свадебных специалистов города для организации вашего незабываемого дня.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-wedding">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-wedding">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-wedding">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4">Услуги</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services/hosts" className="hover:text-wedding">Ведущие</Link></li>
            <li><Link to="/services/cars" className="hover:text-wedding">Аренда машин</Link></li>
            <li><Link to="/services/venues" className="hover:text-wedding">Банкетные залы</Link></li>
            <li><Link to="/services/decorations" className="hover:text-wedding">Оформление</Link></li>
            <li><Link to="/services/artists" className="hover:text-wedding">Артисты</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4">Информация</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-wedding">О нас</Link></li>
            <li><Link to="/blog" className="hover:text-wedding">Блог</Link></li>
            <li><Link to="/faq" className="hover:text-wedding">Частые вопросы</Link></li>
            <li><Link to="/become-partner" className="hover:text-wedding">Стать партнёром</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4">Контакты</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Email: info@weddingplus.ru</li>
            <li>Телефон: +7 (999) 123-45-67</li>
            <li>Адрес: г. Москва, ул. Свадебная, 1</li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-8 pt-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2023 СвадьбаПлюс. Все права защищены.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-wedding">Политика конфиденциальности</Link>
            <Link to="/terms" className="hover:text-wedding">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;