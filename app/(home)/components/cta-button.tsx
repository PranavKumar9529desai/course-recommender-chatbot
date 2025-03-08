'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { ButtonHTMLAttributes } from 'react';

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary';
}

export function CTAButton({
  children,
  href,
  variant = 'primary',
  className = '',
  ...props
}: CTAButtonProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const baseStyles =
    'inline-flex items-center justify-center px-8 py-2.5 rounded-lg text-base font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 min-w-[160px]';

  const variants = {
    primary:
      'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg focus:ring-blue-500 active:shadow-inner',
    secondary:
      'bg-white text-gray-900 border-2 border-gray-200 hover:border-blue-500 hover:shadow-md focus:ring-blue-500',
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${className} ${
    status === 'loading' ? 'opacity-50 cursor-wait' : ''
  }`;

  const handleClick = () => {
    if (status === 'loading') return;

    if (session) {
      router.push('/chat');
    } else {
      router.push('/login');
    }
  };

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={buttonClass}
      onClick={handleClick}
      disabled={status === 'loading'}
      {...props}
    >
      {status === 'loading' ? 'Loading...' : children}
    </button>
  );
}
