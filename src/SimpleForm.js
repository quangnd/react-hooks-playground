import React from "react";
import useFormState from "./hooks/useFormState";

function SimpleForm() {
  const [username, handleUsernameChange, resetUsername] = useFormState("");
  const [password, handlePasswordChange, resetPassword] = useFormState("");

  return (
    <div>
      <h1>Simple form</h1>
      <p>Username: {username} & Password: {password} </p>
      <input type="text" value={username} onChange={handleUsernameChange} />
      <input type="text" value={password} onChange={handlePasswordChange} />
      <button onClick={resetUsername}>Reset username</button>
      <button onClick={resetPassword}>Reset password</button>
    </div>
  );
}

export default SimpleForm;
