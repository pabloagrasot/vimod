import theme from "../theme"

export const bodyCAtegory = [
    {
        id:'brazos',
        exCategory: 'brazos',
        img: require('../../assets/brazo.png'),
        colors: ['#5FFBF1', '#c9c6FF', theme.colors.blue ],
        color: theme.colors.blue
    },
    {
        id:'piernas',
        exCategory: 'piernas',
        img: require('../../assets/pierna.png'),
        colors: [theme.colors.purple, '#FEBFF8', '#FFBAD8'],
        color: theme.colors.purple,
    },
    {
        id:'hombros',
        exCategory: 'hombros',
        img: require('../../assets/hombro.png'),
        color: theme.colors.rose,
        colors: ['#74A7EE', '#C3B5FA', theme.colors.rose]
    },
    {
        id:'pecho',
        exCategory: 'pecho',
        img: require('../../assets/pecho.png'),
        color: theme.colors.orange,
        colors: [theme.colors.orange, '#D9AAB9', '#AE90A8']
    }
]