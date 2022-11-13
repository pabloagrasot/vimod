import theme from "../theme"

export const exercises = {
    brazos: [
        {
            id:'Bíceps concentrado con mancuernas',
            exName: 'Bíceps concentrado con mancuernas',
            exDescription: 'Sentado con la espalda recta y el cuerpo ligeramente tirado hacia delante, apoyamos el brazo sobre la cara interna de la  pierna del mismo lado. Realizamos una flexión del codo evitando cualquier movimiento o balanceo del tronco.', 
            img: require('../../assets/pesa.png'),
            colors: ['#5FFBF1', '#c9c6FF', theme.colors.blue ],
        },
        {
            id:'Curl de bíceps con barra z',
            exName: 'Curl de bíceps con barra z',
            exDescription: 'Sujetamos la barra Z con las palmas de las manos mirando hacia arriba y de pié con las piernas ligeramente flexionadas y el abdomen bien contraído realizamos una flexión simultánea de ambos brazos. Evita cualquier movimiento o balanceo del tronco.', 
            img: require('../../assets/pesa-grande.png'),
            colors: ['#5FFBF1', '#c9c6FF', theme.colors.blue ],
        },
        {
            id:'Bíceps alterno con mancuernas',
            exName: 'Bíceps alterno con mancuernas',
            exDescription: 'Con la espalda bien recta y los brazos estirados, sujeta las pesas con las palmas de las manos mirando hacia dentro (paralelas a tus piernas). Inicia la flexión con rotación de uno de los brazos hasta el punto en que la pesa se coloque paralela al tronco, llegado a este punto realiza el movimiento en sentido inverso volviendo a la posición inicial.', 
            img: require('../../assets/pesa.png'),
            colors: ['#5FFBF1', '#c9c6FF', theme.colors.blue ],
        },
        {
            id:'Tríceps tras nuca con mancuerna',
            exName: 'Tríceps tras nuca con mancuerna',
            exDescription: 'Con la espalda bien recta, el abdomen contraído y el brazo flexionado sujetamos una pesa y la colocamos detrás de la cabeza. Realizamos una extensión del codo, llevando la pesa hacia el techo. El brazo que ejecuta el movimiento se mantiene en contacto con la cabeza en todo momento, mientras que otro brazo actúa de soporte, sujetándolo para evitar balanceos.', 
            img: require('../../assets/pesa.png'),
            colors: ['#5FFBF1', '#c9c6FF', theme.colors.blue ],
        },
        {
            id:'Tríceps francés en barra',
            exName: 'Tríceps francés en barra',
            exDescription: 'Tumbados decúbito supino con los codos situados a la anchura de los hombros, los brazos extendidos y paralelos al tronco. Realizamos una flexión de los codos, evitando que estos se abran hacia fuera, hasta que la barra llegue  a la altura de la frente.', 
            img: require('../../assets/pesa-grande.png'),
            colors: ['#5FFBF1', '#c9c6FF', theme.colors.blue ],
        }
    ],
    piernas: [{
        id:'piernas',
        exCategory: 'piernas',
        img: require('../../assets/pierna.png'),
        colors: [theme.colors.purple, '#FEBFF8', '#FFBAD8'],
        color: theme.colors.purple,
    }],
    hombros: [{
        id:'hombros',
        exCategory: 'hombros',
        img: require('../../assets/hombro.png'),
        color: theme.colors.rose,
        colors: ['#74A7EE', '#C3B5FA', theme.colors.rose]
    }],
    pecho: [{
        id:'pecho',
        exCategory: 'pecho',
        img: require('../../assets/pecho.png'),
        color: theme.colors.orange,
        colors: [theme.colors.orange, '#D9AAB9', '#AE90A8']
    }],

   }