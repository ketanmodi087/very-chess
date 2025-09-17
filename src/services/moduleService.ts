import { Module, ApiResponse } from '../types';

// Service to fetch modules data
export const fetchModules = async (): Promise<ApiResponse<Module[]>> => {
  try {
    const apiURL = '/data/modules.json';
    const response = await fetch(apiURL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const modules: Module[] = await response.json();
    
    return {
      success: true,
      data: modules,
      message: "Modules fetched successfully"
    };
  } catch (error) {
    console.error('Error fetching modules:', error);
    return {
      success: false,
      data: [],
      message: "Failed to fetch modules",
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};