import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#131016",
    },
    textEvent: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 48,
    },
    textEventDescription: {
        color: "#6b6b6b",
        fontSize: 16,
    },
    form: {
        flexDirection: "row",
        gap: 12,
        marginTop: 36,
        marginBottom: 42,
        width: '100%',
    },
    input: {
        backgroundColor: '#1f1e25',
        height: 56,
        borderRadius: 5,
        color: '#FFF',
        padding: 16, 
        fontSize: 16,
        flex: 1,
    },
    listEmptyText: {
        color: '#fff',
        fontSize: 16,
        textAlign: "center"
    }
});
