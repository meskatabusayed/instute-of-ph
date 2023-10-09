import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { useContext, useState } from "react";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [signUpError, setSignUpError] = useState(" ");

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    if(password.length < 6){
      setSignUpError('Password should be at least 6 Characters or longer');
      return;
    }
    else if(!/[A-Z]/.test(password)){
      setSignUpError('do not have a capital letter');
      return;
    }
    else if(!/^(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/.test(password)){
      setSignUpError('do not have a special character');
      return;
    }



    setSignUpError('')

    // create user In firebase

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold ">Sign Up now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignup} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          {
          
          signUpError && <p className="text-red-800">{signUpError}</p>
          
          }
          <p className="ml-4">
            Already Have An Account?
            <Link to="/login">
              <button className="btn btn-link">Please Login</button>
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
