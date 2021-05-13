/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   SafeAreaView,
   StatusBar,
   useColorScheme,
 } from 'react-native';

 import {
   Colors,
 } from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/home';
import ProductScreen from './src/screens/productScreen';

 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';

   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };

   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <ProductScreen />
     </SafeAreaView>
   );
 };

 export default App;