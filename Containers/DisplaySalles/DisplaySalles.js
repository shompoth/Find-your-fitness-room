// Librairies
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function DisplaySalles(props) {
    return (
        <View style={props.styles.content}>
            <TouchableOpacity
                onPress={() => props.showSalles()}
                style={props.styles.button}
            >
                {props.displaySalles ? (
                    <Text>Cacher la liste des salles</Text>
                ) : (
                    <Text>Afficher les salles</Text>
                )}
            </TouchableOpacity>
        </View>
    );
}

export default DisplaySalles;
