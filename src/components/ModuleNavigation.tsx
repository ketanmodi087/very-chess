"use client";
import Image from "next/image";
import { useState } from "react";
import { ModuleNavigationProps } from '../types';

// Module Navigation Component
export default function ModuleNavigation({ 
  currentModule, 
  modules, 
  selectedModuleId, 
  onModuleSelect 
}: ModuleNavigationProps): React.JSX.Element {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleModuleSelect = (moduleId: string): void => {
    onModuleSelect(moduleId);
    setShowDropdown(false);
  };

  return (
    <div className="flex items-center justify-between breadcrumb-wrapper rounded-2xl bg-white sticky top-0 z-10 p-4 shadow-glow mb-14">
      <div>
        <p className="text-sm text-gray-500">
          <span className="modules-level">Level {currentModule.level}</span>, 
          <span className="modules-name"> Module {currentModule.index}</span>
        </p>
        <h4 className="text-2xl font-bold chapters-name">{currentModule.name}</h4>
      </div>
      
      <div className="flex items-center space-x-3 breadcrumb-button-action">
        <a href="#" className="text-sm w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center">
          <Image src="/icons/bubble-info.svg" alt="info" width={24} height={24} />
        </a>
        
        <div className="relative">
          <a 
            href="#" 
            className="text-sm w-12 h-12 rounded-xl bg-primary-gradient flex items-center justify-center module-action"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              setShowDropdown(!showDropdown);
            }}
          >
            <Image src="/icons/menu-bar.svg" alt="menu" width={24} height={24} />
          </a>
          
          {showDropdown && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
              <div className="py-2">
                {modules.map((module, index) => (
                  <div
                    key={`${module.id}-${index}`}
                    className={`px-4 py-3 cursor-pointer hover:bg-gray-50 ${
                      selectedModuleId === module.id ? 'bg-cyan-50 text-cyan-600' : 'text-gray-700'
                    }`}
                    onClick={() => handleModuleSelect(module.id)}
                  >
                    <div className="font-medium">{module.name}</div>
                    <div className="text-sm text-gray-500">
                      Level {module.level}, Module {module.index}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}