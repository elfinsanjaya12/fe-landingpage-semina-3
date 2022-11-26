import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavLink({ href, children }) {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`nav-link  ${router.pathname === href ? 'active' : ''}`}
      aria-current='page'
    >
      {children}
    </Link>
  );
}
