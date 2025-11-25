import { ReactNode } from "react";
import { Button } from "./ui/button";
import { Clock, DollarSign } from "lucide-react";

interface SolutionCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  cost: string;
  time: string;
  onSelect: () => void;
}

const SolutionCard = ({ icon, title, description, cost, time, onSelect }: SolutionCardProps) => {
  return (
    <div className="border border-border bg-card p-6 rounded-lg">
      <div className="mb-4 text-foreground">{icon}</div>
      <h3 className="text-xl font-heading font-normal text-foreground mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
      
      <div className="flex items-center gap-6 mb-6">
        <Button onClick={onSelect} variant="secondary" className="bg-foreground text-background hover:bg-muted-foreground">
          Select
        </Button>
        <div className="flex items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            <span>{cost}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
