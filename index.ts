import { Platform, StatusBar } from "react-native";
const Enum = ["light-content", "dark-content"];
type propsType = "light-content" | "dark-content";
export default (barStyle: propsType = "light-content"): void => {
  if (Enum.includes(barStyle)) {
    StatusBar.setBarStyle(barStyle);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
      StatusBar.setTranslucent(true);
    }
  } else throw 'Argument is "dark-content" or "light-content"';
};
