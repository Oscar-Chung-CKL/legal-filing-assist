import { ChevronDown, Plane } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-background px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Plane className="h-6 w-6 text-foreground" />
          <h1 className="text-lg font-heading font-normal text-foreground">Space Travel Control Centre</h1>
        </div>
        <button className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors">
          <span className="font-medium">Group 1</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
};

export default Header;
