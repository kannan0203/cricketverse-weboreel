import CricketLoader from '@/components/CricketLoader';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import IPLTeamsGrid from '@/components/IPLTeamsGrid';
import CricketFormats from '@/components/CricketFormats';
import BattingScorecard from '@/components/BattingScorecard';
import HallOfFame from '@/components/HallOfFame';
import CricketQuiz from '@/components/CricketQuiz';
import FactsTicker from '@/components/FactsTicker';
import Footer from '@/components/Footer';
import AudioPlayer from '@/components/AudioPlayer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CricketLoader />
      <Navbar />
      <HeroSection />
      <FactsTicker />
      <IPLTeamsGrid />
      <CricketFormats />
      <BattingScorecard />
      <HallOfFame />
      <CricketQuiz />
      <FactsTicker />
      <Footer />
      <AudioPlayer />
    </div>
  );
};

export default Index;
