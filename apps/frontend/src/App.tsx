import { useSupabase } from "./hooks/useSupabase";
import { useUser } from "./hooks/useUser";

const App = () => {

  const { user } = useUser();
  const supabase = useSupabase();

  return (
    <div>

      {!user && (
        <button onClick={async () => {

          await supabase.auth.signInWithWeb3({
            chain: 'solana',
            statement: 'I confirm I want to Sign in to Prediction Market',
          });

        }}>
          Sign in with Solana
        </button>
      )}

      {user && (
        <button onClick={async () => {

          await supabase.auth.signOut();

        }}>
          Logout
        </button>
      )}

      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>

    </div>
  );
};

export default App;