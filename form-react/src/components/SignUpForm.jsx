import React, { useState, useRef, useEffect } from 'react'
import "../styles/SignUpForm.css"

function SignUpForm() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordType, setPasswordType] = useState("password");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPasswordType, setConfirmPasswordType] = useState("password")
    const [showPassword, setShowPassword] = useState(true)
    const [showConfirmPassword, setShowConfirmPassword] = useState(true)
    const [showUserNameError, setShowUserNameError] = useState(false)
    const [showPasswordError, setShowPasswordError] = useState(false)
    const [showConfirmPasswordError, setShowConfirmPasswordError] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const checkUserName = () => {
        if (userName.length > 25 || userName.length < 3) {
            return false;
        } else {
            return true
        }
    }

    const checkConfirmPassword = () => {
        if (password === confirmPassword) {
            return true;
        } else {
            return false;
        }
    }

    const checkPassword = () => {
        if (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) != null) {
            return true
        } else {
            return false
        }
    }

    const toggleIcon = () => {
        setShowPassword(!showPassword)
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    const toggleConfirmPasswordIcon = () => {
        setShowConfirmPassword(!showConfirmPassword)
        if (confirmPasswordType === "password") {
            setConfirmPasswordType("text")
            return;
        }
        setConfirmPasswordType("password")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!checkUserName()) {
            console.log("in username");
            setShowUserNameError(true)
            return;
        } else if (!checkPassword()) {
            console.log("in password")
            setShowPasswordError(true)
            return
        } else if (!checkConfirmPassword()) {
            console.log("in confirm pass");
            setShowConfirmPasswordError(true)
            return
        } else {
            console.log("username", userName, "email", email, "password", password, "confirmPassword", confirmPassword)
            setShowModal(true)
            setUserName("")
            setPassword("")
            setConfirmPassword("")
            setEmail("")
            setShowPasswordError("")
            setShowUserNameError("")
            setShowConfirmPasswordError("")
        }

    }

    const modalRef = useRef()

    const closeModal = () => {
        setShowModal(false)
    }

    useEffect(() => {
        const closeModal = (e) => {
            if (e.path[0] !== modalRef.current)
                setShowModal(false)
        }

        document.body.addEventListener("click", closeModal)

        return () => document.body.removeEventListener('click', closeModal)
    }, [])


    return (
        <div>
            <form onSubmit={handleSubmit} >
                <h2>Sign Up</h2>
                <div className="form-control">
                    <label htmlFor="userName" >Username : </label>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        title="UserName should be between 3 and 25 characters"
                        minLength={3}
                        maxLength={25}
                        placeholder="username" />
                    {showUserNameError ?
                        <div className="instructions_username">
                            Username should be between 3 and 25 characters
                        </div>
                        :
                        <div></div>
                    }

                </div>
                <div className="form-control">
                    <label htmlFor="email">Email : </label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />
                    {/* <div className="instructions_email">Email should not be empty</div> */}
                </div>
                <div className="form-control">
                    <label htmlFor="Password">Password : </label>
                    <div className="password_container">
                        <input
                            type={passwordType}
                            title="Password must have at least 8 characters that include atleast 1 lowercase character , 
                            1 uppercase character, 1 number and 1 special character in (!@#$%^&*)"
                            placeholder="password"
                            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {showPassword ? <>
                            <i className="fa-solid fa-eye-slash" onClick={toggleIcon} id="togglePassword" />
                        </> : <>
                            <i className="fa-solid fa-eye" onClick={toggleIcon} id="togglePassword" />
                        </>}
                    </div>
                    {showPasswordError ?
                        <div className="instructions_password">
                            Password must have at least 8 characters that include atleast 1
                            lowercase character , 1 uppercase character, 1 number and 1 special
                            character in (!@#$%^&amp;*)
                        </div>
                        :
                        <div></div>
                    }


                </div>
                <div className="form-control">
                    <label htmlFor="ConfirmPassword" >Confirm Password :
                    </label>
                    <div className="password_container">
                        <input
                            type={confirmPasswordType}
                            placeholder="Reenter your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {showConfirmPassword ? <>
                            <i className="fa-solid fa-eye-slash" onClick={toggleConfirmPasswordIcon} id="togglePassword" />
                        </> : <>
                            <i className="fa-solid fa-eye" onClick={toggleConfirmPasswordIcon} id="togglePassword" />
                        </>}
                    </div>
                    {showConfirmPasswordError ?
                        <div className="instructions_confirmPassword">Passwords don't match</div>
                        :
                        <div></div>
                    }

                </div>
                <button type="submit" >SIGN UP</button>
            </form>
            {showModal ? <div ref={modalRef} className="modal">
                <div className="modal-content">
                    <div className="modal_container">
                        <div className="dynamic">You are signed up</div>
                        <span className="close" onClick={closeModal}>×</span>
                    </div>
                </div>
            </div> : <></>}

        </div>
    )
}

export default SignUpForm