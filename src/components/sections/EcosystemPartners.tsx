import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function EcosystemPartners() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const partners = [
    {
      name: "Ethereum",
      logo: "https://ethereum.org/static/4f10d2777b2d14759feb01c65b2765f7/69ce7/eth-glyph-colored.webp",
      description: "The foundation of decentralized computing"
    },
    {
      name: "Optimism",
      logo: "https://raw.githubusercontent.com/ethereum-optimism/brand-kit/main/assets/svg/Profile-Logo.svg",
      description: "Layer 2 scaling solution"
    },
    {
      name: "Base",
      logo: "https://raw.githubusercontent.com/base-org/brand-kit/main/logo/base-logo.svg",
      description: "The secure blockchain for everyone"
    },
    {
      name: "Lido",
      logo: "https://lido.fi/static/images/lido-logo.svg",
      description: "Liquid staking protocol"
    },
    {
      name: "DappNode",
      logo: "https://docs.dappnode.io/img/dappnode-logo-full.svg",
      description: "Node operation made easy"
    },
    {
      name: "EtherFi",
      logo: "https://etherfi.io/images/logo.svg",
      description: "Decentralized staking platform"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ecosystem Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Supporting the entire Ethereum ecosystem with compatible hardware solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="w-20 h-20 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">{partner.name}</h3>
              <p className="text-sm text-gray-500 text-center">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}