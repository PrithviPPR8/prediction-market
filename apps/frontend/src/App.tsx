import axios from "axios";
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

      <button onClick={async () => {
        try {
          const r = await supabase.auth.getSession();

          if (!r.data.session) {
            console.log("No active session found");
            return;
          }

          const token = r.data.session.access_token;

          console.log(token);

          const response = await axios.post(
            "http://localhost:3000/buy",
            {},
            {
              headers: {
                Authorization: token
              }
            }
          );

          console.log(response.data);

        } catch (err) {
          console.log(err);
        }
      }}>
        Click here to buy
      </button>

      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>

    </div>
  );
};

export default App;