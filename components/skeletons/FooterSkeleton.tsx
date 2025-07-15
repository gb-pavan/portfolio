'use client';

import { Skeleton } from '@/components/ui/skeleton';

const FooterSkeleton = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-purple-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand section skeleton */}
          <div>
            <Skeleton className="h-8 w-32 mb-4 bg-white/20" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full bg-white/20" />
              <Skeleton className="h-4 w-5/6 bg-white/20" />
              <Skeleton className="h-4 w-4/5 bg-white/20" />
            </div>
          </div>

          {/* Quick links skeleton */}
          <div className="md:text-center">
            <Skeleton className="h-6 w-24 mb-4 bg-white/20 md:mx-auto" />
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((link) => (
                <Skeleton key={link} className="h-4 w-16 bg-white/20 md:mx-auto" />
              ))}
            </div>
          </div>

          {/* Connect section skeleton */}
          <div className="md:text-right">
            <Skeleton className="h-6 w-32 mb-4 bg-white/20 md:ml-auto" />
            <div className="flex md:justify-end space-x-4 mb-4">
              {[1, 2, 3].map((social) => (
                <Skeleton key={social} className="w-12 h-12 rounded-full bg-white/20" />
              ))}
            </div>
            <Skeleton className="h-4 w-48 bg-white/20 md:ml-auto" />
          </div>
        </div>

        {/* Bottom section skeleton */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <Skeleton className="h-4 w-64 mx-auto bg-white/20" />
        </div>
      </div>
    </footer>
  );
};

export default FooterSkeleton;