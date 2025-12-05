import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Dashboard from './components/Dashboard';
import MapView from './components/MapView';
import ZoneDetails from './components/ZoneDetails';
import ImageUpload from './components/ImageUpload';
import AIProcessing from './components/AIProcessing';
import AIResult from './components/AIResult';
import Recommendations from './components/Recommendations';
import Notifications from './components/Notifications';
import Profile from './components/Profile';

export type Screen = 
  | 'welcome' 
  | 'dashboard' 
  | 'map' 
  | 'zoneDetails' 
  | 'imageUpload' 
  | 'aiProcessing' 
  | 'aiResult' 
  | 'recommendations' 
  | 'notifications' 
  | 'profile';

export interface Zone {
  id: string;
  name: string;
  cropType: string;
  status: 'healthy' | 'medium' | 'high';
  confidence: number;
  lastScan: string;
  predictedIssue?: string;
  coordinates: { lat: number; lng: number }[];
}

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  const [aiResultType, setAiResultType] = useState<'confirmed' | 'false'>('confirmed');

  const navigate = (screen: Screen, zone?: Zone, resultType?: 'confirmed' | 'false') => {
    if (zone) setSelectedZone(zone);
    if (resultType) setAiResultType(resultType);
    setCurrentScreen(screen);
  };

  return (
    <div className="min-h-screen bg-[#F4F6F8]">
      {currentScreen === 'welcome' && <WelcomeScreen onNavigate={navigate} />}
      {currentScreen === 'dashboard' && <Dashboard onNavigate={navigate} />}
      {currentScreen === 'map' && <MapView onNavigate={navigate} />}
      {currentScreen === 'zoneDetails' && <ZoneDetails zone={selectedZone} onNavigate={navigate} />}
      {currentScreen === 'imageUpload' && <ImageUpload onNavigate={navigate} />}
      {currentScreen === 'aiProcessing' && <AIProcessing onNavigate={navigate} />}
      {currentScreen === 'aiResult' && <AIResult type={aiResultType} onNavigate={navigate} />}
      {currentScreen === 'recommendations' && <Recommendations onNavigate={navigate} />}
      {currentScreen === 'notifications' && <Notifications onNavigate={navigate} />}
      {currentScreen === 'profile' && <Profile onNavigate={navigate} />}
    </div>
  );
}

export default App;
