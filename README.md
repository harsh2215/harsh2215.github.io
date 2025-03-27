# Modern Portfolio with AI Chat

A modern, responsive portfolio website built with React and enhanced with an AI-powered chatbot that can answer questions about my experience, skills, and projects.

## ✨ Features

- 🎯 Modern and responsive design using Tailwind CSS
- 🤖 AI-powered chatbot using Google's Generative AI
- 📱 Mobile-friendly interface
- 🎨 Smooth animations with Framer Motion
- 📄 Multiple sections: Home, About, Skills, Projects, Experience, Contact
- 🌙 Clean and professional UI

## 🛠️ Technologies Used

- React.js
- Tailwind CSS
- Google Generative AI
- Framer Motion
- React Router
- Node.js

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio/webapp
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add your Google AI API key:
```
REACT_APP_GOOGLE_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio in your browser.

## 📁 Project Structure

```
webapp/
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── services/      # API services
│   ├── App.js         # Main application
│   └── index.js       # Entry point
├── public/            # Static files
└── package.json       # Dependencies
```

## 🤖 AI Chat Features

The portfolio includes an AI chatbot that can:
- Answer questions about work experience
- Provide details about technical skills
- Describe projects and achievements
- Share educational background
- Offer professional information

## 🔧 Configuration

The chat functionality can be customized by modifying the system prompt in `src/services/ChatService.js`.

## 📱 Responsive Design

- Desktop and mobile-friendly layouts
- Adaptive chat interface
- Responsive navigation
- Flexible content sections

## 🚀 Deployment

This project is configured for GitHub Pages deployment. To deploy:

```bash
npm run deploy
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
