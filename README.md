# React Spreadsheet Application

A modern, feature-rich spreadsheet application built with React, TypeScript, and Tailwind CSS. This application provides a comprehensive interface for managing data in a spreadsheet format with advanced filtering, sorting, and user management capabilities.

## 🚀 Live Demo

**[View Live Application](https://react-spreadsheet-project.netlify.app/)**

*The main interface showing the spreadsheet with job requests, status tracking, and user assignments*

### Features Overview
- **Interactive Data Table**: View and manage job requests with real-time data
- **Advanced Filtering**: Filter by status (All Orders, Pending, Reviewed, Arrived)
- **Sorting Capabilities**: Sort by any column (Job Request, Submitted Date, Status, etc.)
- **User Management**: Assign tasks to team members with avatar display
- **Priority System**: Visual priority indicators (High, Medium, Low)
- **Status Tracking**: Track progress with color-coded status badges
- **Responsive Design**: Optimized for all screen sizes

## ✨ Features

### 🎯 Core Functionality
- **Data Management**: Complete CRUD operations for spreadsheet data
- **Real-time Filtering**: Dynamic filtering by status categories
- **Multi-column Sorting**: Sort by any column with visual indicators
- **Search & Filter**: Advanced search and filtering capabilities
- **Export/Import**: Data export and import functionality
- **Responsive Layout**: Mobile-first responsive design

### 👥 User Interface
- **Modern Design**: Clean, professional interface with Tailwind CSS
- **User Avatars**: Visual representation of team members
- **Status Badges**: Color-coded status indicators
- **Priority Labels**: Visual priority system
- **Interactive Elements**: Hover states and smooth transitions
- **Accessibility**: WCAG compliant design

### 🔧 Technical Features
- **TypeScript**: Full type safety and better development experience
- **Component Architecture**: Modular, reusable React components
- **Custom Hooks**: Efficient state management with custom hooks
- **Performance Optimized**: Optimized rendering and data handling
- **Modern Tooling**: Vite for fast development and building

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React 0.344.0
- **Date Handling**: date-fns 2.30.0
- **Build Tool**: Vite 5.4.2
- **Deployment**: Netlify

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-spreadsheet-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header.tsx       # Application header with navigation
│   ├── Toolbar.tsx      # Action toolbar with buttons
│   ├── SpreadsheetTable.tsx  # Main data table component
│   ├── BottomNavigation.tsx  # Status filter navigation
│   ├── UserAvatar.tsx   # User avatar component
│   ├── StatusBadge.tsx  # Status indicator component
│   └── PriorityBadge.tsx # Priority indicator component
├── hooks/               # Custom React hooks
│   └── useSpreadsheetData.ts # Data management hook
├── data/                # Mock data and types
│   └── mockData.ts      # Sample data for development
├── types/               # TypeScript type definitions
│   └── index.ts         # Application types
└── App.tsx              # Main application component
```

## 🎨 Component Overview

### Core Components

- **`SpreadsheetTable`**: Main data table with sorting and interaction
- **`Header`**: Application header with user info and navigation
- **`Toolbar`**: Action buttons for import, export, share, and more
- **`BottomNavigation`**: Status-based filtering tabs
- **`UserAvatar`**: User profile pictures with tooltips
- **`StatusBadge`**: Color-coded status indicators
- **`PriorityBadge`**: Priority level indicators

### Custom Hooks

- **`useSpreadsheetData`**: Manages data state, filtering, and sorting logic

## 📊 Data Structure

The application manages job requests with the following structure:

```typescript
interface SpreadsheetRow {
  id: string;
  jobRequest: string;
  submitted: string;
  status: 'In-progress' | 'Need to start' | 'Complete' | 'Blocked';
  submitter: User;
  url: string;
  assigned: User;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  estimatedValue: number;
}
```

## 🎯 Key Features Implementation

### Filtering System
- **Status-based filtering**: Filter by All Orders, Pending, Reviewed, Arrived
- **Real-time updates**: Instant filtering without page reload
- **Count indicators**: Show number of items in each category

### Sorting Functionality
- **Multi-column sorting**: Sort by any column
- **Visual indicators**: Arrow indicators show sort direction
- **Type-aware sorting**: Proper sorting for dates, numbers, and text

### User Management
- **Avatar display**: Visual user representation
- **Tooltip information**: Hover for user details
- **Assignment tracking**: Track who's assigned to what

## 🚀 Deployment

The application is deployed on Netlify with automatic deployments from the main branch.

**Live URL**: [https://dynamic-madeleine-27f763.netlify.app](https://react-spreadsheet-project.netlify.app/)

### Deploy Your Own

1. Fork this repository
2. Connect to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Development Guidelines

1. **Component Structure**: Keep components focused and reusable
2. **TypeScript**: Maintain strict type safety
3. **Styling**: Use Tailwind CSS utility classes
4. **State Management**: Use custom hooks for complex state logic
5. **Performance**: Optimize re-renders with proper dependency arrays

## 🎨 Design System

### Colors
- **Primary**: Blue tones for interactive elements
- **Status Colors**: 
  - In-progress: Blue
  - Need to start: Orange
  - Complete: Green
  - Blocked: Red
- **Priority Colors**:
  - High: Red
  - Medium: Yellow
  - Low: Green

### Typography
- **Headings**: Font weights 600-700
- **Body**: Font weight 400-500
- **Labels**: Font weight 500-600

### Spacing
- **Consistent 8px grid system**
- **Proper component spacing**
- **Responsive padding and margins**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the beautiful icons
- **Vite** for the fast build tool
- **Netlify** for seamless deployment

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
