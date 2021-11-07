import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import Item from "./components/item"
export default function App() {

  const [text, setText] = useState('');

  const [images, setImages] = useState([
    { text: 'buy coffee',key: '1' }
     /* ,
  { text: 'create an app',key: '2' },
    { text: 'play on the switch', key: '3' },*/
  ]);

  const changeHandler = (val) => {
    setText(val);
  };

  

  const submitHandler = () => {
    setImages(l =>{ 
      return l.concat({text: text, key: Math.random().toString()}) ;
    });
    setText('')
    
  };

  return (
    <View style={styles.container}>
       <TextInput 
        style={styles.input} 
        placeholder='Quoi de neuf ?'
        onChangeText={changeHandler} 
        value={text} 
      />
      <View style={styles.viewFlex}>
      <View style={styles.viewbtn}>
        <Button  onPress={submitHandler} color="white"   title='publier' />
      </View>
      </View>
      <View style = {styles.items}>
      <FlatList
              data={images}
              renderItem={({ item }) => (
                <Item text={item.text} />
              )}
            />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding : 10,
    marginTop : 40
  },
  input: {
    alignItems: "flex-start",
    marginBottom: 10,
    margin: 20,
    padding: 15,
    borderRadius: 5,
    backgroundColor:"#F7F7F7",
  },
  viewbtn: {
    height : 40,
    marginRight: 20,
    marginLeft: 20,
    width : 80,
    backgroundColor : '#ffdf00',
    marginBottom : 30,
    borderRadius: 10
  },
  viewFlex : {
    justifyContent : 'flex-end',
    alignItems : 'flex-start',
    height : 50 ,
    flexDirection : 'row'
    
  },
  items: {
    flex: 1, 
    alignItems: "center"
  }



});