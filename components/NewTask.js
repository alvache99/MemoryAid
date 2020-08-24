import React, {useState} from 'react';
import {StyleSheet, Text,TextInput,View,TouchableOpacity} from 'react-native';

export default function NewTask({addFunc}){

    const[text, setText] = useState('');


    const changeHandler = (val) => {
        setText(val)
    }



return(
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <TextInput placeholder="Add your task" onChangeText={changeHandler} style={{borderRadius:12,backgroundColor:'white',width:280,height:40,fontSize:25,marginTop:33,marginLeft:30}}></TextInput>     
            <TouchableOpacity onPress={()=>addFunc(text)} style={{padding:15}}>
              <Text style={{fontSize:60,textAlign:"center"}} >+</Text>
            </TouchableOpacity>        
</View>
)

}
