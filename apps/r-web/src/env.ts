import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(["development", "test", "production"]),
    },
    client: {
        NEXT_PUBLIC_ABSTRACT_IP_API: z.string().min(1),
        NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: z.string().min(1),
        NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID: z.string().min(1),
        NEXT_PUBLIC_GRAPHQL_URL: z.string().min(1),
    },
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        NEXT_PUBLIC_ABSTRACT_IP_API: process.env.NEXT_PUBLIC_ABSTRACT_IP_API,
        NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID: process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID,
        NEXT_PUBLIC_GRAPHQL_URL: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    },

})