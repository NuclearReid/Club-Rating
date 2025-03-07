import { useState } from "react";
import LoginForm from "./loginForm";
import SearchBar from "./SearchBar";
import SignupForm from "./SignupForm";

export default function Landing() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Full screen animated gradient background */}
      <div className="absolute inset-0 animated-gradient"></div>

      {/* Content container - flex-col (stacked) on mobile, row (side by side) on md and up */}
      <div className="relative z-10 flex flex-col md:flex-row h-full w-full">
        {/* Title section - full width on mobile, 2/3 width on md and up */}
        <div className="w-full md:w-2/3 flex flex-col justify-center items-center text-white p-6 md:p-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8 text-center">
            Club Rating
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget
            ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies
            tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nisl eget
            nisl.
          </p>
        </div>

        {/* Right section - Search or Login - full width on mobile, 1/3 width on md and up */}
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-4 md:p-0">
          {showLoginForm ? <LoginForm /> : <SearchBar />}
          
          {/* Admin toggle link */}
          <button 
            onClick={() => setShowLoginForm(!showLoginForm)}
            className="mt-4 text-white hover:underline transition-colors duration-200"
          >
            {showLoginForm ? "Back to search" : "Admin click here"}
          </button>
          
        </div>
      </div>
      
    </div>

  );
}