// Librairies
import React, { useState } from "react";
import { Text } from "react-native";

function FindSalle(props) {
    const [nbKm, setNbKm] = useState(false);
    const [salle, setSalle] = useState(false);
    return (
        <>
            <Text
                style={{
                    marginVertical: 20,
                    color: props.lightMode ? "#000" : "#ecf0f1",
                    paddingHorizontal: 20,
                    textAlign: "center",
                }}
            >
                La salle la plus proche est {"\n"}
                <Text style={{ fontWeight: "bold" }}>
                    {" "}
                    {/* {props.salles[props.randomSalle].name} : {props.salleKm} km */}
                    {salle
                        ? salle
                        : setSalle(props.salles[props.randomSalle].name)} :{" "}
                    {nbKm ? nbKm : setNbKm(props.salleKm)} km
                </Text>
            </Text>
        </>
    );
}

export default FindSalle;
