
import PortfolioHeader from './components/PortfolioHeader';
import PortfolioNavigation from './components/PortfolioNavigation';
import GeneralProfile from './components/GeneralProfile';

export default function Home() {
  return (
    <div>
      <PortfolioHeader/>
      <PortfolioNavigation/>
      <GeneralProfile/>
    </div>
  );
}
