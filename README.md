# Task Manager

A beautiful and intuitive task management application built with React, TypeScript, and Tailwind CSS. Features drag-and-drop functionality for task status management and persistent storage.

![Task Manager Preview](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2072)

## Features

- ✨ Modern, clean UI with smooth animations
- 🎯 Intuitive task management
- 🔄 Drag-and-drop functionality for task status updates
- 💾 Persistent storage using localStorage
- 📱 Fully responsive design
- 🎨 Beautiful gradients and shadows
- 🚀 Built with modern technologies

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS
- Dragula (for drag-and-drop)
- Lucide React (for icons)
- Vite (for development and building)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/avi074/ToDo-Dragula.git
cd ToDo-Dragula
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Usage

1. **Adding Tasks**
   - Type your task in the input field
   - Click "Add Task" or press Enter
   - The task will appear in the "Pending" section

2. **Completing Tasks**
   - Drag any task from the "Pending" section to "Done"
   - The task will be marked as complete with a strikethrough effect

3. **Managing Tasks**
   - Tasks are automatically saved to localStorage
   - Your tasks persist between browser sessions
   - Drag tasks between sections to update their status

## Project Structure

```
src/
├── components/
│   ├── Header.tsx        # App header with logo
│   ├── TaskInput.tsx     # Task input form
│   └── TaskSection.tsx   # Task list section (Pending/Done)
├── types.ts              # TypeScript interfaces
├── App.tsx              # Main application component
└── main.tsx            # Application entry point
```

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.