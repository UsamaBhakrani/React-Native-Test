import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import OrderTable from "./src/components/ordertable/components/OrderTable";

export default function App() {
  const [searchQuery, setSearchQuery] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
      <View style={styles.list}>
        <Text style={styles.heading}>Orders Table</Text>
        <OrderTable />
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
  search: { padding: 10 },
  list: { flex: 1, padding: 16 },
  heading: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
