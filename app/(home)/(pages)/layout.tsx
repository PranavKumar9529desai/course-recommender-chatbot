'use client';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar/Navbar';

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <>
      {/* <Navbar /> */}
      <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <button
          type='button'
          onClick={() => router.back()}
          className="fixed top-4 left-4 md:left-8 z-10 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <ArrowLeftIcon className="size-5 text-gray-600 group-hover:-translate-x-1 transition-transform duration-200" />
        </button>
        {children}
      </div>
    </>
  );
}
