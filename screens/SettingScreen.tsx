import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigationTypes";

export default function SettingScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <Text>You must be logged in to modify your account</Text>
            <Button
                title="Sign in"
                onPress={() => navigation.navigate('Sign In')}
            />
            <Text style={{ marginTop: 15, fontSize: 13 }}>
                No account?{' '}
                <Text style={{ color: 'blue' }}
                    onPress={() => navigation.navigate('Sign Up')}
                >
                    Sign up
                </Text>
            </Text>
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