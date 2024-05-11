import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ksnnjqzpphtidowwdqem.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtzbm5qcXpwcGh0aWRvd3dkcWVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU0MzMxNjMsImV4cCI6MjAzMTAwOTE2M30.ZeX3_EOLrV7IIhUQ5fajO-xAhCYx_l2aXHhAdPdbJdQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
