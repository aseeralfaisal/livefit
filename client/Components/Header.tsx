import * as React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useAppSelector } from '../redux/hooks'
import { useRoute } from '@react-navigation/native'

export default function Header() {
  const route = useRoute()
  console.log(route.name)
  const userVal = useAppSelector((state) => state.user.userVal)

  return (
    <>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../assets/icons/avatar.png')}
            style={{ width: 50, resizeMode: 'contain' }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: '#aaa', fontFamily: 'Poppins' }}>Welcome</Text>
            <Text style={styles.userName}>{userVal}</Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.5}>
          <Image
            source={require('../assets/icons/calendar.png')}
            style={{ width: 50, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
        <StatusBar style='dark' />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -40,
    marginBottom: -60,
    marginHorizontal: 28,
  },
  userName: {
    fontSize: 18,
    fontFamily: 'Poppins_Bold',
    color: '#555',
    textTransform: 'capitalize',
  },
})
