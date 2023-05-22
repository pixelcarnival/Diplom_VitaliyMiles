export function validator(data, config) {
    const errors = {}
    function validate(validateMethod, data, config) {
        let statusValidate
        switch (validateMethod) {
            case 'isRequired':
                statusValidate = data.trim() === ''
                break
            case 'isEmail': {
                const emailRegExp = /\S+@\S+\.\S+/g
                statusValidate = !emailRegExp.test(data)
                break
            }
            case 'isWhitespaceEmail': {
                const whitespaceEmailRegExp = /^\S+@\S+\.\S+$/g
                statusValidate = !whitespaceEmailRegExp.test(data)
                break
            }
            case 'isCapitalSymbol': {
                const capitalRegExp = /[A-Z]+/g
                statusValidate = !capitalRegExp.test(data)
                break
            }
            case 'isContainDigit': {
                const cigitRegExp = /\d+/g
                statusValidate = !cigitRegExp.test(data)
                break
            }
            case 'min': {
                statusValidate = data.length < config.value
                break
            }
            case 'isWhitespacePassword': {
                const whitespacePassword = /^[^-() /]*$/
                statusValidate = !whitespacePassword.test(data)
                break
            }
            case 'isLatinSymbol': {
                const latinSymbol = /[а-яё]/i
                statusValidate = latinSymbol.test(data)
                break
            }
            default:
                break
        }
        if (statusValidate) return config.massage
    }
    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            )
            if (error && !errors[fieldName]) {
                errors[fieldName] = error
            }
        }
    }
    return errors
}
