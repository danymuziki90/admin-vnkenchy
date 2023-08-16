import NextAuth from "next-auth"
import clientPromise from "@/lib/mongodb"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@auth/mongodb-adapter";

export default NextAuth ({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ], 
    adapter: MongoDBAdapter(clientPromise),
})