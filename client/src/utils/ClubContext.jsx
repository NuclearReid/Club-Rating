import { createContext, useState, useContext } from "react"

// This will be used to get the searched club and be able to display it and avoids prop drilling

const ClubContext = createContext()


export const ClubProvider = ({children}) => {

    // The different states i'm making available across everything. Just need to make sure to import 'useClub' 
    const [selectedClub, setSelectedClub] = useState(null)
    const [showClubDetails, setShowClubDetails] = useState(false)
    return(
        // Also remember to add the new states to the value
        <ClubContext.Provider value={{
            selectedClub, setSelectedClub, 
            showClubDetails, setShowClubDetails
            }} >
                {children}
        </ClubContext.Provider>
    )
}

export const useClub = () => useContext(ClubContext)