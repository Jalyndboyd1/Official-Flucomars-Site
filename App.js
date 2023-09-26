import { StyleSheet, View, Image } from "react-native";
import { Avatar } from "@mui/material";
import profileImage from "./assets/images/profile-image.JPG";
import logo from "./assets/images/logo.png";
import Link from "./src/components/SocialLink";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: "1rem",
    fontFamily: "Arial",
  },
  logo: {
    objectFit: "contain",
    height: "100px",
    width: "200px",
    marginRight: "20px",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Avatar
        src={profileImage}
        alt="FlucoMars"
        sx={{ width: 98, height: 98 }}
      />
      <img src={logo} alt="" style={styles.logo} />
      <View>
        <Link
          nameOfSocial={"Instagram"}
          url="https://www.instagram.com/flucomars/"
        />
        <Link nameOfSocial={"Twitter"} url="https://twitter.com/Flucomars" />
        <Link nameOfSocial={"Tiktok"} url="https://www.tiktok.com/@flucomars" />
        <Link
          nameOfSocial={"Fluco Press Kit"}
          url="https://www.reverbnation.com/flucomars"
        />
      </View>
    </View>
  );
}
