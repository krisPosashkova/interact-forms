import NextAuth, {User} from "next-auth";
import {PrismaAdapter} from "@auth/prisma-adapter";
import type {Provider} from "next-auth/providers";
import Credentials from "next-auth/providers/credentials"
import prisma from "@/lib/db";
import {compare} from "bcryptjs";

const providers: Provider[] = [
    Credentials({
        name: "Credentials",
        credentials: {
            email: {label: "Email", type: "email"},
            password: {label: "Password", type: "password"},
        },
        async authorize(credentials): Promise<User | null> {
            console.log(credentials, 'sign in ')

            if (!credentials?.email || !credentials?.password) {
                return null;
            }

            const email = credentials.email as string;
            const password = credentials.password as string;


            const user = await prisma.users.findUnique({
                where: {
                    email,
                },
            });

            if (!user || !user.password_hash) {
                return null;
            }

            const isPasswordValid = await compare(
                password,
                user.password_hash
            );

            if (!isPasswordValid) {
                return null;
            }

            return {
                id: user.id.toString(),
                email: user.email,
                name: user.username,
                role: user.role,
            };
        },
    }),
]

export const {handlers, auth, signIn, signOut} = NextAuth({
    adapter: PrismaAdapter(prisma),
    secret: process.env.AUTH_SECRET,
    session: {strategy: "jwt"},
    pages: {
        signIn: "/signin",
    },
    callbacks: {
        jwt({token, user}) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.role = user.role;
                token.username = user.username;
            }
            return token;
        },

        session({session, token}) {
            if (session.user) {
                session.user.id = token.id as string;
                session.user.email = token.email as string;
                session.user.role = token.role;
                session.user.username = token.username as string;
            }
            return session;
        },
    },
    providers: providers,
})