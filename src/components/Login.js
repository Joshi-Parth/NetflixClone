import React, {useState} from 'react'
import './Login.css'
import SignUp from "./SignUp"

function Login() {
    const [signin, setSignIn] = useState(false);


    return (
        <div className="loginscreen">
            <div className="loginscreen_background">
                <img 
                className="loginscreen_logo"
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                alt="logo" />
                <button 
                className="loginscreen_button"
                onClick={() => setSignIn(true)}
                >
                    Sign In
                </button>
                <div className="loginscreen_gradient" />
            </div>

            <div className="loginscreen_body">
                {signin ? (
                    <SignUp />
                ) : (
                <>
                    <h1>Unlimited Movies, TV Shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                    <div className="loginscreen_input">
                        <form>
                            <input type="email" placeholder="Email Address" />
                            <button 
                            onClick={() => setSignIn(true)}
                            className="loginscreen_getstarted">
                                GET STARTED
                            </button>
                        </form>
                    </div>
                </>
                )}
                
            </div>
        </div>
    )
}

export default Login
