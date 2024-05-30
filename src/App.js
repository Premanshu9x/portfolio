// eslint-disable-next-line
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Details from './Components/Details';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Details></Details>
      <Skills></Skills>
      <Experience></Experience>
      <Contact></Contact>
      
      <div className='container-fluid bg-dark text-light text-center py-3'>
        &copy; PREMANSHU SHARMA, HAPPY CODING
      </div>
    </div>
  );
}

export default App;
