import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <Layout>
      <section className="py-20 bg-neon-yellow">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a question, collaboration, or just want to say hi? Send me a message below!
          </motion.p>
          <ContactForm />
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 font-space-grotesk"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Connect With Me
          </motion.h2>
          <motion.p
            className="text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm active on various social media platforms. Feel free to connect with me!
          </motion.p>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-primary transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              {/* LinkedIn Icon */}
              <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m0 2H5v14h14V5z" />
                <path d="M8 10h2v5H8zm1-2.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM14 15h2v-3c0-.55-.45-1-1-1a1 1 0 0 0-1 1v3z" />
              </svg>
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-primary transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              {/* GitHub Icon */}
              <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.54.5.09.68-.22.68-.49V21c-2.78.6-5.05-1.34-5.05-3.14 0-.7.25-1.26.65-1.71 0 0 0 0 0 0 .4-.03.71-.2.71-.2 0 .38.21.62.47.62 2.72 0 5.04-2.22 5.04-5 0-2.22-.82-4.04-2.17-5.44.21-.2.42-.63.42-1.28 0-.3-.1-.56-.3-.76 0 0-.27-.1-.89.54 0 0-.22-.65-.59-.65 0 0-.52.17-1.78.65 0 0 .67-.17 1.94-.17 0 0 0 0 0 0 .33 1.01.99 1.51 1.94 1.51-1.48-.03-2.72-.49-3.81-.49 0 0-.45.17-1.32.83 0 0-.09-.65-.3-.76 0 0-.73-.27-2.38 1.08 0 0 .22.54.89.65 0 0 .3.1.71.2 0 0-1.17 1.38-1.17 4.14 0 2.72 1.84 4.44 4.17 4.74.33.09.65.2.89.2 0 0 0 0 0 0 0-.3.11-.49.68-.49C16.13 20.17 19 16.42 19 12A10 10 0 0 0 12 2z" />
              </svg>
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-primary transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              {/* Twitter Icon */}
              <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em">
                <path d="M23.65 5.57a9.34 9.34 0 0 1-2.6.72 4.68 4.68 0 0 0 2-2.57 9.43 9.43 0 0 1-3 1.19 4.65 4.65 0 0 0-7.93 4.27 13.22 0 0 1-9.64-4.88 4.66 4.66 0 0 0 1.44 6.21A4.6 4.6 0 0 1 2.77 9.54v.06a4.66 4.66 0 0 0 3.74 4.56 4.69 4.69 0 0 1-2.11.08 4.67 4.67 0 0 0 4.37 3.23 9.36 9.36 0 0 1-5.78 1.99 9.5 9.5 0 0 1-1.11-.07 4.66 4.66 0 0 0 4.34 3 9.34 9.34 0 0 1-5.76 2.01c-.24 0-.43 0-.68-.06A13.14 13.14 0 0 0 7.81 21a13.76 13.76 0 0 0 7.17 2.19 13.26 13.26 0 0 0 4.08-.55c-.23-.77-.36-1.6-.36-2.46 0-.59.08-1.16.24-1.71a9.4 9.4 0 0 0 2.42-2.39c.3-.61.52-1.28.71-1.98a4.78 4.78 0 0 0 1.31-3.07 9.35 9.35 0 0 1-.07-.83c.18-.57.33-1.18.48-1.82z" />
              </svg>
            </motion.a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
