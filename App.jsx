import "react-native-gesture-handler";
import React from "react";
import "react-native-url-polyfill/auto";
import { useState, useEffect } from "react";
import Account from "./src/components/Account";
// import { Session } from "@supabase/supabase-js";
import HomeScreen from "./src/screens/HomeScreen";
import { supabase } from "./src/lib/supabase";
import Auth from "./src/components/Auth";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LogInScreen from "./src/screens/LogInScreen";
import Register from "./src/screens/Register";

const Stack = createNativeStackNavigator();

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <NavigationContainer style={{ flex: 1 }}>
      {session && session.user ? (
        // <Account key={session.user.id} session={session} />

        <HomeScreen />
      ) : (
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={LogInScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
        // <Auth />
      )}
    </NavigationContainer>
  );
}
