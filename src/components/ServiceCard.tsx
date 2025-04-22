import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  rating: number;
  price: string;
  imageUrl: string;
}

const ServiceCard = ({ id, title, category, description, rating, price, imageUrl }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden service-card">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
        <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 flex items-center text-sm font-medium">
          <Star className="h-4 w-4 text-yellow-500 mr-1 inline" />
          {rating}
        </div>
      </div>
      <CardHeader className="p-4 pb-2">
        <div className="text-xs text-wedding uppercase font-semibold tracking-wide">{category}</div>
        <CardTitle className="text-lg mt-1">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <CardDescription className="line-clamp-2 text-sm">{description}</CardDescription>
        <div className="mt-3 font-semibold text-wedding">{price}</div>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0">
        <Button size="sm" variant="outline" className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          Даты
        </Button>
        <Button size="sm" asChild>
          <Link to={`/service/${id}`} className="flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            Связаться
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;