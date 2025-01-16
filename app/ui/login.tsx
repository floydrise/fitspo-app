"use client"

import Link from 'next/link';
import React from 'react';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/serverActions';
import { ExclamationCircleIcon } from '@heroicons/react/16/solid';

export const Login = () => {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <>
      <div className="relative w-full max-w-md p-6 space-y-6 bg-white shadow-md rounded-lg z-10">
        <h1 className="text-2xl font-bold text-center text-fitBlue">
          Log in to Your FitSpo Account
        </h1>
        <form action={formAction} className="space-y-4">
          {/* username section */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-black"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fitBlue"
              placeholder="Enter your username"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            aria-disabled={isPending}
            className="w-full py-2 text-white bg-fitGreen rounded-lg hover:bg-fitRed focus:outline-none focus:ring-2 focus:ring-fitGreen"
          >
            Log in
          </button>
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {errorMessage && (
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
            )}
          </div>
        </form>
        {/* Register Link */}
        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-fitBlue hover:underline">
            <span className="font-bold">Sign up today!</span>
          </Link>
        </p>

      </div>
    </>
  );
};
