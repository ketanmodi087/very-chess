# Very Chess - Frontend Admin Panel

A modern, responsive admin panel for Very Chess built with Next.js 15, TypeScript, and Tailwind SCSS. This application provides an intuitive interface for managing chess learning modules, tracking progress, and delivering an engaging educational experience.

## 🚀 Features

- **Interactive Dashboard**: Clean and modern interface for managing chess learning modules
- **Module Management**: Organize and track chess learning content with progress indicators
- **TypeScript Support**: Full type safety and enhanced developer experience
- **Component Architecture**: Modular, reusable components for maintainable code

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.3
- **Language**: TypeScript
- **Styling**: Tailwind SCSS
- **UI Components**: Custom components with Standard Design principles
- **State Management**: React Hooks (useState, useEffect, useRef)
- **Icons**: SVG icons with Next.js Image optimization

## 📁 Project Structure

```
very-chess-FE/
├── public/
│   ├── data/
│   │   └── modules.json          # Learning modules data
│   ├── icons/                    # SVG icons
│   └── images/                   # Static images
├── src/
│   ├── app/
│   │   ├── globals.scss          # Global styles
│   │   ├── layout.tsx            # Root layout component
│   │   └── page.tsx              # Home page
│   ├── components/
│   │   ├── AdminLayout.tsx       # Main layout wrapper
│   │   ├── Dashboard.tsx         # Main dashboard component
│   │   ├── ModuleNavigation.tsx  # Module selection navigation
│   │   ├── ModuleIntroduction.tsx # Module intro section
│   │   ├── ChapterTimeline.tsx   # Chapter progress timeline
│   │   ├── ModuleCallToAction.tsx # Call-to-action section
│   │   └── Sidebar.tsx           # Navigation sidebar
│   ├── constants/
│   │   └── sidebar.ts            # Sidebar menu configuration
│   ├── services/
│   │   └── moduleService.ts      # API service for modules
│   ├── types/
│   │   └── index.ts              # TypeScript type definitions
│   └── utils/
│       └── scrollUtils.ts        # Scroll-to-top utility hook
├── tsconfig.json                 # TypeScript configuration
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── package.json                  # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ketanmodi087/very-chess.git
   cd very-chess-FE
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📝 Available Scripts

- `npm run dev` - Start development server

## 📝 Development Notes

### Code Style
- Use TypeScript for all new components
- Follow React best practices
- Use Tailwind CSS for styling
- Implement proper error handling

### Performance
- Optimize images with Next.js Image component
- Use React.memo for expensive components
- Implement proper loading states


**Built with ❤️ for chess enthusiasts**