import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import ProductsByCategoryScreen from '../screens/ProductsByCategoryScreen'
import ProductDetailScreen from '../screens/ProductDetailScreen'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
  return (
      <Stack.Navigator
        initialRouteName='Categories'
        screenOptions={
          ({navigation, route}) => ({
            header: () => <Header title={route.name} navigation={navigation}/>
          })
        }
      >
        <Stack.Screen 
          name="Categorías"
          component={CategoriesScreen}
        />
        <Stack.Screen 
          name="Productos"
          component={ProductsByCategoryScreen}
        />
        <Stack.Screen 
          name="Detalle"
          component={ProductDetailScreen}
        />
      </Stack.Navigator>
  )
}


export default ShopNavigator