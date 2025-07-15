'use client';

import { Skeleton } from '@/components/ui/skeleton';

const SkillsSkeleton = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header skeleton */}
        <div className="text-center mb-16">
          <Skeleton className="h-12 md:h-16 w-72 mx-auto mb-6" />
          <Skeleton className="w-24 h-1 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((category) => (
            <div key={category} className="glass rounded-xl p-8">
              <Skeleton className="h-8 w-32 mx-auto mb-8" />
              <div className="space-y-6">
                {[1, 2, 3, 4, 5, 6].map((skill) => (
                  <div key={skill}>
                    <div className="flex justify-between items-center mb-2">
                      <Skeleton className="h-5 w-20" />
                      <Skeleton className="h-5 w-10" />
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <Skeleton className="h-2 rounded-full" style={{ width: `${Math.random() * 40 + 60}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom text skeleton */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <Skeleton className="h-5 w-full mb-3" />
          <Skeleton className="h-5 w-4/5 mx-auto mb-3" />
          <Skeleton className="h-5 w-3/4 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default SkillsSkeleton;