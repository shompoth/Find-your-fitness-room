// Librairies
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    // Button,
    Image,
    TouchableOpacity,
    // ScrollView,
    FlatList,
    Modal,
    ActivityIndicator,
    Linking,
} from "react-native";

// Components
import { ListSalles, DisplaySalles, FindSalle } from "./Containers";

export default function App() {
    // States
    const [findSalle, setFindSalle] = useState(false);
    // const [nbKm, setNbKm] = useState(false);
    // const [salle, setSalle] = useState(false);
    const [loaded, setLoaded] = useState(true);
    const [lightMode, setLightMode] = useState(true);
    const [displaySalles, setDisplaySalles] = useState(false);
    const [salles, setSalles] = useState([
        { name: "Fitness Park Clichy" },
        { name: "Fitness Park Levallois" },
        { name: "Fitness Park Qwartz" },
        { name: "Fitness Park Pompadour" },
        { name: "Fitness Park Saint-Ouen" },
        { name: "Fitness Park Bonneuil-sur-Marne" },
        { name: "Fitness Park République" },
        { name: "Fitness Park Reuilly Diderot" },
        { name: "Fitness Park Montreuil" },
        { name: "Fitness Park Brie-sur-Marne" },
        { name: "Fitness Park Batignolles" },
    ]);

    // Functions
    const searchMuscu = () => {
        setFindSalle(prevState => !prevState);
        setTimeout(() => {
            setLoaded(prevState => !prevState);
        }, 2000);
    };

    const reinit = () => {
        setLoaded(prevState => !prevState);
        setFindSalle(prevState => !prevState);
    };

    const showSalles = () => {
        setDisplaySalles(prevState => !prevState);
    };

    // Variables
    const salleKm = Math.floor(Math.random() * 10 + 1);
    const randomSalle = Math.floor(Math.random() * salles.length);

    return (
        <>
            <StatusBar style="auto" />

            <View
                style={{
                    ...styles.container,
                    backgroundColor: lightMode ? "#ecf0f1" : "#1f2020",
                }}
            >
                <View
                    style={{
                        ...styles.content,
                        width: "100%",
                    }}
                >
                    {lightMode ? (
                        <Image
                            source={{
                                uri: "https://storage.googleapis.com/wizville-public-eu/uploads/trustville_preference/logo_picture/2799/LOGO_FITNESS_PARK_GREY_2020_FR.png",
                            }}
                            style={styles.logo}
                        />
                    ) : (
                        <Image
                            source={{
                                uri: "https://live.fitnesspark.fr/assets/logo-2ca1ae430fed4528f2f343a841f15a95b1c0312a8e1e8e21f16d719b66860f00.png",
                            }}
                            style={styles.logo}
                        />
                    )}

                    <TouchableOpacity
                        onPress={() => setLightMode(prevState => !prevState)}
                        activeOpacity={0.8}
                    >
                        <Image
                            style={styles.darkLight}
                            source={
                                lightMode
                                    ? require("./assets/moon.png")
                                    : require("./assets/sun.png")
                            }
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.content}>
                    {/* <Text style={styles.h1}>FITNESS PARK</Text> */}
                    <Text style={{ color: lightMode ? "#3b444b" : "#ecf0f1" }}>
                        L'application pour trouver
                        <Text style={{ fontWeight: "bold" }}>
                            {" "}
                            la salle la plus proche
                        </Text>
                    </Text>
                    <TouchableOpacity
                        onPress={() => Linking.openURL("https://gymlib.com")}
                    >
                        <Text style={{ fontStyle: "italic" }}>En savoir plus</Text>
                    </TouchableOpacity>
                    {findSalle ? (
                        <TouchableOpacity
                            onPress={() => reinit()}
                            style={styles.button}
                            activeOpacity={0.8}
                        >
                            <Text>Reinitialiser</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            onPress={() => searchMuscu()}
                            style={styles.button}
                            activeOpacity={0.8}
                        >
                            <Text>Trouver la salle la plus proche</Text>
                        </TouchableOpacity>
                    )}

                    {findSalle &&
                        (loaded ? (
                            <ActivityIndicator size="large" color="#000" />
                        ) : (
                            <FindSalle
                                lightMode={lightMode}
                                salles={salles}
                                salleKm={salleKm}
                                randomSalle={randomSalle}
                            />
                        ))}
                </View>

                {displaySalles && (
                    <>
                        <Text
                            style={{
                                fontWeight: "bold",
                                marginBottom: 15,
                                color: lightMode ? "#3b444b" : "#ecf0f1",
                            }}
                        >
                            Toutes les salles en Ile-de-France:
                        </Text>
                        <FlatList
                            data={salles}
                            renderItem={item => (
                                <ListSalles item={item} lightMode={lightMode} />
                            )}
                            keyExtractor={item => item.name + item.index}
                            style={{ width: "100%" }}
                        />
                    </>
                )}
                <DisplaySalles
                    styles={styles}
                    showSalles={showSalles}
                    displaySalles={displaySalles}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 30,
        paddingBottom: 15,
        width: "100%",
    },
    content: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
        paddingBottom: 15,
        width: "100%",
    },
    h1: {
        fontSize: 32,
        color: "#fbd74a",
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    logo: {
        width: 250,
        height: 50,
        marginBottom: 15,
    },
    loader: {
        width: 100,
        height: 100,
    },
    button: {
        backgroundColor: "#fbd74a",
        marginVertical: 20,
        padding: 10,
        borderRadius: 3,
    },
    darkLight: {
        height: 50,
        width: 50,
        marginVertical: 10,
    },
    card: {
        width: "100%",
        paddingVertical: 30,
        borderBottomWidth: 1,
        borderColor: "#c5aa3d",
    },
});
