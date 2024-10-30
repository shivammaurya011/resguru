import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import User from '@/models/user';
import connectToDatabase from '@/lib/mongodb';

// Export the configuration object separately
const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          await connectToDatabase();
          const user = await User.findOne({ email: credentials.email });
          if (user && bcrypt.compareSync(credentials.password, user.password)) {
            return { id: user._id.toString(), name: user.name, email: user.email };
          }
          return null;
        } catch (error) {
          console.error('Error in authorize function:', error);
          return null;
        }
      },
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        const dbUser = await User.findById(user.id);
        token.role = dbUser.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = { id: token.id, name: token.name, email: token.email, role: token.role };
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// Create the handler using the authOptions
const handler = NextAuth(authOptions);

// Export both the handler and authOptions
export { handler as GET, handler as POST, authOptions };
