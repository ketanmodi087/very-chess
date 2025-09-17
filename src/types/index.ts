export interface Chapter {
  id: string;
  image: string;
  progressPercentage: number;
}

export interface Module {
  id: string;
  index: number;
  level: number;
  name: string;
  leftTitle?: string;
  leftSubitle?: string;
  rightTitle?: string;
  rightSubitle?: string;
  chapters: Chapter[];
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
  error?: string;
}

// Component Props types
export interface ModuleNavigationProps {
  currentModule: Module;
  modules: Module[];
  selectedModuleId: string;
  onModuleSelect: (moduleId: string) => void;
}

export interface ModuleIntroductionProps {
  currentModule: Module;
}

export interface ChapterTimelineProps {
  currentModule: Module;
}

export interface ModuleCallToActionProps {
  currentModule: Module;
}