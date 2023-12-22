import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../global/colors";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Header = ({ title, navigation }) => {
  return (
    <>
      <View style={title !== "Categorías" ? styles.CategoriesContainer : styles.headerContainer}>
        {title !== "Categorías" && (
          <TouchableOpacity onPress={navigation.goBack}>
            <AntDesign
              name="arrowleft"
              size={24}
              color={colors.textLight}
              style={styles.back}
            />
          </TouchableOpacity>
        )}

        <Text style={styles.headerTitle}>{title}</Text>

        {title !== "Categorías" && (
          <TouchableOpacity onPress={navigation.popToTop}>
            <Entypo name="home" size={24} color={colors.textLight} />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: 150,
    flexDirection: 'row',
    justifyContent: "center",
    paddingHorizontal: 30,
    alignItems: "center",
    backgroundColor: colors.secondary,
    paddingTop: 50,
  },
  CategoriesContainer: {
    height: 150,
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: 30,
    alignItems: "center",
    backgroundColor: colors.secondary,
    paddingTop: 50,
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
});
