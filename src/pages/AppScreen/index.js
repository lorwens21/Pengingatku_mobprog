import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from '../../components/molecules/Task';

const AppScreen = () => {

    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }

    return (
        <View style={styles.container}>
           
           {/* Pengingatku */}
           <View style={styles.taskWrapper}>
               <Text style={styles.sectionTitle}>Pengingatku</Text>

               <View style={styles.items}>
                   {/*This is where the task will go! */}
                   {
                       taskItems.map((item, index) => {
                           return (
                               <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                    <Task text={item} />
                               </TouchableOpacity>
                           ) 
                       })
                   }
               </View>

           </View>

           {/*Write a task */}
           <KeyboardAvoidingView 
             behavior={Platform.OS === "android" ? "padding" : "height"}
             style={styles.writeTaskWrapper}>
                 <TextInput style={styles.input} placeholder={'Ketik kata untuk Pengingat'} value={task} onChangeText={text => setTask(text)} />

                 <TouchableOpacity onPress={() => handleAddTask()}>
                     <View style={styles.addWrapper}>
                         <Text>+</Text>
                     </View>
                 </TouchableOpacity>
             </KeyboardAvoidingView>

        </View>
    )
}

export default AppScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8AB6D6',
    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60, 
        backgroundColor: 'white',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
});
