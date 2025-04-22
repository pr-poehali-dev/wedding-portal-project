import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

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
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <Badge className="absolute top-2 right-2 bg-wedding">{category}</Badge>
      </div>
      <CardContent className="pt-4 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{title}</h3>
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
        <p className="font-medium text-sm mt-2 text-wedding">{price}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild variant="outline" className="w-full">
          <Link to={`/service/${id}`}>Подробнее</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;