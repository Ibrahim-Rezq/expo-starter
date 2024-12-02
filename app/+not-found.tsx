import { Link, router, Stack } from 'expo-router'
import { StyleSheet, View, ScrollView } from 'react-native'
import { useTheme, Text, Button, Appbar } from 'react-native-paper'

export default function NotFoundScreen() {
    const theme = useTheme()

    return (
        <>
            <Appbar.Header>
                <Appbar.Content title='Ooops' />
            </Appbar.Header>
            <ScrollView
                style={{
                    backgroundColor: theme.colors.background,
                }}
            >
                <View>
                    <Text>This screen doesn't exist.</Text>
                    <Button
                        onPress={() => router.push('/')}
                        mode='contained-tonal'
                    >
                        <Text>Go to home screen!</Text>
                    </Button>
                </View>
            </ScrollView>
        </>
    )
}
