import Image from "next/image";
import Link from "next/link";
import React from "react";
const LoginPage = () => {
  return (
    <div className="p-4 min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-9rem)] flex items-center justify-center bg-gradient-to-br from-white via-orange-50 to-orange-100">
      <div className="w-full md:w-[90%] lg:w-[70%] xl:w-[60%] 2xl:w-1/2 bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="relative h-60 md:h-auto md:w-1/2">
          <Image
            src="/loginBg.png"
            alt="Login Image"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center gap-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Welcome Back
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Log into your account or create a new one using social login
          </p>

          <button className="flex items-center justify-center gap-3 py-3 px-6 bg-white border border-gray-200 rounded-md shadow hover:shadow-md transition">
            <Image
              src="/google.png"
              alt="Google"
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="text-sm text-gray-700 font-medium">
              Sign in with Google
            </span>
          </button>

          <button className="flex items-center justify-center gap-3 py-3 px-6 bg-white border border-gray-200 rounded-md shadow hover:shadow-md transition">
            <Image
              src="/facebook.png"
              alt="Facebook"
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="text-sm text-gray-700 font-medium">
              Sign in with Facebook
            </span>
          </button>

          <p className="text-xs text-gray-500 mt-2">
            Having trouble?
            <Link
              href="/"
              className="ml-1 underline text-blue-500 hover:text-blue-600"
            >
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
