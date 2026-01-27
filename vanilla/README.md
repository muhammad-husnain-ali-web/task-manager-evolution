# Task Manager

A simple, lightweight task management application built with vanilla HTML, CSS, and JavaScript. This project demonstrates core web development concepts including DOM manipulation, event handling, and responsive design.

## Features

- **Add Tasks**: Easily add new tasks with a simple input field
- **Mark as Complete**: Check off completed tasks with visual strikethrough styling
- **Delete Tasks**: Remove tasks from the list with a delete button
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Clean UI**: Modern, intuitive interface with a pleasant color scheme
- **No Dependencies**: Pure vanilla JavaScript - no frameworks or libraries required

## Project Structure

```
task-manager-evolution/vanilla/
├── index.html      # HTML structure and markup
├── script.js       # JavaScript functionality and event handling
├── style.css       # Styling and responsive design
└── README.md       # Project documentation
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (optional, for development)

### Installation

1. Clone this repository:
```bash
git clone https://github.com/muhammad-husnain-ali-web/task-manager-evolution.git
cd task-manager-evolution/vanilla
```

2. Open `index.html` in your web browser:
   - Double-click the file, or
   - Right-click → Open With → Browser, or
   - Use a local server (recommended for development)

## Usage

1. **Add a Task**: Type your task in the input field and click "Add Task" or press Enter
2. **Complete a Task**: Check the checkbox next to a task to mark it as completed
3. **Delete a Task**: Click the "Delete" button to remove a task from the list

## Technical Details

### HTML Structure
- Semantic HTML5 markup
- Input field for task entry
- Unordered list for dynamic task rendering
- Button controls for adding and deleting tasks

### JavaScript Functionality
- **Event Listeners**: Click handlers for add/delete buttons and checkboxes
- **DOM Manipulation**: Dynamic creation and removal of list items
- **State Management**: Tasks are stored in the DOM (consider localStorage for persistence)

### CSS Styling
- **Color Scheme**: Purple buttons (#6c63ff), red delete buttons (#ff4d4d)
- **Flexbox Layout**: Modern, responsive positioning
- **Media Queries**: Optimized for screens up to 768px width
- **Visual Feedback**: Hover effects, strikethrough on completed tasks

## Features in Detail

### Add Task
- Non-empty validation ensures only valid tasks are added
- Input clears automatically after adding a task
- Console logging for debugging

### Complete Task
- Checkbox toggle adds/removes `text-completed` class
- Completed tasks show with strikethrough and gray color
- Visual feedback for user interaction

### Delete Task
- Removes the entire task item from the DOM
- Red delete button for clear visual distinction

## Responsive Design

The application is fully responsive:
- **Desktop (>768px)**: Container width 40%, full-width input
- **Mobile (<768px)**: Container width 80%, stacked layout, adjusted button positioning

## Future Enhancements

- **Local Storage**: Persist tasks across browser sessions
- **Edit Tasks**: Allow users to modify existing tasks
- **Task Priorities**: Add priority levels with color coding
- **Due Dates**: Include date/time tracking
- **Categories**: Organize tasks by category or tags
- **Dark Mode**: Add theme switching capability
- **Animations**: Smooth transitions for task actions

## Browser Support

- Chrome/Edge: Fully supported
- Firefox: Fully supported
- Safari: Fully supported
- IE 11: Not supported (uses modern JavaScript)

## License

This project is open source and available under the MIT License.

## Author

Created as part of the Task Manager Evolution project series.


---

**Note**: Tasks are currently stored in the DOM only. Refreshing the page will clear all tasks.
