import { View } from "react-native";

const Layout = () => {
  return (
    <View
      style={{
        flex: 1,
        // width: 300,
        // height: 300,
        alignItems: "flex-start",
        padding: 20,
        backgroundColor: "green",
      }}
    >
      <View
        style={{
          flex: 0.5,
          width: 200,
          height: 250,
          maxWidth: 50,
          maxHeight: 250,
          marginHorizontal: 20,
          flexGrow: 0,
          flexShrink: 0,
          backgroundColor: "black",
        }}
      />
      <View
        style={{
          flex: 1,
          width: 200,
          height: 250,
          maxWidth: 100,
          maxHeight: 250,
          justifyContent: "space-evenly",
          backgroundColor: "yellow",
        }}
      >
        <View
          style={{
            flex: 1,
            width: 100,
            height: 100,
            backgroundColor: "gold",
          }}
        />
        <View
          style={{
            flex: 1,
            width: 100,
            height: 100,
            alignItems: "space-between",
            backgroundColor:'magenta'

          }}
        />
      </View>
    </View>
  );
};
export default Layout;
