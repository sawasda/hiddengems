import { StyleSheet, Text, View } from "react-native";

export default function FavouriteScreen() {
    return (
        <View style={styles.container}>
            <Text>You must be logged in to add favourites</Text>
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