import 'dotenv/config';
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma.js";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", 
    }),
    emailAndPassword: { 
        enabled: true, 
    },
    user: {
        deleteUser: { enabled: true }
    },
    
    // Hardcoding this prevents any Vercel environment variable parsing errors
    trustedOrigins: [
        "https://web-ai-frontend-five.vercel.app",
        "http://localhost:5173"
    ],
    
    baseURL: process.env.BETTER_AUTH_URL!,
    secret: process.env.BETTER_AUTH_SECRET!,
    
    advanced: {
        cookies: {
            session_token: {
                name: 'auth_session',
                attributes: {
                    httpOnly: true,
                    // This exact combination is the magic key for cross-domain Vercel cookies
                    secure: true, 
                    sameSite: "none", 
                    path: '/',
                }
            }
        }
    }
});