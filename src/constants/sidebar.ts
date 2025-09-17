// Sidebar Menu Items
export interface SidebarMenuItem {
  id: string;
  label: string;
  icon: string;
}

export const SIDEBAR_MENU_ITEMS: SidebarMenuItem[] = [
  { id: 'learn', label: 'Learn', icon: '/icons/nav-learn-icon.svg' },
  { id: 'practice', label: 'Practice', icon: '/icons/nav-practice-icon.svg' },
  { id: 'openings', label: 'Openings', icon: '/icons/nav-opening-icon.svg' },
  { id: 'endings', label: 'Endings', icon: '/icons/nav-endings-icon.svg' },
  { id: 'ai-coach', label: 'AI Coach', icon: '/icons/nav-ai-icon.svg' },
  { id: 'profile', label: 'Profile', icon: '/icons/nav-profile-icon.svg' },
];