import React, { useCallback } from "react";
import { Linking, TouchableOpacity, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: "1rem",
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
    color: "#fff",
  },
  socialLink: {
    padding: "10px",
    alignItems: "center",
    width: "20rem",
  },
});

function SocialLink({ url, nameOfSocial }) {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    }
  }, [url]);

  return (
    <View style={styles.container}>
      {/* <Button title={nameOfSocial} onPress={handlePress} style={styles.socialLink}/> */}
      <TouchableOpacity onPress={handlePress} style={styles.socialLink}>
        {nameOfSocial}
      </TouchableOpacity>
    </View>
  );
}

export default SocialLink;
