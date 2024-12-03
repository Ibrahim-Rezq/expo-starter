import Container from '@/components/Container'
import { router } from 'expo-router'
import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text, useTheme } from 'react-native-paper'

export default function HomeScreen() {
    const theme = useTheme()
    const [count, setCount] = useState(0)

    return (
        <Container>
            <Text variant='displayLarge' style={{ margin: 16 }}>
                Welcome!
            </Text>
            <Text variant='bodyLarge' style={{ margin: 16 }}>
                This is just a Starter Page for a Welcome page
            </Text>
            <Button
                mode='contained'
                onPress={() => {
                    setCount((c) => c + 1)
                }}
            >
                Count ++
            </Button>
            <Text variant='bodyLarge' style={{ margin: 16 }}>
                {count}
            </Text>
            <Button
                mode='contained'
                onPress={() => {
                    router.push('/(auth)/sign-in')
                }}
            >
                sign-in
            </Button>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {},
})
