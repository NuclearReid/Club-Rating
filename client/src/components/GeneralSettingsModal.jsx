import React from "react";

export default function GeneralSettingsModal({ setActiveModal, generalForm, handleGeneralChange, handleGeneralSubmit }) {
  return (
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
  );
}