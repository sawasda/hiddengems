import { StyleSheet, Text, View } from "react-native";

export default function SignInScreen() {
    return (
        <View style={styles.container}>
            <Text>Sign in here</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});