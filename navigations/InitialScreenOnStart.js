import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

export const InitialScreenOnStart = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home={}}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
