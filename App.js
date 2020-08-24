import { StatusBar } from 'expo-status-bar';
import React,{useState,Component}from 'react';
import {LinearGradient} from 'expo-linear-gradient'
import {listElement} from './styles/listElement'
import {
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Button,
} from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import TodoTask from './components/TodoTask'
import NewTask from './components/NewTask'
import {dropdownStyle} from './styles/dropdownStyle'

export default function App()  {

  const dropdownItems = [
    { label: 'Monday', value: 'first' },
    { label: 'Tuesday', value: 'second' },
    { label: 'Wednesday', value: 'third' },
    { label: 'Thursday', value: 'fourth' },
    { label: 'Friday', value: 'fifth' },
    { label: 'Saturday', value: 'sixth' },
    { label: 'Sunday', value: 'last' },
  ]
  
   const[tasks,setTasks] = useState([
     
     
   ]);


  
   const removeTask = (key) => {
     setTasks((prevTasks) =>{
         return prevTasks.filter(task => task.key != key)
     })
   }

  const addFunc = (text) => {
    setTasks((prevTasks) => {
        return [
            {text: text, key: new Date().getTime().toString()},
          ...prevTasks
        ]
    })
  }

 const dayPlaceHolder = {
   label: 'Select your day',
   value: null,
   color: 'black',
 }

  
  return (
    <SafeAreaView style={{flex:1, position:'relative'}}>
     <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={{flex:1}}>        
        <View>
          <Text style={{textAlign:'center',fontSize:40,marginTop:25,color:'white'}}>MemoryAid</Text>
        </View>
        <View style={{alignItems:"center",marginTop:20,}}>
          <View style={{flexDirection:'row'}}>
            {/* <TextInput placeholder="Day"  style={{borderRadius:12,backgroundColor:'white',width:200,height:40,fontSize:25}}></TextInput> */}
            <RNPickerSelect
            items={dropdownItems}
            style={dropdownStyle}
            useNativeAndroidPickerStyle={false}           
            placeholder={dayPlaceHolder}
            onValueChange={()=>{return}}
            style = {dropdownStyle}
          />
            <Image style={{width:40,height:40,marginLeft:10}} source={require('../MemoryAidFinal/assets/baseline_calendar_today_black_18dp.png')}/>
          </View>
        </View>
        {/* <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <TextInput placeholder="Add your task"  style={{borderRadius:12,backgroundColor:'white',width:280,height:40,fontSize:25,marginTop:33,marginLeft:30}}></TextInput>         
            <TouchableOpacity style={{padding:15}}>
              <Text style={{fontSize:60,textAlign:"center"}} >+</Text>
            </TouchableOpacity>        
        </View> */}
        <NewTask addFunc ={addFunc} />

        {/*flatlist*/}

        <View style={{flex:1}}>
          <FlatList
            data={tasks}
            renderItem={({item}) => (
            <TodoTask item={item} removeTask = {removeTask}/>
            )}
          />
        </View>          
        </LinearGradient>
    </SafeAreaView>
  )

removeTask = (key) => {
  setTasks((prevTasks) =>{
      return prevTasks.filter(task => task.key != key)
  })
}
}

