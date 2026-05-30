import { createClient } from "@supabase/supabase-js"
import { useState } from "react";

export function useSupabase() {
    const [supabase, setSupabase] = useState(createClient("https://yokvffsxhwzrrdbjoxja.supabase.co","sb_publishable_gB8RnnIOCEJdhzoS10Xblw_0i-WoTDO"));
    return supabase;
}