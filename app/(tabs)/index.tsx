import { Platform, View, ScrollView } from 'react-native'
import { Button, Text, useTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
    const theme = useTheme()
    return (
        <ScrollView style={{ backgroundColor: theme.colors.background }}>
            <SafeAreaView>
                <View>
                    <Text>Welcome!</Text>
                </View>
                <View>
                    <Text>Step 1: Try it</Text>
                    <Text>
                        Edit <Text>app/(tabs)/index.tsx</Text> to see changes.
                        Press{' '}
                        <Text>
                            {Platform.select({
                                ios: 'cmd + d',
                                android: 'cmd + m',
                                web: 'F12',
                            })}
                        </Text>{' '}
                        to open developer tools.
                    </Text>
                </View>
                <View>
                    <Text>Step 2: Explore</Text>
                    <Text>
                        Tap the Explore tab to learn more about what's included
                        in this starter app.
                    </Text>
                </View>
                <View>
                    <Text>Step 3: Get a fresh start</Text>
                    <Text>
                        When you're ready, run{' '}
                        <Text>npm run reset-project</Text> to get a fresh{' '}
                        <Text>app</Text> directory. This will move the current{' '}
                        <Text>app</Text> to <Text>app-example</Text>.
                    </Text>
                    <Button mode='contained'>hello</Button>
                    <Button mode='contained'>hello</Button>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}
