import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PillarSection = ({ id, title, icon, description, benefits, buttonText, buttonLink, imageSrc, imageAlt, iconBg, reverse = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const contentVariants = {
    hidden: { opacity: 0, x: reverse ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: reverse ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id={id}>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${reverse ? 'md:grid-flow-dense' : ''}`}>
        <motion.div
          ref={ref}
          variants={contentVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className={`flex flex-col gap-4 ${reverse ? 'md:col-start-2' : ''}`}
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-3xl">{icon}</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>
          
          <ul className="space-y-3 mt-2 text-gray-700 dark:text-gray-200">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                custom={index}
                variants={listItemVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="flex items-start gap-3"
              >
                <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                <span>{benefit}</span>
              </motion.li>
            ))}
          </ul>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-6"
          >
            {buttonLink?.startsWith('/') ? (
              <Link
                to={buttonLink}
                className="inline-flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-transform duration-200 hover:scale-105"
              >
                <span className="truncate">{buttonText}</span>
              </Link>
            ) : (
              <a
                className="inline-flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-transform duration-200 hover:scale-105"
                href={buttonLink || '#'}
              >
                <span className="truncate">{buttonText}</span>
              </a>
            )}
          </motion.div>
        </motion.div>
        
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className={`relative h-80 lg:h-96 ${reverse ? 'md:col-start-1 md:row-start-1' : ''}`}
        >
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            alt={imageAlt}
            className={`absolute w-[80%] h-full object-cover rounded-xl shadow-lg ${reverse ? 'left-0' : 'right-0'} top-0`}
            src={imageSrc}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className={`absolute w-[50%] h-[70%] bg-gray-100 dark:bg-gray-800 rounded-xl shadow-2xl ${reverse ? 'right-0' : 'left-0'} bottom-0 border-4 border-white dark:border-background-dark flex items-center justify-center`}
          >
            <span className="material-symbols-outlined text-5xl text-primary">{iconBg}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PillarSection;
