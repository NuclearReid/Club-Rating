import { useClub } from "../../utils/ClubContext";
import ClubDetails from "./ClubDetails";

export default function ClubInfo() {
    const { showClubDetails } = useClub();

    return (
        <div id="club-info-section">
            {showClubDetails ? (
                <ClubDetails />
            ) : (
                <div className="min-h-[30vh] bg-gradient-to-b from-amber-800 to-amber-900 flex items-center justify-center">
                    <div className="text-center p-8">
                        <h2 className="text-3xl font-bold text-amber-100 mb-3">Find a Club</h2>
                        <p className="text-amber-200 max-w-md mx-auto">
                            Use the search box above to find your beer club and view details.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}