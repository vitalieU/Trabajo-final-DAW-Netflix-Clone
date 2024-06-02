CREATE TABLE IF NOT EXISTS Media (
    id SERIAL PRIMARY KEY,
    backdrop_path TEXT,
    original_title TEXT,
    overview TEXT,
    poster_path TEXT,
    media_type TEXT,
    adult BOOLEAN,
    title TEXT,
    original_language TEXT,
    genre_ids INTEGER[],
    popularity NUMERIC,
    release_date DATE,
    video BOOLEAN,
    vote_average NUMERIC,
    vote_count INTEGER,
    first_air_date DATE,
    origin_country TEXT[]
);


/*
{
      "backdrop_path": "/sR0SpCrXamlIkYMdfz83sFn5JS6.jpg",
      "id": 823464,
      "original_title": "Godzilla x Kong: The New Empire",
      "overview": "Una aventura cinematográfica completamente nueva, que enfrentará al todopoderoso Kong y al temible Godzilla contra una colosal amenaza desconocida escondida dentro de nuestro mundo. La nueva y épica película profundizará en las historias de estos titanes, sus orígenes y los misterios de Isla Calavera y más allá, mientras descubre la batalla mítica que ayudó a forjar a estos seres extraordinarios y los unió a la humanidad para siempre.",
      "poster_path": "/2YqZ6IyFk7menirwziJvfoVvSOh.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Godzilla y Kong: El nuevo imperio",
      "original_language": "en",
      "genre_ids": [
        878,
        28,
        12
      ],
      "popularity": 4500.758,
      "release_date": "2024-03-27",
      "video": false,
      "vote_average": 7.256,
      "vote_count": 2031
    },
    {
      "backdrop_path": "/u1CqlLecfpcuOaugKi3ol9gDQHJ.jpg",
      "id": 95842,
      "original_name": "庆余年",
      "overview": "Zhang Qing, un estudiante universitario actual de la carrera de cultura e historia, quiere estudiar en la clase de postgrado del profesor Ye, por lo que decide escribir una ficción histórica para elaborar su perspectiva de análisis de la historia de la literatura antigua con un concepto moderno. En la ficción, el propio Zhang interpreta a un joven Fan Xian de vida misteriosa que vive en una remota ciudad costera del Reino Qing en su infancia, con la ayuda de un misterioso mentor y un vigilante con los ojos vendados. Fan va a la capital cuando crece, donde experimenta muchas pruebas y mal genio. Fan persiste en adherirse a la regla de la justicia y la bondad y vive su propia vida gloriosa.",
      "poster_path": "/vlHJfLsduZiILN8eYdN57kHZTcQ.jpg",
      "media_type": "tv",
      "adult": false,
      "name": "Joy Of Life",
      "original_language": "zh",
      "genre_ids": [
        18
      ],
      "popularity": 1858.635,
      "first_air_date": "2019-11-26",
      "vote_average": 7.9,
      "vote_count": 62,
      "origin_country": [
        "CN"
      ]
    },
    {
      "backdrop_path": "/kNtJFgZPfIBtaRpKcVChL8ULIrS.jpg",
      "id": 239770,
      "original_name": "Doctor Who",
      "overview": "El Doctor y su compañera Ruby Sunday viajan a través del tiempo y el espacio, viviendo aventuras desde la época de la Regencia en Inglaterra hasta mundos futuros asolados por la guerra. A través de sus aventuras en la Tardis... una nave que viaja por el tiempo con forma de cabina telefónica de la policía, encuentran amigos increíbles y peligrosos enemigos, incluido un aterrador coco y el enemigo más poderoso del Doctor hasta la fecha.",
      "poster_path": "/5ed6T2KGtuIkn1eHOvjQRchU75b.jpg",
      "media_type": "tv",
      "adult": false,
      "name": "Doctor Who",
      "original_language": "en",
      "genre_ids": [
        10759,
        18,
        10765
      ],
      "popularity": 334.109,
      "first_air_date": "2024-05-11",
      "vote_average": 6.123,
      "vote_count": 57,
      "origin_country": [
        "GB"
      ]
    },
    {
      "backdrop_path": "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
      "id": 693134,
      "original_title": "Dune: Part Two",
      "overview": "Sigue el viaje mítico de Paul Atreides mientras se une a Chani y los Fremen en una guerra de venganza contra los conspiradores que destruyeron a su familia. Al enfrentarse a una elección entre el amor de su vida y el destino del universo conocido, Paul se esfuerza por evitar un futuro terrible que solo él puede prever.",
      "poster_path": "/6o5cJjA4srfvU52UKWaqPUuPPgl.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Dune: Parte dos",
      "original_language": "en",
      "genre_ids": [
        878,
        12
      ],
      "popularity": 1025.112,
      "release_date": "2024-02-27",
      "video": false,
      "vote_average": 8.183,
      "vote_count": 4051
    },
    {
      "backdrop_path": "/fqv8v6AycXKsivp1T5yKtLbGXce.jpg",
      "id": 653346,
      "original_title": "Kingdom of the Planet of the Apes",
      "overview": "Ambientada varias generaciones en el futuro tras el reinado de César, en la que los simios son la especie dominante que vive en armonía y los humanos se han visto reducidos a vivir en la sombra. Mientras un nuevo y tiránico líder simio construye su imperio, un joven simio emprende un angustioso viaje que le llevará a cuestionarse todo lo que sabe sobre el pasado y a tomar decisiones que definirán el futuro de simios y humanos por igual.",
      "poster_path": "/kkFn3KM47Qq4Wjhd8GuFfe3LX27.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "El reino del planeta de los simios",
      "original_language": "en",
      "genre_ids": [
        878,
        12,
        28
      ],
      "popularity": 1539.548,
      "release_date": "2024-05-08",
      "video": false,
      "vote_average": 7.147,
      "vote_count": 534
    },
    {
      "backdrop_path": "/4CcUgdiGe83MeqJW1NyJVmZqRrF.jpg",
      "id": 937287,
      "original_title": "Challengers",
      "overview": "Casada con un campeón con una mala racha de derrotas, la estrategia de Tashi para la redención de su marido da un giro sorprendente cuando éste debe enfrentarse a Patrick - su antiguo mejor amigo y ex novio de Tashi. A medida que sus pasados y presentes chocan, y las tensiones se disparan, Tashi debe preguntarse a sí misma cuánto le costará ganar.",
      "poster_path": "/lRfGmlfKslfuHYDiShqfMF9o9Hh.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Rivales",
      "original_language": "en",
      "genre_ids": [
        10749,
        18
      ],
      "popularity": 544.946,
      "release_date": "2024-04-18",
      "video": false,
      "vote_average": 7.303,
      "vote_count": 684
    },
    {
      "backdrop_path": "/wODqakS0jinTUECNS6n4VomQbew.jpg",
      "id": 967847,
      "original_title": "Ghostbusters: Frozen Empire",
      "overview": "Después de los eventos de Oklahoma, el equipo de Cazafantasmas regresa a donde comenzó todo: ¡Nueva York! La historia de la familia Spengler continúa con un nuevo grupo de Cazafantasmas.",
      "poster_path": "/fIUqk6Pjo3uf5RiOGT19KQ53ekq.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Cazafantasmas: Imperio helado",
      "original_language": "en",
      "genre_ids": [
        14,
        12,
        35
      ],
      "popularity": 588.396,
      "release_date": "2024-03-20",
      "video": false,
      "vote_average": 6.678,
      "vote_count": 824
    },
    {
      "backdrop_path": "/q8IEFmEGGSGmAWfwRs23XDwdFN4.jpg",
      "id": 786892,
      "original_title": "Furiosa: A Mad Max Saga",
      "overview": "Precuela de la película de 2015 'Mad Max: Furia en la carretera'.",
      "poster_path": "/txUUoowOD2MrGXAtI3pWifLR9p6.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Furiosa: De la saga Mad Max",
      "original_language": "en",
      "genre_ids": [
        878,
        28,
        12
      ],
      "popularity": 1090.011,
      "release_date": "2024-05-22",
      "video": false,
      "vote_average": 7.6,
      "vote_count": 92
    },
    {
      "backdrop_path": "/fY3lD0jM5AoHJMunjGWqJ0hRteI.jpg",
      "id": 940721,
      "original_title": "ゴジラ-1.0",
      "overview": "En el Japón de la posguerra surge un nuevo terror. ¿Podrán sobrevivir las personas devastadas... y mucho menos defenderse?",
      "poster_path": "/q35kdC8ci9Fm2gVQazJdsohtGpD.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Godzilla Minus One",
      "original_language": "ja",
      "genre_ids": [
        878,
        27,
        28
      ],
      "popularity": 1109.091,
      "release_date": "2023-11-03",
      "video": false,
      "vote_average": 7.679,
      "vote_count": 1134
    },
    {
      "backdrop_path": "/vcFW09U4834DyFOeRZpsx9x1D3S.jpg",
      "id": 57243,
      "original_name": "Doctor Who",
      "overview": "Doctor Who es una serie de televisión británica de ciencia ficción producida por la BBC. El programa muestra las aventuras de un Señor del Tiempo conocido como \"El Doctor\", que explora el universo en su TARDIS, una nave espacial con conciencia propia capaz de viajar a través del tiempo y el espacio. Con la ayuda de distintos acompañantes, el Doctor se enfrenta a una variedad de enemigos mientras salva civilizaciones, visita tanto el pasado como el futuro, ayuda a gente común y corrige injusticias.",
      "poster_path": "/4edFyasCrkH4MKs6H4mHqlrxA6b.jpg",
      "media_type": "tv",
      "adult": false,
      "name": "Doctor Who",
      "original_language": "en",
      "genre_ids": [
        10759,
        18,
        10765
      ],
      "popularity": 667.308,
      "first_air_date": "2005-03-26",
      "vote_average": 7.51,
      "vote_count": 2891,
      "origin_country": [
        "GB"
      ]
    },
    {
      "backdrop_path": "/5fWxvjOUvtUoSmiMEpFl77V6KZV.jpg",
      "id": 196322,
      "original_name": "Dark Matter",
      "overview": "Jason Dessen acaba en una versión alternativa de su vida. Para volver con su auténtica familia, se embarca en un tortuoso viaje para salvarla del enemigo más aterrador: él mismo.",
      "poster_path": "/ohuI1Ik5FsjSazomDqzMlyb6Yv2.jpg",
      "media_type": "tv",
      "adult": false,
      "name": "Materia oscura",
      "original_language": "en",
      "genre_ids": [
        18,
        9648,
        10765
      ],
      "popularity": 599.727,
      "first_air_date": "2024-05-07",
      "vote_average": 7.84,
      "vote_count": 46,
      "origin_country": [
        "US"
      ]
    },
    {
      "backdrop_path": "/ySgY4jBvZ6qchrxKnBg4M8tZp8V.jpg",
      "id": 1111873,
      "original_title": "Abigail",
      "overview": "A una banda de delincuentes se les ha encargado secuestrar a Abigail, una bailarina de doce años hija de una poderosa figura del inframundo. Su misión requiere también vigilarla durante la noche para poder cobrar un rescate de 50 millones de dólares. En una mansión aislada, los captores comienzan a desaparecer, uno por uno, y descubren, para su creciente horror, que la pequeña niña con la que están encerrados no es normal y está mostrando su verdadera naturaleza.",
      "poster_path": "/6swWpho5jKxMIez9diNJm0Kqhj.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Abigail",
      "original_language": "en",
      "genre_ids": [
        27,
        53
      ],
      "popularity": 525.755,
      "release_date": "2024-04-18",
      "video": false,
      "vote_average": 6.858,
      "vote_count": 509
    },
    {
      "backdrop_path": "/s5znBQmprDJJ553IMQfwEVlfroH.jpg",
      "id": 799583,
      "original_title": "The Ministry of Ungentlemanly Warfare",
      "overview": "El ejército británico recluta a un pequeño grupo de soldados de élite para atacar a los nazis detrás de las líneas enemigas durante la Segunda Guerra Mundial.",
      "poster_path": "/8aF0iAKH9MJMYAZdi0Slg77RYa2.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "El ministerio de la guerra",
      "original_language": "en",
      "genre_ids": [
        28,
        10752,
        18
      ],
      "popularity": 166.028,
      "release_date": "2024-04-18",
      "video": false,
      "vote_average": 7.121,
      "vote_count": 209
    },
    {
      "backdrop_path": "/uv2twFGMk2qBdyJBJAVcrpRtSa9.jpg",
      "id": 929590,
      "original_title": "Civil War",
      "overview": "En un futuro cercano donde América está sumida en una cruenta guerra civil, un equipo de periodistas y fotógrafos de guerra emprenderá un viaje por carretera en dirección a Washington DC. Su misión: llegar antes de que las fuerzas rebeldes asalten la Casa Blanca y arrebaten el control al presidente de los Estados Unidos.",
      "poster_path": "/iCOQUVVaPqRuR3JqF71akguf6Mj.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Civil War",
      "original_language": "en",
      "genre_ids": [
        10752,
        28,
        18
      ],
      "popularity": 514.654,
      "release_date": "2024-04-10",
      "video": false,
      "vote_average": 7.391,
      "vote_count": 717
    },
    {
      "backdrop_path": "/4d0tMAk49gqbVwgvtQjCriBwyb8.jpg",
      "id": 106379,
      "original_name": "Fallout",
      "overview": "Basado en una de las sagas de videojuegos más importantes de todos los tiempos, Fallout es la historia de los que tienen y de los que no tienen en un mundo en el que prácticamente no queda nada para tener. 200 años después del apocalipsis, los apacibles habitantes de los refugios de lujo se ven obligados a regresar al infierno irradiado que dejaron sus antepasados - y se sorprenden al descubrir que les espera un universo increíblemente complejo, alegremente extraño y muy violento. De los productores ejecutivos Jonathan Nolan y Lisa Joy, los creadores de Westworld, protagonizada por Ella Purnell, Aaron Moten, Walton Goggins y más.",
      "poster_path": "/uNctKf62RRL8RKPTrdyFrcttwT2.jpg",
      "media_type": "tv",
      "adult": false,
      "name": "Fallout",
      "original_language": "en",
      "genre_ids": [
        10765,
        10759,
        9648
      ],
      "popularity": 461.686,
      "first_air_date": "2024-04-10",
      "vote_average": 8.373,
      "vote_count": 1058,
      "origin_country": [
        "US"
      ]
    },
    {
      "backdrop_path": "/m1rvaIIrDGwSYMt5mWG1WiTndmE.jpg",
      "id": 91239,
      "original_name": "Bridgerton",
      "overview": "Los ocho hermanos Bridgerton mientras buscan amor y la felicidad en la alta sociedad londinense.",
      "poster_path": "/wR7f51NSYoIWJFnkdEG1pzIRI2Y.jpg",
      "media_type": "tv",
      "adult": false,
      "name": "Los Bridgerton",
      "original_language": "en",
      "genre_ids": [
        18
      ],
      "popularity": 2176.608,
      "first_air_date": "2020-12-25",
      "vote_average": 8.122,
      "vote_count": 2390,
      "origin_country": [
        "US"
      ]
    },
    {
      "backdrop_path": "/5BvjF6KH25BKSQcNYDdzVhtnPzJ.jpg",
      "id": 156484,
      "original_name": "The 8 Show",
      "overview": "Ocho personas encerradas en un misterioso edificio de ocho plantas participan en un tentador pero peligroso concurso en el que van ganando dinero a medida que pasa el tiempo.",
      "poster_path": "/Ae2iYVC5hEmrTQXpcwzIMpmShIk.jpg",
      "media_type": "tv",
      "adult": false,
      "name": "The 8 Show",
      "original_language": "ko",
      "genre_ids": [
        18,
        9648
      ],
      "popularity": 645.981,
      "first_air_date": "2024-05-17",
      "vote_average": 7.182,
      "vote_count": 33,
      "origin_country": [
        "KR"
      ]
    },
    {
      "backdrop_path": "/vWzJDjLPmycnQ42IppEjMpIhrhc.jpg",
      "id": 748783,
      "original_title": "The Garfield Movie",
      "overview": "El mundialmente famoso Garfield, el gato casero que odia los lunes y que adora la lasaña, está a punto de vivir una aventura ¡en el salvaje mundo exterior! Tras una inesperada reunión con su largamente perdido padre – el desaliñado gato callejero Vic – Garfield y su amigo canino Odie se ven forzados a abandonar sus perfectas y consentidas vidas al unirse a Vic en un hilarante y muy arriesgado atraco.",
      "poster_path": "/jUSzf612WVRrCRJmMAxXjb7yi9r.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Garfield: La película",
      "original_language": "en",
      "genre_ids": [
        16,
        35,
        10751
      ],
      "popularity": 636.606,
      "release_date": "2024-04-30",
      "video": false,
      "vote_average": 6.573,
      "vote_count": 89
    },
    {
      "backdrop_path": "/2rmK7mnchw9Xr3XdiTFSxTTLXqv.jpg",
      "id": 37854,
      "original_name": "ワンピース",
      "overview": "Riqueza, fama, poder... un hombre había obtenido todo en este mundo, era el Rey de los Piratas Gold Roger. Antes de morir sus últimas palabras inspiraron al mundo a aventurarse al mar: \"¿Mi tesoro? Si lo queréis es vuestro... lo he escondido todo en ese lugar\". Y así dio comienzo lo que se conoce como la Gran Era de la Piratería, lanzando a cientos de piratas al mar para encontrar el gran tesoro One Piece. Esta serie relata las aventuras y desventuras de uno de esos piratas, Monkey D. Luffy, quien accidentalmente de pequeño, comió una Fruta del Diablo (Akuma no Mi en japonés), en particular una Gomu Gomu no Mi que hizo que su cuerpo ganara las propiedades físicas de la goma, convirtiéndose en el hombre de goma. Luffy, después de dicho suceso, decide que se convertirá en el próximo Rey de los Piratas y para ello, deberá encontrar el \"One Piece\".",
      "poster_path": "/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg",
      "media_type": "tv",
      "adult": false,
      "name": "One Piece",
      "original_language": "ja",
      "genre_ids": [
        10759,
        35,
        16
      ],
      "popularity": 149.054,
      "first_air_date": "1999-10-20",
      "vote_average": 8.728,
      "vote_count": 4450,
      "origin_country": [
        "JP"
      ]
    },
    {
      "backdrop_path": "/iDnTAeR2WNA62XQG0ivtteDSjd5.jpg",
      "id": 138502,
      "original_name": "X-Men '97",
      "overview": "X-Men '97 vuelve a la icónica época de los años 90, donde los X-Men, un grupo de mutantes que utilizan sus asombrosos poderes para proteger a un mundo que los odia y los teme, se enfrentarán a su mayor desafío y a un nuevo, insospechado y peligroso futuro.",
      "poster_path": "/oudLzoZ9vqcH7BQAOAeHeC7bcjT.jpg",
      "media_type": "tv",
      "adult": false,
      "name": "X-Men '97",
      "original_language": "en",
      "genre_ids": [
        16,
        10759,
        10765
      ],
      "popularity": 679.231,
      "first_air_date": "2024-03-20",
      "vote_average": 8.8,
      "vote_count": 296,
      "origin_country": [
        "US"
      ]
    },
    "backdrop_path": "/5zmiBoMzeeVdQ62no55JOJMY498.jpg",
      "id": 126308,
      "original_name": "Shōgun",
      "overview": "Ambientada en el Japón de 1600, lord Yoshii Toranaga lucha por su vida mientras que sus enemigos en el Consejo de regentes se alían contra él cuando un misterioso barco europeo aparece abandonado cerca de un pueblo pesquero.",
      "poster_path": "/uIoDvVOQaKjSfz2oihkVS8M7l1v.jpg",
      "media_type": "tv",
      "adult": false,
      "name": "Shogun",
      "original_language": "en",
      "genre_ids": [
        18,
        10768
      ],
      "popularity": 702.616,
      "first_air_date": "2024-02-27",
      "vote_average": 8.56,
      "vote_count": 757,
      "origin_country": [
        "US"
      ]
    },
    {
      "backdrop_path": "/3GQKYh6Trm8pxd2AypovoYQf4Ay.jpg",
      "id": 85937,
      "original_name": "鬼滅の刃",
      "overview": "Tanjiro Kamado vive feliz con su madre y hermanos pequeños en la montaña, subsistiendo humildemente. Una mañana, al regresar a casa, se encuentra a toda su familia asesinada y a su hermana Nezuko convertida en demonio. Tanjiro buscará desesperadamente la manera de devolverla a su condición humana y de cobrarse venganza. Para ello, se someterá a un arduo entrenamiento, con el objetivo de ingresar en el Cuerpo de Matademonios y dar caza al demonio Muzan Kibutsuji, con la ayuda de Nezuko, que se resiste a perder del todo su humanidad. Juntos forman la nueva hornada de los guardianes de la noche.",
      "poster_path": "/tK4GsDa6BREEh6Hfng1tWPuq8oE.jpg",
      "media_type": "tv",
      "adult": false,
      "name": "Kimetsu no Yaiba: Guardianes de la Noche",
      "original_language": "ja",
      "genre_ids": [
        16,
        10759,
        10765
      ],
      "popularity": 179.314,
      "first_air_date": "2019-04-06",
      "vote_average": 8.674,
      "vote_count": 6042,
      "origin_country": [
        "JP"
      ]
    },
    {
      "backdrop_path": "/H5HjE7Xb9N09rbWn1zBfxgI8uz.jpg",
      "id": 746036,
      "original_title": "The Fall Guy",
      "overview": "Es un doble de acción, y al igual que todos en la comunidad de especialistas, sale volando, le disparan, se estrella, se tira desde ventanas y cae desde las alturas más extremas, todo para nuestro entretenimiento. Y ahora, tras un accidente que casi acaba con su carrera, este héroe de clase trabajadora debe seguir la pista de una estrella de cine desaparecida, resolver una conspiración y tratar de recuperar el amor de su vida mientras sigue haciendo su trabajo. ¿Qué podría salir bien?",
      "poster_path": "/ceiGl0SNZpR01o5lfYImt2QgKuq.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "El especialista",
      "original_language": "en",
      "genre_ids": [
        28,
        35
      ],
      "popularity": 652.032,
      "release_date": "2024-04-24",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 577
    },
    {
      "backdrop_path": "/lzWHmYdfeFiMIY4JaMmtR7GEli3.jpg",
      "id": 438631,
      "original_title": "Dune",
      "overview": "En un lejano futuro, la galaxia conocida es gobernada mediante un sistema feudal de casas nobles bajo el mandato del Emperador. Las alianzas y la política giran entorno a un pequeño planeta, Dune,  del que extrae la \"especia melange\", la materia prima que permite los viajes espaciales. La Casa Atreides, bajo el mandato del Duque Leto Atreides recibe el encargo de custodiar el planeta, relevando en la encomienda a sus históricos enemigos, los Harkonnen. Paul Atreides, hijo del duque, se verá atrapado en las intrigas políticas mientras descubre el destino que le deparan los desiertos de Dune.",
      "poster_path": "/hIEKzq0klqtz1H3S7QxzH4mMbvT.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Dune",
      "original_language": "en",
      "genre_ids": [
        878,
        12
      ],
      "popularity": 530.613,
      "release_date": "2021-09-15",
      "video": false,
      "vote_average": 7.779,
      "vote_count": 11680
    },
    {
      "backdrop_path": "/hzr7GhCoWTeQQMKDR6LXhN8x9fs.jpg",
      "id": 533535,
      "original_title": "Deadpool & Wolverine",
      "overview": "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
      "poster_path": "/7yyIRfTDarY11Xv4zZX9UrddRuG.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Deadpool y Lobezno",
      "original_language": "en",
      "genre_ids": [
        35,
        878,
        28
      ],
      "popularity": 293.611,
      "release_date": "2024-07-24",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "backdrop_path": "/lA6KdSkCTxwzvqzPqxch997RabQ.jpg",
      "id": 560016,
      "original_title": "Monkey Man",
      "overview": "Kid (Dev Patel) es un delincuente que acaba de salir de prisión y vive en la India, intentando adaptarse a un mundo marcado por la avaricia y carente de valores espirituales. Allí luchará por buscar venganza por la muerte de su madre y defender a las clases más desfavorecidas.",
      "poster_path": "/kJhQfICVsZGeYGGRudgcqiD1zQY.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Monkey Man",
      "original_language": "en",
      "genre_ids": [
        28,
        53
      ],
      "popularity": 200.513,
      "release_date": "2024-04-03",
      "video": false,
      "vote_average": 7.2,
      "vote_count": 413
    },
    {
      "backdrop_path": "/6Xfj8wD7GoEysgcFayRKd6QLqai.jpg",
      "id": 843527,
      "original_title": "The Idea of You",
      "overview": "Solène, madre soltera de 40 años, comienza un romance inesperado con Hayes Campbell, de 24 años, el cantante principal de August Moon, la banda de chicos más popular del planeta.",
      "poster_path": "/heci4aAOBfN5I2BQ1QpVFE2o5qi.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "La idea de tenerte",
      "original_language": "en",
      "genre_ids": [
        10749,
        35,
        18
      ],
      "popularity": 490.682,
      "release_date": "2024-05-02",
      "video": false,
      "vote_average": 7.458,
      "vote_count": 824
    },
    {
      "backdrop_path": "/kYgQzzjNis5jJalYtIHgrom0gOx.jpg",
      "id": 1011985,
      "original_title": "Kung Fu Panda 4",
      "overview": "Po se prepara para ser el líder espiritual del Valle de la Paz, buscando un sucesor como Guerrero Dragón. Mientras entrena a un nuevo practicante de kung fu, enfrenta al villano llamado \"el Camaleón\", que evoca villanos del pasado, desafiando todo lo que Po y sus amigos han aprendido.",
      "poster_path": "/zS8BSQdbOesql0EWbs17kPvLoAT.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Kung Fu Panda 4",
      "original_language": "en",
      "genre_ids": [
        16,
        28,
        10751,
        35,
        14
      ],
      "popularity": 781.236,
      "release_date": "2024-03-02",
      "video": false,
      "vote_average": 7.13,
      "vote_count": 1723
    },
    {
      "backdrop_path": "/qwK9soQmmJ7kRdjLZVXblw3g7AQ.jpg",
      "id": 7451,
      "original_title": "xXx",
      "overview": "Xander Cage es XXX, un antiguo ganador de X-Games y atleta profesional de deportes de extremo, que sobrevive vendiendo videos de sus increíbles hazañas, las cuales hacen emitir adrenalina por todo el cuerpo. Pero después de incontables encuentros con la ley, su mundo está a punto de tomar un rumbo aún más extremo... Porque Xander no sabe que ha sido \"espiado\" por Augustus Gibbons, un agente veterano de la Agencia Nacional de Seguridad que se encuentra en una desesperada situación en la distante ciudad de Praga, en donde su operativo secreto ha sido asesinado por una pandilla de mafiosos con un estilo muy propio, que se llaman así mismos Anarchy 99, encabezados por el brutal ex-Comandante del Ejército Ruso Yorgi.",
      "poster_path": "/ewGhwS8dbAfFDJBEpbsWOuwS4Ov.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "xXx",
      "original_language": "en",
      "genre_ids": [
        28,
        12,
        53,
        80
      ],
      "popularity": 370.735,
      "release_date": "2002-08-09",
      "video": false,
      "vote_average": 5.9,
      "vote_count": 4063
    },
    {
      "backdrop_path": "/rSRA1p4e3laAAJflzdgtqNlx27Y.jpg",
      "id": 1049574,
      "original_title": "Darkness of Man",
      "overview": "Russell Hatch, an Interpol operative who takes on the role of father figure to Jayden, the son of an informant killed in a routine raid gone wrong. Years later, Hatch finds himself protecting Jayden and his grandfather from a group of merciless gangs in an all-out turf war, stopping at nothing to protect Jayden and fight anyone getting in his way.",
      "poster_path": "/nFBjI5qFkqfvEvEx6VaylKGSOqp.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Darkness of Man",
      "original_language": "en",
      "genre_ids": [
        28,
        53
      ],
      "popularity": 149.764,
      "release_date": "2024-05-07",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 47
    },
    {
      "backdrop_path": "/wI4aGtreUx7vFtZGcyiFoOX3qf3.jpg",
      "id": 113985,
      "original_name": "Outer Range",
      "overview": "Un ranchero que lucha por su tierra y su familia se topa con un misterio insondable al borde del desierto de Wyoming, lo que lo obliga a enfrentarse con lo Desconocido de manera íntima y cósmica en el indómito oeste americano.",
      "poster_path": "/jPYvsVSKnguG1ebIlW8MBNjgKCh.jpg",
      "media_type": "tv",
      "adult": false,
      "name": "Tierras de nadie",
      "original_language": "en",
      "genre_ids": [
        37,
        9648,
        18
      ],
      "popularity": 495.172,
      "first_air_date": "2022-04-14",
      "vote_average": 7.019,
      "vote_count": 238,
      "origin_country": [
        "US"
      ]
    },
    {
      "backdrop_path": "/ipNCnwKaRqyddXRukTslsl3hiop.jpg",
      "id": 203744,
      "original_name": "Sugar",
      "overview": "Un enigmático detective privado lucha contra sus demonios personales mientras investiga la desaparición de la querida nieta de un productor de Hollywood.",
      "poster_path": "/dNrk52Rt13MxwahLneTZJezM6qD.jpg",
      "media_type": "tv",
      "adult": false,
      "name": "Sugar",
      "original_language": "en",
      "genre_ids": [
        18,
        9648
      ],
      "popularity": 166.461,
      "first_air_date": "2024-04-04",
      "vote_average": 7.429,
      "vote_count": 70,
      "origin_country": [
        "US"
      ]
    },
    {
      "backdrop_path": "/1LOT0yesrW1l98qYzMbzx6vCRbi.jpg",
      "id": 882059,
      "original_title": "Boy Kills World",
      "overview": "Boy (Bill Skarsgård) es un joven que deberá enfrentarse a la desquiciada matriarca de una corrupta dinastía postapocalíptica que lo dejó huérfano, sordo y sin voz. Tras vivir una trágica infancia, un enigmático chamán (Yayan Ruhian) le convertirá en un instrumento de venganza y lo soltará en su lejana distopía en vísperas de la matanza anual de disidentes. Intentando encontrar su lugar, Boy se unirá a un grupo de resistencia a la vez que mantendrá intensas discusiones con el fantasma de su rebelde hermana pequeña.",
      "poster_path": "/2TIz7cpjEOWO51PjF6twWJFJnLw.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Boy Kills World",
      "original_language": "en",
      "genre_ids": [
        28,
        53,
        80
      ],
      "popularity": 147.969,
      "release_date": "2024-04-24",
      "video": false,
      "vote_average": 6.968,
      "vote_count": 62
    },
    {
      "backdrop_path": "/2ak94bJfXxHR5vBxwrpkycwOKv3.jpg",
      "id": 758679,
      "original_title": "Mothers' Instinct",
      "overview": "Alice y Celine viven un estilo de vida tradicional con esposos exitosos e hijos de la misma edad. La perfecta armonía de sus vidas se rompe repentinamente después de un trágico accidente. La culpa, la sospecha y la paranoia se combinan para deshacer su vínculo fraternal.",
      "poster_path": "/6W3LWbOZTbmv0SKe4OizWR0rEtW.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Vidas perfectas",
      "original_language": "en",
      "genre_ids": [
        18,
        53
      ],
      "popularity": 287.256,
      "release_date": "2024-01-11",
      "video": false,
      "vote_average": 6.988,
      "vote_count": 40
    },
    {
      "backdrop_path": "/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
      "id": 866398,
      "original_title": "The Beekeeper",
      "overview": "La brutal campaña de venganza de Adam Clay adquiere tintes nacionales tras revelarse que es un antiguo agente de una poderosa organización clandestina conocida como \"Beekeeper\".",
      "poster_path": "/gBdhYoROX6SHE3vVnBfEHI7Ojma.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Beekeeper: El protector",
      "original_language": "en",
      "genre_ids": [
        28,
        53,
        18
      ],
      "popularity": 257.966,
      "release_date": "2024-01-08",
      "video": false,
      "vote_average": 7.411,
      "vote_count": 2391
    },
    {
      "backdrop_path": "/vTlK3chwsEToSoQJYUcJaHlNhIf.jpg",
      "id": 618588,
      "original_title": "Arthur the King",
      "overview": "Mikael Lindnord, el capitán del equipo sueco de atletismo de aventura, tuvo un extraño encuentro durante la carrera de 400 millas en la jungla ecuatoriana, cuando en su camino se cruzó un perro callejero. Tras el momento en el que Lindnord le alimentó, el perro le siguió por el resto del recorrido, haciendo incluso los tramos más complicados del planeta. Tras finalizar la carrera, Lindnord decidió adoptar al perro, llamarlo Arthur y llevarlo con él a Suecia.",
      "poster_path": "/q1DDwFuWeQlwR0lcjFiEsM8iRkd.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Arthur",
      "original_language": "en",
      "genre_ids": [
        12,
        18
      ],
      "popularity": 285.62,
      "release_date": "2024-03-15",
      "video": false,
      "vote_average": 7.383,
      "vote_count": 167
    },
    {
      "backdrop_path": "/gqrnQA6Xppdl8vIb2eJc58VC1tW.jpg",
      "id": 76341,
      "original_title": "Mad Max: Fury Road",
      "overview": "Perseguido por su turbulento pasado, Mad Max cree que la mejor forma de sobrevivir es ir solo por el mundo. Sin embargo, se ve arrastrado a formar parte de un grupo que huye a través del desierto en un War Rig conducido por una Emperatriz de élite: Furiosa. Escapan de una Ciudadela tiranizada por Immortan Joe, a quien han arrebatado algo irreemplazable. Enfurecido, el Señor de la Guerra moviliza a todas sus bandas y persigue implacablemente a los rebeldes en una 'guerra de la carretera' de altas revoluciones.",
      "poster_path": "/mnVZLdo9C4X80sJmgcGNpMNCbgk.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Mad Max: Furia en la carretera",
      "original_language": "en",
      "genre_ids": [
        28,
        12,
        878
      ],
      "popularity": 437.123,
      "release_date": "2015-05-13",
      "video": false,
      "vote_average": 7.6,
      "vote_count": 21722
    },
    {
      "backdrop_path": "/8U42J8z7ZqnrzfljJTDul9JfDNH.jpg",
      "id": 71728,
      "original_name": "Young Sheldon",
      "overview": "En esta serie derivada de 'Big Bang', Sheldon Cooper tiene 9 años y se salta cuatro cursos para entrar directamente a la secundaria junto con su hermano mayor, menos listo que él. La vida en ella no será fácil, ya que sus compañeros, sus padres, su hermana melliza, su abuela y sus vecinos no entienden a Sheldon.",
      "poster_path": "/Jxl5Z1JBWnd2JWJUgYsm8FIzG4.jpg",
      "media_type": "tv",
      "adult": false,
      "name": "El joven Sheldon",
      "original_language": "en",
      "genre_ids": [
        35,
        10751
      ],
      "popularity": 1033,
      "first_air_date": "2017-09-25",
      "vote_average": 8.056,
      "vote_count": 2352,
      "origin_country": [
        "US"
      ]
    },
    {
      "backdrop_path": "/zZqpAXxVSBtxV9qPBcscfXBcL2w.jpg",
      "id": 1399,
      "original_name": "Game of Thrones",
      "overview": "En una tierra donde los veranos duran décadas y los inviernos pueden durar toda una vida, los problemas acechan. Desde las maquinaciones del sur a las salvajes tierras del este, pasando por el helado norte y el milenario muro que protege el reino de las fuerzas tenebrosas, dos poderosas familias mantienen un enfrentamiento letal por gobernar los Siete Reinos de Poniente. Mientras la traición, la lujuria y las fuerzas sobrenaturales sacuden los pilares de los reinos, la sangrienta batalla por el trono de Hierro tendrá consecuencias imprevistas y trascendentales. El invierno se acerca. Que empiece 'Juego de tronos'.",
      "poster_path": "/z9gCSwIObDOD2BEtmUwfasar3xs.jpg",
      "media_type": "tv",
      "adult": false,
      "name": "Juego de tronos",
      "original_language": "en",
      "genre_ids": [
        10765,
        18,
        10759
      ],
      "popularity": 862.467,
      "first_air_date": "2011-04-17",
      "vote_average": 8.449,
      "vote_count": 23158,
      "origin_country": [
        "US"
      ]
    },
    {
      "backdrop_path": "/bSlYHSM9m2OuzPX73xU2KWWY1yk.jpg",
      "id": 67198,
      "original_name": "Star Trek: Discovery",
      "overview": "La emblemática saga vuelve con una serie fresca, con nuevos personajes y una nueva nave. Su misión: explorar nuevos mundos y dar esperanzas a las futuras generaciones.",
      "poster_path": "/pDLjbZp93qaMhruz52sH0GsfcVr.jpg",
      "media_type": "tv",
      "adult": false,
      "name": "Star Trek: Discovery",
      "original_language": "en",
      "genre_ids": [
        10765,
        10759,
        18
      ],
      "popularity": 1048.312,
      "first_air_date": "2017-09-24",
      "vote_average": 7.118,
      "vote_count": 1682,
      "origin_country": [
        "US"
      ]
    }
*/

--now we will create the inserts with the json

INSERT INTO Media (backdrop_path, original_title, overview, poster_path, media_type, adult, title, original_language, genre_ids, popularity, release_date, video, vote_average, vote_count, first_air_date, origin_country)
VALUES 
('/sR0SpCrXamlIkYMdfz83sFn5JS6.jpg', 'Godzilla x Kong: The New Empire', 'Una aventura cinematográfica completamente nueva, que enfrentará al todopoderoso Kong y al temible Godzilla contra una colosal amenaza desconocida escondida dentro de nuestro mundo. La nueva y épica película profundizará en las historias de estos titanes, sus orígenes y los misterios de Isla Calavera y más allá, mientras descubre la batalla mítica que ayudó a forjar a estos seres extraordinarios y los unió a la humanidad para siempre.', '/2YqZ6IyFk7menirwziJvfoVvSOh.jpg', 'movie', FALSE, 'Godzilla y Kong: El nuevo imperio', 'en', ARRAY[878,28,12], 4500.758, '2024-03-27', FALSE, 7.256, 2031, NULL, NULL),
('/u1CqlLecfpcuOaugKi3ol9gDQHJ.jpg', 'Joy Of Life', 'Zhang Qing, un estudiante universitario actual de la carrera de cultura e historia, quiere estudiar en la clase de postgrado del profesor Ye, por lo que decide escribir una ficción histórica para elaborar su perspectiva de análisis de la historia de la literatura antigua con un concepto moderno. En la ficción, el propio Zhang interpreta a un joven Fan Xian de vida misteriosa que vive en una remota ciudad costera del Reino Qing en su infancia, con la ayuda de un misterioso mentor y un vigilante con los ojos vendados. Fan va a la capital cuando crece, donde experimenta muchas pruebas y mal genio. Fan persiste en adherirse a la regla de la justicia y la bondad y vive su propia vida gloriosa.', '/vlHJfLsduZiILN8eYdN57kHZTcQ.jpg', 'tv', FALSE, 'Joy Of Life', 'zh', ARRAY[18], 1858.635, NULL, 7.9, 62, '2019-11-26', ARRAY['CN']),
('/kNtJFgZPfIBtaRpKcVChL8ULIrS.jpg', 'Doctor Who', 'El Doctor y su compañera Ruby Sunday viajan a través del tiempo y el espacio, viviendo aventuras desde la época de la Regencia en Inglaterra hasta mundos futuros asolados por la guerra. A través de sus aventuras en la Tardis... una nave que viaja por el tiempo con forma de cabina telefónica de la policía, encuentran amigos increíbles y peligrosos enemigos, incluido un aterrador coco y el enemigo más poderoso del Doctor hasta la fecha.', '/5ed6T2KGtuIkn1eHOvjQRchU75b.jpg', 'tv', FALSE, 'Doctor Who', 'en', ARRAY[10759,18,10765], 334.109, '2024-05-11', FALSE, 6.123, 57, NULL, ARRAY['GB']),
('/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg', 'Dune: Part Two', 'Sigue el viaje mítico de Paul Atreides mientras se une a Chani y los Fremen en una guerra de venganza contra los conspiradores que destruyeron a su familia. Al enfrentarse a una elección entre el amor de su vida y el destino del universo conocido, Paul se esfuerza por evitar un futuro terrible que solo él puede prever.', '/6o5cJjA4srfvU52UKWaqPUuPPgl.jpg', 'movie', FALSE, 'Dune: Parte dos', 'en', ARRAY[878,12], 1025.112, '2024-02-27', FALSE, 8.183, 4051, NULL, NULL),
('/fqv8v6AycXKsivp1T5yKtLbGXce.jpg', 'Kingdom of the Planet of the Apes', 'Ambientada varias generaciones en el futuro tras el reinado de César, en la que los simios son la especie dominante que vive en armonía y los humanos se han visto reducidos a vivir en la sombra. Mientras un nuevo y tiránico líder simio construye su imperio, un joven simio emprende un angustioso viaje que le llevará a cuestionarse todo lo que sabe sobre el pasado y a tomar decisiones que definirán el futuro de simios y humanos por igual.', '/kkFn3KM47Qq4Wjhd8GuFfe3LX27.jpg', 'movie', FALSE, 'El reino del planeta de los simios', 'en', ARRAY[878,12,28], 1539.548, '2024-05-08', FALSE, 7.147, 534, NULL, NULL),
('/lRfGmlfKslfuHYDiShqfMF9o9Hh.jpg', 'Rivales', 'Casada con un campeón con una mala racha de derrotas, la estrategia de Tashi para la redención de su marido da un giro sorprendente cuando éste debe enfrentarse a Patrick - su antiguo mejor amigo y ex novio de Tashi. A medida que sus pasados y presentes chocan, y las tensiones se disparan, Tashi debe preguntarse a sí misma cuánto le costará ganar.', '/lRfGmlfKslfuHYDiShqfMF9o9Hh.jpg', 'movie', FALSE, 'Rivales', 'en', ARRAY[10749,18], 544.946, '2024-04-18', FALSE, 7.303, 684, NULL, NULL),
('/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg', 'One Piece', 'La historia sigue a Monkey D. Luffy, un joven cuyo cuerpo adquiere las propiedades de la goma después de haber comido una fruta del diablo, y a su tripulación de piratas, los Piratas del Sombrero de Paja. Luffy explora el Grand Line en busca del tesoro más grande del mundo, el One Piece, para convertirse en el Rey de los Piratas.', '/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg', 'tv', FALSE, 'One Piece', 'ja', ARRAY[10759,35,16], 149.054, '1999-10-20', FALSE, 8.728, 4450, NULL, ARRAY['JP'])
('/s5znBQmprDJJ553IMQfwEVlfroH.jpg', 'The Matrix Resurrections', 'The Matrix Resurrections is an upcoming American science fiction action film produced, co-written, and directed by Lana Wachowski. It is the fourth installment in The Matrix film series, and serves as a direct sequel to The Matrix Revolutions (2003). The film stars Keanu Reeves, Carrie-Anne Moss, Jada Pinkett Smith, Lambert Wilson, and Daniel Bernhardt, all reprising their roles from previous films in the series. Yahya Abdul-Mateen II, Jessica Henwick, Jonathan Groff, Neil Patrick Harris, Priyanka Chopra Jonas, and Christina Ricci will also appear in supporting roles.', '/5fWxvjOUvtUoSmiMEpFl77V6KZV.jpg', 'movie', FALSE, 'The Matrix Resurrections', 'en', ARRAY[878,28], 4500.758, '2021-12-22', FALSE, 7.5, 509, NULL, NULL),
('/vcFW09U4834DyFOeRZpsx9x1D3S.jpg', 'The Witcher: Blood Origin', 'The Witcher: Blood Origin is an upcoming fantasy drama limited series created by Declan de Barra and Lauren Schmidt Hissrich for Netflix. It is a prequel to the television series The Witcher. The series will be set in an elven world 1200 years before the world of The Witcher and will tell the story of the creation of the first prototype Witcher, as well as the events that lead to the pivotal "Conjunction of the Spheres".', '/vcFW09U4834DyFOeRZpsx9x1D3S.jpg', 'tv', FALSE, 'The Witcher: Blood Origin', 'en', ARRAY[18,14,10765], 1858.635, NULL, FALSE, 8.2, 534, NULL, ARRAY['US']),
('/4CcUgdiGe83MeqJW1NyJVmZqRrF.jpg', 'Spider-Man: No Way Home', 'Spider-Man: No Way Home is an upcoming American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing. It is intended to be the sequel to Spider-Man: Homecoming (2017) and Spider-Man: Far From Home (2019), and the 27th film in the Marvel Cinematic Universe (MCU). The film is directed by Jon Watts, written by Chris McKenna and Erik Sommers, and stars Tom Holland as Peter Parker / Spider-Man, alongside Zendaya, Jacob Batalon, Marisa Tomei, Jamie Foxx, Alfred Molina, Benedict Cumberbatch, and Willem Dafoe.', '/4CcUgdiGe83MeqJW1NyJVmZqRrF.jpg', 'movie', FALSE, 'Spider-Man: No Way Home', 'en', ARRAY[28,12,878], 1539.548, '2021-12-17', FALSE, 8.9, 684, NULL, NULL),
('/wODqakS0jinTUECNS6n4VomQbew.jpg', 'The Flash', 'The Flash is an upcoming American superhero film based on the DC Comics character of the same name. The film is directed by Andy Muschietti from a screenplay by Christina Hodson, and stars Ezra Miller as Barry Allen / The Flash, alongside Ben Affleck, Michael Keaton, Sasha Calle, Kiersey Clemons, Maribel Verdú, and Ron Livingston. It is set in the DC Extended Universe (DCEU), and is a standalone sequel to Justice League (2017). The film follows Barry Allen as he travels back in time to prevent the murder of his mother, which sets off a chain of events that result in the creation of an alternate timeline known as the Flashpoint.', '/wODqakS0jinTUECNS6n4VomQbew.jpg', 'movie', FALSE, 'The Flash', 'en', ARRAY[28,12,14], 544.946, '2022-11-03', FALSE, 7.8, 824, NULL, NULL),
('/q8IEFmEGGSGmAWfwRs23XDwdFN4.jpg', 'Avatar 2', 'Avatar 2 is an upcoming American science fiction film directed by James Cameron and produced by 20th Century Studios. It is the second film in the Avatar franchise, following Avatar (2009). The film stars Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang, Giovanni Ribisi, and Kate Winslet, all reprising their roles from the first film. The film is set in the mid-22nd century, several years after the events of the first film, and follows Jake Sully as he explores the oceans of the moon Pandora and encounters new threats and challenges.', '/q8IEFmEGGSGmAWfwRs23XDwdFN4.jpg', 'movie', FALSE, 'Avatar 2', 'en', ARRAY[12,14,878], 149.054, '2022-12-15', FALSE, 8.5, 92, NULL, NULL),
('/fY3lD0jM5AoHJMunjGWqJ0hRteI.jpg', 'Black Panther: Wakanda Forever', 'Black Panther: Wakanda Forever is an upcoming American superhero film based on the Marvel Comics character Black Panther. The film is directed by Ryan Coogler from a screenplay he co-wrote with Joe Robert Cole, and stars Danai Gurira, Letitia Wright, Winston Duke, Lupita Nyong\'o, Angela Bassett, and Martin Freeman, all reprising their roles from the first film. The film is set in the Marvel Cinematic Universe (MCU), and is a sequel to Black Panther (2018). The film follows the events of Black Panther and explores the future of Wakanda following the death of T\'Challa.', '/fY3lD0jM5AoHJMunjGWqJ0hRteI.jpg', 'movie', FALSE, 'Black Panther: Wakanda Forever', 'en', ARRAY[28,12,878], 334.109, '2022-11-10', FALSE, 7.6, 1134, NULL, NULL),
('/5BvjF6KH25BKSQcNYDdzVhtnPzJ.jpg', 'Fantastic Beasts: The Secrets of Dumbledore', 'Fantastic Beasts: The Secrets of Dumbledore is an upcoming fantasy film directed by David Yates and written by J. K. Rowling. It is the third installment in the Fantastic Beasts film series, and is a sequel to Fantastic Beasts: The Crimes of Grindelwald (2018). The film stars Eddie Redmayne as Newt Scamander, alongside Jude Law, Katherine Waterston, Dan Fogler, Alison Sudol, Ezra Miller, Callum Turner, William Nadylam, Poppy Corby-Tuech, Jessica Williams, Victoria Yeates, and Mads Mikkelsen. The film is set in the Wizarding World, and follows Newt Scamander as he teams up with Albus Dumbledore to take down the dark wizard Gellert Grindelwald.', '/5BvjF6KH25BKSQcNYDdzVhtnPzJ.jpg', 'movie', FALSE, 'Fantastic Beasts: The Secrets of Dumbledore', 'en', ARRAY[14,12,28], 544.946, '2022-04-14', FALSE, 7.9, 509, NULL, NULL),
('/ySgY4jBvZ6qchrxKnBg4M8tZp8V.jpg', 'The Mandalorian', 'The Mandalorian is an American space Western television series created by Jon Favreau for Disney+. It is part of the Star Wars franchise, set after the events of Return of the Jedi (1983). The series follows the title character, a lone bounty hunter in the outer reaches of the galaxy far from the authority of the New Republic. The Mandalorian is played by Pedro Pascal, with supporting cast members including Gina Carano, Carl Weathers, and Giancarlo Esposito.', '/ySgY4jBvZ6qchrxKnBg4M8tZp8V.jpg', 'tv', FALSE, 'The Mandalorian', 'en', ARRAY[10759,10765,37], 149.054, '2019-11-12', FALSE, 8.8, 534, NULL, ARRAY['US']),
('/s5znBQmprDJJ553IMQfwEVlfroH.jpg', 'The Matrix Resurrections', 'The Matrix Resurrections is an upcoming American science fiction action film produced, co-written, and directed by Lana Wachowski. It is the fourth installment in The Matrix film series, and serves as a direct sequel to The Matrix Revolutions (2003). The film stars Keanu Reeves, Carrie-Anne Moss, Jada Pinkett Smith, Lambert Wilson, and Daniel Bernhardt, all reprising their roles from previous films in the series. Yahya Abdul-Mateen II, Jessica Henwick, Jonathan Groff, Neil Patrick Harris, Priyanka Chopra Jonas, and Christina Ricci will also appear in supporting roles.', '/5fWxvjOUvtUoSmiMEpFl77V6KZV.jpg', 'movie', FALSE, 'The Matrix Resurrections', 'en', ARRAY[878,28], 4500.758, '2021-12-22', FALSE, 7.5, 509, NULL, NULL),
('/vcFW09U4834DyFOeRZpsx9x1D3S.jpg', 'The Witcher: Blood Origin', 'The Witcher: Blood Origin is an upcoming fantasy drama limited series created by Declan de Barra and Lauren Schmidt Hissrich for Netflix. It is a prequel to the television series The Witcher. The series will be set in an elven world 1200 years before the world of The Witcher and will tell the story of the creation of the first prototype Witcher, as well as the events that lead to the pivotal "Conjunction of the Spheres".', '/vcFW09U4834DyFOeRZpsx9x1D3S.jpg', 'tv', FALSE, 'The Witcher: Blood Origin', 'en', ARRAY[18,14,10765], 1858.635, NULL, FALSE, 8.2, 534, NULL, ARRAY['US']),
('/4CcUgdiGe83MeqJW1NyJVmZqRrF.jpg', 'Spider-Man: No Way Home', 'Spider-Man: No Way Home is an upcoming American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing. It is intended to be the sequel to Spider-Man: Homecoming (2017) and Spider-Man: Far From Home (2019), and the 27th film in the Marvel Cinematic Universe (MCU). The film is directed by Jon Watts, written by Chris McKenna and Erik Sommers, and stars Tom Holland as Peter Parker / Spider-Man, alongside Zendaya, Jacob Batalon, Marisa Tomei, Jamie Foxx, Alfred Molina, Benedict Cumberbatch, and Willem Dafoe.', '/4CcUgdiGe83MeqJW1NyJVmZqRrF.jpg', 'movie', FALSE, 'Spider-Man: No Way Home', 'en', ARRAY[28,12,878], 1539.548, '2021-12-17', FALSE, 8.9, 684, NULL, NULL),
('/wODqakS0jinTUECNS6n4VomQbew.jpg', 'The Flash', 'The Flash is an upcoming American superhero film based on the DC Comics character of the same name. The film is directed by Andy Muschietti from a screenplay by Christina Hodson, and stars Ezra Miller as Barry Allen / The Flash, alongside Ben Affleck, Michael Keaton, Sasha Calle, Kiersey Clemons, Maribel Verdú, and Ron Livingston. It is set in the DC Extended Universe (DCEU), and is a standalone sequel to Justice League (2017). The film follows Barry Allen as he travels back in time to prevent the murder of his mother, which sets off a chain of events that result in the creation of an alternate timeline known as the Flashpoint.', '/wODqakS0jinTUECNS6n4VomQbew.jpg', 'movie', FALSE, 'The Flash', 'en', ARRAY[28,12,14], 544.946, '2022-11-03', FALSE, 7.8, 824, NULL, NULL),
('/q8IEFmEGGSGmAWfwRs23XDwdFN4.jpg', 'Avatar 2', 'Avatar 2 is an upcoming American science fiction film directed by James Cameron and produced by 20th Century Studios. It is the second film in the Avatar franchise, following Avatar (2009). The film stars Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang, Giovanni Ribisi, and Kate Winslet, all reprising their roles from the first film. The film is set in the mid-22nd century, several years after the events of the first film, and follows Jake Sully as he explores the oceans of the moon Pandora and encounters new threats and challenges.', '/q8IEFmEGGSGmAWfwRs23XDwdFN4.jpg', 'movie', FALSE, 'Avatar 2', 'en', ARRAY[12,14,878], 149.054, '2022-12-15', FALSE, 8.5, 92, NULL, NULL),
('/fY3lD0jM5AoHJMunjGWqJ0hRteI.jpg', 'Black Panther: Wakanda Forever', 'Black Panther: Wakanda Forever is an upcoming American superhero film based on the Marvel Comics character Black Panther. The film is directed by Ryan Coogler from a screenplay he co-wrote with Joe Robert Cole, and stars Danai Gurira, Letitia Wright, Winston Duke, Lupita Nyong\'o, Angela Bassett, and Martin Freeman, all reprising their roles from the first film. The film is set in the Marvel Cinematic Universe (MCU), and is a sequel to Black Panther (2018). The film follows the events of Black Panther and explores the future of Wakanda following the death of T\'Challa.', '/fY3lD0jM5AoHJMunjGWqJ0hRteI.jpg', 'movie', FALSE, 'Black Panther: Wakanda Forever', 'en', ARRAY[28,12,878], 334.109, '2022-11-10', FALSE, 7.6, 1134, NULL, NULL),
('/5BvjF6KH25BKSQcNYDdzVhtnPzJ.jpg', 'Fantastic Beasts: The Secrets of Dumbledore', 'Fantastic Beasts: The Secrets of Dumbledore is an upcoming fantasy film directed by David Yates and written by J. K. Rowling. It is the third installment in the Fantastic Beasts film series, and is a sequel to Fantastic Beasts: The Crimes of Grindelwald (2018). The film stars Eddie Redmayne as Newt Scamander, alongside Jude Law, Katherine Waterston, Dan Fogler, Alison Sudol, Ezra Miller, Callum Turner, William Nadylam, Poppy Corby-Tuech, Jessica Williams, Victoria Yeates, and Mads Mikkelsen. The film is set in the Wizarding World, and follows Newt Scamander as he teams up with Albus Dumbledore to take down the dark wizard Gellert Grindelwald.', '/5BvjF6KH25BKSQcNYDdzVhtnPzJ.jpg', 'movie', FALSE, 'Fantastic Beasts: The Secrets of Dumbledore', 'en', ARRAY[14,12,28], 544.946, '2022-04-14', FALSE, 7.9, 509, NULL, NULL),
('/ySgY4jBvZ6qchrxKnBg4M8tZp8V.jpg', 'The Mandalorian', 'The Mandalorian is an American space Western television series created by Jon Favreau for Disney+. It is part of the Star Wars franchise, set after the events of Return of the Jedi (1983). The series follows the title character, a lone bounty hunter in the outer reaches of the galaxy far from the authority of the New Republic. The Mandalorian is played by Pedro Pascal, with supporting cast members including Gina Carano, Carl Weathers, and Giancarlo Esposito.', '/ySgY4jBvZ6qchrxKnBg4M8tZp8V.jpg', 'tv', FALSE, 'The Mandalorian', 'en', ARRAY[10759,10765,37], 149.054, '2019-11-12', FALSE, 8.8, 534, NULL, ARRAY['US'])