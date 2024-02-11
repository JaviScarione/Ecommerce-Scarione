import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

import ProfileNavigator from "./ProfileNavigator";
import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import OrdersNavigator from "./OrdersNavigator";
import { colors } from "../global/colors";
import { Entypo, FontAwesome, Feather } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator()


const TabNavigator = ()=>{

    return(
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
                            <Feather name="shopping-cart" size={24} color={focused? colors.primary : colors.textLight} />
                        )
                    }}
                />
                <Tab.Screen 
                    name="OrderStack" 
                    component={OrdersNavigator} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <Entypo name="list" size={24} color={focused? colors.primary : colors.textLight} />
                        )
                    }}
                />
                 <Tab.Screen 
                    name="ProfileStack" 
                    component={ProfileNavigator} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <FontAwesome name="user-o" size={24} color={focused? colors.primary : colors.textLight} />
                        )
                    }}
                />
            </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor: colors.secondaryBack,
        position: "absolute",
        left: 25,
        right: 25,
        height: 60,
        borderRadius:20,
        marginBottom: 15,
    }
})