import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-gray-100 overflow-x-hidden'>
    <Header />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <Footer />
    </div>
  );
}

export default App;
