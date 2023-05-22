import React, { useEffect, useState } from 'react'
import { validator } from '../../utils/validator'
import TextField from '../common/textField'

const LoginForm = () => {
    const [data, setData] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState({})

    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const validatorConfig = {
        email: {
            isRequired: {
                massage: 'Мне нужна твоя электронная почта'
            },
            isEmail: {
                massage: 'В этом Email ошибка, посмотри внимательно и исправь'
            },
            isWhitespaceEmail: { massage: 'В твоей почте невидимый сивол -_-' }
        },
        password: {
            isRequired: { massage: 'И про пароль не забудь' },
            isCapitalSymbol: { massage: 'Нам нужны заглавные буквы' },
            isContainDigit: { massage: 'Нам нужны числа' },
            min: { massage: 'Нам нужно больше букв', value: 8 },
            isWhitespacePassword: {
                massage: 'Наличие пробела в пароле не самая лучшая идея'
            },
            isLatinSymbol: {
                massage: 'Рекомендую использовать только латинцкие буквы'
            }
        }
    }

    useEffect(() => {
        validate()
    }, [data])
    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }
    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Электронная почта"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <button
                type="submit"
                disabled={!isValid}
                className="btn btn-custom w-100 mx-auto"
            >
                Войти
            </button>
        </form>
    )
}

export default LoginForm
