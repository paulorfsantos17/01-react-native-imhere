import React, { useState } from 'react'
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [newParticipantName, setNewParticipantName] = useState<string>('')

  const handleAddParticipant = () => {
    if (isParticipantExisting(newParticipantName)) {
      return showAlert(
        'Participante já existe.',
        `O participante "${newParticipantName}" já existe.`,
      )
    }

    setParticipants((prev) => [newParticipantName, ...prev])
    setNewParticipantName('')
  }

  const isParticipantExisting = (name: string) => {
    return participants.includes(name)
  }

  const showAlert = (title: string, message: string) => {
    Alert.alert(title, message)
  }

  const handleRemoveParticipant = (name: string) => {
    Alert.alert('Remover', `Deseja remover o participante "${name}"?`, [
      { text: 'Sim', onPress: () => onRemoveParticipant(name) },
      { text: 'Não', style: 'cancel' },
    ])
  }

  const onRemoveParticipant = (name: string) => {
    if (!isParticipantExisting(name)) {
      return showAlert(
        'Participante não existe.',
        `O participante "${name}" não existe.`,
      )
    }

    const updatedParticipants = participants.filter(
      (participant) => participant !== name,
    )
    setParticipants(updatedParticipants)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 15 de Maio de 2022</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Nome do participante"
          style={styles.input}
          placeholderTextColor="#6B6B6B"
          value={newParticipantName}
          onChangeText={setNewParticipantName}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleAddParticipant}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        renderItem={({ item }) => (
          <Participant name={item} onRemove={handleRemoveParticipant} />
        )}
        keyExtractor={(item) => item}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou ao evento ainda? Adicione participantes à sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  )
}
