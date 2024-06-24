import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignUp = () => {
  const { actions } = useContext(Context)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState (false);
  const navigate = useNavigate();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = async (e) => {
    setPassword(e.target.value);
  };

  const handleAgreeTerms = e => setAgreeTerms(e.target.checked);

  const handleReset = () => {
    setEmail('');
    setPassword('');
    setRememberMe(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = { email, password };
    const url = `${process.env.BACKEND_URL}/api/signup`;
    const options = {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    };
    const response = await fetch(url, options)
    console.log(response);
    if (!response.ok) {
      console.log('Error: ', response.status, response.statusText);
      return
    }
    const data = await response.json()
    console.log();
    localStorage.setItem("token", data.access_token)
    actions.setIsLogin(true)
    console.log(data.access_token);
    navigate('/dashboard')
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p id="heading">Sign Up To Binaurapp</p>
      <div className="field"  onSubmit={handleSubmit}>
        <span className="material-symbols-outlined">alternate_email</span>
          <input autoComplete="off" placeholder="Username" className="form-control" type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div className="field">
        <span className="material-symbols-outlined">lock</span>
            <input placeholder="Password" required={true} className="form-control" type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div className="field">
        <span className="material-symbols-outlined">password</span>
            <input placeholder="Confirm Password" required={true} className="form-control" type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div className="mb-3 form-check">
          <input type="radio" className="form-check-input" id="termsAgreement" checked={agreeTerms} onChange={handleAgreeTerms}></input>
          <label className="form-check-label text-muted" htmlFor="termsAgreement">I agree the Terms of Privacy Policy</label>
        </div>
      <div className="d-flex justify-content">
          <button className="button1 mx-auto">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign up&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </button>
          <button type="reset" className="button1 mx-auto" onClick={handleReset}>&nbsp;&nbsp;&nbsp;&nbsp;Cancel&nbsp;&nbsp;&nbsp;&nbsp;</button>
        </div>
        <div className="d-flex mx-auto justify-content-center text-white mb-2">
          <div className="border align-self-center"></div>
          <span>Or sign up with</span>
          <div className="border align-self-center"></div>
        </div>
        <button type="reset" className="button1 text-success mb-3"><b>Spotify</b></button> 
        {/* <p className="text-muted" id="termsPolicy">By registering, you are agreeing to Binaurapp's Privacy Policy and Terms of Use.</p> */}
</form>
  );
};