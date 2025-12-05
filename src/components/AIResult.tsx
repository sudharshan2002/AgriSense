import { motion } from 'motion/react';
import { CheckCircle, Info, ArrowRight } from 'lucide-react';
import { Screen } from '../App';

interface AIResultProps {
  type: 'confirmed' | 'false';
  onNavigate: (screen: Screen) => void;
}

export default function AIResult({ type, onNavigate }: AIResultProps) {
  const isConfirmed = type === 'confirmed';

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4F6F8] to-white flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="flex justify-center mb-6"
        >
          <div
            className={`p-6 rounded-full ${
              isConfirmed ? 'bg-[#16C47F]/10' : 'bg-gray-200'
            }`}
          >
            {isConfirmed ? (
              <CheckCircle size={64} className="text-[#16C47F]" />
            ) : (
              <Info size={64} className="text-gray-500" />
            )}
          </div>
        </motion.div>

        {/* Result Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-[16px] p-6 shadow-2xl mb-6"
        >
          <div className="text-center mb-4">
            <h2
              className={`mb-3 ${
                isConfirmed ? 'text-[#16C47F]' : 'text-gray-700'
              }`}
            >
              {isConfirmed ? 'Issue Confirmed' : 'No Issue Detected'}
            </h2>
            <p className="text-[14px] text-[#666] leading-relaxed">
              {isConfirmed
                ? 'Ground image matches satellite detection. Water stress confirmed in this zone.'
                : 'No stress detected in ground image. Satellite detection may be a false positive.'}
            </p>
          </div>

          {/* Comparison Visual */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="backdrop-blur-xl bg-white/80 rounded-[12px] p-3 border border-white/60">
              <label className="text-[#888] block mb-2">Satellite</label>
              <div
                className={`h-2 rounded-full ${
                  isConfirmed ? 'bg-[#EB5757]' : 'bg-[#F2C94C]'
                }`}
              />
              <p className="text-[12px] text-[#666] mt-2">
                {isConfirmed ? 'High stress' : 'Medium stress'}
              </p>
            </div>
            <div className="backdrop-blur-xl bg-white/80 rounded-[12px] p-3 border border-white/60">
              <label className="text-[#888] block mb-2">Ground</label>
              <div
                className={`h-2 rounded-full ${
                  isConfirmed ? 'bg-[#EB5757]' : 'bg-[#16C47F]'
                }`}
              />
              <p className="text-[12px] text-[#666] mt-2">
                {isConfirmed ? 'High stress' : 'Healthy'}
              </p>
            </div>
          </div>

          {isConfirmed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-[#16C47F]/10 rounded-[12px] p-3"
            >
              <p className="text-[12px] text-[#16C47F]">
                ✓ Validation complete • Confidence: 94%
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {isConfirmed ? (
            <>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate('recommendations')}
                className="w-full bg-[#2F80ED] text-white py-4 rounded-[12px] transition-all hover:shadow-lg hover:shadow-[#2F80ED]/30 flex items-center justify-center gap-3"
              >
                <span>View Recommendations</span>
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate('map')}
                className="w-full backdrop-blur-xl bg-white/80 border border-white/60 text-[#666] py-4 rounded-[12px] transition-all hover:shadow-lg"
              >
                Return to Map
              </motion.button>
            </>
          ) : (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('map')}
              className="w-full bg-[#2F80ED] text-white py-4 rounded-[12px] transition-all hover:shadow-lg hover:shadow-[#2F80ED]/30"
            >
              Return to Map
            </motion.button>
          )}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-[12px] text-[#888] mt-6"
        >
          {isConfirmed
            ? 'Data saved to zone history'
            : 'Feedback logged for model improvement'}
        </motion.p>
      </div>
    </div>
  );
}
