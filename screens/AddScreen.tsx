import { StyleSheet, Text, View } from "react-native";

export default function AddScreen() {
    return (
        <View style={styles.container}>
            <Text>You must be logged in to add a new Hidden Gem</Text>
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