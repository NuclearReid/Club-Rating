export default function ClubDetails() {
    // Sample data - replace with real data later
    const clubName = "Hoppy IPA Enthusiasts";
    const nextMeeting = {
      date: "March 20, 2025",
      time: "7:00 PM",
      location: "The Brew House, 123 Main Street"
    };
    
    const beerRatings = [
      { name: "Hazy Wonder", brewery: "Lagunitas", abv: "6.0%", rating: "4.5/5", comments: "Tropical fruit notes with a smooth finish" },
      { name: "Two Hearted Ale", brewery: "Bell's", abv: "7.0%", rating: "4.8/5", comments: "Perfect balance of malt and hops" },
      { name: "Pliny the Elder", brewery: "Russian River", abv: "8.0%", rating: "4.9/5", comments: "Legendary double IPA, citrus and pine" },
      { name: "Focal Banger", brewery: "The Alchemist", abv: "7.0%", rating: "4.7/5", comments: "Bright citrus aroma, clean bitterness" },
      { name: "Heady Topper", brewery: "The Alchemist", abv: "8.0%", rating: "4.9/5", comments: "The original hazy IPA, complex flavors" },
    ];
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-800 to-amber-900">
        {/* Club header section */}
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-100 mb-4 text-center">{clubName}</h1>
          <p className="text-xl text-amber-200 max-w-4xl mx-auto text-center mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies tincidunt, 
            nunc nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Our club meets regularly to taste and rate 
            craft beers from around the world, focusing primarily on IPAs and exploring the nuances of hop varieties.
          </p>
          
          {/* Next meeting info card */}
          <div className="bg-amber-600/30 backdrop-blur-sm rounded-xl p-6 mb-12 max-w-2xl mx-auto border border-amber-500/20 shadow-lg">
            <h2 className="text-2xl font-bold text-amber-100 mb-4">Next Meeting</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-amber-300 text-sm uppercase font-semibold mb-1">Date</div>
                <div className="text-amber-100 font-medium">{nextMeeting.date}</div>
              </div>
              <div className="text-center">
                <div className="text-amber-300 text-sm uppercase font-semibold mb-1">Time</div>
                <div className="text-amber-100 font-medium">{nextMeeting.time}</div>
              </div>
              <div className="text-center">
                <div className="text-amber-300 text-sm uppercase font-semibold mb-1">Location</div>
                <div className="text-amber-100 font-medium">{nextMeeting.location}</div>
              </div>
            </div>
          </div>
          
          {/* Beer ratings table */}
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              <h2 className="text-2xl font-bold text-amber-100 mb-6">Recent Ratings</h2>
              <div className="bg-amber-600/20 backdrop-blur-sm rounded-xl overflow-hidden border border-amber-500/20 shadow-lg">
                <table className="min-w-full divide-y divide-amber-500/20">
                  <thead>
                    <tr className="bg-amber-900/60">
                      <th className="px-6 py-3 text-left text-xs font-medium text-amber-300 uppercase tracking-wider">Beer Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-amber-300 uppercase tracking-wider">Brewery</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-amber-300 uppercase tracking-wider">ABV</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-amber-300 uppercase tracking-wider">Rating</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-amber-300 uppercase tracking-wider">Comments</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-500/20">
                    {beerRatings.map((beer, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-amber-800/30" : "bg-amber-900/30"}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-amber-100">{beer.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-200">{beer.brewery}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-200">{beer.abv}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-200">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-200 text-amber-800">
                            {beer.rating}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-amber-200">{beer.comments}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }