import { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'

const SERVER_URL = 'http://localhost:3001'

export const useChatRooms = (start, howMany) => {
    const [rooms, setRooms] = useState([])

    const socketRef = useRef(null)

    useEffect(() => {
        socketRef.current = io(`${SERVER_URL}`, {
            cors: {
                origin: "http://localhost:3001",
                credentials: true
            },
            path: ``,
            transports: ['websocket'],
            auth: {
                token: localStorage.getItem("token")
            }
        })
        console.log(socketRef.current)

        // // отправляем событие добавления пользователя,
        // // в качестве данных передаем объект с именем и id пользователя
        // socketRef.current.emit('user:add', { username, userId })
        //
        // // обрабатываем получение списка пользователей
        // socketRef.current.on('users', (users) => {
        //     // обновляем массив пользователей
        //     setUsers(users)
        // })
        //
        // // отправляем запрос на получение сообщений
        // socketRef.current.emit('message:get')
        //
        // // обрабатываем получение сообщений
        // socketRef.current.on('messages', (messages) => {
        //     // определяем, какие сообщения были отправлены данным пользователем,
        //     // если значение свойства "userId" объекта сообщения совпадает с id пользователя,
        //     // то добавляем в объект сообщения свойство "currentUser" со значением "true",
        //     // иначе, просто возвращаем объект сообщения
        //     const newMessages = messages.map((msg) =>
        //         msg.userId === userId ? { ...msg, currentUser: true } : msg
        //     )
        //     // обновляем массив сообщений
        //     setMessages(newMessages)
        // })

        return () => {
            socketRef.current.disconnect()
        }
    }, [start, howMany])

    // // функция отправки сообщения
    // // принимает объект с текстом сообщения и именем отправителя
    // const sendMessage = ({ messageText, senderName }) => {
    //     // добавляем в объект id пользователя при отправке на сервер
    //     socketRef.current.emit('message:add', {
    //         userId,
    //         messageText,
    //         senderName
    //     })
    // }
    //
    // // функция удаления сообщения по id
    // const removeMessage = (id) => {
    //     socketRef.current.emit('message:remove', id)
    // }
    //
    // // отправляем на сервер событие "user:leave" перед перезагрузкой страницы
    // useBeforeUnload(() => {
    //     socketRef.current.emit('user:leave', userId)
    // })

    // хук возвращает пользователей, сообщения и функции для отправки удаления сообщений
    return { rooms }
}