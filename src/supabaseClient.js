import { createClient } from "@supabase/supabase-js";

// 1) project url
const SUPABASE_PROJECT_URL = "https://mbycektjatnzabdwdjgn.supabase.co";

// 2) anon key
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ieWNla3RqYXRuemFiZHdkamduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3NTg4NTQsImV4cCI6MjA0NTMzNDg1NH0.XAZ34-d7Iu4x-KteSBABNqZ8ScCpo_CYxfvFrfeepCQ";

const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);

export default supabase;
