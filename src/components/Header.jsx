import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../global/colors";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { logout } from '../features/authSlice';
import { deleteSession } from '../db';


const Header = ({ title, navigation }) => {

  const email = useSelector(state=>state.authReducer.user)
    const localId = useSelector(state=>state.authReducer.localId)
    const dispatch = useDispatch()
    const onLogout = ()=>{
        dispatch(logout())
        const deletedSession = deleteSession(localId)
        console.log("Sesión eliminada: ", deletedSession)
    }

  if (title === "Login" || title === "Signup") {
    return null;
  }
  return (    
      <View style={styles.headerContainer}>
        <LinearGradient 
          colors = {[colors.textLight, colors.secondary]}
          style = {styles.background}
          />
        {navigation.canGoBack() ? (
          <TouchableOpacity onPress={navigation.goBack}>
            <AntDesign
              name="arrowleft"
              size={24}
              color={colors.textLight}
              style={styles.icon}
            />
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
        <Text style={title !== 'Categorías' ? styles.headerTitle: styles.catTitle}>{title}</Text>
        {
          email
          &&
          <TouchableOpacity style={styles.icon} onPress={onLogout}>
              <AntDesign name="logout" size={24} color={colors.textLight} />
          </TouchableOpacity>
        }
      </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: 150,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    alignItems: "center",
    backgroundColor: colors.secondary,
    paddingTop: 40,
  },
  headerTitle: {
    color: colors.textLight,
    fontFamily: "JosefinSans-Bold",
    textTransform: "uppercase",
    fontSize: 20,
  },
  catTitle: {
    color: colors.textLight,
    fontFamily: "JosefinSans-Bold",
    textTransform: "uppercase",
    fontSize: 20,
    marginLeft: 24,
  },
  icon: {
    marginTop: 5,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 150,
  } 
});
