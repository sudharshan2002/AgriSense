import { motion } from 'motion/react';
import { Screen } from '../App';

interface WelcomeScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function WelcomeScreen({ onNavigate }: WelcomeScreenProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#2F80ED]/10 via-[#16C47F]/5 to-[#F4F6F8] flex items-end justify-center">
      {/* Hero Illustration */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 400 600"
          className="max-w-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sky with animated clouds */}
          <rect width="400" height="300" fill="url(#skyGradient)" />
          
          {/* Animated Clouds */}
          <motion.g
            animate={{ x: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            opacity="0.6"
          >
            <ellipse cx="80" cy="80" rx="30" ry="15" fill="white" opacity="0.7" />
            <ellipse cx="100" cy="75" rx="35" ry="18" fill="white" opacity="0.7" />
            <ellipse cx="120" cy="80" rx="25" ry="12" fill="white" opacity="0.7" />
          </motion.g>
          
          <motion.g
            animate={{ x: [0, -40, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            opacity="0.5"
          >
            <ellipse cx="280" cy="100" rx="40" ry="20" fill="white" opacity="0.6" />
            <ellipse cx="310" cy="95" rx="45" ry="22" fill="white" opacity="0.6" />
          </motion.g>

          {/* Satellite Beams */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.path
              d="M180 50 L140 200"
              stroke="#2F80ED"
              strokeWidth="2.5"
              opacity="0.5"
              strokeDasharray="6 6"
              animate={{ pathLength: [0, 1], opacity: [0, 0.6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
              d="M220 50 L260 200"
              stroke="#2F80ED"
              strokeWidth="2.5"
              opacity="0.5"
              strokeDasharray="6 6"
              animate={{ pathLength: [0, 1], opacity: [0, 0.6, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </motion.g>

          {/* Satellite */}
          <motion.g
            animate={{
              y: [0, -8, 0],
              rotate: [-2, 2, -2],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            transform="translate(180, 30)"
          >
            <rect x="0" y="0" width="40" height="30" rx="4" fill="#2F80ED" />
            <rect x="-15" y="10" width="10" height="10" fill="#2F80ED" opacity="0.6" />
            <rect x="45" y="10" width="10" height="10" fill="#2F80ED" opacity="0.6" />
            <motion.circle
              cx="20"
              cy="15"
              r="5"
              fill="#FFFFFF"
              opacity="0.8"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {/* Antenna */}
            <rect x="18" y="-5" width="4" height="5" fill="#2F80ED" opacity="0.7" />
            <circle cx="20" cy="-5" r="3" fill="#F2C94C" />
          </motion.g>

          {/* Hills with animation */}
          <motion.ellipse
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.25 }}
            transition={{ duration: 1, delay: 0.3 }}
            cx="100"
            cy="350"
            rx="120"
            ry="60"
            fill="#16C47F"
          />
          <motion.ellipse
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1, delay: 0.5 }}
            cx="300"
            cy="370"
            rx="140"
            ry="70"
            fill="#16C47F"
          />

          {/* Animated Fields */}
          <g transform="translate(50, 250)">
            <motion.path
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              d="M0 80 Q50 60 100 80 L100 150 L0 150 Z"
              fill="#16C47F"
            />
            {/* Field rows */}
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.line
                key={i}
                x1="5"
                y1={85 + i * 12}
                x2="95"
                y2={85 + i * 12}
                stroke="#0ea860"
                strokeWidth="1"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              />
            ))}

            <motion.path
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.4, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              d="M110 90 Q160 70 210 90 L210 150 L110 150 Z"
              fill="#F2C94C"
            />
            {[0, 1, 2, 3].map((i) => (
              <motion.line
                key={`yellow-${i}`}
                x1="115"
                y1={95 + i * 13}
                x2="205"
                y2={95 + i * 13}
                stroke="#d4a935"
                strokeWidth="1"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              />
            ))}

            <motion.path
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.45, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              d="M220 85 Q270 65 300 85 L300 150 L220 150 Z"
              fill="#16C47F"
            />
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.line
                key={`green2-${i}`}
                x1="225"
                y1={90 + i * 11}
                x2="295"
                y2={90 + i * 11}
                stroke="#0ea860"
                strokeWidth="1"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
              />
            ))}
          </g>

          {/* Animated Trees */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 0.6, delay: 1.3, type: 'spring' }}
          >
            <motion.circle
              cx="80"
              cy="320"
              r="22"
              fill="#16C47F"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <circle cx="75" cy="315" r="12" fill="#0ea860" opacity="0.6" />
            <circle cx="85" cy="318" r="10" fill="#0ea860" opacity="0.5" />
            <rect x="75" y="320" width="10" height="30" fill="#8B7355" />
          </motion.g>

          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 0.6, delay: 1.5, type: 'spring' }}
          >
            <motion.circle
              cx="320"
              cy="330"
              r="18"
              fill="#16C47F"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            />
            <circle cx="316" cy="326" r="10" fill="#0ea860" opacity="0.6" />
            <rect x="316" y="330" width="8" height="25" fill="#8B7355" />
          </motion.g>

          {/* Flying bird animation */}
          <motion.path
            d="M0,0 Q5,-3 10,0 Q5,2 0,0"
            fill="none"
            stroke="#666"
            strokeWidth="1.5"
            animate={{
              x: [50, 350],
              y: [120, 100],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="skyGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E3F2FD" />
              <stop offset="100%" stopColor="#BBDEFB" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Glass Panel */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 100 }}
        className="relative z-10 w-full max-w-md mx-4 mb-12 rounded-[16px] backdrop-blur-xl bg-white/40 border border-white/60 shadow-2xl p-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h1 className="text-center mb-2 text-[#1a1a1a]">AgriSense Udawalawe</h1>
          <p className="text-center text-[#666] mb-8">
            Smart Field Health Monitoring
          </p>

          <motion.button
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => onNavigate('dashboard')}
            className="w-full bg-[#2F80ED] text-white py-4 rounded-[12px] transition-all duration-300 hover:shadow-lg hover:shadow-[#2F80ED]/30"
          >
            Get Started
          </motion.button>

          <p className="text-center mt-6 text-[12px] text-[#888]">
            Powered by satellite imagery & AI validation
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}