import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "../hooks/useAuth";

type Inputs = {
  email: string;
  password: string;
};

function login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { signIn, signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (isLoggedIn) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  return (
    <div className="relative flex flex-col w-screen h-screen md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Movieflex</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Image
        src={"/bgimage.jpg"}
        alt="background_image"
        className="object-cover -z-10 !hidden opacity-60 sm:!inline"
        fill
      />
      <img
        src="/icon.png"
        width={70}
        height={70}
        className="cursor-pointer object-contain absolute top-4 left-4 md:left-10 md:top-6"
        alt="icon"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/70 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h2 className="text-4xl font-semibold">Sign In</h2>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="loginInput"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="p-1 text-[13px] font-bold text-orange-500">
                Please enter a valid email !
              </span>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="p-1 text-[13px] font-bold text-orange-500">
                Please enter a valid password !
              </span>
            )}
          </label>
        </div>
        <button
          type="submit"
          className="w-full rounded bg-[#112d32] hover:bg-[#112d32c5] py-3 font-semibold"
          onClick={() => setIsLoggedIn(true)}
        >
          Sign In
        </button>
        <div>
          New to Movieflex ?{" "}
          <button
            className="text-[#30737e] hover:underline"
            onClick={() => setIsLoggedIn(false)}
          >
            Sign Up Right Now !
          </button>
        </div>
      </form>
    </div>
  );
}

export default login;
