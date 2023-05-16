
import React, { useState, useEffect, useRef} from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
  Animated
} from "react-native";
import theme from "../theme";
import StyledViewBox from "./StyledViewBox";

interface ExercisesCategoies {
  id: string;
  exName: string;
  exDescription: string;
  img: any;
  colors: any;
}

const styles = StyleSheet.create({

  exerciseFront: {
    flexDirection: "row", 
    alignItems: "center" 
  },

  exerciseBack:{
    width: '100%',
    flexDirection: "row", 
    alignItems:'center',
    justifyContent: 'space-around',
    backgroundColor: theme.colors.trasparentWhite,
    paddingVertical: 10,
  },

  imageContainer: {
    backgroundColor: theme.colors.trasparentWhite,
    borderRadius: theme.borderRadius.borderRadius,
    padding: 13,
    borderWidth: 1.5,
    borderStyle: "solid",
  },

  image: {
    width: 35,
    height: 35,
  },

  bodyTitle: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: "700",
    textAlign: "center",
  },
  bodyDescription: {
    fontSize: theme.fontSizes.body,
  },
  flex1: {
    flex: 1,
  },

  cerrar: {
    position:'absolute',
    top:-10,
    right:0,
  },
  cerrarIcon:{
    fontSize: theme.fontSizes.subheading,
    fontWeight: "700",
  },
  button:{
    margin: 10,
    padding: 10,
    borderRadius:theme.borderRadius.borderRadius,    
  },

  buttonAñadir:{
    backgroundColor: theme.colors.white
  },
  textButton:{
    paddingHorizontal: 47,
  },

  progressBar:{
    height: 10,
    width: '100%',
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 5
  },
  progress:{

  }
});

const ExerciseItem = (props: ExercisesCategoies) => {

 const [exActive, setExActive] = useState(false)
 const [padding, setPadding] = useState(10)
 const [progressBar, setProgressBar] = useState(false)
 
 const [textAñadir, settextAñadir] = useState('Añadir')
 

 const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
 const translateX = useRef(new Animated.ValueXY({ x: 100, y: 0 })).current;

 const animationArray = [
  Animated.spring(translateX.x, {
    toValue: 0,
    speed: 0.5,
    useNativeDriver: true,
  }),
  Animated.timing(fadeAnim,
    {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }
  ),
]

const  exerciseOptions = () => {
  setExActive(!exActive)
  animations()
}


  const infoExercise = () => {
    Alert.alert(
        //title
        props.exName,
        //body
        props.exDescription,
        [
          { text: 'Ok', onPress: () => console.log('Close Alert') }
        ],
        { cancelable: true }
      );
  }

  const addEx = () => {
    setProgressBar(!progressBar)
  }

  const animations = () =>{
    Animated.parallel(animationArray).start();
  }

  const loadProgress = () => {
    console.log('cargando')
};

  useEffect(() => {
    setPadding(exActive == true ? 0 : 10)

    if (exActive == false){
      Animated.parallel(animationArray).reset()
    }

   
    settextAñadir(progressBar === true ? '...' : 'Añadir')
  
  }, [exActive, animationArray, ])

  
  return (
    <StyledViewBox
      key={props.id}
      boxType="Exercisescategory"
      style={{ backgroundColor: props.colors, padding: padding, }}
    >
     { exActive == false &&
     
        <TouchableWithoutFeedback onPress={exerciseOptions}>
            <View style={styles.exerciseFront}>

          <View
            style={[styles.imageContainer, { borderColor: theme.colors.blue }]}
          >
            <Image source={props.img} style={styles.image} />
          </View>

          <View style={styles.flex1}>
            <Text style={styles.bodyTitle}>{props.exName}</Text>
          </View>

          <View>
            <Text>&#10148;</Text>
          </View>

            </View>
      </TouchableWithoutFeedback>}

    { exActive == true &&
        <Animated.View style={{...styles.exerciseBack,  opacity: fadeAnim,  transform: [{ translateX: translateX.x }]}}>
            <TouchableWithoutFeedback onPress={infoExercise}>
                <View style={{...styles.button, backgroundColor: props.colors}}>
                    <Text style={styles.textButton}>Info</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={addEx}>
                <View style={{...styles.button, ...styles.buttonAñadir}}>
                    <Text style={styles.textButton}>{textAñadir}</Text>


                   { progressBar && <View style={{...styles.progressBar,  borderColor: props.colors}}>
                      <Animated.View style={{backgroundColor: props.colors}}/>
                    </View> }


                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={exerciseOptions}>
                <View style={styles.cerrar}><Text style={styles.cerrarIcon}>&#10005;</Text></View>
            </TouchableWithoutFeedback>
        </Animated.View>
    }

</StyledViewBox>
  );
};

export default ExerciseItem;