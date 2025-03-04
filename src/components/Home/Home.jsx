import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    // const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-grid-cyan-500/[0.02]" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/05 to-transparent opacity-15" />

            {/* Floating Orbs */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed" />

            <div className="relative container mx-auto px-4 sm:px-6 py-12 md:py-20 xl:p-20 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 xl:gap-12 w-full">
                    {/* Left Content */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left max-w-2xl lg:max-w-none"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Employee Management<br />
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                                System
                            </span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-base md:text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto lg:mx-0"
                        >
                            Revolutionize team productivity with AI-powered task management, real-time analytics,
                            and seamless cross-platform synchronization.
                        </motion.p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/login')}
                            className="relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-2xl font-bold text-base md:text-lg hover:shadow-cyan-glow transition-all group mx-auto lg:mx-0"
                        >
                            <span className="relative z-10">Get Started</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.button>
                    </motion.div>

                    {/* Right Content - Enhanced Holographic Preview */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 relative w-full lg:w-[45%] xl:w-[40%] 2xl:w-[35%] mt-12 lg:mt-0"
                    >
                        <div className="absolute inset-0 bg-cyan-500/10 rounded-3xl blur-2xl -z-10" />
                        <div className="relative space-y-6 p-6 sm:p-8 bg-zinc-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-3xl shadow-2xl shadow-cyan-500/10 overflow-hidden">

                            {/* Full Task Creation Animation */}
                            <div className="relative h-64 sm:h-80 md:h-96 bg-zinc-900 rounded-xl overflow-hidden border border-cyan-500/20 p-4">
                                {/* Animated Cursor */}
                                <motion.div
                                    className="absolute w-3 h-3 sm:w-4 sm:h-4 border-2 border-cyan-500 rounded-full pointer-events-none z-20"
                                    animate={{
                                        x: [20, 20, 20, 20, 20, 200, 200, 200, 200, 200],
                                        y: [40, 80, 120, 160, 200, 40, 80, 120, 160, 200]
                                    }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]
                                    }}
                                >
                                    <div className="absolute inset-0 animate-ping rounded-full bg-cyan-500/30" />
                                </motion.div>

                                {/* Task Title */}
                                <motion.div
                                    className="mb-3 sm:mb-4"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: [0, 1, 1, 0],
                                        transition: {
                                            duration: 20,
                                            repeat: Infinity,
                                            times: [0, 0.1, 0.4, 0.5]
                                        }
                                    }}
                                >
                                    <div className="text-cyan-500 text-xs sm:text-sm mb-1">Task Title</div>
                                    <div className="h-8 sm:h-10 bg-zinc-800/50 rounded-lg p-2 font-mono text-cyan-300 relative overflow-hidden">
                                        <motion.div
                                            className="absolute inset-0 bg-cyan-500/10"
                                            animate={{ width: ['0%', '100%', '100%', '0%'] }}
                                            transition={{
                                                duration: 20,
                                                repeat: Infinity,
                                                times: [0.05, 0.15, 0.4, 0.5]
                                            }}
                                        />
                                        <motion.span
                                            className="relative text-sm sm:text-base"
                                            animate={{ opacity: [0, 1, 1, 0] }}
                                            transition={{
                                                duration: 20,
                                                repeat: Infinity,
                                                times: [0.05, 0.1, 0.4, 0.45]
                                            }}
                                        >
                                            Develop New Dashboard
                                        </motion.span>
                                    </div>
                                </motion.div>

                                {/* Task Description */}
                                <motion.div
                                    className="mb-3 sm:mb-4"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: [0, 1, 1, 0],
                                        transition: {
                                            duration: 20,
                                            repeat: Infinity,
                                            times: [0.2, 0.3, 0.6, 0.7]
                                        }
                                    }}
                                >
                                    <div className="text-cyan-500 text-xs sm:text-sm mb-1">Description</div>
                                    <div className="h-16 sm:h-20 bg-zinc-800/50 rounded-lg p-2 font-mono text-cyan-300 relative overflow-hidden">
                                        <motion.div
                                            className="absolute inset-0 bg-cyan-500/10"
                                            animate={{ width: ['0%', '100%', '100%', '0%'] }}
                                            transition={{
                                                duration: 20,
                                                repeat: Infinity,
                                                times: [0.25, 0.35, 0.6, 0.65]
                                            }}
                                        />
                                        <motion.span
                                            className="relative text-sm sm:text-base"
                                            animate={{ opacity: [0, 1, 1, 0] }}
                                            transition={{
                                                duration: 20,
                                                repeat: Infinity,
                                                times: [0.25, 0.3, 0.6, 0.65]
                                            }}
                                        >
                                            Create responsive dashboard\nwith real-time analytics...
                                        </motion.span>
                                    </div>
                                </motion.div>

                                {/* Date and Priority */}
                                <motion.div
                                    className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: [0, 1, 1, 0],
                                        transition: {
                                            duration: 20,
                                            repeat: Infinity,
                                            times: [0.4, 0.5, 0.8, 0.9]
                                        }
                                    }}
                                >
                                    <div>
                                        <div className="text-cyan-500 text-xs sm:text-sm mb-1">Due Date</div>
                                        <div className="h-8 sm:h-10 bg-zinc-800/50 rounded-lg p-2 font-mono text-cyan-300 text-sm sm:text-base">
                                            2024-03-15
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-cyan-500 text-xs sm:text-sm mb-1">Priority</div>
                                        <div className="h-8 sm:h-10 bg-cyan-500/20 rounded-lg p-2 font-mono text-cyan-300 flex items-center text-sm sm:text-base">
                                            <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2" />
                                            High Priority
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Assign Employee */}
                                <motion.div
                                    className="mb-3 sm:mb-4"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: [0, 1, 1, 0],
                                        transition: {
                                            duration: 20,
                                            repeat: Infinity,
                                            times: [0.6, 0.7, 1, 1]
                                        }
                                    }}
                                >
                                    <div className="text-cyan-500 text-xs sm:text-sm mb-1">Assign To</div>
                                    <div className="grid grid-cols-3 gap-2">
                                        {['Sarah', 'Mike', 'Emma'].map((name, i) => (
                                            <motion.div
                                                key={name}
                                                className="h-8 sm:h-10 bg-zinc-800/50 rounded-lg flex items-center justify-center relative"
                                                animate={{
                                                    borderColor: i === 1 ? '#06b6d4' : 'rgba(0,0,0,0)',
                                                    borderWidth: '1px'
                                                }}
                                                transition={{
                                                    duration: 20,
                                                    repeat: Infinity,
                                                    times: [0.65, 0.7, 0.95, 1]
                                                }}
                                            >
                                                <span className="text-cyan-300 text-xs sm:text-sm">{name}</span>
                                                {i === 1 && (
                                                    <motion.div
                                                        className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-cyan-500 rounded-full flex items-center justify-center text-[8px] sm:text-xs"
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: [0, 1, 1, 0] }}
                                                        transition={{
                                                            duration: 20,
                                                            repeat: Infinity,
                                                            times: [0.7, 0.75, 0.95, 1]
                                                        }}
                                                    >
                                                        ✓
                                                    </motion.div>
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Progress and Success */}
                                <motion.div
                                    className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm flex items-center justify-center"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: [0, 1, 1, 0],
                                        transition: {
                                            duration: 20,
                                            repeat: Infinity,
                                            times: [0.8, 0.85, 0.95, 1]
                                        }
                                    }}
                                >
                                    <div className="text-xl sm:text-2xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent font-bold">
                                        ✓ Task Created!
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Feature Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 md:mt-24"
                >
                    {['Seamless Experience', 'Real-time Updation', 'Mobile Compatible', 'Work Efficient'].map((feature, i) => (
                        <div
                            key={feature}
                            className="p-4 sm:p-6 bg-zinc-900/50 backdrop-blur-lg border border-cyan-500/10 rounded-xl hover:border-cyan-500/30 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="text-cyan-500 text-2xl sm:text-3xl mb-3 sm:mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                                {['🚀', '🔄', '📱', '📈'][i]}
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{feature}</h3>
                            <p className="text-xs sm:text-sm text-zinc-400">
                                {[
                                    'Smooth cross-platform operation with unified interface across all devices',
                                    'Instant synchronization of tasks and updates across entire organization',
                                    'Fully optimized mobile interface with offline capabilities',
                                    'Boost productivity with intelligent workflow automation and analytics'
                                ][i]}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Home;