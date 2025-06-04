import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';

export default function Layout() {

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* Añade esto como primer componente dentro del View */}
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="product/[id]"
          options={{ headerShown: false }}
        />
      </Stack>

      {/* Resto de tu código actual... */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  }
});