import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { Button } from "../../components/Button";

export function Home() {
  const handleParticipantAdd = () => {
    console.log("teste");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textEvent}>Nome do evento</Text>
      <Text style={styles.textEventDescription}>
        Sexta, 4 de novembro de 2022
      </Text>
      <View style={styles.form} >
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          keyboardType="default"
        />
        <Button
          variant="add"
          clickButton={handleParticipantAdd}
          >  
          +
        </Button>
      </View>
      <Participant/>
    </View>
  );
}
