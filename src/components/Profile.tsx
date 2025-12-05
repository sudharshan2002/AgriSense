import { motion } from 'motion/react';
import { ArrowLeft, User, Bell, Globe, Shield, HelpCircle, LogOut } from 'lucide-react';
import { Screen } from '../App';

interface ProfileProps {
  onNavigate: (screen: Screen) => void;
}

export default function Profile({ onNavigate }: ProfileProps) {
  const settingsGroups = [
    {
      title: 'Account',
      items: [
        { icon: User, label: 'Edit Profile', action: () => {} },
        { icon: Bell, label: 'Notifications', action: () => {} },
      ],
    },
    {
      title: 'Preferences',
      items: [
        { icon: Globe, label: 'Language', action: () => {}, value: 'English' },
        { icon: Shield, label: 'Privacy', action: () => {} },
      ],
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help Center', action: () => {} },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      className="min-h-screen bg-gradient-to-b from-[#F4F6F8] to-white pb-20"
    >
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200/50 px-6 py-4 mb-6">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => onNavigate('map')}
            className="p-2 rounded-[10px] hover:bg-black/5 transition-all"
          >
            <ArrowLeft size={20} className="text-[#1a1a1a]" />
          </motion.button>
          <div>
            <h2 className="text-[#1a1a1a]">Profile</h2>
            <p className="text-[12px] text-[#888]">Account Settings</p>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-[16px] p-6 shadow-lg mb-8"
        >
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#2F80ED] to-[#16C47F] flex items-center justify-center">
                <User size={32} className="text-white" />
              </div>
              <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#16C47F] rounded-full border-2 border-white" />
            </div>

            {/* Info */}
            <div className="flex-1">
              <h3 className="text-[#1a1a1a] mb-1">Kasun Perera</h3>
              <p className="text-[14px] text-[#666] mb-1">Field Officer</p>
              <label className="text-[#888]">Udawalawe District</label>
            </div>
          </div>
        </motion.div>

        {/* Settings Groups */}
        {settingsGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + groupIndex * 0.1 }}
            className="mb-6"
          >
            <label className="text-[#888] px-2 mb-3 block">{group.title}</label>
            <div className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-[14px] overflow-hidden shadow-md">
              {group.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.label}
                    whileTap={{ scale: 0.98 }}
                    onClick={item.action}
                    className={`w-full flex items-center justify-between p-4 hover:bg-white/40 transition-all ${
                      itemIndex < group.items.length - 1 ? 'border-b border-white/40' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#2F80ED]/10 rounded-[8px]">
                        <Icon size={18} className="text-[#2F80ED]" />
                      </div>
                      <span className="text-[14px] text-[#1a1a1a]">{item.label}</span>
                    </div>
                    {item.value ? (
                      <span className="text-[14px] text-[#888]">{item.value}</span>
                    ) : (
                      <span className="text-[#888]">→</span>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        ))}

        {/* Logout Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onNavigate('welcome')}
          className="w-full backdrop-blur-xl bg-[#EB5757]/10 border border-[#EB5757]/20 text-[#EB5757] py-4 rounded-[12px] transition-all hover:shadow-lg flex items-center justify-center gap-3"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-[12px] text-[#888] mt-6"
        >
          AgriSense v1.0.0 • Powered by AI
        </motion.p>
      </div>
    </motion.div>
  );
}
