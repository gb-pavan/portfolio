'use client';

import { Skeleton } from '@/components/ui/skeleton';

const ExperienceSkeleton = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header skeleton */}
        <div className="text-center mb-16">
          <Skeleton className="h-12 md:h-16 w-80 mx-auto mb-6" />
          <Skeleton className="w-24 h-1 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 to-blue-200 hidden md:block"></div>

          <div className="space-y-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full hidden md:block transform -translate-x-1/2"></div>

                <div className="glass rounded-xl p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <Skeleton className="h-8 w-64 mb-2" />
                      <Skeleton className="h-6 w-48 mb-2" />
                    </div>
                    <div className="flex flex-col lg:text-right">
                      <Skeleton className="h-4 w-32 mb-1" />
                      <Skeleton className="h-4 w-28" />
                    </div>
                  </div>

                  {/* Description points */}
                  <div className="space-y-3 mb-6">
                    {[1, 2, 3, 4].map((j) => (
                      <div key={j} className="flex items-start">
                        <Skeleton className="w-2 h-2 rounded-full mr-3 mt-2" />
                        <Skeleton className="h-4 flex-1" />
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, 5].map((j) => (
                      <Skeleton key={j} className="h-6 w-16 rounded-full" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSkeleton;