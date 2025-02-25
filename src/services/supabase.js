import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://eiwjaznbqthyfjgkjyvx.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpd2phem5icXRoeWZqZ2tqeXZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1MDMxMjAsImV4cCI6MjA1NjA3OTEyMH0.di5wq0bZ6Aj49PYmCyi3PNttfLjqv0NWHmIbqWaQmkk";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
