import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './pages/About.jsx';
import Education from './pages/Education.jsx';
import Contact from './pages/Contact.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Chatbot from './components/Chatbot.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}

export default App
