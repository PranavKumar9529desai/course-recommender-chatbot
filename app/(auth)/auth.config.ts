import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
    newUser: '/',
  },
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnChat = nextUrl.pathname.startsWith('/chat');
      const isOnRegister = nextUrl.pathname.startsWith('/register');
      const isOnLogin = nextUrl.pathname.startsWith('/login');
      const isHomepage = nextUrl.pathname === '/';

      console.log(`
        🔐 Auth Check:
        URL: ${nextUrl.pathname}
        User Status: ${isLoggedIn ? 'Logged In' : 'Not Logged In'}
        User Email: ${auth?.user?.email || 'N/A'}
      `);

      // if (isHomepage && !isLoggedIn) {
      //   console.log('✅ Allowing access to homepage for non-logged in user');
      //   return false;
      // }

      if (isHomepage && isLoggedIn) {
        console.log('🔄 Redirecting logged-in user from homepage to /chat');
        return Response.redirect(new URL('/chat', nextUrl as unknown as URL));
      }

      if (isLoggedIn && (isOnLogin || isOnRegister)) {
        console.log(
          '🔄 Redirecting logged-in user from auth pages to homepage',
        );
        return Response.redirect(new URL('/', nextUrl as unknown as URL));
      }

      if (isOnRegister || isOnLogin) {
        console.log('✅ Allowing access to auth pages');
        return true; // Always allow access to register and login pages
      }

      if (isOnChat) {
        if (isLoggedIn) {
          console.log('✅ Allowing access to chat for logged-in user');
          return true;
        }
        console.log('❌ Blocking chat access - user not logged in');
        return false; // Redirect unauthenticated users to login page
      }

      if (isLoggedIn) {
        console.log('🔄 Redirecting logged-in user to chat');
        return Response.redirect(new URL('/chat', nextUrl as unknown as URL));
      }

      console.log('✅ Allowing access to public route');
      return true;
    },
  },
} satisfies NextAuthConfig;
