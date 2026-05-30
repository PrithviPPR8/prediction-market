import { createClient } from "@supabase/supabase-js"
import { useEffect, useState } from "react"

const supabase = createClient("https://yokvffsxhwzrrdbjoxja.supabase.co","sb_publishable_gB8RnnIOCEJdhzoS10Xblw_0i-WoTDO")

const App = () => {

  const [claims, setClaims] = useState(null);

  useEffect(() => {
    
  }, [])

  return (
    <div>
      <button onClick={async () => {
        await supabase.auth.signInWithWeb3({
          chain: 'solana',
          statement: 'I confirm I want to Sign in to Prediction Market',
        })
      }}>
        Sign in with Solana
      </button>
    </div>
  )
}

export default App