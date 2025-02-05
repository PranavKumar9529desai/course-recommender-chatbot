'use client';
import Image from 'next/image';
import Link from 'next/link';
import LeanersAmigoLogo from '@/public/learneramigologo1.webp';
import { useEffect, useState } from 'react';
import { CTAButton } from '../cta-button'; // added import

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300  ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="shrink-0 flex items-center space-x-3 group">
            <Image
              src={LeanersAmigoLogo}
              alt="Learner's Amigo Logo"
              width={45}
              height={45}
              className="cursor-pointer transition-transform duration-300 group-hover:scale-105"
            />
            <span
              className={`text-xl font-semibold transition-colors duration-300 ${
                scrolled ? 'text-gray-800' : 'text-gray-900'
              }`}
            >
              Learner&apos;s Amigo
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink scrolled={scrolled} href="/about">
              About Us
            </NavLink>
            <NavLink scrolled={scrolled} href="/team">
              Our Team
            </NavLink>
            <NavLink scrolled={scrolled} href="/contact">
              Contact
            </NavLink>
            <CTAButton variant="primary">Start Chat</CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span
                  className={`absolute w-6 h-0.5 bg-gray-900 transition-all duration-300${
                    isOpen ? 'rotate-45 translate-y-2.5' : ''
                  }`}
                />
                <span
                  className={`absolute w-6 h-0.5 bg-gray-900 top-2 transition-all duration-300 ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`absolute w-6 h-0.5 bg-gray-900 top-4 transition-all duration-300${
                    isOpen ? '-rotate-45 -translate-y-2.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-[90] transition-all duration-300 ${
          isOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-7 right-6 p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
          aria-label="Close menu"
        >
          <svg
            className="size-6 text-gray-600 hover:text-gray-900 transition-colors duration-300"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-6 px-4 py-8">
          <Link
            href="/chat"
            className="flex items-center space-x-3 mb-8"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src={LeanersAmigoLogo}
              alt="Learner's Amigo Logo"
              width={40}
              height={40}
              className="cursor-pointer"
            />
            <span className="text-xl font-semibold text-gray-900">
              Learner&apos;s Amigo
            </span>
          </Link>

          <NavLink
            scrolled={scrolled}
            href="/about"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            scrolled={scrolled}
            href="/team"
            onClick={() => setIsOpen(false)}
          >
            Our Team
          </NavLink>
          <NavLink
            scrolled={scrolled}
            href="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
          <CTAButton variant="primary" className="mt-4 w-full max-w-[200px]">
            Start Chat
          </CTAButton>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({
  href,
  children,
  scrolled,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  scrolled: boolean;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className={`font-medium text-lg transition-all duration-300 relative group ${
      scrolled ? 'text-gray-700' : 'text-gray-900'
    }`}
  >
    {children}
    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 group-hover:left-0" />
  </Link>
);

export default Navbar;
