import { View,Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useState } from "react";


export function Home(){
    

    return (
        <View style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.title}>Lista de compras </Text>
            </View>

            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder="Adicione um novo produto"
                    keyboardType="default"
                    
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
            </View>    
            
        </View>
    )
}