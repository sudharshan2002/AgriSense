import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Screen } from '../App';

interface AIProcessingProps {
  onNavigate: (screen: Screen) => void;
}

export default function AIProcessing({ onNavigate }: AIProcessingProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNavigate('aiResult');
    }, 3000);

    return () => clearTimeout(timer);
  }, [onNavigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2F80ED]/5 via-[#16C47F]/5 to-[#F4F6F8] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated Background Shapes */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-10 w-64 h-64 bg-[#2F80ED] rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-64 h-64 bg-[#16C47F] rounded-full blur-3xl"
      />

      <div className="relative z-10 text-center max-w-md">
        {/* Pulse Loader */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-[#2F80ED]/30"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            className="absolute inset-0 rounded-full bg-[#2F80ED]/40"
          />
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#2F80ED] border-r-[#16C47F]"
          />
          <div className="absolute inset-0 flex items-center justify-center backdrop-blur-xl bg-white/60 rounded-full border border-white/80 shadow-2xl">
            <motion.svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <circle cx="24" cy="24" r="20" stroke="#2F80ED" strokeWidth="2" opacity="0.3" />
              <path
                d="M24 14 L24 24 L32 24"
                stroke="#2F80ED"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="24" cy="24" r="2" fill="#2F80ED" />
            </motion.svg>
          </div>
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-[#1a1a1a] mb-3">Analysing your image...</h2>
          <p className="text-[14px] text-[#666] mb-6">
            AI is comparing ground data with satellite detection
          </p>

          {/* Progress Steps */}
          <div className="backdrop-blur-xl bg-white/40 border border-white/60 rounded-[14px] p-4 shadow-lg">
            <div className="space-y-3">
              {[
                { label: 'Processing image', delay: 0 },
                { label: 'Analyzing vegetation health', delay: 0.3 },
                { label: 'Cross-referencing satellite data', delay: 0.6 },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: step.delay }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      backgroundColor: ['#2F80ED', '#16C47F', '#2F80ED'],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: step.delay }}
                    className="w-2 h-2 rounded-full bg-[#2F80ED]"
                  />
                  <p className="text-[14px] text-[#666]">{step.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
