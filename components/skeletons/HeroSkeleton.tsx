'use client';

import { Skeleton } from '@/components/ui/skeleton';

const HeroSkeleton = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          {/* Name skeleton */}
          <div className="mb-6">
            <Skeleton className="h-16 md:h-20 w-96 mx-auto mb-4" />
            <Skeleton className="h-12 md:h-16 w-80 mx-auto" />
          </div>
          
          {/* Typing animation skeleton */}
          <div className="mb-8">
            <Skeleton className="h-8 md:h-10 w-64 mx-auto" />
          </div>
        </div>

        {/* Description skeleton */}
        <div className="mb-12 max-w-3xl mx-auto">
          <Skeleton className="h-6 w-full mb-3" />
          <Skeleton className="h-6 w-4/5 mx-auto mb-3" />
          <Skeleton className="h-6 w-3/4 mx-auto" />
        </div>

        {/* Buttons skeleton */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <Skeleton className="h-12 w-40 rounded-full" />
          <Skeleton className="h-12 w-48 rounded-full" />
        </div>

        {/* Social links skeleton */}
        <div className="flex justify-center space-x-6">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="w-12 h-12 rounded-full" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSkeleton;