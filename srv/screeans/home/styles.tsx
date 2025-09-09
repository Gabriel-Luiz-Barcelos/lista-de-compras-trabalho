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
        marginLeft:5,
        backgroundColor:'#31C667',
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
    cont:{
        color:'#333',
        backgroundColor:'#D9D9D9',
        borderRadius:999,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 2,
        paddingBottom: 2
    },
    viewProAndFin:{
        flexDirection:'row',
        borderBottomColor:'#D9D9D9',
        borderBottomWidth:1,
        margin:24,
        justifyContent:'space-between',
        marginTop:-50,
    },
    viewProduct:{
        padding:10,
        flexDirection:'row',
        gap:8
    },
    viewFinalizados:{
        padding:10,
        flexDirection:'row',
        gap:8
    },
    textFinalizados:{
        color:'#7A4A9E',
        fontSize:14,
        fontWeight:700,
    },
    imageShooping:{
        alignItems:'center',
        marginTop:48
    },
    textShooping:{
        textAlign:'center',
        marginTop: 16,
        color:'#808080',
        fontWeight:700
    },
    textShooting2:{
        textAlign:'center',
        color:'#808080',
    },
    list:{
        flexGrow:1
    },
    listEmptyText:{
        fontSize: 16,
        fontWeight: "normal",
        lineHeight: 19.2,
        textTransform: "none",
        flexWrap: "wrap",
        textAlign: "center",
    },

  


})