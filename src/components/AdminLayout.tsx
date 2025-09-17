import { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface AdminLayoutProps {
  children: ReactNode;
}

// Admin Layout
export default function AdminLayout({ children }: AdminLayoutProps): React.JSX.Element {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 h-full main-content p-6">        
          {children}        
      </div>
    </div>
  );
}