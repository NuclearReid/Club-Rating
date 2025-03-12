import React from "react";

export default function MeetingModal({ setActiveModal, meetingForm, handleMeetingChange, handleMeetingSubmit }) {
  return (
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
  );
}