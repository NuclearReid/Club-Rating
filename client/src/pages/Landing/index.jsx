import { useState } from "react";
import LoginForm from "./loginForm";
import SearchBar from "./SearchBar";
import SignupForm from "./SignupForm";
import LandingBlurb from "./LandingBlurb";
import SearchOrLogin from "./SearchOrLogin";
import ClubDetails from "../ClubInfo/ClubDetails";
import ClubInfo from "../ClubInfo";

export default function Landing() {

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Full screen animated gradient background */}
        <div className="absolute inset-0 animated-gradient"></div>
        {/* Content container - flex-col (stacked) on mobile, row (side by side) on md and up */}
        <div className="relative z-10 flex flex-col md:flex-row h-full w-full">
          <LandingBlurb />
          <SearchOrLogin />
        </div>
      </div>
      {/* Below the landing page, where all the club info is */}
      <ClubInfo />
    </>

  );
}