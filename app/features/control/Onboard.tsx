import { IText, RootContainer } from '@components'
import { StyleSheet, View } from 'react-native'

export default function Onboard() {
  return (
    <RootContainer>
      <View style={styles.container}>
        <IText>Onboard</IText>
      </View>
    </RootContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
  },
})
