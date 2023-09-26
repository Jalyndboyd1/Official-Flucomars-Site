import { StyleSheet, View, Button } from "react-native";
import { Avatar } from "@mui/material";
import profileImage from "./assets/images/profile-image.JPG";

export default function App() {
  return (
    <View style={styles.container}>
      <Avatar src={profileImage} alt="FlucoMars" />
      <View>
        <Button title="Fluco Gram" />
        <Button title="Fluco Twitter" />
        <Button title="Fluco Tok" />
        <Button title="Fluco Press" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
