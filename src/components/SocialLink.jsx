import React, { useCallback } from "react";
import { Linking, Pressable, View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: "1rem",
    backgroundColor: "#680747",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
  },
  socialLink: {
    padding: "10px",
    alignItems: "center",
    width: "20rem",
  },
  text: {
    color: "#fff",
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
      <Pressable onPress={handlePress} style={styles.socialLink}>
        <Text style={styles.text}>{nameOfSocial}</Text>
      </Pressable>
    </View>
  );
}

export default SocialLink;
