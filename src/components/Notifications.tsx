import { motion } from 'motion/react';
import { ArrowLeft, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { Screen } from '../App';

interface NotificationsProps {
  onNavigate: (screen: Screen) => void;
}

export default function Notifications({ onNavigate }: NotificationsProps) {
  const notifications = [
    {
      id: 1,
      title: 'High Stress Alert',
      message: 'Water stress detected in Zone A-12. Immediate action recommended.',
      zone: 'Zone A-12',
      time: '2 hours ago',
      severity: 'high',
      unread: true,
    },
    {
      id: 2,
      title: 'Medium Stress Alert',
      message: 'Minor vegetation change observed in Zone B-08.',
      zone: 'Zone B-08',
      time: '5 hours ago',
      severity: 'medium',
      unread: true,
    },
    {
      id: 3,
      title: 'Validation Complete',
      message: 'Ground image validation successful for Zone A-12.',
      zone: 'Zone A-12',
      time: '1 day ago',
      severity: 'info',
      unread: false,
    },
    {
      id: 4,
      title: 'Healthy Status',
      message: 'Zone C-15 showing healthy crop growth.',
      zone: 'Zone C-15',
      time: '1 day ago',
      severity: 'healthy',
      unread: false,
    },
    {
      id: 5,
      title: 'Scan Complete',
      message: 'Weekly satellite scan completed for all zones.',
      zone: 'All Zones',
      time: '2 days ago',
      severity: 'info',
      unread: false,
    },
  ];

  const getIcon = (severity: string) => {
    switch (severity) {
      case 'high':
      case 'medium':
        return AlertTriangle;
      case 'healthy':
        return CheckCircle;
      default:
        return Info;
    }
  };

  const getColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return '#EB5757';
      case 'medium':
        return '#F2C94C';
      case 'healthy':
        return '#16C47F';
      default:
        return '#2F80ED';
    }
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      className="min-h-screen bg-gradient-to-b from-[#F4F6F8] to-white pb-6"
    >
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200/50 px-6 py-4 mb-6">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => onNavigate('dashboard')}
            className="p-2 rounded-[10px] hover:bg-black/5 transition-all"
          >
            <ArrowLeft size={20} className="text-[#1a1a1a]" />
          </motion.button>
          <div>
            <h2 className="text-[#1a1a1a]">Notifications</h2>
            <p className="text-[12px] text-[#888]">{notifications.filter(n => n.unread).length} unread</p>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6">
        <div className="space-y-3">
          {notifications.map((notification, index) => {
            const Icon = getIcon(notification.severity);
            const color = getColor(notification.severity);

            return (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileTap={{ scale: 0.98 }}
                className={`relative backdrop-blur-xl border rounded-[14px] p-4 shadow-md hover:shadow-lg transition-all cursor-pointer ${
                  notification.unread
                    ? 'bg-white/80 border-white/60'
                    : 'bg-white/40 border-white/40'
                }`}
              >
                {/* Left Color Strip */}
                <div
                  className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full"
                  style={{ backgroundColor: color }}
                />

                <div className="flex gap-3 pl-3">
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 p-2 rounded-[10px] h-fit"
                    style={{ backgroundColor: `${color}20` }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-[14px] text-[#1a1a1a]">
                        {notification.title}
                      </h3>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-[#2F80ED] rounded-full ml-2 mt-1" />
                      )}
                    </div>
                    <p className="text-[14px] text-[#666] mb-2 leading-relaxed">
                      {notification.message}
                    </p>
                    <div className="flex items-center justify-between">
                      <label className="text-[#888]">{notification.zone}</label>
                      <label className="text-[#888]">{notification.time}</label>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mark All Read */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-6 backdrop-blur-xl bg-white/80 border border-white/60 text-[#2F80ED] py-4 rounded-[12px] transition-all hover:shadow-lg"
        >
          Mark All as Read
        </motion.button>
      </div>
    </motion.div>
  );
}
