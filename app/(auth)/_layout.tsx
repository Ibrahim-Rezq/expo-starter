import { Stack } from 'expo-router'
import React from 'react'

import { useTheme } from 'react-native-paper'
import { StatusBar } from 'expo-status-bar'

export default function TabLayout() {
    const theme = useTheme()

    return (
        <>
            <Stack>
                <Stack.Screen name='sign-in' options={{ headerShown: false }} />
                <Stack.Screen name='sign-up' options={{ headerShown: false }} />
            </Stack>
            <StatusBar style='auto' />
        </>
    )
}
