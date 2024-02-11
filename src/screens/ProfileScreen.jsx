import { Text, View, StyleSheet, Pressable, Image, ScrollView } from "react-native";
import user_data from "../data/user_data.json"
import { useSelector } from "react-redux";
import LocationSelector from "../components/LocationSelector";
import { colors } from '../global/colors'


const ProfileScreen = ({ navigation }) => {

    const image = useSelector(state=>state.authReducer.profilePicture)
    const location = useSelector(state=>state.authReducer.location)

  return (
    <ScrollView style={styles.userScreen}>
        <View style={styles.container}>
            <View>
                <Pressable onPress={()=>navigation.navigate("Seleccionar imagen")}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#DCDCDC' : '#E8E8E8',
                        },
                        styles.imageContainer,
                    ]}>
                     {
                        image
                            ?
                             <Image
                                source={{uri:image}}
                                style={styles.profilePicture}
                                resizeMode='contain'
                            />
                            :
                            <Image
                                source={require('../../assets/img/user.png')}
                                style={styles.profilePicture}
                                resizeMode='contain'
                            />
    
                    }
                </Pressable>
            </View>
             <View style={styles.userDataContainer}>
                <Text style={styles.userTitle}>{user_data.name}</Text>
                <Text style={styles.userData}>{user_data.role}</Text>
                <Text style={styles.userData}>Nivel: {user_data.level}</Text>
                <Text style={styles.userData}>Dirección: {user_data.address}</Text>
                <Text style={styles.userData}>{user_data.city}</Text>
            </View> 
        </View>
        {
            location.address
            &&
            <View style={styles.addressContainer}>
                <Text style={styles.addressTitle}>Última ubicación guardada: </Text>
                <Text style={styles.addressDescription}>{location.address}</Text>     
            </View>
        }
        <LocationSelector />
        </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    userScreen: {
        backgroundColor: colors.textLight,

    },
    container: {
        flexDirection: 'row',
        marginTop: 40,
        margin: 20,
        gap: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    userDataContainer: {
    },
    userTitle: {
        fontFamily: 'JosefinSans-Bold',
        fontSize: 16,
    },
    imageContainer: {
        borderRadius: 100,
    },
    userData: {
        fontFamily: 'JosefinSans-Regular',
        fontSize: 12
    },
    addressContainer: {
        alignItems: 'center',
        gap: 5,
        padding: 10,
        margin: 10,
        borderRadius: 20,
        backgroundColor: colors.secondaryBack,
    },
    addressTitle: {
        fontFamily: 'JosefinSans-Bold',
        fontSize: 14,
        color:"#fff"
    },
    addressDescription: {
        fontFamily: 'JosefinSans-Regular',
        color:"#fff"
    }
})
