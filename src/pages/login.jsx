import React from "react";

const login = () => {
  return (
    <div className="min-h-[88svh] flex items-center justify-center">
      <div className="flex flex-col p-6 rounded-sm sm:p-10 bg-gray-100">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl 2xl:text-5xl font-bold">Sign in</h1>
          <p className="text-sm 2xl:text-lg">
            Sign in to access your account
          </p>
        </div>
        <form
          novalidate=""
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label for="email" className="block mb-2 text-sm 2xl:text-lg">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@example.com"
                className="w-full px-3 py-2 border rounded-sm"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label for="password" className="text-sm 2xl:text-lg">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs 2xl:text-sm hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-sm"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="button"
                className="w-full px-8 py-3 font-semibold rounded-sm bg-red-500 text-white hover:text-red-500 hover:bg-white delay-150"
              >
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm 2xl:text-base text-center">
              Don't have an account yet?
              <a
                rel="noopener noreferrer"
                href="#"
                className="underline"
              >
                Sign up
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
