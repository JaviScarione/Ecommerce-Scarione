import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import OrdersNavigator from "./OrdersNavigator";
import { colors } from "../global/colors";
import { Entypo, FontAwesome } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator()


const TabNavigator = ()=>{

    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle:styles.tabBar,
                }}
            >
                <Tab.Screen 
                    name="ShopStack" 
                    component={ShopNavigator} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <Entypo name="shop" size={24} color={focused? colors.primary : colors.textLight} />
                        )
                    }}
                />
                <Tab.Screen 
                    name="CartStack" 
                    component={CartNavigator} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <FontAwesome name="opencart" size={24} color={focused? colors.primary : colors.textLight} />
                        )
                    }}
                />
                <Tab.Screen 
                    name="OrderStack" 
                    component={OrdersNavigator} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <FontAwesome name="reorder" size={24} color={focused? colors.primary : colors.textLight} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor: colors.secondary,
        shadowColor: colors.primary,
        elevation: 10,
        position: "absolute",
        left: 25,
        right: 25,
        height: 60,
        borderRadius:20,
    }
})