import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface ActionCardProps {
  icon: ReactNode;
  title: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  description: string;
  href: string;
}

const ActionCard = ({ icon, title, difficulty, description, href }: ActionCardProps) => {
  const navigate = useNavigate();
  
  const difficultyColors = {
    EASY: "bg-badge-easy text-badge-easy-foreground",
    MEDIUM: "bg-badge-medium text-badge-medium-foreground",
    HARD: "bg-badge-hard text-badge-hard-foreground",
  };

  return (
    <div
      onClick={() => navigate(href)}
      className="border border-border bg-card p-6 rounded-lg hover:border-muted-foreground transition-colors cursor-pointer"
    >
      <div className="mb-4 text-foreground">{icon}</div>
      <h3 className="text-xl font-heading font-normal text-foreground mb-3">{title}</h3>
      <span
        className={`inline-block px-3 py-1 rounded-full text-xs font-medium uppercase mb-4 ${difficultyColors[difficulty]}`}
      >
        {difficulty}
      </span>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default ActionCard;
