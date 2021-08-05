import "./login.css";

export const Login = () => {
  return (
    <div className="login">
      <form className="loginForm">
        <label>Email</label>
        <input type="text" placeholder="Enter Your Email" />
        <label>Password</label>
        <input type="password" placeholder="Enter Your Password" />
        <button className="loginButton">Login</button>
      </form>
    </div>
  );
};
