import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

function PlatformLayout({children}: {children: React.ReactNode}) {
  return (
    <ClerkProvider>
       {children}
    </ClerkProvider>
  )
}

export default PlatformLayout;