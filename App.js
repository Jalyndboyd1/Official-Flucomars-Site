import { StyleSheet, View } from "react-native";
import { Avatar } from "@mui/material";
import profileImage from './assets/images/profile-image.JPG'

export default function App() {
  return (
    <View style={styles.container}>
      <Avatar
      src={profileImage}
      alt="FlucoMars"
      />
      <View>{/* Links */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
