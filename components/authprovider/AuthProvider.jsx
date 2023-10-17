'use client'

import React from 'react'
import { SessionProvider } from 'next-auth/react'

/**
 * Authentication provider component.
 * @param {Object} props - Component properties.
 * @param {ReactNode} props.children - Child components to be wrapped by the authentication provider.
 * @returns {JSX.Element} JSX element representing the authentication provider.
 */
const AuthProvider = ({ children }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default AuthProvider;