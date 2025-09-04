import { View,Text, TextInput, TouchableOpacity,Image } from "react-native";
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
                    <Image
                        source={require('../../../assets/images/trash.png')}
                    />
                </TouchableOpacity>
            </View>    
            <View style={styles.iconsText}>
                <Text style={styles.textProducts}>Produtos </Text>
                <Text style={styles.textFinalizados}>Finalizados </Text>
                <Image
                    source={'../'}
                />
            </View>
            
        </View>
    )
}