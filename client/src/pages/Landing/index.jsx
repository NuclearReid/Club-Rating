import { useState } from "react";
import Auth from "../../utils/auth";


import Header from "../../components/Header";
import LoginForm from "./loginForm";
import SearchBar from "./SearchBar";
import SignupForm from "./SignupForm";
import LandingBlurb from "./LandingBlurb";
import SearchOrLogin from "./SearchOrLogin";
import ClubDetails from "../ClubInfo/ClubDetails";
import ClubInfo from "../ClubInfo";


export default function Landing() {

  console.log(Auth.loggedIn()); 


  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Full screen animated gradient background */}
        <div className="absolute inset-0 animated-gradient"></div>
        
        {/* Header positioned within the gradient background but with higher z-index */}
        {Auth.loggedIn() && <Header />}
        
        {/* Content container - flex-col (stacked) on mobile, row (side by side) on md and up */}
        <div className="relative z-10 flex flex-col md:flex-row h-[100vh] w-full pt-20">
          <LandingBlurb />
          <SearchOrLogin />
        </div>
      </div>
      
      {/* Below the landing page, where all the club info is */}
      <ClubInfo />
    </>
  );
}