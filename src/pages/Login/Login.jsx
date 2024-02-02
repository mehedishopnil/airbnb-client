import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        alert(user);
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  return (
    <div className="flex justify-center items-center h-full bg-base-100">
      <div className="hero w-full h-auto p-10 rounded bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-center text-2xl font-bold pt-4">LogIn</h1>

            <form onSubmit={handleLogin} className="card-body">
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
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
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a
                      href="#"
                      className="label-text-alt link link-hover text-[#D1A054]"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="">
                  <label className="text-[#D1A054]"></label>
                  <input
                    type="text"
                    placeholder="type the captcha"
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Login"
                    disabled={false}
                    className="btn bg-[#D1A054] text-white hover:bg-[#b18441]"
                  />
                </div>
                <p>
                  Do not have an account? Please{" "}
                  <Link to={"/registration"} className="font-bold text-[#D1A054]">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>

          <div className="text-center lg:text-left">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
