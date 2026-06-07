import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SignUp  = () => {
  return (
    <View>
      <Link href="/(auth)/sign-up" >Sign Up
      <Text>Create Account</Text></Link>
    </View>
  )
}

export default SignUp