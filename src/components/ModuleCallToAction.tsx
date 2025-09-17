"use client";

import { ModuleCallToActionProps } from '../types';

// Module Call to Action Component
export default function ModuleCallToAction({ currentModule }: ModuleCallToActionProps): React.JSX.Element | null {
  if (!currentModule.rightTitle) {
    return null;
  }

  return (
    <div className="learning-content max-w-[210px] fixed-right-section">
      <h4 className="text-5xl font-bold text-black mb-1 tracking-tighter">
        {currentModule.rightTitle}
      </h4>
      <p className="text-lg text-gray-500">{currentModule.rightSubitle}</p>
    </div>
  );
}