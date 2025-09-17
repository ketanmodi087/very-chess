"use client";

import { ModuleIntroductionProps } from '../types';

// Module Introduction Component
export default function ModuleIntroduction({ currentModule }: ModuleIntroductionProps): React.JSX.Element | null {
  if (!currentModule.leftTitle) {
    return null;
  }

  return (
    <div className="learning-content max-w-[210px] fixed-left-section">
      <h4 className="text-5xl font-bold bg-primary-gradient bg-clip-text text-transparent mb-1 tracking-tighter">
        {currentModule.leftTitle}
      </h4>
      <p className="text-lg text-gray-500">{currentModule.leftSubitle}</p>
    </div>
  );
}