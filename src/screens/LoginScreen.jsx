import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import Input from '../components/Input'
import { colors } from '../global/colors'
import { useLogInMutation } from '../services/AuthService'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [triggerLogIn, result] = useLogInMutation()

    const onSubmit = () => {
        triggerLogIn({email, password})
    }
    const dispatch = useDispatch()

    useEffect(()=>{
        if(result.data){
            dispatch(setUser(result.data))
        }
    }, [result])

    return (
      <KeyboardAvoidingView style={styles.container} behavior='height'>            
        <Input
                label="Email:"
                onChange={setEmail}
            />
            <Input
                label="Contraseña:"
                onChange={setPassword}
                isSecureEntry={true}
            />
            <TouchableOpacity style={styles.btn} onPress={onSubmit}>
                <Text style={styles.btnText}>Ingresar</Text>
            </TouchableOpacity>
            <View style={styles.altContainer}>
                <Text style={styles.subtitle}>¿No tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => { navigation.navigate("Signup") }}>
                    <Text style={styles.subtitleLink}>Crear</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.secondary,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      gap: 10,
    },
    btn: {
      padding: 10,
      backgroundColor: colors.primary,
      borderRadius: 8,
      margin: 10,  
    },
    btnText: {
      color: "#fff",
      fontFamily:'JosefinSans-Bold',
    },
    altContainer: {
      flexDirection: 'row',
      gap: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
    },
    subtitle: {
      color: "#fff",
      fontFamily: "JosefinSans-Bold",
      fontSize: 12,
    },
    subtitleLink: {
      fontFamily: "JosefinSans-Regular",
      color: colors.primary,
      fontSize: 11,
      textDecorationLine: 'underline'
    }
  })