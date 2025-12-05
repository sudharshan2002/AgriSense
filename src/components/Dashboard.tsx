import { motion } from 'motion/react';
import { Bell, Map, AlertTriangle, TrendingUp } from 'lucide-react';
import { Screen } from '../App';

interface DashboardProps {
  onNavigate: (screen: Screen) => void;
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  const stats = [
    { label: 'Healthy', count: 24, color: '#16C47F', icon: TrendingUp },
    { label: 'Medium Stress', count: 8, color: '#F2C94C', icon: AlertTriangle },
    { label: 'High Stress', count: 3, color: '#EB5757', icon: AlertTriangle },
  ];

  const alerts = [
    { id: 1, zone: 'Zone A-12', message: 'Possible water stress detected', time: '2h ago', severity: 'high' },
    { id: 2, zone: 'Zone B-08', message: 'Minor vegetation change', time: '5h ago', severity: 'medium' },
    { id: 3, zone: 'Zone C-15', message: 'Healthy crop growth', time: '1d ago', severity: 'healthy' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4F6F8] to-white pb-20">
      {/* App Bar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200/50 px-6 py-4"
      >
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div>
            <h2 className="text-[#1a1a1a]">Dashboard</h2>
            <p className="text-[12px] text-[#888]">Udawalawe Region</p>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => onNavigate('notifications')}
            className="relative p-3 rounded-[12px] bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:bg-white/80 transition-all"
          >
            <Bell size={20} className="text-[#2F80ED]" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#EB5757] rounded-full" />
          </motion.button>
        </div>
      </motion.div>

      <div className="max-w-md mx-auto px-6 pt-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileTap={{ scale: 0.96 }}
                className="backdrop-blur-xl bg-white/40 border border-white/60 rounded-[14px] p-4 shadow-lg cursor-pointer hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-center mb-2">
                  <div
                    className="p-2 rounded-[8px]"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <Icon size={16} style={{ color: stat.color }} />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-[24px] mb-1" style={{ color: stat.color }}>
                    {stat.count}
                  </div>
                  <label className="text-[#666]">{stat.label}</label>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Map CTA Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onNavigate('map')}
          className="relative overflow-hidden backdrop-blur-xl bg-gradient-to-br from-[#2F80ED]/90 to-[#1E5BB8]/90 border border-white/20 rounded-[16px] p-6 mb-6 shadow-xl cursor-pointer group"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white">Field Map View</h3>
              <div className="p-2 bg-white/20 rounded-[8px] group-hover:bg-white/30 transition-all">
                <Map size={20} className="text-white" />
              </div>
            </div>
            <p className="text-white/80 text-[14px] mb-4">
              View all zones with real-time satellite data
            </p>
            <div className="inline-flex items-center text-white text-[14px] gap-2">
              <span>Open Map</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </div>
          </div>

          {/* Decorative Animated Illustration */}
          <svg
            className="absolute -right-4 -bottom-4 opacity-20"
            width="180"
            height="180"
            viewBox="0 0 180 180"
            fill="none"
          >
            {/* Animated Radar Rings */}
            <motion.circle
              cx="90"
              cy="90"
              r="70"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="4 4"
              fill="none"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.circle
              cx="90"
              cy="90"
              r="50"
              stroke="white"
              strokeWidth="2"
              fill="none"
              animate={{ scale: [1, 1.15, 1], opacity: [0.7, 0.3, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
            <motion.circle
              cx="90"
              cy="90"
              r="30"
              stroke="white"
              strokeWidth="2"
              fill="none"
              animate={{ scale: [1, 1.1, 1], opacity: [0.9, 0.5, 0.9] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
            
            {/* Center Dot */}
            <motion.circle
              cx="90"
              cy="90"
              r="5"
              fill="white"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Scanning Line */}
            <motion.line
              x1="90"
              y1="90"
              x2="90"
              y2="20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              style={{ originX: '90px', originY: '90px' }}
            />

            {/* Field Markers */}
            <motion.circle
              cx="120"
              cy="70"
              r="4"
              fill="#16C47F"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            />
            <motion.circle
              cx="70"
              cy="120"
              r="4"
              fill="#F2C94C"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
            />
            <motion.circle
              cx="110"
              cy="110"
              r="4"
              fill="#EB5757"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
            />
          </svg>
        </motion.div>

        {/* Recent Alerts */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#1a1a1a]">Recent Alerts</h3>
            <button
              onClick={() => onNavigate('notifications')}
              className="text-[#2F80ED] text-[14px] hover:underline"
            >
              View all
            </button>
          </div>

          <div className="space-y-3">
            {alerts.map((alert, index) => (
              <motion.div
                key={alert.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-[12px] p-4 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex gap-3">
                  <div
                    className="w-1 rounded-full"
                    style={{
                      backgroundColor:
                        alert.severity === 'high'
                          ? '#EB5757'
                          : alert.severity === 'medium'
                          ? '#F2C94C'
                          : '#16C47F',
                    }}
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <p className="text-[14px] text-[#1a1a1a]">{alert.zone}</p>
                      <label className="text-[#888]">{alert.time}</label>
                    </div>
                    <p className="text-[14px] text-[#666]">{alert.message}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}