import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.215, 0.61, 0.355, 1], // ease-out-cubic
        },
    },
};

const HeroSection = ({ title, subtitle, actions, stats, className }) => {
    return (
        <section className={cn('relative w-full overflow-hidden bg-background py-20 sm:py-32 flex items-center justify-center min-h-[85vh]', className)}>
            {/* Elegant Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-blue-100/40 to-transparent blur-3xl opacity-50 dark:from-blue-900/20" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tl from-amber-100/40 to-transparent blur-3xl opacity-50 dark:from-amber-900/20" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-20" />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="flex flex-col items-center text-center max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Badge/Eyebrow */}
                    <motion.div variants={itemVariants} className="mb-6">
                        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary border border-primary/20 backdrop-blur-sm shadow-sm">
                            MNLU Mumbai's Premier Legal Hub
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.div
                        className="text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl lg:text-8xl mb-8 leading-tight drop-shadow-sm flex justify-center"
                        variants={itemVariants}
                    >
                        {title}
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p 
                        className="max-w-2xl text-xl sm:text-2xl text-muted-foreground leading-relaxed mb-10 font-medium" 
                        variants={itemVariants}
                    >
                        {subtitle}
                    </motion.p>

                    {/* Actions */}
                    <motion.div 
                        className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto" 
                        variants={itemVariants}
                    >
                        {actions && actions.map((action, index) => (
                            <Button 
                                key={index} 
                                onClick={action.onClick} 
                                variant={action.variant} 
                                size="lg" 
                                className={cn("w-full sm:w-auto text-lg px-8 py-6 rounded-full shadow-md hover:shadow-xl transition-all duration-400 hover:-translate-y-1 font-semibold", action.className)}
                            >
                                {action.text}
                            </Button>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
