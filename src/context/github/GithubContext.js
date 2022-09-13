// This file is a global context that pulls specific components from other folders

// 1. import createContext from react
import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

// 2. create variable to use createContext
const GithubContext = createContext()

// 3. Create variables for URL and token in .env folder
// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


// 4. Export provider function and grab specific children of the object
export const GithubProvider = ({ children }) => {
  // Replaced const [users, setUsers] = useState([]) and const [loading, setLoading] = useState(true) with...
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)
  // 'dispatch' is being used to dispatch an action from githubReducer

  // 6. return wrapping createContext variable...
  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

// 7. export the createContext variable as default
export default GithubContext

// 8. In App.js import provider function from here
// 9. wrap ALL components (YES, outside of ROUTER)
// 10. Go back to UserResults and remove all functions that were added from there to here

