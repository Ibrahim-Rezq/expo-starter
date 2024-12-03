import { StyleSheet } from 'react-native'
import {
    Button,
    Card,
    IconButton,
    TextInput,
    useTheme,
} from 'react-native-paper'
import { useState } from 'react'
import Container from '@/components/Container'
import { router } from 'expo-router'

const LeftContent = (props: { size: number }) => {
    const theme = useTheme()
    return (
        <IconButton
            icon='chevron-left'
            iconColor={theme.colors.primary}
            size={20}
            onPress={() => {
                router.push('/')
            }}
        />
    )
}

export default function SignIn() {
    const [data, setData] = useState({ email: '', password: '' })

    return (
        <Container>
            <Card style={{ padding: 16, margin: 8 }}>
                <Card.Title
                    style={{ padding: 0 }}
                    title='SignIn'
                    titleStyle={{ margin: 'auto' }}
                    left={LeftContent}
                    right={() => <></>}
                />
                <Card.Content style={{ marginVertical: 16 }}>
                    <TextInput
                        label='Email'
                        mode='outlined'
                        value={data.email}
                        onChangeText={(email) => setData({ ...data, email })}
                        style={{ marginVertical: 8 }}
                    />
                    <TextInput
                        label='Password'
                        mode='outlined'
                        value={data.password}
                        onChangeText={(password) =>
                            setData({ ...data, password })
                        }
                        style={{ marginVertical: 8 }}
                    />
                </Card.Content>
                <Card.Actions>
                    <Button style={{ margin: 'auto' }} mode='outlined'>
                        Ok
                    </Button>
                </Card.Actions>
                <Button
                    mode='text'
                    onPress={() => {
                        router.push('/(auth)/sign-up')
                    }}
                >
                    sign-up
                </Button>
            </Card>
        </Container>
    )
}

const styles = StyleSheet.create({})
