import { Database } from "@/types/database.types";
import { createClient } from "@supabase/supabase-js";

export const admin = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!,
  {
    global: { fetch: fetch.bind(globalThis) },
    auth: { persistSession: false }
  }
);
