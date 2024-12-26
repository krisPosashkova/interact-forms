import {DefaultUser} from "next-auth";
import {user_role} from "@prisma/client";

declare module "next-auth" {
    interface User extends DefaultUser {
        id?: string;
        role?: UserRole;
        username?: string;
    }

    interface Session {
        user: User & {
            id?: string;
            role?: user_role;
            username?: string;
        };
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id?: string;
        role?: UserRole;
        username?: string;
    }
}
