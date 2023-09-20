import { Text, View } from "react-native";
import { styles } from "./styles";
import { Button } from "../Button";

export function Participant() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Fernando Souza</Text>
      <Button variant="remove" clickButton={() => {}}>
        -
      </Button>
    </View>
  );
}
