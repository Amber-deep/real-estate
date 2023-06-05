import './App.css';
import Contact from './Contact/Contact';
import GetStarted from './GetStarted/GetStarted';
import Residenices from './Residencies/Residenices';
import Value from './Value/Value';
import Companies from './companies/Companies';
import Heading from './components/Heading/Heading';
import Hero from './components/Hero/Hero';
import Footer from './footer/Footer';


function App() {
  return (
    <div className="App">
      <Heading/>
      <Hero/>
      <Companies/>
      <Residenices/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
