
import PortfolioHeader from './components/PortfolioHeader';
import PortfolioNavigation from './components/PortfolioNavigation';
import GeneralProfile from './components/GeneralProfile';
import About from './components/About';
import Skills from './components/Skills';

export default function Home() {
  return (
    <div>
      <div className='fixed top-0 left-0 w-full z-50 bg-white'>
        <PortfolioHeader/>
        <PortfolioNavigation/>
      </div>
      <div className='pt-20 md:pt-32'>
        <GeneralProfile/>
        <About/>
        <Skills/>
      </div>
      

      <div>
        Projects
      </div>
    </div>
  );
}
