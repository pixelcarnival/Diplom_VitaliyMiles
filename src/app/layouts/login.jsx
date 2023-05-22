import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import LoginForm from '../components/ui/loginForm'
import RegisterForm from '../components/ui/registerForm'

const Login = () => {
    const { type } = useParams
    const [formType, setFormType] = useState(
        type === 'register' ? type : 'login'
    )
    const toggleFormType = (params) => {
        setFormType((prevState) =>
            prevState === 'register' ? 'login' : 'register'
        )
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 p-4 shadow p-4">
                    {formType === 'register' ? (
                        <>
                            <h3 className="mb-4 titleText text-center">
                                Регистрация
                            </h3>
                            <RegisterForm />
                            <p>
                                Есть учетная запись?{' '}
                                <a role="button" onClick={toggleFormType}>
                                    {' '}
                                    Авторизоваться
                                </a>
                            </p>
                        </>
                    ) : (
                        <>
                            <h3 className="mb-4 titleText text-center">Вход</h3>
                            <LoginForm />
                            <p>
                                Нет учетной записи?{' '}
                                <a role="button" onClick={toggleFormType}>
                                    {' '}
                                    Присоедениться к сообществу
                                </a>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Login
