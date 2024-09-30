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
