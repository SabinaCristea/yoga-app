import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-elements";
import { supabase } from "../lib/supabase";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>

      <View>
        <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 100,
  },
});
