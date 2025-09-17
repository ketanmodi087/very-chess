"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useScrollToTop } from "../utils/scrollUtils";
import { fetchModules } from "../services/moduleService";
import { Module } from "../types";
import ModuleNavigation from "./ModuleNavigation";
import ModuleIntroduction from "./ModuleIntroduction";
import ChapterTimeline from "./ChapterTimeline";
import ModuleCallToAction from "./ModuleCallToAction";

// Dashboard Component
export default function Dashboard(): React.JSX.Element {
  const [modules, setModules] = useState<Module[]>([]);
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const dashboardRef = useRef<HTMLDivElement>(null);
  
  const currentModule = modules.find(module => module.id === selectedModuleId) || modules[0];
  const { showScrollTop, scrollToTop } = useScrollToTop(dashboardRef);

  // Fetch modules data on component mount
  useEffect(() => {
    const loadModules = async (): Promise<void> => {
      try {
        setLoading(true);
        const response = await fetchModules();
        
        if (response.success) {
          setModules(response.data);
          if (response.data.length > 0) {
            setSelectedModuleId(response.data[0].id);
          }
        } else {
          console.error('Failed to load modules:', response.message);
        }
      } catch (error) {
        console.error('Error loading modules:', error);
      } finally {
        setLoading(false);
      }
    };

    loadModules();
  }, []);

  // Handle module selection
  const handleModuleSelect = (moduleId: string): void => {
    setSelectedModuleId(moduleId);
  };

  if (loading) {
    return (
      <div className="h-full dashboard-wrapper dashboard-gradient position-relative rounded-3xl p-4 overflow-x-hidden flex items-center justify-center">
        <div className="text-lg">Loading ...</div>
      </div>
    );
  }

  return (
    <div className="h-full dashboard-wrapper dashboard-gradient position-relative rounded-3xl p-4 overflow-x-hidden" ref={dashboardRef}>
      <ModuleNavigation
        currentModule={currentModule}
        modules={modules}
        selectedModuleId={selectedModuleId}
        onModuleSelect={handleModuleSelect}
      />

      <div className="learning-path-container">
        <div className="learning-path-inner-container">          
          <ModuleIntroduction currentModule={currentModule} />
          <ChapterTimeline currentModule={currentModule} />
          <ModuleCallToAction currentModule={currentModule} />
        </div>
      </div>

        <button
          className="fixed bottom-10 right-10 w-12 h-12 bg-white rounded-full cursor-pointer flex items-center justify-center shadow transition-opacity duration-300"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <Image src="/icons/scrolltop.svg" alt="scroll to top" width={24} height={24} />
        </button>
    </div>
  );
}