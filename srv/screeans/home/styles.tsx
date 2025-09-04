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
        padding:24,

    },
    input:{
        padding:16,
        backgroundColor:'#F2F2F2',
        borderRadius:6,
        borderWidth:1,
        borderColor: "#808080",
        height:56,
        flex:1
    },
    form:{
        width:"100%",
        top:-50,
        flexDirection:"row",
        padding:24
    },
    button:{
        padding:16,
        width:56,
        height:56,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        marginLeft:5
    },
    textButton:{
        color:"#FFF",
        fontSize:24
    },
    textProducts:{
        color:'#31C667',
        fontSize:14,
        fontWeight:700,
    },
    iconsText:{
        padding:10,
        marginTop:-60,
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:'#808080',
        borderBottomWidth:1,
        margin:24,
        backgroundColor:'#b91717'
    },
    textFinalizados:{
        color:'#7A4A9E',
        fontSize:14,
        fontWeight:700,
    },
  


})