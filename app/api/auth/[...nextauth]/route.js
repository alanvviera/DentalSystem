import NextAuth from "next-auth";
import getServerSession from 'next-auth/next'
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

/**
 * Authentication options for NextAuth.js.
 *
 * @typedef {Object} AuthOptions
 * @property {Object} session - Configuration related to user sessions.
 * @property {number} session.maxAge - The maximum age of a session in seconds (e.g., 60 * 3 for 3 minutes).
 * @property {Array} providers - An array of authentication providers.
 * @property {Object} pages - Configuration related to authentication pages.
 * @property {string} pages.signIn - The URL for the sign-in page.
 * @property {Object} callbacks - Custom callback functions for authentication (optional).
 * @property {string} secret - The secret key for NextAuth.js (should be stored in environment variables).
 */

/**
 * Authentication options for NextAuth.js.
 *
 * @type {AuthOptions}
 */
export const authOptions = {
  session: {
    maxAge: 3*60, // 3 minutes
  },
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    })
  ],
  pages: {
    signIn: "/login" 
  },
  callbacks: {
    
  },
  secret: process.env.NEXTAUTH_SECRET,
};
/**
 * Handler for authentication using NextAuth.js with the specified options.
 *
 * @type {import("next-auth").NextApiHandler}
 */
export const handler = NextAuth(authOptions);

// Exporting the handler as both GET and POST for different HTTP methods.
export { handler as GET, handler as POST };