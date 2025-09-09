import { StyleSheet, View, Text, TouchableOpacity,Image } from "react-native"
import { styles } from "./styles"

import trash from '../../../assets/images/trash.png';

interface Props{
    name: string;
    onRemove: () => void;
}

export function Product(props: Props) {
    return(
        <View style={styles.container}>
            <Text>{props.name}</Text>
            <TouchableOpacity 
            style={styles.buttonTrash}>
                <Image
                source={trash}
                />
            </TouchableOpacity>
        </View>
    )

}

