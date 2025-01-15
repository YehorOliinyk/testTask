import React from 'react';
import { AppNavigation } from './navigation/AppNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const App = () => {
  return (
    <SafeAreaProvider>
      <AppNavigation/>
    </SafeAreaProvider>
  );
}
