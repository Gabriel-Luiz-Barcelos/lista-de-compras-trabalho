import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    container:{
        backgroundColor: "#F2F2F2",
        flex:1,
    },
    title:{
        color: '#F2F2F2',
        fontSize: 18,
    },
    containerText:{
        backgroundColor: '#7A4A9E',
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        height:173,
    },
    input:{
        padding:16,
        backgroundColor:'#F2F2F2',
        borderRadius:6,
        borderWidth:1,
        borderColor: "#808080",
        marginLeft:16,
        height:56,
        flex:1
    },
    form:{
        width:"100%",
        top:-27,
        flexDirection:"row"
    },
    button:{
        backgroundColor:"#31C667",
        width:56,
        height:56,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        marginRight:16
    },
    textButton:{
        color:"#FFF",
        fontSize:24
    }

})