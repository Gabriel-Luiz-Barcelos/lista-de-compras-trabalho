import { StyleSheet, View, Text } from "react-native"
import { styles } from "./styles"
interface Props{
    name: string;
}

export function Product(props: Props){
    props.name

    return(
        <View style={styles.container}>
            <Text style={styles.container}>{props.name}</Text>
        </View>
    )

}

