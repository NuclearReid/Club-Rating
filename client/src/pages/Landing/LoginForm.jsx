import { useState } from "react"
import { useMutation } from "@apollo/client"
import Auth from '../../utils/auth'
import { LOGIN } from "../../utils/mutations"

import SignupForm from "./SignupForm"

export default function LoginForm () {

    const [showSignupForm, setShowSignupForm] = useState(false)

    const [formState, setFormState] = useState({
        clubLogin: '',
        clubPassword: ''
    })

    const [login, {error}] = useMutation(LOGIN)

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const mutationResponse = await login({
                variables: {
                    clubName: formState.clubLogin,
                    password: formState.clubPassword
                }
            })
            const token = mutationResponse.data.login.token
            Auth.login(token)
            
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    return (
        (showSignupForm ? <SignupForm /> :

        <div className="h-auto md:h-4/5 w-full md:w-10/12 bg-gradient-to-bl from-orange-400 to-red-500 rounded-3xl shadow-2xl flex flex-col justify-center items-center p-6 md:p-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-xl w-11/12 md:w-10/12 max-w-md">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white text-center">Login</h2>
                <form onSubmit={handleFormSubmit}
                    className="space-y-4 md:space-y-6">
                    <div>
                        <label className="block text-white text-sm font-medium mb-2" htmlFor="Club">
                            Club Name
                        </label>
                        <input
                            onChange={handleChange} 
                            type="club" 
                            id="club"
                            name="clubLogin"
                            className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="Enter your club"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-white text-sm font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            onChange={handleChange} 
                            type="password" 
                            id="password"
                            name="clubPassword"
                            className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div>
                        <button 
                            type="submit"
                            className="w-full bg-white text-red-500 font-bold py-2 px-4 rounded-lg hover:bg-white/90 transition duration-200"
                        >
                            Sign In
                        </button>
                    </div>
                    <div className="text-center text-sm text-white">
                        <div className="mt-2">
                            Don't have an account? 
                                <button  
                                    onClick={() => setShowSignupForm(!showSignupForm)} 
                                    className="ml-1 hover:underline font-medium">
                                    Sign up
                                </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        
        )
    )
}
