import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

// Animation variants for Framer Motion
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

const floatingVariants = {
    animate: {
        y: [0, -8, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

const HeroSection = ({ title, subtitle, actions, stats, images, className }) => {
    return (
        <section className={cn('w-full overflow-hidden bg-background py-12 sm:py-24', className)}>
            <div className="container mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
                {/* Left Column: Text Content */}
                <motion.div
                    className="flex flex-col items-center text-center lg:items-start lg:text-justify"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
                        variants={itemVariants}
                    >
                        {title}
                    </motion.div>
                    <motion.p className="mt-6 max-w-md text-lg text-muted-foreground" variants={itemVariants}>
                        {subtitle}
                    </motion.p>
                    <motion.div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start" variants={itemVariants}>
                        {actions && actions.map((action, index) => (
                            <Button key={index} onClick={action.onClick} variant={action.variant} size="lg" className={action.className}>
                                {action.text}
                            </Button>
                        ))}
                    </motion.div>
                    {/* Stats removed if empty, or render if present */}
                    {stats && stats.length > 0 && (
                        <motion.div className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start" variants={itemVariants}>
                            {stats.map((stat, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">{stat.icon}</div>
                                    <div>
                                        <p className="text-xl font-bold text-foreground">{stat.value}</p>
                                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </motion.div>

                {/* Right Column: Single Professional Hero Image */}
                <motion.div
                    className="relative flex items-center justify-center w-full h-[350px] sm:h-[450px]"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Decorative Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-3xl rounded-full" />
                    
                    {/* Decorative Shapes */}
                    <motion.div
                        className="absolute -top-4 right-1/4 h-12 w-12 rounded-full bg-blue-200/40 dark:bg-blue-800/20"
                        variants={floatingVariants}
                        animate="animate"
                    />
                    <motion.div
                        className="absolute bottom-0 left-1/4 h-10 w-10 rounded-lg bg-purple-200/40 dark:bg-purple-800/20"
                        variants={floatingVariants}
                        animate="animate"
                        style={{ transitionDelay: '0.5s' }}
                    />

                    {/* Image Container with Elegant Border/Shadow */}
                    {images && images.length > 0 && (
                        <motion.div
                            className="relative w-full h-full max-w-[480px] overflow-hidden rounded-2xl border-4 border-white dark:border-gray-800 shadow-2xl bg-muted"
                            variants={imageVariants}
                            style={{ zIndex: 10 }}
                        >
                            <img 
                                src={images[0]} 
                                alt="CALSTAR Legal Research" 
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out" 
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
