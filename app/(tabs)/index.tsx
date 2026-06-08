// @ts-nocheck
import { Link } from "expo-router";
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      
      <Link href="/onboarding" className="mt-4 rounded bg-primary p-4 text-white">
        Go to Onboarding
      </Link>
      
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary p-4 text-white">
        Go to Sign In
      </Link>
      
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary p-4 text-white">
        Go to Sign Up
      </Link>
      
      <Link href="/(tabs)/Subscriptions/spotify" className="mt-4 text-primary font-sans-medium">
        Spotify Subscription
      </Link>
      
      <Link href="/(tabs)/Subscriptions/claude" className="mt-2 text-primary font-sans-medium">
        Claude Max Subscription
      </Link>
    </View>
  );
}
