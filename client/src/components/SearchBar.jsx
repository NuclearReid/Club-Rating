import { useState } from "react"
import { FIND_CLUB } from "../utils/queries";
import { useLazyQuery } from "@apollo/client";
import { useClub } from "../utils/ClubContext";


export default function SearchBar() {
  const {setSelectedClub, setShowClubDetails } = useClub()
  const [findClub, {loading, data, error}] = useLazyQuery(FIND_CLUB)

  const [formState, setFormState ] = useState({
    clubSearch: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormState({
      ...formState,
      [name]: value
    })
  } 

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await findClub({
        variables: {
          clubName: formState.clubSearch
        }
      })
      // If club is found, set the selected club and show the details
      if (data && data.club) {
        setSelectedClub(data.club);
        setShowClubDetails(true);
        
        // Scroll to the club info section
        document.getElementById('club-info-section')?.scrollIntoView({ 
          behavior: 'smooth' 
        });
      }

    } catch (error) {
      console.error(error)
    }
  }


  return (
    <div className="h-auto md:h-4/5 w-full md:w-10/12 bg-gradient-to-bl from-orange-400 to-red-500 rounded-3xl shadow-2xl flex flex-col justify-center items-center p-6 md:p-8">
      <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-xl w-11/12 md:w-10/12 max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white text-center">
          Find My Club
        </h2>
        <form 
          onSubmit={handleFormSubmit}
          className="space-y-4 md:space-y-6">
          <div>
            <label
              className="block text-white text-sm font-medium mb-2"
              htmlFor="clubSearch"
            >
              Search Clubs
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="clubSearch"
              name="clubSearch"
              className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter club name"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-white text-red-500 font-bold py-2 px-4 rounded-lg hover:bg-white/90 transition duration-200"
            >
              Search
            </button>
          </div>
        </form>

       {/* Show error message if needed */}
       {error && (
          <div className="mt-4 p-3 bg-red-500/30 rounded-lg text-white text-center">
            Error searching for club
          </div>
        )}
        
        {/* Show "no results" message */}
        {data && !data.club && (
          <div className="mt-4 p-3 bg-amber-500/30 rounded-lg text-white text-center">
            No club found with that name
          </div>
        )}
        
        {/* Show success message */}
        {data && data.club && (
          <div className="mt-4 p-3 bg-green-500/30 rounded-lg text-white text-center">
            Found {data.club.clubName}! Scroll down to view details.
          </div>
        )}

      </div>
    </div>
  );
}