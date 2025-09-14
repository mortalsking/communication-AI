# CommunicateAI Demo 🚀

An AI-powered web application designed to help users improve their communication skills by providing real-time, intelligent feedback on their writing.

---

## 📝 Overview

This project is a full-stack demonstration of how modern AI can be leveraged to create powerful learning tools. The application provides a simple, intuitive interface for users to input text. The backend then communicates with Google's Gemini API to analyze the text for clarity and effectiveness, returning a score and constructive suggestions.

This demo serves as a proof-of-concept for a larger communication improvement platform.

## ✨ Key Features

* **Real-Time AI Analysis:** Get instant feedback on your writing.
* **Structured Feedback:** Receives a quantitative **Clarity Score** and qualitative feedback, including **What Went Well** and **Improvement Suggestions**.
* **Modern Tech Stack:** Built with React, Node.js, and Tailwind CSS for a responsive and fast user experience.
* **Clean & Minimalist UI:** A simple, professional design that focuses on usability.

## 🖼️ Screenshot

**

## 🛠️ Tech Stack

* **Frontend:**
    * [React](https://reactjs.org/)
    * [Tailwind CSS](https://tailwindcss.com/)
* **Backend:**
    * [Node.js](https://nodejs.org/)
    * [Express.js](https://expressjs.com/)
* **AI Integration:**
    * [Google Gemini API](https://ai.google.dev/)

## 🚀 Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

* [Node.js](https://nodejs.org/) (LTS version recommended)
* npm (comes with Node.js)
* A Google Gemini API Key. You can get one from [Google AI Studio](https://aistudio.google.com/).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/mortalsking/communication-AI.git](https://github.com/mortalsking/communication-AI.git)
    cd communication-AI
    ```

2.  **Set up the Backend:**
    * Navigate to the backend directory:
        ```bash
        cd backend
        ```
    * Install the necessary packages:
        ```bash
        npm install
        ```
    * Create a `.env` file and add your Google Gemini API key.
        ```
        GEMINI_API_KEY="your_api_key_here"
        ```

3.  **Set up the Frontend:**
    * From the main project root, navigate to the frontend directory:
        ```bash
        cd ../frontend
        ```
    * Install the necessary packages:
        ```bash
        npm install
        ```

### Running the Application

You will need to run two separate terminals to start both the backend and frontend servers.

1.  **Start the Backend Server:**
    * In a terminal, navigate to the `backend` directory and run:
        ```bash
        node server.js
        ```
    * The server will start on `http://localhost:3001`.

2.  **Start the Frontend Server:**
    * In a **new** terminal, navigate to the `frontend` directory and run:
        ```bash
        npm start
        ```
    * Your browser should automatically open to `http://localhost:3000`.

## 🔮 Future Improvements

This demo is a foundation for a more feature-rich platform. Future enhancements could include:
* **Speech Communication:** Integrate speech-to-text to analyze spoken conversations in real-time.
* **User Effort Tracking:** Implement a system to monitor user progress, track effort, and gamify the learning experience.
* **User Accounts:** Add authentication to save analysis history and track long-term improvement.
* **Advanced Analytics:** A dashboard with charts to visualize progress on different communication metrics (tone, sentiment, etc.).