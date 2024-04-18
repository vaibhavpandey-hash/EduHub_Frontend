import React, { useState } from 'react';
import "./header.css";

function Header() {
  const [loginHover, setLoginHover] = useState(false);
  const [signupHover, setSignupHover] = useState(false);
  const [loginActive, setLoginActive] = useState(false);
  const [signupActive, setSignupActive] = useState(false);
  const [forgotPasswordActive, setForgotPasswordActive] = useState(false);
  const [signupFormData, setSignupFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    passwordsMatch: true
  });
  const [resetPasswordFormData, setResetPasswordFormData] = useState({
    email: '',
    newPassword: '',
    confirmNewPassword: '',
    passwordsMatch: true
  });

  const handleLoginClick = () => {
    setLoginActive(!loginActive);
    setSignupActive(false);
    setForgotPasswordActive(false);
  };

  const handleSignupClick = () => {
    setSignupActive(!signupActive);
    setLoginActive(false);
    setForgotPasswordActive(false);
  };

  const handleForgotPasswordClick = () => {
    setForgotPasswordActive(!forgotPasswordActive);
    setLoginActive(false);
    setSignupActive(false);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Login form submission logic
    console.log("Login form submitted");
    // Reset form fields
    event.target.reset();
  };

  const handleSignupChange = (event) => {
    const { name, value } = event.target;
    setSignupFormData({
      ...signupFormData,
      [name]: value
    });
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    // Signup form submission logic
    const { username, fullName, email, password, confirmPassword } = signupFormData;
    if (!username || !fullName || !email || !password || !confirmPassword) {
      alert("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      setSignupFormData({
        ...signupFormData,
        passwordsMatch: false
      });
      return;
    }
    console.log("Signup form submitted");
    // Reset form fields
    setSignupFormData({
      username: '',
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      passwordsMatch: true
    });
  };

  const handleForgotPasswordSubmit = (event) => {
    event.preventDefault();
    // Forgot password form submission logic
    console.log("Forgot password form submitted");
    // Reset form fields
    event.target.reset();
  };

  const handleResetPasswordChange = (event) => {
    const { name, value } = event.target;
    setResetPasswordFormData({
      ...resetPasswordFormData,
      [name]: value
    });
  };

  const handleResetPasswordSubmit = (event) => {
    event.preventDefault();
    // Reset password form submission logic
    const { newPassword, confirmNewPassword } = resetPasswordFormData;
    if (newPassword !== confirmNewPassword) {
      setResetPasswordFormData({
        ...resetPasswordFormData,
        passwordsMatch: false
      });
      return;
    }
    console.log("Reset password form submitted");
    // Reset form fields
    setResetPasswordFormData({
      email: '',
      newPassword: '',
      confirmNewPassword: '',
      passwordsMatch: true
    });
  };

  const isSignupButtonDisabled = !signupFormData.username || !signupFormData.fullName || !signupFormData.email || !signupFormData.password || !signupFormData.confirmPassword;

  return (
    <header className="header">
      <div className="logo-container">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEB0lEQVR4nO2WT2gUdxTHf7HNTm09BBQULdgWPIkH8RIwq+jObKJumrSymf39Ejeb/f3c1H+ImSA2dXe2Fm3sCkXaS0FoLJ68KOpBPGRndiltEVTSnrxYGhN68GCTVGMwvvKbMJPN/kt2dzLZlDz4wjDMvvf9zHvvN4vQSqzESlRtDCvKgRFFeTqiKGCop2d4VFH2LVrBvcHuTRJh10VMbzfK3R9Umm+kp2fYMj+rv5DdsSMSqRXx4ZMSoeMSYTAj+kLCNN7UdEIoN+9IrnlDtpqXSHiXSOgfs8azRR9L7WFvOblvDv4M+WSL8b0Bul7C7CeJsDeFzc+Kj1VTO3t/yQFUVV3lwSwoYfZsIcazuvGcj5rf739rSQA8gfB2kdBfSzeeowdiO6ufr57vRivkU8nGd3d21omYXRYJe22DeXOkpvkIeg4dWruoABKhfomwv+0yniPMnnkJiyCEamwFEHH3FpGwe4UKezsOQ0vkFPhPfgHtp89BsO9rCEW/gbCagHD8knHdebYfOs58BbISg0+O9kJT8LMiHWF6Y4BtrRig3n9qNT+/RUInCxVrPdILobP9htFS1BVLwKfHTxfpBp3io7rbf3RNWQASps0ioU+KtXx/17GSjWdrf+jYPGNFn/KTrmSA+9c+hMjxg0WTHzxxpmIAnmMegCERs8aSAUAXYFp7hyehIqaj+ZLjXrViANwbL3QyjfLa5neiLAAuY5w6Ot4zdgGzicwiwb4LFQME+y68ylrgCV6L16xoiTMBzBAD4Y0iplfMb0AoenGyUoBQLDFmGCfstZE7EN6Yz48tABYIiWyTCL0bjiVeGSdKGcbN33SpiUmeSySRbQXN2A1gRlf80nSlHeA5itVYFICorLfEZF2LYg1icsoR+ewCiLbp/U6ZjtkNMPPmU/Al0SE9cA/Gfr8D8OctR+SzA4CPDQfg5p0yDnYCROXUOAdw8s3DogAMVTkAJN/dYALwawugTU9W/QhBcnU9aMKYBaAJ//B7MwDp5jlL7GAnfAsG0ITfLPOWXL9Yi9ymn6/qYxQ04d9cAGEi8xlVTvlicmrQ3InqAtBd6TwdSM95xo1awI00aEAT4EbghHwLB6iVcwFq5Qzz/U6ZhrIAANWALjzMABgCQKsy3jzAnrcBvg8BPLpafUvMA1KCBzThjaGU4DFuzgBoBsB3ndV7jJoBuusqaK6BOfca0LgB4OCbh7IBkmvWceUFeDhQ/QD5AtwouWxGKF/ATtRsLTGHcLATPjsADAg3Or8Uxyj8UJv9ceW6VTKAAdGAfNCABq2dcEItNdzwy4z/aC8gLXyEllOALsRnAVwqWm5x49vNda1t3qmP/d6pH9XNdWg5xsXPt5/jWmofK/G/jP8AA/FMjF5eO/wAAAAASUVORK5CYII=" alt="EduHub Logo" />
        <a href="#" className="logo">EduHub</a>
      </div>

      <nav className="navbar">
        <a href="#home" className="hover-underline">home</a>
        <a href="#about" className="hover-underline">about</a>
        <a href="#courses" className="hover-underline">courses</a>
        <a href="#contact" className="hover-underline">contact</a>
      </nav>

      <div className="menu">
        <div className="icons">
          <div className="login-option" onMouseEnter={() => setLoginHover(true)} onMouseLeave={() => setLoginHover(false)} onClick={handleLoginClick}>
            <i className={`fa-solid fa-right-to-bracket ${loginHover ? 'hovered' : ''}`}></i>
            <span className="login-text">Log In</span>
          </div>
          <div className="signup-option" onMouseEnter={() => setSignupHover(true)} onMouseLeave={() => setSignupHover(false)} onClick={handleSignupClick}>
            <i className={`fa-solid fa-user-plus ${signupHover ? 'hovered' : ''}`}></i>
            <span className="signup-text">Sign Up</span>
          </div>
        </div>
      </div>

      {/* Login form */}
      <div className={`login-form ${loginActive ? 'active' : ''}`}>
        <h3>Login Form</h3>
        <form onSubmit={handleLoginSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" className="box"/>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter your password" className="box"/>
          </div>
          <button type="submit" className="btn">
            <span className="text text-1">Login Now</span>
            <span className="text text-2" aria-hidden="true">Login Now</span>
          </button>
        </form>
        <div className="forgot-password" onClick={handleForgotPasswordClick}>
          <a href="#" className="forgot-password-link">Forgot password?</a>
        </div>
      </div>

      {/* Forgot Password form */}
      {forgotPasswordActive && (
        <div className="login-form active">
          <h3>Forgot Password</h3>
          <p>Enter your email to reset your password.</p>
          <form onSubmit={handleResetPasswordSubmit}>
            <div>
              <label htmlFor="forgot-email">Email:</label>
              <input type="email" id="forgot-email" placeholder="Enter your email" className="box" name="email" value={resetPasswordFormData.email} onChange={handleResetPasswordChange}/>
            </div>
            <div>
              <label htmlFor="NewPassword">New Password:</label>
              <input type="password" id="NewPassword" placeholder="New Password" className="box" name="newPassword" value={resetPasswordFormData.newPassword} onChange={handleResetPasswordChange}/>
            </div>
            <div>
              <label htmlFor="ConfirmNewPassword">Confirm New Password:</label>
              <input type="password" id="ConfirmNewPassword" placeholder="Confirm New Password" className="box" name="confirmNewPassword" value={resetPasswordFormData.confirmNewPassword} onChange={handleResetPasswordChange}/>
              {!resetPasswordFormData.passwordsMatch && <p className="error-message">Passwords do not match</p>}
            </div>
            <button type="submit" className="btn">
              <span className="text text-1">Reset Password</span>
              <span className="text text-2" aria-hidden="true">Reset Password</span>
            </button>
          </form>
        </div>
      )}

      {/* Sign-up form */}
      <div className={`sign-up-form ${signupActive ? 'active' : ''}`}>
        <h3>Register here</h3>
        <form onSubmit={handleSignupSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" className="box" value={signupFormData.username} onChange={handleSignupChange}/>
          </div>
          <div>
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName" placeholder="Enter your Full Name" className="box" value={signupFormData.fullName} onChange={handleSignupChange}/>
          </div>
          <div>
            <label htmlFor="email-signup">Email:</label>
            <input type="email" id="email-signup" name="email" placeholder="Enter your email" className="box" value={signupFormData.email} onChange={handleSignupChange}/>
          </div>
          <div>
            <label htmlFor="password-signup">Password:</label>
            <input type="password" id="password-signup" name="password" placeholder="Enter your password" className="box" value={signupFormData.password} onChange={handleSignupChange}/>
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" className="box" value={signupFormData.confirmPassword} onChange={handleSignupChange}/>
            {!signupFormData.passwordsMatch && <p className="error-message">Passwords do not match</p>}
          </div>
          <button type="submit" className="btn" disabled={isSignupButtonDisabled}>
            <span className="text text-1">Sign Up Now</span>
            <span className="text text-2" aria-hidden="true">Sign Up Now</span>
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
