import { createContext, useState, useContext } from "react"

// This will be used to get the searched club and be able to display it and avoids prop drilling

const ClubContext = createContext()


export const ClubProvider = ({children}) => {

    // This sends all the info about the club. I thought I would need to set it for each individual part of the schema but it just sends all the data. I'll just pick how i want to use it
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