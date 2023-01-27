import React from 'react'



import SettingsForm from './SettingsForm'



const Settings = () => {
  return (
    <>
        <main id='content' class="grid grid-cols-1">
            <div class=" min-h-screen pt-2 font-mono my-16">
                <div class="container mx-auto">
                    <div class="inputs w-full max-w-6xl p-6 mx-auto">
                        <SettingsForm />   
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Settings