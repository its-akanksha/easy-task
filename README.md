# Easy Task

## Overview
Easy Task is a task management system built with Angular, designed to streamline task tracking and management for users. It offers an intuitive UI, seamless local storage integration, and efficient performance.

## Features
- **User Authentication**: Sign-up and login functionality with local storage persistence.
- **Task Management**: Create, view, and complete tasks with detailed descriptions and due dates.
- **Responsive UI**: Clean and easy-to-use interface with reusable components.
- **Local Storage Integration**: Ensures tasks persist across sessions without a centralized backend.
- **Modular Architecture**: Scalability and maintainability with well-structured Angular components.

## Setup & Installation
### Prerequisites
- Node.js (v16+)
- Angular CLI (v17.3.7)

### Installation Steps
```bash
# Clone the repository
git clone https://github.com/its-akanksha/easy-task.git
cd Easy Task

# Install dependencies
npm install

# Start the development server
ng serve
```
Navigate to `http://localhost:4200/` to access the application.

## Project Structure
```
Easy Task/
│── src/
│   ├── app/
│   │   ├── components/      # Reusable UI components
│   │   ├── services/        # Angular services for logic handling
│   │   ├── models/          # Interfaces and data models
│   │   ├── app.module.ts    # Main module configuration
│   │   ├── app-routing.ts   # Routing configuration
│   ├── assets/              # Static assets like images and stylesheets
│   ├── environments/        # Environment-specific settings
│── angular.json             # Angular project configuration
│── package.json             # Dependencies and scripts
│── README.md                # Documentation
```

## Development
### Generating Components & Services
```bash
ng generate component component-name
ng generate service service-name
```

### Building the Project
```bash
ng build
```
The build artifacts will be stored in the `dist/` directory.

### Running Tests
#### Unit Tests
```bash
ng test
```
#### End-to-End Tests
```bash
ng e2e
```

## Technology Stack
- **Frontend**: Angular
- **Styling**: SCSS, Google Fonts
- **State Management**: Services & Local Storage
- **Testing**: Angular Testing Framework

## Architecture
The following diagram illustrates the architecture of Easy Task:

![Application Architecture](architecture.jpg)

## Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue.

## License
MIT License. See `LICENSE` for details.

## Contact
For any questions or support, reach out via GitHub Issues.
