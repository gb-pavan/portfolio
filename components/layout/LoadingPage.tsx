'use client';

import HeroSkeleton from '@/components/skeletons/HeroSkeleton';
import AboutSkeleton from '@/components/skeletons/AboutSkeleton';
import ExperienceSkeleton from '@/components/skeletons/ExperienceSkeleton';
import SkillsSkeleton from '@/components/skeletons/SkillsSkeleton';
import ProjectsSkeleton from '@/components/skeletons/ProjectsSkeleton';
import ContactSkeleton from '@/components/skeletons/ContactSkeleton';
import FooterSkeleton from '@/components/skeletons/FooterSkeleton';

const LoadingPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Navigation skeleton */}
      <nav className="fixed top-0 w-full z-50 glass shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="animate-pulse bg-gradient-to-r from-purple-200 to-blue-200 h-6 w-32 rounded"></div>
            <div className="hidden md:flex space-x-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="animate-pulse bg-gray-200 h-4 w-16 rounded"></div>
              ))}
            </div>
            <div className="md:hidden animate-pulse bg-gray-200 h-6 w-6 rounded"></div>
          </div>
        </div>
      </nav>

      <HeroSkeleton />
      <AboutSkeleton />
      <ExperienceSkeleton />
      <SkillsSkeleton />
      <ProjectsSkeleton />
      <ContactSkeleton />
      <FooterSkeleton />
    </main>
  );
};

export default LoadingPage;