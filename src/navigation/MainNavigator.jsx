import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";
import { useSelector, useDispatch } from "react-redux";
import { useGetProfilePictureQuery } from "../services/shopService";
import { useEffect } from "react";
import { setProfilePicture, setUser, setUserLocation  } from "../features/authSlice";
import { useGetUserLocationQuery } from "../services/shopService";
import { fetchSession } from "../db";
import { useGetProductsQuery } from "../services/shopService";
import { setProducts } from "../features/shopSlice"

const MainNavigator = () => {
    const user = useSelector(state=>state.authReducer.user)
    const localId = useSelector(state=>state.authReducer.localId)

    const {data, isLoading, error } = useGetProfilePictureQuery(localId)
    const { data: locationData, error: locationError, isLoading: isLocationLoading } = useGetUserLocationQuery(localId)
    const { data: productsData, isLoading: isLoadingProducts, error: productsError } = useGetProductsQuery();
    const dispatch = useDispatch()

    useEffect(() => {
        if (!isLoadingProducts && !productsError) {
          dispatch(setProducts(productsData));
        }
    }, [productsData, isLoadingProducts, productsError]);


    useEffect(()=>{
        if(data){
            dispatch(setProfilePicture(data.image))
        }
        if(locationData){
            dispatch(setUserLocation(locationData))
        }
    },[data, locationData, isLoading, isLocationLoading])


    useEffect(()=>{
        (async ()=>{
            try{
                const session = await fetchSession(localId)
                if(session?.rows.length){
                    const user = session.rows._array[0]
                    dispatch(setUser(user))
                }
            }catch(error){
                console.log("Error al obtener datos del usuario local: ", error.message)
            }
        })()
    },[localId])

    return (
        <NavigationContainer>
            {user && !isLoading ? <TabNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    )

}

export default MainNavigator