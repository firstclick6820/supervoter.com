import React from 'react'

// import react router dom
import {Routes, Route} from 'react-router-dom'


// Import the Main Pages
import Home from './home'


// Import Auth Pages
import Login from './auth/login/Login'
import Register from './auth/register/Register'
import PasswordReset from './auth/password/PasswordReset'
import PasswordResetDone from './auth/password/PasswordResetDone'
import PasswordResetConfirm from './auth/password/PasswordResetConfirm'
import PasswordResetComplete from './auth/password/PasswordResetComplete'


// import Content Pages
import Polls from './polls/Polls'




const Pages = () => {
  return (
    <div className="mx-auto max-w-6xl px-2 sm:px-4 min-h-[35rem]">
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/polls" element={<Polls />} />
            <Route exact path="/account/login" element={<Login />} />
            <Route exact path="/account/register" element={<Register />} />
            <Route exact path="/account/password_reset" element={<PasswordReset />} />
            <Route exact path="/account/password_reset/done" element={<PasswordResetDone />} />
            <Route exact path="/account/password_confirm" element={<PasswordResetConfirm />} />
            <Route exact path="/account/password_confirm/complete" element={<PasswordResetComplete />} />
        </Routes>
    </div>
  )
}

export default Pages