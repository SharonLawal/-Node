import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Settings, HardDrive, Cpu, Zap, Server, Shield } from 'lucide-react';

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: Settings,
      title: "Multiple Node Software Options",
      description: "Choose from popular options like DappNode, Stereum, and more"
    },
    {
      icon: HardDrive,
      title: "Flexible Storage Options",
      description: "2TB to 4TB SSD options for optimal performance"
    },
    {
      icon: Cpu,
      title: "Powerful Processing",
      description: "Intel i3, i5, and i7 processors to match your needs"
    },
    {
      icon: Zap,
      title: "Energy Efficient",
      description: "Optimized for low power consumption"
    },
    {
      icon: Server,
      title: "Pre-configured",
      description: "Ready to run out of the box"
    },
    {
      icon: Shield,
      title: "Secure Setup",
      description: "Enhanced security configurations"
    }
  ];

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to Run a Node
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our hardware solutions come with all the features you need for reliable node operation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <div className="bg-green-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                <feature.icon className="h-8 w-8 text-green-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}