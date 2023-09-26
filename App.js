import { StyleSheet, View } from "react-native";
import { Avatar } from "@mui/material";
import profileImage from "./assets/images/profile-image.JPG";
import Link from "./src/components/SocialLink";

export default function App() {
  return (
    <View style={styles.container}>
      <Avatar
        src={profileImage}
        alt="FlucoMars"
        sx={{ width: 98, height: 98 }}
      />
      <View>
        <Link
          nameOfSocial={"Fluco Gram"}
          url="https://www.instagram.com/flucomars/"
        />
        <Link
          nameOfSocial={"Twitter"}
          url="https://www.instagram.com/flucomars/"
        />
        <Link
          nameOfSocial={"Tiktok"}
          url="https://www.instagram.com/flucomars/"
        />
        <Link
          nameOfSocial={"Fluco Press Kit"}
          url="https://www.instagram.com/flucomars/"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: "1rem",
  },
});
