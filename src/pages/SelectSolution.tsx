import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import SolutionCard from "@/components/SolutionCard";
import { PenLine, Sparkles, FileText } from "lucide-react";

const SelectSolution = () => {
  const navigate = useNavigate();
  const [showCopilotPrompt, setShowCopilotPrompt] = useState(false);

  const handleCopilotSelect = () => {
    setShowCopilotPrompt(true);
  };

  const copilotIcon = (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
        <Sparkles className="h-5 w-5 text-white" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <PenLine className="h-8 w-8 text-foreground" />
            <div>
              <div className="text-sm text-muted-foreground mb-1">Urgent Legal Filings</div>
              <h2 className="text-4xl font-light text-foreground">Task 1: Extract key details from forms</h2>
            </div>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl">
            To meet the 48-hour deadline, your first priority is extracting critical compliance details. Choose between 1) Microsoft Copilot for rapid AI assistance or 2) our IDP solution for structured, automated document intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SolutionCard
            icon={copilotIcon}
            title="Microsoft Copilot"
            description="Upload all 15,000 documents into Microsoft Copilot and request a consolidated output table that organizes extracted compliance data into a clear, standardized format for rapid review and submission."
            cost="10,000"
            time="1 hours"
            onSelect={handleCopilotSelect}
          />
          <SolutionCard
            icon={<FileText className="h-10 w-10" />}
            title="Intelligent Document Processing"
            description="Leverage the new Intelligent Document Processing (IDP) solution to ingest all 15,000 documents and automatically extract predefined compliance fields into a structured, standardized dataset for seamless validation and submission."
            cost="80,000"
            time="3 hours"
            onSelect={() => {}}
          />
        </div>

        {showCopilotPrompt && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-6 z-50">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl w-full">
              <div className="lg:col-span-2 border border-border bg-card rounded-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {copilotIcon}
                    <div>
                      <div className="text-xl font-normal text-foreground">
                        <span className="font-medium">Selected:</span> Microsoft Copilot
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowCopilotPrompt(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Upload all 15,000 documents into Microsoft Copilot and request a consolidated output table that organizes extracted compliance data into a clear, standardized format for rapid review and submission.
                </p>

                <div className="mb-6">
                  <label className="text-foreground text-lg mb-3 block">Prompt to Microsoft Copilot</label>
                  <textarea
                    className="w-full h-32 bg-secondary border border-border rounded-lg p-4 text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="I have uploaded 15,000 documents as attachments, please..."
                    defaultValue="I have uploaded 15,000 documents as attachments, please..."
                  />
                </div>

                <button className="w-12 h-12 bg-foreground text-background rounded-lg hover:bg-muted-foreground transition-colors flex items-center justify-center">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div className="border border-accent bg-card rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="h-5 w-5 text-accent" />
                    <h3 className="text-lg font-medium text-accent">Responsible AI reminder</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    When crafting prompts in Copilot, apply Responsible AI principles: ensure clarity, avoid bias, respect privacy, and validate outputs for accuracy and compliance before acting on them. Always prioritize transparency and accountability.
                  </p>
                </div>

                <div className="border border-yellow-600/50 bg-card rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <h3 className="text-lg font-medium text-yellow-500">Tips for this task</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Keep prompts clear and specific, avoid sensitive or biased language. Always prioritize privacy and compliance when handling large document sets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default SelectSolution;
