import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../global/colors";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const Header = ({ title, navigation }) => {
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
              style={styles.back}
            />
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
        <Text style={styles.headerTitle}>{title}</Text>
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
    fontSize: 22,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 110,
  },
  back: {
    marginTop: 8,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 150,
  } 

});
