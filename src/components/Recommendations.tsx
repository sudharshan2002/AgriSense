import { motion } from 'motion/react';
import { ArrowLeft, Droplets, AlertCircle, Sprout, Eye } from 'lucide-react';
import { Screen } from '../App';

interface RecommendationsProps {
  onNavigate: (screen: Screen) => void;
}

export default function Recommendations({ onNavigate }: RecommendationsProps) {
  const recommendations = [
    {
      id: 1,
      title: 'Increase Irrigation',
      description: 'Water stress detected. Increase irrigation frequency to 2x daily for the next 5 days.',
      priority: 'high',
      icon: Droplets,
      color: '#2F80ED',
    },
    {
      id: 2,
      title: 'Check for Weeds',
      description: 'Inspect field for weed growth that may be competing for water and nutrients.',
      priority: 'medium',
      icon: Sprout,
      color: '#F2C94C',
    },
    {
      id: 3,
      title: 'Monitor Soil Moisture',
      description: 'Install soil moisture sensors or perform manual checks in affected zones.',
      priority: 'medium',
      icon: Eye,
      color: '#16C47F',
    },
    {
      id: 4,
      title: 'Consider Fertilization',
      description: 'If stress persists after irrigation, consider applying balanced NPK fertilizer.',
      priority: 'low',
      icon: AlertCircle,
      color: '#888',
    },
  ];

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return { bg: '#EB5757', text: 'High Priority' };
      case 'medium':
        return { bg: '#F2C94C', text: 'Medium' };
      default:
        return { bg: '#888', text: 'Low' };
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
            onClick={() => onNavigate('aiResult')}
            className="p-2 rounded-[10px] hover:bg-black/5 transition-all"
          >
            <ArrowLeft size={20} className="text-[#1a1a1a]" />
          </motion.button>
          <div>
            <h2 className="text-[#1a1a1a]">Recommendations</h2>
            <p className="text-[12px] text-[#888]">Suggested Actions</p>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6">
        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-xl bg-[#2F80ED]/10 border border-[#2F80ED]/20 rounded-[14px] p-4 mb-6"
        >
          <p className="text-[14px] text-[#2F80ED]">
            💡 Based on confirmed water stress in Zone A-12. Follow these steps to restore crop health.
          </p>
        </motion.div>

        {/* Recommendations List */}
        <div className="space-y-4">
          {recommendations.map((rec, index) => {
            const Icon = rec.icon;
            const badge = getPriorityBadge(rec.priority);

            return (
              <motion.div
                key={rec.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                whileTap={{ scale: 0.98 }}
                className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-[14px] p-5 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex gap-4">
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 p-3 rounded-[12px] h-fit"
                    style={{ backgroundColor: `${rec.color}20` }}
                  >
                    <Icon size={24} style={{ color: rec.color }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-[16px] text-[#1a1a1a]">{rec.title}</h3>
                      <span
                        className="text-[10px] px-2 py-1 rounded-full text-white shrink-0 ml-2"
                        style={{ backgroundColor: badge.bg }}
                      >
                        {badge.text}
                      </span>
                    </div>
                    <p className="text-[14px] text-[#666] leading-relaxed">
                      {rec.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 space-y-3">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#16C47F] text-white py-4 rounded-[12px] transition-all hover:shadow-lg hover:shadow-[#16C47F]/30"
          >
            Mark as Actioned
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('map')}
            className="w-full backdrop-blur-xl bg-white/80 border border-white/60 text-[#666] py-4 rounded-[12px] transition-all hover:shadow-lg"
          >
            Back to Map
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
