import { motion } from 'framer-motion';
import { ArrowRight, Server, Shield, Recycle, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#1a1a2e] to-[#16162a] text-white overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          {/* Ethereum-inspired particle effect */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ y: Math.random() * 100 }}
              animate={{ 
                y: [Math.random() * 100, Math.random() * -100],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              <div className="w-2 h-2 bg-[#64ffda] rounded-full opacity-20"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="mb-8 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Ethereum-inspired logo animation */}
            <div className="relative w-24 h-24 mx-auto">
              <motion.div
                animate={{ 
                  rotateY: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Server className="h-20 w-20 text-[#64ffda]" />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Power the
            <span className="bg-gradient-to-r from-[#64ffda] to-[#00b4d8] bg-clip-text text-transparent block mt-2">
              Ethereum Network
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join the decentralized future with our sustainable node solutions.
            Support Ethereum mainnet and popular L2 networks.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              to="/products"
              className="bg-[#64ffda] text-gray-900 px-8 py-4 rounded-lg hover:bg-[#4ad8b7] transition-all transform hover:scale-105 flex items-center justify-center gap-2 group font-semibold"
            >
              Start Validating
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/about"
              className="bg-gray-800 text-[#64ffda] border border-[#64ffda] px-8 py-4 rounded-lg hover:bg-[#64ffda]/10 transition-all transform hover:scale-105"
            >
              Learn More
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Server,
                title: "Mainnet Ready",
                description: "Optimized for Ethereum mainnet validation"
              },
              {
                icon: Layers,
                title: "L2 Compatible",
                description: "Support for Arbitrum, Optimism, and more"
              },
              {
                icon: Shield,
                title: "MEV Protected",
                description: "Built-in MEV-boost configuration"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-700/50 transition-colors border border-[#64ffda]/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
              >
                <div className="bg-[#64ffda]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-[#64ffda]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}