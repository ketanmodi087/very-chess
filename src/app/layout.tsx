import "./globals.scss";
import AdminLayout from "../components/AdminLayout";
import { ReactNode } from 'react';

export const metadata = {
  title: "Very Chess Admin",
  description: "Admin Panel built with Next.js + Tailwind",
};

interface RootLayoutProps {
  children: ReactNode;
}

// Root Layout
export default function RootLayout({ children }: RootLayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <body className="bg-secondary" suppressHydrationWarning={true}>
        <AdminLayout>{children}</AdminLayout>
      </body>
    </html>
  );
}