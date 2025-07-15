'use client';

import { Skeleton } from '@/components/ui/skeleton';

const ContactSkeleton = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header skeleton */}
        <div className="text-center mb-16">
          <Skeleton className="h-12 md:h-16 w-64 mx-auto mb-6" />
          <Skeleton className="w-24 h-1 mx-auto rounded-full" />
          <div className="mt-6 max-w-3xl mx-auto space-y-3">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5 mx-auto" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact info skeleton */}
          <div className="space-y-8">
            <Skeleton className="h-8 w-64 mb-6" />
            
            <div className="space-y-6">
              {[1, 2, 3].map((info) => (
                <div key={info} className="flex items-center p-4 glass rounded-xl">
                  <Skeleton className="w-12 h-12 rounded-lg mr-4" />
                  <div>
                    <Skeleton className="h-5 w-16 mb-1" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                </div>
              ))}
            </div>

            <div className="glass rounded-xl p-6">
              <Skeleton className="h-6 w-40 mb-4" />
              <div className="space-y-2">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center">
                    <Skeleton className="w-4 h-4 mr-2" />
                    <Skeleton className="h-4 w-48" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form skeleton */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Skeleton className="h-10 w-full rounded-md" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
            <Skeleton className="h-10 w-full rounded-md" />
            <Skeleton className="h-32 w-full rounded-md" />
            <Skeleton className="h-12 w-full rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSkeleton;