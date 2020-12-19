import React,{useState} from 'react'
import {Text,View,Image,TouchableOpacity,StyleSheet,ToastAndroid} from 'react-native'

import DiceOne from './assets/dice1.png'
import DiceTwo from './assets/dice2.png'
import DiceThree from './assets/dice3.png'
import DiceFour from './assets/dice4.png'
import DiceFive from './assets/dice5.png'
import DiceSix from './assets/dice6.png'

const App = () => {

  
  const [image1,setImage1] = useState(DiceOne)
  const [image2,setImage2] = useState(DiceTwo)

  let rollDice = () => {
    
    ToastAndroid.show("Dice rolled!",ToastAndroid.SHORT,ToastAndroid.CENTER);

    let randomNumber = Math.floor(Math.random() * 6)+1;
    let randomNumber2 = Math.floor(Math.random() * 6)+1;
    
    changeImage1(randomNumber);
    changeImage2(randomNumber2);
    
    
  }

  const changeImage1 = (randomNumber) => {
    switch(randomNumber){
      case 1:
        setImage1(DiceOne)
        return;
      case 2:
        setImage1(DiceTwo)
        return;
      case 3:
        setImage1(DiceThree)
        return;
      case 4:
        setImage1(DiceFour)
        return;
      case 5:
        setImage1(DiceFive)
        return;
      case 6:
        setImage1(DiceSix)
        return;
      default:
        setImage1(DiceOne);
        return;
    }
  }
  const changeImage2 = (randomNumber2) => {
    switch(randomNumber2){
      case 1:
        setImage2(DiceOne)
        return;
      case 2:
        setImage2(DiceTwo)
        return;
      case 3:
        setImage2(DiceThree)
        return;
      case 4:
        setImage2(DiceFour)
        return;
      case 5:
        setImage2(DiceFive)
        return;
      case 6:
        setImage2(DiceSix)
        return;
      default:
        setImage2(DiceOne);
        return;
    }
  }

  return(
    <>
    <View style={styles.container}>
      <Image source={image1} style={styles.image}/>
      <Image source={image2} style={styles.image}/>
      <TouchableOpacity onPress={rollDice}>
        <Text style={styles.rollBtn}>Roll Dice</Text>
      </TouchableOpacity>
    </View>
    </>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height:200,
    width: 200
  },
  rollBtn: {
    color: '#FFFFFF',
    fontSize: 25,
    // backgroundColor: '#2CC606',
    width: 200,
    textAlign: 'center',
    borderRadius: 15,
    padding: 10,
    marginTop: 30,
    borderColor: '#2CC606',
    borderWidth: 1
  }
});