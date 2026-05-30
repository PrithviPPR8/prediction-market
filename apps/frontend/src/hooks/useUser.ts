import { useEffect, useState } from "react";
import { useSupabase } from "./useSupabase";

export function useUser() {

    const [user, setUser] = useState<any>(null);
    const supabase = useSupabase();

    useEffect(() => {

        async function loadUser() {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        }

        loadUser();

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange(() => {
            loadUser();
        });

        return () => {
            subscription.unsubscribe();
        };

    }, []);

    return {
        user
    };
}