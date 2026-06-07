import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SignIn  = () => {
  return (
    <View>
      <Link href="/(auth)/sign-in" >Sign In
      <Text>Create Account</Text></Link>
    </View>
  )
}

export default SignIn