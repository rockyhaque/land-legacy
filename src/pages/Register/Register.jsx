import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { createUser, setUser, googleLogin, githubLogin } = useContext(AuthContext);

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, name, password, photoURL } = data;

    try {
      // Create user in Firebase
      const result = await createUser(email, password);

      // Update user profile
      await updateProfile(result.user, {
        displayName: name,
        photoURL,
      });

      // Set user state
      setUser(result.user);

      // Navigate to home or another page
      navigate("/");
      toast.success(`Yay! User Created Successfully 🤩`)
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      setUser(result.user);
      toast.success(`Yay! User Created Successfully 🤩`)
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGithubLogin = async () => {
    try {
      const result = await githubLogin();
      setUser(result.user);
      toast.success(`Yay! User Created Successfully 🤩`)
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="bg-gray-100 min-h-[calc(100vh-284px)] flex box-border justify-center items-center">
      <Helmet>
        <title>Land Legacy | Register</title>
      </Helmet>
      <div className="bg-customSkyBlue rounded-2xl flex max-w-3xl p-5 items-center">
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl max-h-[1600px]"
            src="https://i.ibb.co/WHnDW8Y/aron-yigin-v-Db-I6-Ec-Alo-unsplash.jpg"
            alt="register form image"
            data-aos="flip-right"
          />
        </div>
        <div className="md:w-1/2 px-8">
          <h2 className="font-bold text-3xl text-customDeepBlue" data-aos="flip-left">Register</h2>
          <p className="text-sm mt-4 text-customDeepBlue" data-aos="fade-left">
            Sign Up for a new account
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="text"
                name="name"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1">
                  *Name is required
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <input
                className="p-2  rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">
                  *Email is required
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <input
                className="p-2 rounded-xl border"
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                {...register("photoURL", { required: true })}
              />
              {errors.photoURL && (
                <span className="text-red-500 text-sm mt-1">
                  *Photo URL is required
                </span>
              )}
            </div>
            <div>
              <div className="relative flex items-center">
                <input
                  className="p-2 rounded-xl border w-full"
                  type={showPass ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                />
                <span
                  className="absolute right-3 cursor-pointer text-xl"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <IoEyeOffOutline /> : <MdOutlineRemoveRedEye />}
                </span>
              </div>
              {errors.password?.type === "required" && (
                <span className="text-red-500 text-sm mt-2">
                  Password is required
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-500 text-sm mt-2">
                  Password Must be 6 characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-500 text-sm mt-2">
                  Password Must be less than 20 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-500 text-sm mt-2">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </span>
              )}
            </div>
            <button
              className="bg-customDeepBlue text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium mt-3"
              type="submit"
            >
              Register
            </button>
          </form>
          <div className="mt-2">
            {error && (
              <small className="text-red-500 font-bold">*{error}</small>
            )}
          </div>
          <div className="mt-6 items-center text-gray-100">
            <hr className="border-gray-300" />
            <p className="text-center text-sm text-gray-500">OR</p>
            <hr className="border-gray-300" />
          </div>
          <button onClick={handleGoogleLogin} className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-medium">
            <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25px"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.138,0,9.764-1.975,13.293-5.197l-6.022-5.163C28.578,35.954,26.361,37,24,37c-5.192,0-9.598-3.325-11.258-7.953l-6.521,5.023C9.3,39.602,16.057,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.74,2.094-2.04,3.908-3.741,5.197c0.001-0.001,0.001-0.001,0.002-0.002l6.022,5.163c-0.427,0.391,6.802-4.966,6.802-14.358C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            Continue with Google
          </button>
          <button onClick={handleGithubLogin} className="bg-white border py-2 w-full rounded-xl mt-2 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-medium">
            <FaGithub className="mr-3" />
            Continue with Github
          </button>
          <div className="text-xs flex justify-between items-center mt-5">
            <p className="text-customDeepBlue">Already have an account?</p>
            <Link to="/login" className="py-2 px-5 text-white bg-customDeepBlue border rounded-xl hover:scale-110 duration-300 hover:bg-[#60a8bc4f] font-medium">Login</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
