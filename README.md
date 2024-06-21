# React Router DOM Web Page

## Overview:
This project is a web page developed using React Router DOM to facilitate navigation between various courses. The design of the navigation menu is inspired by the [Guvi Blog](https://www.guvi.in/blog/). The navigation includes links to All Courses, Full Stack Development, Data Science, Cyber Security, and Career pages.

## Setup Instructions:
1. Clone the repository to your local machine:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd <project-directory>
    ```
3. Install all dependencies:
    ```sh
    npm install
    ```
4. Start the development server:
    ```sh
    npm start
    ```
5. Open your web browser and go to `http://localhost:3000` to view the web page.

## Features:
- Utilizes **React Router DOM** for seamless navigation between different course pages.
- Provides navigation links for:
  - All Courses
  - Full Stack Development
  - Data Science
  - Cyber Security
  - Career
- Each course page contains static content relevant to the specific course.
- Responsive design to ensure optimal viewing on various devices.
- Easy to extend and customize for additional courses or pages.

## File Structure:
- `src/`: Contains the source code for the React application.
  - `components/`: Includes React components for different parts of the web page.
    - `Navbar.js`: Component for the navigation bar.
    - `Footer.js`: Component for the footer.
  - `pages/`: Contains React components for each individual course page.
    - `AllCourses.js`: Page for All Courses.
    - `FullStack.js`: Page for Full Stack Development.
    - `DataScience.js`: Page for Data Science.
    - `CyberSecurity.js`: Page for Cyber Security.
    - `Career.js`: Page for Career.
  - `App.js`: The main component that sets up React Router and renders the web page.
  - `index.js`: Entry point for the React application.
- `public/`: Contains static assets and the `index.html` file.

## Dependencies:
- React
- React Router DOM

## Usage:
- Click on the navigation links to switch between different course pages.
- Each course page displays static content relevant to the selected course.
- Modify content in the `pages` directory to update course information.

## Credits:
- [React Router DOM](https://reactrouter.com/en/main)
- Design inspired by [Guvi Blog](https://www.guvi.in/blog/)

## Author:
Yukesh Chandran

## Additional Notes:
- Ensure Node.js and npm are installed on your machine before setting up the project.
- For any issues or contributions, please refer to the project's repository.
- This project can serve as a template for creating similar educational websites or platforms.
