import { useState, useRef, useEffect } from "react";
import MeetingModal from "./MeetingModal";
import BeerModal from "./BeerModal";
import GeneralSettingsModal from "./GeneralSettingsModal";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // null, "meeting", "beer", "general"
  
  const dropdownRef = useRef(null);
  
  const [meetingForm, setMeetingForm] = useState({
    date: "",
    time: "",
    location: ""
  });
  
  const [beerForm, setBeerForm] = useState({
    beerName: "",
    brewery: "",
    abv: "",
    rating: "",
    comments: ""
  });
  
  const [generalForm, setGeneralForm] = useState({
    description: "Our club meets regularly to taste and rate craft beers from around the world, focusing primarily on IPAs and exploring the nuances of hop varieties."
  });

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMeetingChange = (e) => {
    const { name, value } = e.target;
    setMeetingForm({
      ...meetingForm,
      [name]: value
    });
  };

  const handleBeerChange = (e) => {
    const { name, value } = e.target;
    setBeerForm({
      ...beerForm,
      [name]: value
    });
  };

  const handleGeneralChange = (e) => {
    const { name, value } = e.target;
    setGeneralForm({
      ...generalForm,
      [name]: value
    });
  };

  const handleMeetingSubmit = (e) => {
    e.preventDefault();
    console.log("Meeting details:", meetingForm);
    setActiveModal(null);
  };

  const handleBeerSubmit = (e) => {
    e.preventDefault();
    console.log("Beer entry:", beerForm);
    setActiveModal(null);
  };

  const handleGeneralSubmit = (e) => {
    e.preventDefault();
    console.log("General settings:", generalForm);
    setActiveModal(null);
  };

  return (
    <>
      {/* Header with frosted glass effect, positioned on top of the gradient */}
      <header className="fixed top-0 left-0 right-0 z-50 mx-auto w-full px-4 py-3">
        <div className="mx-auto w-4/5 bg-white/10 backdrop-blur-md rounded-lg shadow-lg">
          <div className="flex justify-between items-center px-6 py-3">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">Club Rating</h1>
            </div>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors duration-200 shadow-md flex items-center"
              >
                Admin Tools
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 ml-2 transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-amber-800 rounded-md shadow-lg py-1 z-50">
                  <button 
                    onClick={() => {
                      setActiveModal("meeting");
                      setIsDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-amber-700 transition"
                  >
                    Schedule Meeting
                  </button>
                  <button 
                    onClick={() => {
                      setActiveModal("beer");
                      setIsDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-amber-700 transition"
                  >
                    Beer Entry
                  </button>
                  <button 
                    onClick={() => {
                      setActiveModal("general");
                      setIsDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-amber-700 transition"
                  >
                    General Settings
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Render the appropriate modal based on activeModal state */}
      {activeModal === "meeting" && (
        <MeetingModal 
          setActiveModal={setActiveModal}
          meetingForm={meetingForm}
          handleMeetingChange={handleMeetingChange}
          handleMeetingSubmit={handleMeetingSubmit}
        />
      )}

      {activeModal === "beer" && (
        <BeerModal 
          setActiveModal={setActiveModal}
          beerForm={beerForm}
          handleBeerChange={handleBeerChange}
          handleBeerSubmit={handleBeerSubmit}
        />
      )}

      {activeModal === "general" && (
        <GeneralSettingsModal 
          setActiveModal={setActiveModal}
          generalForm={generalForm}
          handleGeneralChange={handleGeneralChange}
          handleGeneralSubmit={handleGeneralSubmit}
        />
      )}
    </>
  );
}