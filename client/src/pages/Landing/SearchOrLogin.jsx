import { useState, useEffect } from "react";
import Auth from "../../utils/auth";

import LoginForm from "./loginForm";
import SearchBar from "./SearchBar";
import Logout from "./Logout";

export default function SearchOrLogin() {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showSearch, setShowSearch] = useState(true);
    
    // Check login status on component mount and when auth changes
    useEffect(() => {
        setIsLoggedIn(Auth.loggedIn());
    }, []);
    
    // Handle toggling between search and login/logout depending on auth status
    const toggleView = () => {
        if (isLoggedIn) {
            setShowSearch(!showSearch);
        } else {
            setShowLoginForm(!showLoginForm);
        }
    };
    
    // Handle returning to search from logout panel
    const handleSearch = () => {
        setShowSearch(true);
    };
    
    return(
        <>
            {/* Right section - Search or Login/Logout - full width on mobile, 1/3 width on md and up */}
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-4 md:p-0">
                {isLoggedIn ? (
                    // Logged in state: show either search or logout section
                    showSearch ? <SearchBar /> : <Logout handleSearch={handleSearch} />
                ) : (
                    // Logged out state: show either search or login form
                    showLoginForm ? <LoginForm /> : <SearchBar />
                )}
                
                {/* Toggle button text changes based on state */}
                <button 
                    onClick={toggleView}
                    className="mt-4 text-white hover:underline transition-colors duration-200"
                >
                    {isLoggedIn ? (
                        showSearch ? "Go to Admin Panel" : "Return to Search"
                    ) : (
                        showLoginForm ? "Back to Search" : "Admin Login"
                    )}
                </button>
            </div>
        </>
    )
}