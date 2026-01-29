# Task Manager Evolution - Next.js Version

This is the Next.js implementation of the Task Manager Evolution project - a modern, server-agnostic task management application. This version builds upon the vanilla and React implementations, showcasing how the same application can be built with Next.js 16, React 19, and Tailwind CSS.

## Overview

The Task Manager Evolution series demonstrates the evolution of a simple task management application across different JavaScript frameworks and tools:
- **Vanilla**: Pure HTML, CSS, and JavaScript
- **React**: React with Vite
- **Next.js**: Modern React framework with server capabilities

This Next.js version provides:
- **Modern React 19**: Latest React features and improvements
- **Next.js 16**: Full-stack React framework with built-in optimization
- **Tailwind CSS 4**: Utility-first CSS framework for rapid styling
- **Dark Mode Support**: Responsive design with dark mode compatibility
- **UUID Task IDs**: Unique identification for each task using uuid library
- **Type Safety**: JavaScript with ESLint configuration

## Features

- **Add Tasks**: Create new tasks with a simple input field
- **Mark as Complete**: Toggle task completion status with visual feedback
- **Delete Tasks**: Remove tasks from your list instantly
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Clean UI**: Modern interface using Tailwind CSS utility classes
- **No External Database**: Tasks stored in component state (in-memory)

## Project Structure

```
nextjs/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.js            # Root layout component
│   └── page.js              # Main task manager application
├── public/                  # Static assets directory
├── eslint.config.mjs        # ESLint configuration
├── jsconfig.json            # JavaScript project configuration
├── next.config.mjs          # Next.js configuration
├── package.json             # Project dependencies and scripts
├── postcss.config.mjs       # PostCSS configuration for Tailwind
├── README.md                # This file
└── tailwind.config.js       # Tailwind CSS configuration
```

## Getting Started

### Prerequisites

- **Node.js**: v18 or higher
- **npm** or **yarn** package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/muhammad-husnain-ali-web/task-manager-evolution.git
cd task-manager-evolution/nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## Usage

1. **Add a Task**: Type your task in the input field and click "Add Task" or press Enter
2. **Complete a Task**: Click the checkbox next to a task to mark it as completed (task will show a strikethrough)
3. **Delete a Task**: Click the delete button to remove the task from your list

## Available Scripts

- `npm run dev` - Start the development server with hot module replacement (HMR)
- `npm run build` - Create an optimized production build
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Technologies Used

### Core Framework
- **Next.js 16.1.6** - React framework for production
- **React 19.2.3** - JavaScript library for building user interfaces
- **React DOM 19.2.3** - React rendering for web

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS 4** - CSS transformations and processing

### Development Tools
- **ESLint 9** - JavaScript linting tool
- **Babel Plugin React Compiler** - React compiler for optimization

### Utilities
- **UUID 13.0.0** - Generate unique IDs for tasks

## Technical Details

### Client Component
The application uses the `'use client'` directive to make the main component a client-side component, enabling React hooks like `useState` for state management.

### State Management
- **task**: Stores the current input field value
- **tasks**: Array of task objects with properties: `id`, `text`, and `completed`

### Key Functions
- `handleAddClick()` - Adds a new task to the list
- `deleteTask(id)` - Removes a task by its ID
- `handleChecked(id)` - Toggles the completion status of a task

### Styling Approach
Tailwind CSS utility classes are used throughout for responsive design:
- Flexbox layout for centering and alignment
- Responsive breakpoints (`lg:w-[70vw]`) for different screen sizes
- Dark mode support with `dark:` prefix
- Hover effects for interactive elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Comparison with Other Versions

| Feature | Vanilla | React | Next.js |
|---------|---------|-------|---------|
| Build Tool | None | Vite | Next.js |
| Framework | None | React 18 | React 19 |
| CSS Framework | Plain CSS | Plain CSS | Tailwind CSS 4 |
| Development Server | File protocol | Vite dev server | Next.js dev server |
| Production Optimization | None | Vite build | Next.js optimization |

## Future Enhancements

- Local storage persistence
- Backend API integration
- User authentication
- Task categories and tags
- Due dates and reminders
- Dark mode toggle
- Task search and filtering
- Drag and drop reordering

## License

This project is licensed under the MIT License.

## Author

This project is part of the Task Manager Evolution series by Muhammad Husnain Ali.

