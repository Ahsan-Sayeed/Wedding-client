import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import useTitle from '../../Hooks/useTitle';
import SetToken from "../../Utilities/SetToken";

const Register = () => {
  const {createUser,updateUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const To = location?.state?.from || '/';
  const changer = To==="/review"?"/":To;
  useTitle("Registration");

  const handleSignUp = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const obj = {displayName:e.target.username.value||"Anynomus"} 
    createUser(email,password)
    .then(({user})=>{
      if(user&&user.uid){
        updateUser(obj)
        .then(()=>{
          SetToken(user.email);
          alert("account created succesfully");
          navigate(changer,{replace:true});
        })
        .catch(err=>{
          console.log(err);
        })
      }
      else{

      }
    })
    .catch(err=>{
      // error message here
      if(err.message==='Firebase: Error (auth/email-already-in-use).'){
        alert("Account already in use");
      }
    })
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSignUp}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="input input-bordered"
                  name="username"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">Sign Up</button>
              </div>
              <p className="text-xs text-center sm:px-6 dark:text-gray-400">
                Have an account?
                <Link
                  rel="noopener noreferrer"
                  to="/login"
                  className="underline dark:text-gray-100"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
