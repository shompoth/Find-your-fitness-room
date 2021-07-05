// Librairies
import React from "react";

import { StyleSheet, TouchableHighlight, Text, View, Alert } from "react-native";

function listSalles(props) {
    return (
        <TouchableHighlight
            onPress={() =>
                Alert.alert("Désolé", "Cette option n'est pas encore disponible", "")
            }
            activeOpacity={1}
            underlayColor="rgba(251, 215, 74, 0.15)"
        >
            <View key={props.item.name + props.item.item.index} style={styles.card}>
                <Text
                    style={{
                        // ...props.styles.cardTitle,
                        color: props.lightMode ? "#3b444b" : "#ecf0f1",
                        paddingHorizontal: 20,
                    }}
                >
                    {props.item.item.name}
                </Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        paddingVertical: 30,
        borderBottomWidth: 1,
        borderColor: "#c5aa3d",
    },
});

export default listSalles;
