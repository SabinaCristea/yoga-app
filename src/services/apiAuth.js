import { Alert } from "react-native";
import { supabase } from "../lib/supabase";

export async function signInWithEmail(email, password) {
  // setLoading(true);
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) Alert.alert(error.message);
  // setLoading(false);
}

export async function signUpWithEmail(email, password) {
  // setLoading(true);
  const {
    data: { session },
    error,
  } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) Alert.alert(error.message);
  if (!session) Alert.alert("Please check your inbox for email verification!");
  // setLoading(false);
}
