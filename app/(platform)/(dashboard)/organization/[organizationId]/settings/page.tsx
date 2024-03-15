import { OrganizationProfile } from '@clerk/nextjs';
import React from 'react'

function SettingsPage() {
  return (
    <div className='w-full'>
        <OrganizationProfile 
          appearance={{
             elements: {
                rootBox: {
                    boxShadow: 'none',
                    width: '100%',
                },
                card: {
                    border: 'none',
                    boxShadow: "none",
                    width: '100%',
                    
                }
             }
          }}
        />
    </div>
  )
}

export default SettingsPage;