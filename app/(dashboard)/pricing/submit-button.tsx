'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useFormStatus } from 'react-dom';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
<<<<<<< HEAD
      className="w-full bg-black hover:bg-white text-white hover:text-black border border-gray-200 rounded-full flex items-center justify-center align-bottom glass hover:animate-shimmer text-lg px-12 py-6"
=======
      className="w-full bg-white hover:bg-gray-100 text-black border border-gray-200 rounded-full flex items-center justify-center"
>>>>>>> 053a4893159df7e73e6a6d8a17d7c8cb4011801d
    >
      {pending ? (
        <>
          <Loader2 className="animate-spin mr-2 h-4 w-4" />
          Loading...
        </>
      ) : (
        <>
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}
