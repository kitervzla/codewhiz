import { motion } from 'framer-motion'

export default function Services() {
  return (
    <div className="container section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg shadow-lg bg-white"
            >
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="list-disc list-inside text-gray-600">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

const services = [
  {
    title: "Website Development",
    description: "Custom websites that perfectly match your brand and goals.",
    features: [
      "Responsive design",
      "SEO optimization",
      "Performance optimization",
      "Content management systems"
    ]
  },
  {
    title: "E-commerce Solutions",
    description: "Complete online store development and management.",
    features: [
      "Shopping cart integration",
      "Payment gateway setup",
      "Inventory management",
      "Order tracking"
    ]
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile applications.",
    features: [
      "iOS and Android apps",
      "Cross-platform development",
      "App maintenance",
      "Performance optimization"
    ]
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive digital marketing solutions.",
    features: [
      "SEO services",
      "Content marketing",
      "Social media management",
      "Email marketing"
    ]
  }
]
