import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 16, backgroundColor: "dodgerblue" }}>
        <Text>Search</Text>
      </View>
      <View style={{ flex: 1, padding: 16, backgroundColor: "gold" }}>
        <Text>Blank Canvas</Text>
      </View>
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  card: {},
  text: {},
});
