import { StyleSheet } from 'react-native'
import {
    Button,
    Card,
    IconButton,
    TextInput,
    useTheme,
} from 'react-native-paper'
import Container from '@/components/Container'
import { router } from 'expo-router'
import { useState } from 'react'

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

export default function SignUp() {
    const [data, setData] = useState({ username: '', email: '', password: '' })

    return (
        <Container>
            <Card style={{ padding: 16, margin: 8 }}>
                <Card.Title
                    style={{ padding: 0 }}
                    title='SignUp'
                    titleStyle={{ margin: 'auto' }}
                    left={LeftContent}
                    right={() => <></>}
                />
                <Card.Content style={{ marginVertical: 16 }}>
                    <TextInput
                        label='username'
                        mode='outlined'
                        value={data.username}
                        onChangeText={(username) =>
                            setData({ ...data, username })
                        }
                        style={{ marginVertical: 8 }}
                    />{' '}
                    <TextInput
                        label='email'
                        mode='outlined'
                        value={data.email}
                        onChangeText={(email) => setData({ ...data, email })}
                        style={{ marginVertical: 8 }}
                    />
                    <TextInput
                        label='password'
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
                        router.push('/(auth)/sign-in')
                    }}
                >
                    sign-in
                </Button>
            </Card>
        </Container>
    )
}

const styles = StyleSheet.create({})
