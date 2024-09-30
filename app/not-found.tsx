<<<<<<< HEAD
// components/NotFound.tsx

import Link from 'next/link';
import { CircleIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="max-w-md w-full space-y-6 p-8 bg-gray-800 rounded-lg shadow-lg glass">
        <div className="flex justify-center">
          <CircleIcon className="h-12 w-12 text-white" />
        </div>
        <h1 className="text-3xl justify-center font-extrabold text-white tracking-tight">
          Oops! Page Not Found
        </h1>
        <p className="justify-center text-md text-gray-300">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="">
        <Link href="/">
          <Button
            className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-black hover:text-white glass hover:shimmer ease-in-out duration-300"
          >
            Return to Home
          </Button>
        </Link>
        </div>
      </div>
    </div>
  );
}
=======
import Link from 'next/link';
import { CircleIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[100dvh]">
      <div className="max-w-md space-y-8 p-4 text-center">
        <div className="flex justify-center">
          <CircleIcon className="size-12 text-orange-500" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-base text-gray-500">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="max-w-48 mx-auto flex justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
>>>>>>> 053a4893159df7e73e6a6d8a17d7c8cb4011801d
