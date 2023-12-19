import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../global/colors";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons'; 


const Header = ({ title, navigation }) => {
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
        {title !== "Categorías" && (
          <View style={styles.buttons}>
            <TouchableOpacity onPress={navigation.goBack}>
              <AntDesign
                name="arrowleft"
                size={24}
                color={colors.primary}
                style={styles.back}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigation.popToTop}>
                <Entypo name="home" size={24} color={colors.primary} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: 150,
    justifyContent: "space-evenly",
    paddingHorizontal: 100,
    alignItems: "center",
    backgroundColor: colors.secondary,
    paddingTop: 50,
  },
  headerTitle: {
    color: colors.primary,
    fontFamily: "JosefinSans-Bold",
    textTransform: "uppercase",
    fontSize: 22,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 110
}
});
