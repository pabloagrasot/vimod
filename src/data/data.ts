import theme from "../theme"

export const bodyCAtegory = [
    {
        id:'brazos',
        exCategory: 'brazos',
        img: require('../../assets/brazo.png'),
        color: 'linear-gradient(328deg, rgba(198,224,255,1) 9%, rgba(147,196,255,1) 49%)'
    },
    {
        id:'piernas',
        exCategory: 'piernas',
        img: require('../../assets/pierna.png'),
        color: 'linear-gradient(328deg, rgba(201,198,255,1) 8%, rgba(153,147,255,1) 58%);'
    },
    {
        id:'hombros',
        exCategory: 'hombros',
        img: require('../../assets/hombro.png'),
        color: theme.colors.rose
    },
    {
        id:'pecho',
        exCategory: 'pecho',
        img: require('../../assets/pecho.png'),
        color: theme.colors.orange
    }
]