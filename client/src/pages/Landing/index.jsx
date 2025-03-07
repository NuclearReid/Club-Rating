export default function Landing() {
    console.log('on the landing page');
    
    return (
        <div className="flex h-screen w-full">
            {/* Left side - 2/3 width with title and description */}
            <div className="w-2/3 relative overflow-hidden flex flex-col justify-center items-center text-white">
                {/* Animated gradient background */}
                <div className="absolute inset-0 animated-gradient"></div>
                
                {/* Content */}
                <div className="z-10 p-12">
                    <h1 className="text-6xl font-bold mb-8 text-center">Club Rating</h1>
                    <p className="text-xl max-w-2xl text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, 
                        nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies 
                        nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, 
                        nunc nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
                    </p>
                </div>
            </div>
            
            {/* Right side - 1/3 width with login form */}
            <div className="w-1/3 bg-gradient-to-bl from-orange-400 to-red-500 p-8 flex flex-col justify-center">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-xl">
                    <h2 className="text-3xl font-bold mb-6 text-white text-center">Login</h2>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-white text-sm font-medium mb-2" htmlFor="email">
                                Email
                            </label>
                            <input 
                                type="email" 
                                id="email"
                                className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="block text-white text-sm font-medium mb-2" htmlFor="password">
                                Password
                            </label>
                            <input 
                                type="password" 
                                id="password"
                                className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div>
                            <button 
                                type="submit"
                                className="w-full bg-white text-red-500 font-bold py-2 px-4 rounded-lg hover:bg-white/90 transition duration-200"
                            >
                                Sign In
                            </button>
                        </div>
                        <div className="text-center text-sm text-white">
                            <a href="#" className="hover:underline">Forgot password?</a>
                            <div className="mt-2">
                                Don't have an account? <a href="#" className="hover:underline font-medium">Sign up</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}