import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import 'react-native-reanimated'
import { PaperProvider } from 'react-native-paper'
import { useColorScheme } from 'react-native'
import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    })
    const colorScheme = useColorScheme()
    const theme = colorScheme === 'dark' ? MD3DarkTheme : MD3LightTheme

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync()
        }
    }, [loaded])

    if (!loaded) {
        return null
    }

    return (
        <PaperProvider theme={theme}>
            <Stack>
                <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
                <Stack.Screen name='(auth)' options={{ headerShown: false }} />
                <Stack.Screen
                    name='+not-found'
                    options={{ headerShown: false }}
                />
            </Stack>
            <StatusBar style='auto' />
        </PaperProvider>
    )
}
