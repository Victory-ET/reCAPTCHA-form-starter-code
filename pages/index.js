import { React, useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  
  return (
    <div className="container">
      <div className="form-cont">
        <div className="captcha">
          <h1>reCAPTCHA Form</h1>
        </div>
        <div className="form">
          <div className=" form1">
            <h2>Login</h2>
            <span>
              <label>Input Firstname</label>
              <input
                type="text"
                placeholder="John"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </span>
            <span>
              <label>Input Surname</label>
              <input
                type="text"
                placeholder="Doe"
                value={value2}
                onChange={(e) => {
                  setValue2(e.target.value);
                }}
              />
            </span>
            <button className="submit">Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
}
