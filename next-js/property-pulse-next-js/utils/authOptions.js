import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/db";
import User from "@/models/User";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent", //Ensure user sees the Google consent screen every time
          access_type: "offline", //Allows app to refresh tokens and maintain long-term access
          response_type: "code", //Uses the Authorization Code Flow for better security
        },
      },
    }),
  ],
  callbacks: {
    //Invoked on successful sign in
    async signIn({ profile }) {
      //connect to db
      await connectDB();

      // 2) check if user exists
      const userExists = await User.findOne({ email: profile.email });

      // 3) if not, create user
      if (!userExists) {
        //Truncate username if too long
        const username = profile.name.slice(0, 20);

        await User.create({
          email: profile.email,
          username: username,
          image: profile.picture,
        });
      }
      //return true to allow sign in
      return true;
    },

    // session callback function that modifies the session object
    async session({ session }) {
      // 1) get user from database
      const user = await User.findOne({ email: session.user.email });

      // 2) assign user id from the session
      session.user.id = user._id.toString();

      // 3) return sessions
      return session;
    },
  },
};
