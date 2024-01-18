import { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors } from '../global/colors'

const Input = ({ label, isSecureEntry = false, error = "", onChange }) => {
    const [input, setInput] = useState()

    const onHandleChangeText = (text) => {
        setInput(text)
        onChange(text)
    }

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onHandleChangeText}
                secureTextEntry={isSecureEntry}
                value={input}
            />
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent:'center',
        width: '70%'
    },
    input:{
        borderWidth:1,
        borderRadius: 10,
        width: '100%',
        backgroundColor: colors.secondaryBack,
        color: "#fff",
        padding: 8,
        fontFamily:'JosefinSans-Regular',
    },
    label:{
        fontFamily:'JosefinSans-Bold',
        color: colors.primary,
        paddingLeft:5,
        marginBottom:4,
    },
    error:{
        padding: 5,
        color: colors.error,
    }
})