'use client';

import { Skeleton } from '@/components/ui/skeleton';

const ProjectsSkeleton = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header skeleton */}
        <div className="text-center mb-16">
          <Skeleton className="h-12 md:h-16 w-80 mx-auto mb-6" />
          <Skeleton className="w-24 h-1 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((project) => (
            <div key={project} className="glass rounded-xl overflow-hidden">
              {/* Project image skeleton */}
              <Skeleton className="w-full h-64" />

              <div className="p-8">
                {/* Title skeleton */}
                <Skeleton className="h-8 w-3/4 mb-3" />
                
                {/* Description skeleton */}
                <div className="mb-6 space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/5" />
                </div>

                {/* Technologies skeleton */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {[1, 2, 3, 4].map((tech) => (
                    <Skeleton key={tech} className="h-6 w-16 rounded-full" />
                  ))}
                </div>

                {/* Buttons skeleton */}
                <div className="flex space-x-4">
                  <Skeleton className="h-9 w-24 rounded-md" />
                  <Skeleton className="h-9 w-20 rounded-md" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button skeleton */}
        <div className="text-center mt-12">
          <Skeleton className="h-12 w-48 mx-auto rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSkeleton;