import { useState, useRef, useEffect } from "react";

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
      {/* Header */}
      <header className="sticky top-0 z-50 mx-auto w-full px-4 py-3">
        <div className="mx-auto w-4/5 bg-white/10 backdrop-blur-md rounded-lg shadow-lg flex justify-between items-center px-6 py-3">
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
      </header>

      {/* Schedule Meeting Modal */}
      {activeModal === "meeting" && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-amber-800 to-amber-900 w-4/5 max-w-4xl rounded-xl shadow-2xl">
            {/* Modal Header */}
            <div className="border-b border-amber-700 p-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-amber-100">Schedule Next Meeting</h2>
              <button
                onClick={() => setActiveModal(null)}
                className="text-amber-300 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              <form onSubmit={handleMeetingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-amber-200 text-sm font-medium mb-2" htmlFor="date">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={meetingForm.date}
                      onChange={handleMeetingChange}
                      className="w-full px-4 py-2 rounded-lg border border-amber-600/40 bg-amber-800/30 text-white placeholder-amber-300/60 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-amber-200 text-sm font-medium mb-2" htmlFor="time">
                      Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={meetingForm.time}
                      onChange={handleMeetingChange}
                      className="w-full px-4 py-2 rounded-lg border border-amber-600/40 bg-amber-800/30 text-white placeholder-amber-300/60 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-amber-200 text-sm font-medium mb-2" htmlFor="location">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={meetingForm.location}
                      onChange={handleMeetingChange}
                      className="w-full px-4 py-2 rounded-lg border border-amber-600/40 bg-amber-800/30 text-white placeholder-amber-300/60 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Enter meeting location"
                      required
                    />
                  </div>
                </div>
                
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="px-5 py-2 bg-transparent border border-amber-500 text-amber-300 rounded-lg hover:bg-amber-800 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-500 transition-colors duration-200 shadow-md"
                  >
                    Schedule Meeting
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Beer Entry Modal */}
      {activeModal === "beer" && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-amber-800 to-amber-900 w-4/5 max-w-4xl rounded-xl shadow-2xl">
            {/* Modal Header */}
            <div className="border-b border-amber-700 p-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-amber-100">Add Beer Rating</h2>
              <button
                onClick={() => setActiveModal(null)}
                className="text-amber-300 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              <form onSubmit={handleBeerSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-amber-200 text-sm font-medium mb-2" htmlFor="beerName">
                      Beer Name
                    </label>
                    <input
                      type="text"
                      id="beerName"
                      name="beerName"
                      value={beerForm.beerName}
                      onChange={handleBeerChange}
                      className="w-full px-4 py-2 rounded-lg border border-amber-600/40 bg-amber-800/30 text-white placeholder-amber-300/60 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Enter beer name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-amber-200 text-sm font-medium mb-2" htmlFor="brewery">
                      Brewery
                    </label>
                    <input
                      type="text"
                      id="brewery"
                      name="brewery"
                      value={beerForm.brewery}
                      onChange={handleBeerChange}
                      className="w-full px-4 py-2 rounded-lg border border-amber-600/40 bg-amber-800/30 text-white placeholder-amber-300/60 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Enter brewery name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-amber-200 text-sm font-medium mb-2" htmlFor="abv">
                      ABV (%)
                    </label>
                    <input
                      type="text"
                      id="abv"
                      name="abv"
                      value={beerForm.abv}
                      onChange={handleBeerChange}
                      className="w-full px-4 py-2 rounded-lg border border-amber-600/40 bg-amber-800/30 text-white placeholder-amber-300/60 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="e.g., 5.5"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-amber-200 text-sm font-medium mb-2" htmlFor="rating">
                      Rating (1-5)
                    </label>
                    <select
                      id="rating"
                      name="rating"
                      value={beerForm.rating}
                      onChange={handleBeerChange}
                      className="w-full px-4 py-2 rounded-lg border border-amber-600/40 bg-amber-800/30 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    >
                      <option value="" disabled>Select rating</option>
                      <option value="1">1 - Poor</option>
                      <option value="2">2 - Fair</option>
                      <option value="3">3 - Good</option>
                      <option value="4">4 - Very Good</option>
                      <option value="5">5 - Excellent</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-amber-200 text-sm font-medium mb-2" htmlFor="comments">
                    Comments
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    value={beerForm.comments}
                    onChange={handleBeerChange}
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg border border-amber-600/40 bg-amber-800/30 text-white placeholder-amber-300/60 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Enter tasting notes and comments"
                  ></textarea>
                </div>
                
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="px-5 py-2 bg-transparent border border-amber-500 text-amber-300 rounded-lg hover:bg-amber-800 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-500 transition-colors duration-200 shadow-md"
                  >
                    Add Rating
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* General Settings Modal */}
      {activeModal === "general" && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-amber-800 to-amber-900 w-4/5 max-w-4xl rounded-xl shadow-2xl">
            {/* Modal Header */}
            <div className="border-b border-amber-700 p-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-amber-100">General Settings</h2>
              <button
                onClick={() => setActiveModal(null)}
                className="text-amber-300 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              <form onSubmit={handleGeneralSubmit} className="space-y-6">
                <div>
                  <label className="block text-amber-200 text-sm font-medium mb-2" htmlFor="description">
                    Club Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={generalForm.description}
                    onChange={handleGeneralChange}
                    rows="6"
                    className="w-full px-4 py-2 rounded-lg border border-amber-600/40 bg-amber-800/30 text-white placeholder-amber-300/60 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  ></textarea>
                  <p className="text-amber-300/70 text-xs mt-2">
                    This description will be displayed on your club's public page.
                  </p>
                </div>
                
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="px-5 py-2 bg-transparent border border-amber-500 text-amber-300 rounded-lg hover:bg-amber-800 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-500 transition-colors duration-200 shadow-md"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}