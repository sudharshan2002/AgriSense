import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Navigation, X, Home, Bell, User } from 'lucide-react';
import { Screen, Zone } from '../App';

interface MapViewProps {
  onNavigate: (screen: Screen, zone?: Zone) => void;
}

export default function MapView({ onNavigate }: MapViewProps) {
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [activeLayer, setActiveLayer] = useState<'satellite' | 'health'>('health');

  const zones: Zone[] = [
    {
      id: 'A-12',
      name: 'Zone A-12',
      cropType: 'Rice',
      status: 'high',
      confidence: 87,
      lastScan: '2 hours ago',
      predictedIssue: 'Water stress detected',
      coordinates: [
        { lat: 6.45, lng: 80.62 },
        { lat: 6.46, lng: 80.62 },
        { lat: 6.46, lng: 80.63 },
        { lat: 6.45, lng: 80.63 },
      ],
    },
    {
      id: 'B-08',
      name: 'Zone B-08',
      cropType: 'Corn',
      status: 'medium',
      confidence: 72,
      lastScan: '5 hours ago',
      predictedIssue: 'Minor vegetation change',
      coordinates: [
        { lat: 6.47, lng: 80.61 },
        { lat: 6.48, lng: 80.61 },
        { lat: 6.48, lng: 80.62 },
        { lat: 6.47, lng: 80.62 },
      ],
    },
    {
      id: 'C-15',
      name: 'Zone C-15',
      cropType: 'Rice',
      status: 'healthy',
      confidence: 94,
      lastScan: '1 day ago',
      predictedIssue: 'None',
      coordinates: [
        { lat: 6.44, lng: 80.64 },
        { lat: 6.45, lng: 80.64 },
        { lat: 6.45, lng: 80.65 },
        { lat: 6.44, lng: 80.65 },
      ],
    },
    {
      id: 'D-03',
      name: 'Zone D-03',
      cropType: 'Rice',
      status: 'healthy',
      confidence: 91,
      lastScan: '3 hours ago',
      predictedIssue: 'None',
      coordinates: [
        { lat: 6.43, lng: 80.61 },
        { lat: 6.44, lng: 80.61 },
        { lat: 6.44, lng: 80.62 },
        { lat: 6.43, lng: 80.62 },
      ],
    },
    {
      id: 'E-19',
      name: 'Zone E-19',
      cropType: 'Corn',
      status: 'medium',
      confidence: 78,
      lastScan: '6 hours ago',
      predictedIssue: 'Minor stress',
      coordinates: [
        { lat: 6.46, lng: 80.64 },
        { lat: 6.47, lng: 80.64 },
        { lat: 6.47, lng: 80.65 },
        { lat: 6.46, lng: 80.65 },
      ],
    },
  ];

  const handleZoneClick = (zone: Zone) => {
    setSelectedZone(zone);
    setShowBottomSheet(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return '#16C47F';
      case 'medium':
        return '#F2C94C';
      case 'high':
        return '#EB5757';
      default:
        return '#16C47F';
    }
  };

  return (
    <div className="relative h-screen overflow-hidden bg-[#1a1a1a]">
      {/* Satellite Map Background */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            {/* Terrain Patterns */}
            <pattern id="terrain" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect width="80" height="80" fill="#2a3a2a" />
              <circle cx="20" cy="20" r="1" fill="#3a4a3a" opacity="0.5" />
              <circle cx="60" cy="40" r="1" fill="#3a4a3a" opacity="0.5" />
              <circle cx="40" cy="60" r="1" fill="#3a4a3a" opacity="0.5" />
            </pattern>
            
            {/* Water Pattern */}
            <pattern id="water" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect width="60" height="60" fill="#1e3a5f" />
              <motion.path
                d="M0,30 Q15,25 30,30 T60,30"
                stroke="#2e4a6f"
                strokeWidth="1"
                fill="none"
                opacity="0.3"
              />
            </pattern>

            {/* Roads */}
            <linearGradient id="roadGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4a4a4a" />
              <stop offset="100%" stopColor="#3a3a3a" />
            </linearGradient>

            {/* Satellite Scan Effect */}
            <linearGradient id="scanLine" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2F80ED" stopOpacity="0" />
              <stop offset="50%" stopColor="#2F80ED" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#2F80ED" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Base Terrain */}
          <rect width="100%" height="100%" fill="url(#terrain)" />

          {/* Water Bodies */}
          <motion.ellipse
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1 }}
            cx="20%"
            cy="80%"
            rx="80"
            ry="60"
            fill="url(#water)"
          />
          <motion.ellipse
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.2 }}
            cx="85%"
            cy="25%"
            rx="60"
            ry="50"
            fill="url(#water)"
          />

          {/* Roads */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            d="M0,200 Q200,180 400,200"
            stroke="url(#roadGradient)"
            strokeWidth="4"
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.7 }}
            d="M150,0 L150,800"
            stroke="url(#roadGradient)"
            strokeWidth="3"
            fill="none"
          />

          {/* Animated Scanning Line */}
          <motion.rect
            animate={{ y: [-100, 1000] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            x="0"
            width="100%"
            height="100"
            fill="url(#scanLine)"
            opacity="0.4"
          />

          {/* Zone Polygons with Health Overlay */}
          {zones.map((zone, idx) => {
            const baseX = 80 + (idx % 3) * 120;
            const baseY = 180 + Math.floor(idx / 3) * 140;
            
            return (
              <motion.g
                key={zone.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + idx * 0.15 }}
                onClick={() => handleZoneClick(zone)}
                className="cursor-pointer"
              >
                {/* Field Texture */}
                <motion.rect
                  x={baseX - 45}
                  y={baseY - 35}
                  width="90"
                  height="70"
                  rx="4"
                  fill="#2a3a2a"
                  stroke="#1a2a1a"
                  strokeWidth="1"
                />
                
                {/* Crop Rows Pattern */}
                {[0, 1, 2, 3, 4].map((row) => (
                  <motion.line
                    key={row}
                    x1={baseX - 40}
                    y1={baseY - 28 + row * 14}
                    x2={baseX + 40}
                    y2={baseY - 28 + row * 14}
                    stroke="#3a4a3a"
                    strokeWidth="1"
                    opacity="0.6"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 1 + idx * 0.15 + row * 0.05 }}
                  />
                ))}

                {/* Health Status Overlay */}
                <motion.rect
                  x={baseX - 45}
                  y={baseY - 35}
                  width="90"
                  height="70"
                  rx="4"
                  fill={getStatusColor(zone.status)}
                  fillOpacity="0"
                  stroke={getStatusColor(zone.status)}
                  strokeWidth="2"
                  whileHover={{ fillOpacity: 0.4, strokeWidth: 3 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    fillOpacity: activeLayer === 'health' ? 0.3 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Zone Label */}
                <motion.g
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + idx * 0.15 }}
                >
                  <rect
                    x={baseX - 20}
                    y={baseY + 42}
                    width="40"
                    height="18"
                    rx="9"
                    fill="rgba(0,0,0,0.6)"
                  />
                  <text
                    x={baseX}
                    y={baseY + 54}
                    textAnchor="middle"
                    className="text-[10px]"
                    fill="white"
                    fontWeight="500"
                  >
                    {zone.id}
                  </text>
                </motion.g>

                {/* Status Indicator Dot */}
                <motion.circle
                  cx={baseX + 35}
                  cy={baseY - 25}
                  r="4"
                  fill={getStatusColor(zone.status)}
                  animate={{
                    opacity: [1, 0.5, 1],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: idx * 0.3,
                  }}
                />
              </motion.g>
            );
          })}

          {/* Satellite Icon */}
          <motion.g
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            transform="translate(320, 40)"
          >
            <rect x="0" y="0" width="30" height="20" rx="3" fill="#2F80ED" opacity="0.8" />
            <rect x="-10" y="5" width="8" height="8" fill="#2F80ED" opacity="0.6" />
            <rect x="32" y="5" width="8" height="8" fill="#2F80ED" opacity="0.6" />
            <circle cx="15" cy="10" r="4" fill="#FFFFFF" opacity="0.9" />
            
            {/* Satellite Beam */}
            <motion.path
              d="M15,20 L15,100"
              stroke="#2F80ED"
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity="0.3"
              animate={{
                pathLength: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </motion.g>
        </svg>
      </div>

      {/* Coordinate Grid Overlay */}
      <div className="absolute top-4 left-4 backdrop-blur-md bg-black/40 rounded-[10px] px-3 py-2 text-[10px] text-white/80 font-mono">
        6.45°N 80.62°E
      </div>

      {/* Legend */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-24 left-4 backdrop-blur-xl bg-black/40 rounded-[12px] p-3 text-white"
      >
        <label className="block mb-2 text-[10px]">HEALTH STATUS</label>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#16C47F]" />
            <span className="text-[11px]">Healthy</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#F2C94C]" />
            <span className="text-[11px]">Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#EB5757]" />
            <span className="text-[11px]">Critical</span>
          </div>
        </div>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute top-4 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-md"
      >
        <div className="backdrop-blur-xl bg-white/90 border border-white/60 rounded-[14px] px-4 py-3 shadow-lg">
          <input
            type="text"
            placeholder="Search zones..."
            className="w-full bg-transparent outline-none text-[14px] text-[#1a1a1a] placeholder:text-[#888]"
          />
        </div>
      </motion.div>

      {/* Floating Controls */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute right-4 top-20 z-40 space-y-3"
      >
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setActiveLayer(activeLayer === 'satellite' ? 'health' : 'satellite')}
          className={`p-3 backdrop-blur-xl border rounded-[12px] shadow-lg hover:shadow-xl transition-all ${
            activeLayer === 'health'
              ? 'bg-[#2F80ED] border-[#2F80ED] text-white'
              : 'bg-white/80 border-white/60 text-[#2F80ED]'
          }`}
        >
          <Layers size={20} />
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="p-3 backdrop-blur-xl bg-white/80 border border-white/60 rounded-[12px] shadow-lg hover:shadow-xl transition-all"
        >
          <Navigation size={20} className="text-[#2F80ED]" />
        </motion.button>
      </motion.div>

      {/* Bottom Nav Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
        className="absolute bottom-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/60 border-t border-white/80 px-6 py-4"
      >
        <div className="max-w-md mx-auto flex items-center justify-around">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => onNavigate('dashboard')}
            className="flex flex-col items-center gap-1 text-[#888] hover:text-[#2F80ED] transition-colors"
          >
            <Home size={22} />
            <label>Home</label>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center gap-1 text-[#2F80ED]"
          >
            <div className="relative">
              <Layers size={22} />
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2F80ED] rounded-full" />
            </div>
            <label>Map</label>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => onNavigate('profile')}
            className="flex flex-col items-center gap-1 text-[#888] hover:text-[#2F80ED] transition-colors"
          >
            <User size={22} />
            <label>Profile</label>
          </motion.button>
        </div>
      </motion.div>

      {/* Bottom Sheet */}
      <AnimatePresence>
        {showBottomSheet && selectedZone && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowBottomSheet(false)}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute bottom-0 left-0 right-0 z-50 backdrop-blur-2xl bg-white/80 border-t border-white/60 rounded-t-[24px] px-6 py-6 shadow-2xl"
            >
              <div className="max-w-md mx-auto">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-[#1a1a1a] mb-1">{selectedZone.name}</h3>
                    <p className="text-[14px] text-[#666]">{selectedZone.cropType}</p>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowBottomSheet(false)}
                    className="p-2 rounded-[8px] hover:bg-black/5 transition-all"
                  >
                    <X size={20} className="text-[#888]" />
                  </motion.button>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="backdrop-blur-xl bg-white/60 rounded-[12px] p-3 border border-white/80">
                    <label className="text-[#888] block mb-1">Status</label>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: getStatusColor(selectedZone.status) }}
                      />
                      <p className="text-[14px] capitalize">{selectedZone.status}</p>
                    </div>
                  </div>
                  <div className="backdrop-blur-xl bg-white/60 rounded-[12px] p-3 border border-white/80">
                    <label className="text-[#888] block mb-1">Last Scan</label>
                    <p className="text-[14px]">{selectedZone.lastScan}</p>
                  </div>
                </div>

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setShowBottomSheet(false);
                    onNavigate('zoneDetails', selectedZone);
                  }}
                  className="w-full bg-[#2F80ED] text-white py-4 rounded-[12px] transition-all hover:shadow-lg hover:shadow-[#2F80ED]/30"
                >
                  Open Zone Details
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}