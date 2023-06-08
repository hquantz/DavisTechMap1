import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Pressable } from "react-native";

export default function App() {
  const [selectedLocation, setSelectedLocation] = useState();

  function selectLocationHandler(event) {
    console.log(event.nativeEvent.coordinate.latitude);
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({ lat: lat, lng: lng });
  }

  const region = {
    latitude: 41.029493870109484,
    longitude: -111.92547710963815,
    latitudeDelta: 0.02,
    longitudeDelta: 0.01,
  };

  return (
    <>
      <Pressable onPress={selectLocationHandler}>
        <MapView
          style={styles.map}
          initialRegion={region}
          onPress={selectLocationHandler}
        >
          {selectedLocation && (
            <Marker
              title="Picked Location"
              coordinate={{
                latitude: selectedLocation.lat,
                longitude: selectedLocation.lng,
              }}
              pinColor="red"
            />
          )}
        </MapView>
      </Pressable>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
