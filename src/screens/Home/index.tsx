import { Text, TextInput, ScrollView, View, FlatList, Alert, TextInputChangeEventData } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { Button } from "../../components/Button";
import { ChangeEvent, useState } from "react";

const participants = [
  "Fernando",
  "Julia",
  "Cleber",
  "Regina",
  "Adriely",
  "Fernando1",
  "Julia1",
  "Cleber1",
  "Regina1",
  "Adriely1",
  "Fernando2",
  "Julia3",
  "Cleber3",
  "Regina3",
  "Adriely3",
];

interface UserProps {
  name: string
}

export function Home() {


  const [participants, setParticipants] = useState<UserProps[]>([])
  const [nameParticipant, setNameParticipant] = useState('')  

  const handleParticipantAdd = (name: string) => {
    if (!name) {
      return
    }
    if(participants.some(participant => participant.name === name)) {
      setNameParticipant('')
      return Alert.alert("Participante novo", "Ja existe um participante com esse nome na lista")
    }
    setParticipants(state =>[
      ...state,
      {
        name: name
      }
    ])

    setNameParticipant('')
  };

  const handleParticipantRemove = (name: string) => {
   Alert.alert('Removendo participante', `Deseja mesmo remover o(a) participante ${name}?`, [
    {
      text: 'Sim',
      onPress: () => Alert.alert("Deletado!")
    },
    {
      text: 'Não',
      style: 'cancel'
    }
   ])
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textEvent}>Nome do evento</Text>
      <Text style={styles.textEventDescription}>
        Sexta, 4 de novembro de 2022
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          keyboardType="default"
          onChangeText={e => setNameParticipant(e)}
          value={nameParticipant}
        />
        <Button variant="add" clickButton={() => handleParticipantAdd(nameParticipant)}>
          +
        </Button>
      </View>

      <FlatList
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Nenhum participante adcionado na lista.
          </Text>
        )}
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Participant
            key={item.name}
            onRemove={() => handleParticipantRemove(item.name)}
            name={item.name}
          />
        )}
      />
    </View>
  );
}
