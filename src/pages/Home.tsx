import Header from "@/components/Header";
import ActionCard from "@/components/ActionCard";
import { PenLine, DollarSign, Truck } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-4xl font-light text-foreground mb-6">
            Welcome to Space Travel Control Centre, <span className="font-medium">Group 1</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl">
            It's 2030. As Cathay enters the era of space travel, this portal harnesses state-of-the-art AI tools to power safe, efficient, and innovative mission launches. Your decisions here will shape outcomes and guarantee a smooth, successful launch of our next frontier.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-light text-foreground mb-6">PENDING ACTION ITEMS</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ActionCard
            icon={<PenLine className="h-10 w-10" />}
            title="Urgent Legal Filings"
            difficulty="EASY"
            description="Cathay receives an urgent directive from the International Spaceflight Authority: submit all compliance filings within 48 hours to secure approval for commercial space travel operations."
            href="/task/urgent-legal-filings"
          />
          <ActionCard
            icon={<DollarSign className="h-10 w-10" />}
            title="Pricing Strategy Under Customer Surge"
            difficulty="MEDIUM"
            description="Our announcement of space travel has gone viral, and thousands of customers are requesting quotes and booking details."
            href="/task/pricing-strategy"
          />
          <ActionCard
            icon={<Truck className="h-10 w-10" />}
            title="Supply Chain Disruption Before Launch"
            difficulty="HARD"
            description="We are two weeks away from our first space flight launch when a critical supply chain disruption occurs: life-support system components are delayed due to geopolitical restrictions."
            href="/task/supply-chain"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
