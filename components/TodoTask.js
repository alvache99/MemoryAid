import React,{useState} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
  } from 'react-native'
export default function todoTask({item, removeTask,changeUrgency})  {
    const[textCheck, setTextCheck] =useState('Undone');

    const textChanger = (valTxt) => {
        setTextCheck('Done')
    }
   

return(
    <View style={styles.item}>
        <Text style={styles.styleText}>{item.text}</Text>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{padding:15}} onPress={textChanger}>
                <Text style={styles.styleButtonCheck} >{textCheck}</Text>
            </TouchableOpacity> 
            <TouchableOpacity onPress={()=> removeTask(item.key)}>  
                <Text style={styles.styleButton}>-</Text>
            </TouchableOpacity>
        </View>
    </View>
)
}



const styles =  StyleSheet.create({
    item:{
        borderWidth:1,
        borderRadius:12,
        borderColor:'#bbb',
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between'

    },
    styleButton:{
       marginRight:25,
        fontSize:50,
        textAlign:"center",
    },
    styleText:{
        alignSelf:"center",
        marginLeft:20,

    },styleButtonCheck:{
        marginTop:5,
        marginRight:0,
         fontSize:20,
         textAlign:"center",
     },
    

})