import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { Passkey } from "react-native-passkey";

const TEST_REQUEST = {
  attestation: "none",
  authenticatorSelection: {
    authenticatorAttachment: "platform",
    requireResidentKey: false,
    residentKey: "required",
    userVerification: "required",
  },
  challenge: "AjeoKBHEb4vKlacN5TA2aZwcl6zVH0qDuPq8GLgr34w",
  excludeCredentials: [],
  pubKeyCredParams: [{ alg: -7, type: "public-key" }],
  rp: {
    id: process.env.EXPO_PUBLIC_ASSET_STATEMENT_DOMAIN || "",
    name: "Passkey Test App",
  },
  timeout: 1800000,
  user: {
    displayName: "test@test.cz",
    id: "66dd77e0-a3fc-472c-865a-0f8d0de73c03",
    name: "test@test.cz",
  },
};

export default function App() {
  const handlePress = async () => {
    console.log("generating passkey");

    const isSupported = Passkey.isSupported();
    console.log("passkey generation supported:", isSupported);

    if (isSupported) {
      try {
        const result = await Passkey.register(TEST_REQUEST);
        console.log("result", result);
      } catch (error) {
        console.log("error", error);
      }
    }
    console.log("generation ended");
  };

  return (
    <View style={styles.container}>
      <Button title="Generate passkey" onPress={handlePress} />
      <StatusBar style="auto" />
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
