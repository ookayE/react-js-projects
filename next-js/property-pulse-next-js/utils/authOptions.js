import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  Providers: [
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
      // 1) connect to the database
      // 2) check if user exists
      // 3) if not, create user
      // 4) return true to allow sign in
    },

    // session callback function that modifies the session object
    async session({ session }) {
      // 1) get user from database
      // 2) assign user id from the session
      // 3) return sessions
    },
  },
};
