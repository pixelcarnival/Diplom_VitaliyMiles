const genres = {
    essay: { _id: 'idg8872b2aec9a61b', name: 'Эссе' },
    drama: { _id: 'idgac954b7584ae48', name: 'Драма' },
    horror: { _id: 'idgee512d45c1258', name: 'Ужасы' },
    comedy: { _id: 'idg35eb8b70a93e118', name: 'Комедия' },
    tragedy: { _id: 'idgb3dd013451d1e4', name: 'Трагедия' },
    adventure: { _id: 'idg553b597736837e', name: 'Приключение' },
    fantastic: { _id: 'idg15a131226ca166', name: 'Фантастика' },
    scientific: { _id: 'idg79b3754461eb6c', name: 'Научный' }
}

const formats = {
    scenario: { _id: 'idf88e25219600b4', name: 'Сценарий' },
    publication: { _id: 'idf3cb6ae81d36c5', name: 'Публикация' },
    novella: { _id: 'idf4971e8668cd694', name: 'Новелла' },
    article: { _id: 'idfca6bcc21c7105b', name: 'Статья' },
    artistic: { _id: 'idf7572379826cd15', name: 'Художественный' },
    poems: { _id: 'idf12ad9948a34c2d', name: 'Стихи' },
    sketch: { _id: 'idf566a3c41e17b11', name: 'Набросок' }
}

const users = [
    {
        _id: 'id1fd3b2a30163',
        name: 'Виталий Милес',
        genres: [genres.adventure, genres.fantastic, genres.comedy],
        format: formats.scenario,
        rating: 324,
        bookmark: false
    },
    {
        _id: 'ida81e8c7bbcabf',
        name: 'Агюст Фауст',
        genres: [genres.adventure],
        format: formats.publication,
        rating: 34,
        bookmark: false
    },
    {
        _id: 'idc4bd01da358c8',
        name: 'Эндре Хифон',
        genres: [genres.comedy, genres.tragedy],
        format: formats.novella,
        rating: 142,
        bookmark: false
    },
    {
        _id: 'id6130f39a3d55b',
        name: 'Факир Валунтас',
        genres: [genres.scientific],
        format: formats.article,
        rating: 489,
        bookmark: false
    },
    {
        _id: 'ide72070fe6000d',
        name: 'Клаус Кэнтерберийский',
        genres: [genres.comedy, genres.essay],
        format: formats.publication,
        rating: 233,
        bookmark: false
    },
    {
        _id: 'id96604337869a1',
        name: 'Абюрд Дуран',
        genres: [genres.drama, genres.horror, genres.adventure],
        format: formats.artistic,
        rating: 72,
        bookmark: false
    },
    {
        _id: 'id2ee64aab45939',
        name: 'Дэнка Маклаут',
        genres: [genres.horror, genres.tragedy],
        format: formats.poems,
        rating: 410,
        bookmark: false
    },
    {
        _id: 'id203f03be90eab',
        name: 'Фанич Эзольд',
        genres: [genres.comedy],
        format: formats.sketch,
        rating: 38,
        bookmark: false
    },
    {
        _id: 'id626ff2dbda6ce',
        name: 'Хануки Нануки',
        genres: [genres.scientific],
        format: formats.sketch,
        rating: 125,
        bookmark: false
    },
    {
        _id: 'idb2c16e366073f',
        name: 'Датарский Пещь',
        genres: [genres.fantastic, genres.horror, genres.drama],
        format: formats.artistic,
        rating: 234,
        bookmark: false
    },
    {
        _id: 'id706817345795b',
        name: 'Сальса Мальса',
        genres: [genres.horror, genres.comedy],
        format: formats.artistic,
        rating: 431,
        bookmark: false
    },
    {
        _id: 'iddc8fb7e3dde16',
        name: 'Пищь Мищь Гащищь',
        genres: [genres.essay, genres.scientific],
        format: formats.article,
        rating: 86,
        bookmark: false
    },
    {
        _id: 'id7079170db8ef3',
        name: 'Галадрией Невэжно',
        genres: [genres.adventure],
        format: formats.publication,
        rating: 50,
        bookmark: false
    }
]

// const texts = {
//     'Дэнка Маклаут': [
//         {
//             title: 'Название текста',
//             description: 'Короткое описание основного текста без подробностей.',
//             text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellat, ipsam iusto delectus, placeat doloribus optio asperiores velit eos addignissimos quibusdam pariatur dolor quo incidunt reprehenderit temporibus nobis in?'
//         },
//         {
//             title: 'Название текста 2',
//             description: 'Короткое описание основного текста без подробностей.',
//             text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellat, ipsam iusto delectus, placeat doloribus optio asperiores velit eos addignissimos quibusdam pariatur dolor quo incidunt reprehenderit temporibus nobis in?'
//         }
//     ],
//     'Агюст Фауст': [
//         {
//             title: 'Название',
//             description: 'Короткое описание основного текста без подробностей.',
//             text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellat, ipsam iusto delectus, placeat doloribus optio asperiores velit eos addignissimos quibusdam pariatur dolor quo incidunt reprehenderit temporibus nobis in?'
//         }
//     ]
// }
// const texts = {
//     iddc8fb7e3dde16: {
//         title: 'Название текста',
//         description: 'Короткое описание основного текста без подробностей.',
//         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellat, ipsam iusto delectus, placeat doloribus optio asperiores velit eos addignissimos quibusdam pariatur dolor quo incidunt reprehenderit temporibus nobis in?'
//     }
// }

export function fetchAll() {
    return users
}
