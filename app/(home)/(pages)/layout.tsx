'use client';
import Navbar from '../components/Navbar/Navbar';

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
        {children}
      </div>
    </>
  );
}
