export const genres = {
    essay: { _id: 'idg8872b2aec9a61b', name: 'Эссе' },
    drama: { _id: 'idgac954b7584ae48', name: 'Драма' },
    horror: { _id: 'idgee512d45c1258', name: 'Ужасы' },
    comedy: { _id: 'idg35eb8b70a93e118', name: 'Комедия' },
    tragedy: { _id: 'idgb3dd013451d1e4', name: 'Трагедия' },
    adventure: { _id: 'idg553b597736837e', name: 'Приключение' },
    fantastic: { _id: 'idg15a131226ca166', name: 'Фантастика' },
    scientific: { _id: 'idg79b3754461eb6c', name: 'Научный' }
}

export function fetchAll() {
    return genres
}

export default {
    fetchAll
}
