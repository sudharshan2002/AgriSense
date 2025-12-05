import { motion } from 'motion/react';
import { ArrowLeft, Camera, Image } from 'lucide-react';
import { Screen } from '../App';

interface ImageUploadProps {
  onNavigate: (screen: Screen) => void;
}

export default function ImageUpload({ onNavigate }: ImageUploadProps) {
  const handleCapture = () => {
    onNavigate('aiProcessing');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#F4F6F8]"
    >
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200/50 px-6 py-4">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => onNavigate('zoneDetails')}
            className="p-2 rounded-[10px] hover:bg-black/5 transition-all"
          >
            <ArrowLeft size={20} className="text-[#1a1a1a]" />
          </motion.button>
          <div>
            <h2 className="text-[#1a1a1a]">Ground Validation</h2>
            <p className="text-[12px] text-[#888]">Upload Field Image</p>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6 py-8">
        {/* Camera Frame */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="relative mb-8"
        >
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="aspect-[4/3] backdrop-blur-xl bg-white/40 border-2 border-dashed border-[#2F80ED]/40 rounded-[16px] flex items-center justify-center overflow-hidden shadow-lg"
          >
            <div className="text-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex p-6 bg-[#2F80ED]/10 rounded-full mb-4"
              >
                <Camera size={48} className="text-[#2F80ED]" />
              </motion.div>
              <p className="text-[14px] text-[#666]">Camera preview will appear here</p>
            </div>

            {/* Corner Markers */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#2F80ED] rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#2F80ED] rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#2F80ED] rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#2F80ED] rounded-br-lg" />
          </motion.div>
        </motion.div>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-[14px] p-4 mb-6 shadow-md"
        >
          <label className="text-[#888] block mb-2">📸 Tips for best results:</label>
          <ul className="space-y-1 text-[14px] text-[#666]">
            <li>• Ensure good lighting conditions</li>
            <li>• Capture close-up of affected area</li>
            <li>• Keep camera steady</li>
            <li>• Include surrounding vegetation</li>
          </ul>
        </motion.div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCapture}
            className="w-full bg-[#2F80ED] text-white py-4 rounded-[12px] transition-all hover:shadow-lg hover:shadow-[#2F80ED]/30 flex items-center justify-center gap-3"
          >
            <Camera size={20} />
            <span>Capture Image</span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCapture}
            className="w-full backdrop-blur-xl bg-white/80 border border-white/60 text-[#2F80ED] py-4 rounded-[12px] transition-all hover:shadow-lg flex items-center justify-center gap-3"
          >
            <Image size={20} />
            <span>Select from Gallery</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
