import { useState } from "react"
import { useMutation } from "@apollo/client"

import { ADD_CLUB } from "../../utils/mutations"

import LoginForm from "./loginForm"

export default function SignupForm() {

  const [showLoginForm, setShowLoginForm] = useState(false)

  const [formState, setFormState] = useState({
    clubName: "",
    password: "",
    confirmPassword: ""
  })

  const [createClub, { error }] = useMutation(ADD_CLUB)

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    try {
      if(formState.confirmPassword === formState.password){
        const { data } = await createClub({
          variables: { 
            club: formState.clubName,
            password: formState.password
           }
        })
        
        console.log(data)
      }
      const token = mutationResponse.data.addUser.token
      Auth.login(token)
      
    } catch (error) {
      console.error(error)
    }
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState({
      ...formState,
      [name]: value
    })
  }



    return (
        (showLoginForm ? <LoginForm/> :

          <div className="h-auto md:h-4/5 w-full md:w-10/12 bg-gradient-to-bl from-orange-400 to-red-500 rounded-3xl shadow-2xl flex flex-col justify-center items-center p-6 md:p-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-xl w-11/12 md:w-10/12 max-w-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white text-center">Create Club Account</h2>
            
            <form className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2" htmlFor="clubName">
                  Club Name
                </label>
                <input 
                  type="text" 
                  id="clubName"
                  name="clubName"
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Enter your club name"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2" htmlFor="password">
                  Password
                </label>
                <input 
                  type="password" 
                  id="password"
                  name="password"
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Create a password"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input 
                  type="password" 
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Confirm your password"
                />
              </div>
              
              <div>
                <button 
                  onClick={handleFormSubmit}
                  type="submit"
                  className="w-full bg-white text-red-500 font-bold py-2 px-4 rounded-lg hover:bg-white/90 transition duration-200"
                >
                  Create Account
                </button>
              </div>
              
              <div className="text-center text-sm text-white">
                Already have an account? 
                <button 
                  onClick={() => setShowLoginForm(!showLoginForm)} 
                  className="ml-1 hover:underline font-medium">
                    Log in
                </button>
              </div>
            </form>
          </div>
        </div>
        
      )
    )
  }