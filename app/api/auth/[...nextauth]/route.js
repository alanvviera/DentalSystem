import NextAuth, {NextAuthOptions} from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
  session: {
    maxAge: 60 * 3, // 3 minutes
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      authorize(credentials, req){
        const {email, password} = credentials 
        //Aqui va la logica del login

        if(email !== "waldo@gmail.com" || password !== "Oswaldo7!") {
          return null;
        }

        //Si lo anterior salio bien, se retornara
        return {id: '123445678', name: 'Waldo Zen', email: 'waldo@gmail.com'}
      }
    }),
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

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
