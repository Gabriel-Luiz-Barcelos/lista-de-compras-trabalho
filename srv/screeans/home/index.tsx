import { View,Text, TextInput, TouchableOpacity,Image, FlatList , Alert} from "react-native";

import { Product } from "../../components/product"

import { styles } from "./styles";
import { useState } from "react";


export function Home(){
    const [products, setProducts] = useState<string[]>([]);

    const [productName, setProductName] = useState("");

    function handleAddproduct(){
        if (products.includes(productName)){
            return Alert.alert("Produto", "Já existe um produto na lista com esse nome")
        }

        setProducts([... products, productName]);
        setProductName("");
    }

    function handleProductRemove(name:string){
        Alert.alert("Remover",`Deseja remover p prdotupo ${name}?`,[
            {
                text:'Sim',
                onPress:() => setProducts(products.filter(product => product !== name ))
            },
            {
                text:'Não',
                style: 'cancel'
            }
        ]);
    }


    return (
        <View style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.title}>Lista de compras </Text>
            </View>

            
            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder="Adicione um novo produto"
                    keyboardType="default"
                    onChangeText={setProductName}
                    value={productName}
                    
                />
                <TouchableOpacity onPress={handleAddproduct} style={styles.button}>
                    <Image
                        source={require('../../../assets/images/plus.png')}
                    />
                </TouchableOpacity>
            </View>   
            <View style={styles.viewProAndFin}> 
                <View style={styles.viewProduct}>
                    <Text style={styles.textProducts}>Produtos </Text> 
                    <View style={styles.cont}>   
                        <Text >0</Text>
                    </View>                        
                </View>
                <View style={styles.viewFinalizados}>
                    <Text style={styles.textFinalizados}>Finalizados </Text>
                    <View>
                        <Text style={styles.cont}>0</Text>
                    </View>                        
                </View>
            </View>
               
            <FlatList
                data={products}
                keyExtractor={(item) => item}
                contentContainerStyle={styles.list}
                renderItem={({ item }) =>  <Product name={item} onRemove={() => handleProductRemove(item)}/>}   
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() =>(
<>

<View style={styles.imageShooping}>
                <Image 
                        source={require('../../../assets/images/shopping_list.png')}
                    />    
            </View>   
            <View >
                <Text style={styles.textShooping}>Você ainda não tem produtos na lista de compra</Text>
                <Text style={styles.textShooting2}>Adicione produtos e organize sua lista de compras</Text>
            </View>  
</>
                )}
                >/</FlatList>

        </View>
    )
}