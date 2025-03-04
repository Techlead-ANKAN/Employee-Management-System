// import React, { useState, useEffect, createContext } from 'react'
// import { setLocalStorage, getLocalStorage } from '../utils/LocalStorage'

// export const AuthContext = createContext()

// const AuthProvider = ({children}) => {

//   // localStorage.clear();
    
//     const [userData, setUserData] = useState(null)

//     useEffect(() => {
//       setLocalStorage();
//       const data = getLocalStorage();
//       console.log("Data: ", data)
//       const {employees, admin} = data
//       setUserData({employees,admin})
//     }, [])
    
//   return (
//     <div>
//         <AuthContext.Provider value={userData}>
//             {children}
//         </AuthContext.Provider>
//     </div>
//   )
// }

// export default AuthProvider

import React, { useState, useEffect, createContext } from 'react'
import { setLocalStorage, getLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  // localStorage.clear();

  const [userData, setUserData] = useState(() => {
    const data = getLocalStorage()
    console.log(data)
    return data
  })

  useEffect(() => {
    setLocalStorage()
  }, [])

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider