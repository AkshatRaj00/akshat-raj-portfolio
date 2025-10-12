import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Add your authentication logic here
        // For now, returning null (you'll need to implement proper auth)
        return null;
      }
    })
  ],
  pages: {
    signIn: '/client/login',
  },
  session: {
    strategy: 'jwt',
  },
});

export { handler as GET, handler as POST };