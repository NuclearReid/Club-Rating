import ReactDOM from 'react-dom/client'
import './index.css'
import  {createBrowserRouter, RouterProvider}  from 'react-router-dom'

import App from './App'
import Landing from './pages/Landing'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Landing />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
    

// This is what i have from cozy camp, use it as reference for protected pages
/*
  const ProtectedRoute = ({ children }) => {
    const isLoggedIn = Auth.loggedIn()
    if(!isLoggedIn){
        return <Landing />
    }
    return children;
  }

  const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        error: <NoMatch />,
        children: [
            {
                index: true,
                element:
                <ProtectedRoute>                            
                    <Profile />
                </ProtectedRoute>,
            },
            {
                path: '/scene',
                element: 
                    <ProtectedRoute>                  
                        <MyScene />
                    </ProtectedRoute>,
            },
            {
                path: '/searchedScene',
                element:
                    <ProtectedRoute>
                        <SearchedScene />
                    </ProtectedRoute>
            }
        ]
    }
  ])
*/