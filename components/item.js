import React from 'react';
import{ useEffect, useState } from 'react';

import {StyleSheet, TouchableOpacity, Text, Image, View} from 'react-native';
export default function Item({text}) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    
    const getImageFromApi = async () => {
       try {
        const response = await fetch('https://coffee.alexflipnote.dev/random.json', {mode: 'no-cors'})
        const json = await response.json();
        setData(json.file);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  
   useEffect(() => {
      getImageFromApi();
    }, []);
  
    console.log(data)
  
    return (
        <View>
            <Text> {text}</Text>
            <Image source={{uri: data}}  style={styles.img} />
        </View>
    
      )
}

const styles = StyleSheet.create({
    img: {
        width:300,
        height: 200,
        backgroundColor: "black",
        marginTop: 10
    }
  
  });