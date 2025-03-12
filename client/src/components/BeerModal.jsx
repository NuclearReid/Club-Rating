import React from "react";

export default function BeerModal({ setActiveModal, beerForm, handleBeerChange, handleBeerSubmit }) {
  return (
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
  );
}