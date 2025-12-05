import { motion } from 'motion/react';
import { ArrowLeft, Camera, Calendar, TrendingUp } from 'lucide-react';
import { Screen, Zone } from '../App';

interface ZoneDetailsProps {
  zone: Zone | null;
  onNavigate: (screen: Screen) => void;
}

export default function ZoneDetails({ zone, onNavigate }: ZoneDetailsProps) {
  if (!zone) return null;

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
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      className="min-h-screen bg-gradient-to-b from-[#F4F6F8] to-white"
    >
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200/50 px-6 py-4">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => onNavigate('map')}
            className="p-2 rounded-[10px] hover:bg-black/5 transition-all"
          >
            <ArrowLeft size={20} className="text-[#1a1a1a]" />
          </motion.button>
          <div>
            <h2 className="text-[#1a1a1a]">{zone.name}</h2>
            <p className="text-[12px] text-[#888]">Zone Details</p>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6 py-6">
        {/* Zone Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative overflow-hidden backdrop-blur-xl bg-white/60 border border-white/80 rounded-[16px] p-6 mb-6 shadow-lg"
        >
          <svg width="100%" height="180" viewBox="0 0 300 180">
            <defs>
              <pattern id="gridSmall" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E0E0E0" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="300" height="180" fill="url(#gridSmall)" />
            <motion.polygon
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              points="60,40 240,40 240,140 60,140"
              fill={getStatusColor(zone.status)}
              fillOpacity="0.3"
              stroke={getStatusColor(zone.status)}
              strokeWidth="3"
            />
            <text x="150" y="95" textAnchor="middle" className="text-[14px]" fill="#1a1a1a">
              {zone.name}
            </text>
          </svg>
        </motion.div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-[14px] p-4 shadow-md"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-[#2F80ED]/10 rounded-[8px]">
                <TrendingUp size={16} className="text-[#2F80ED]" />
              </div>
              <label className="text-[#888]">Crop Type</label>
            </div>
            <p className="text-[16px] text-[#1a1a1a]">{zone.cropType}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-[14px] p-4 shadow-md"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-[#EB5757]/10 rounded-[8px]">
                <TrendingUp size={16} className="text-[#EB5757]" />
              </div>
              <label className="text-[#888]">Issue</label>
            </div>
            <p className="text-[14px] text-[#1a1a1a] leading-tight">{zone.predictedIssue}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-[14px] p-4 shadow-md"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-[#16C47F]/10 rounded-[8px]">
                <TrendingUp size={16} className="text-[#16C47F]" />
              </div>
              <label className="text-[#888]">Confidence</label>
            </div>
            <div className="relative">
              <svg width="100%" height="80" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#E0E0E0"
                  strokeWidth="8"
                />
                <motion.circle
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: zone.confidence / 100 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={getStatusColor(zone.status)}
                  strokeWidth="8"
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                  style={{
                    pathLength: zone.confidence / 100,
                  }}
                />
                <text
                  x="50"
                  y="55"
                  textAnchor="middle"
                  className="text-[18px]"
                  fill="#1a1a1a"
                >
                  {zone.confidence}%
                </text>
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-[14px] p-4 shadow-md"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-[#F2C94C]/10 rounded-[8px]">
                <Calendar size={16} className="text-[#F2C94C]" />
              </div>
              <label className="text-[#888]">Last Scan</label>
            </div>
            <p className="text-[16px] text-[#1a1a1a] mt-4">{zone.lastScan}</p>
            <p className="text-[12px] text-[#888] mt-1">via Sentinel-2</p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onNavigate('imageUpload')}
          className="w-full bg-[#2F80ED] text-white py-4 rounded-[12px] transition-all hover:shadow-lg hover:shadow-[#2F80ED]/30 flex items-center justify-center gap-3"
        >
          <Camera size={20} />
          <span>Upload Ground Image</span>
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-[12px] text-[#888] mt-4"
        >
          Validate satellite detection with on-ground imagery
        </motion.p>
      </div>
    </motion.div>
  );
}
