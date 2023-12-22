import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import TabNavigator from './src/navigation/TabNavigator';
import { Provider } from 'react-redux';
import store from './src/store';


export default function App() {
  
  const [fontLoaded] = useFonts({
    "JosefinSans-Bold": require("./assets/fonts/JosefinSans-Bold.ttf"),
    "JosefinSans-Regular": require("./assets/fonts/JosefinSans-Regular.ttf"),
  });

  if (!fontLoaded) return <ActivityIndicator />;

  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
}
