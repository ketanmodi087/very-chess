import Image from "next/image";
import { SIDEBAR_MENU_ITEMS } from "../constants/sidebar";

// Sidebar Component
export default function Sidebar(): React.JSX.Element {
  return (
    <div className="flex flex-col justify-between h-full sidebar-wrapper p-6">
      <div>
        <Image src="/logo.svg" alt="logo" width={65} height={80} />
      </div>

      <nav className="w-full">
        {SIDEBAR_MENU_ITEMS.map((item) => {
          return (
            <div key={item.id}>
              {item.id === 'profile' && (
                <div className="border-t border-gray-600 my-3"></div>
              )}
              <div
                className="flex items-center space-x-3 py-3 rounded-lg text-white hover:cursor-pointer"
              >
                <Image src={item.icon} alt={item.label} width={24} height={24} />
                <span className="text-[16px] font-medium">{item.label}</span>
              </div>
            </div>
          );
        })}
      </nav>

      <div className="w-full space-y-3">
        <div className="flex items-center space-x-3 bg-gray-700 rounded-3xl px-3 py-3">
          <Image src="/icons/nav-filre-icon.svg" alt="flame" width={24} height={24} className="text-pink-500" />
          <span className="text-white text-[16px] font-medium">123</span>
        </div>
        <div className="flex items-center space-x-3 bg-gray-700 rounded-3xl px-3 py-3">
          <Image src="/icons/nav-daimond-icon.svg" alt="gem" width={24} height={24} className="text-cyan-400" />
          <span className="text-white text-[16px] font-medium">2456</span>
        </div>
      </div>
      
    </div>
  );
}