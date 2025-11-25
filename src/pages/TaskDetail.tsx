import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, PenLine } from "lucide-react";

const TaskDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </button>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <PenLine className="h-10 w-10 text-foreground" />
            <div>
              <h2 className="text-4xl font-light text-foreground">Urgent Legal Filings</h2>
            </div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium uppercase bg-badge-easy text-badge-easy-foreground ml-4">
              EASY
            </span>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl">
            Cathay receives an urgent directive from the International Spaceflight Authority: submit all compliance filings within 48 hours to secure approval for commercial space travel operations.
          </p>
        </div>

        <div className="border border-border bg-card p-8 rounded-lg max-w-3xl">
          <p className="text-foreground text-lg leading-relaxed mb-6">
            You will need to figure out how to extract key compliance data quickly, populate standardized forms, and submit filings across multiple regulatory portals before the deadline.
          </p>
          <Button
            onClick={() => navigate("/task/urgent-legal-filings/select-solution")}
            className="bg-foreground text-background hover:bg-muted-foreground"
          >
            Start now
          </Button>
        </div>
      </main>
    </div>
  );
};

export default TaskDetail;
