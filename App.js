import { StyleSheet, View, Text } from "react-native";
import { AssestContextProvider } from "./src/Context/AssetContext";
import Navigator from "./src/Navigation/Navigator";

export default function App() {
  return (
    <AssestContextProvider>
      <Navigator />
    </AssestContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
