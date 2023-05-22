export const formats = {
    scenario: { _id: 'idf88e25219600b4', name: 'Сценарий' },
    publication: { _id: 'idf3cb6ae81d36c5', name: 'Публикация' },
    novella: { _id: 'idf4971e8668cd694', name: 'Новелла' },
    article: { _id: 'idfca6bcc21c7105b', name: 'Статья' },
    artistic: { _id: 'idf7572379826cd15', name: 'Художественный' },
    poems: { _id: 'idf12ad9948a34c2d', name: 'Стихи' },
    sketch: { _id: 'idf566a3c41e17b11', name: 'Набросок' }
}
// export const formats = [
//     { _id: 'idf88e25219600b4', name: 'Сценарий' },
//     { _id: 'idf3cb6ae81d36c5', name: 'Публикация' },
//     { _id: 'idf4971e8668cd694', name: 'Новелла' },
//     { _id: 'idfca6bcc21c7105b', name: 'Статья' },
//     { _id: 'idf7572379826cd15', name: 'Художественный' },
//     { _id: 'idf12ad9948a34c2d', name: 'Стихи' },
//     { _id: 'idf566a3c41e17b11', name: 'Набросок' }
// ]

export const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(formats)
        }, 2000)
    })

// formatsObject.fetchAll = fetchAll

// export default {
//     fetchAll
// }
// export function fetchAll() {
//     return formats
// }
