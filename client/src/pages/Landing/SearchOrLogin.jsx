import { useState } from "react";

import LoginForm from "./loginForm";
import SearchBar from "./SearchBar";


export default function SearchOrLogin() {
    const [showLoginForm, setShowLoginForm] = useState(false);
    
    return(
        <>
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
        </>
    )
}