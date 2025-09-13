import { View, Text, TextInput, TouchableOpacity, Image, FlatList, Alert } from "react-native";
import { Product } from "../../components/product";
import { styles } from "./styles";
import { useState } from "react";

type ProductType = {
  name: string;
  done: boolean;
};

export function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [productName, setProductName] = useState("");

  function handleAddproduct() {
    if (products.some(product => product.name === productName)) {
      return Alert.alert("Produto", "Já existe um produto na lista com esse nome");
    }

    setProducts([...products, { name: productName, done: false }]);
    setProductName("");
  }

  function handleProductRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o produto ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setProducts(products.filter(product => product.name !== name)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleToggleDone(name: string) {
    setProducts(products.map(product =>
      product.name === name
        ? { ...product, done: !product.done }
        : product
    ));
  }

  const totalProducts = products.length;
  const finalized = products.filter(p => p.done).length;

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.title}>Lista de compras </Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione um novo produto"
          keyboardType="default"
          onChangeText={setProductName}
          value={productName}
        />
        <TouchableOpacity onPress={handleAddproduct} style={styles.button}>
          <Image source={require("../../../assets/images/plus.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.viewProAndFin}>
        <View style={styles.viewProduct}>
          <Text style={styles.textProducts}>Produtos </Text>
          <View style={styles.cont}>
            <Text>{totalProducts}</Text>
          </View>
        </View>

        <View style={styles.viewFinalizados}>
          <Text style={styles.textFinalizados}>Finalizados </Text>
          <View style={styles.cont}>
            <Text>{finalized}</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Product
            name={item.name}
            done={item.done}
            onRemove={() => handleProductRemove(item.name)}
            onToggleDone={() => handleToggleDone(item.name)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <>
            <View style={styles.imageShooping}>
              <Image
                source={require("../../../assets/images/shopping_list.png")}
              />
            </View>
            <View>
              <Text style={styles.textShooping}>
                Você ainda não tem produtos na lista de compra
              </Text>
              <Text style={styles.textShooting2}>
                Adicione produtos e organize sua lista de compras
              </Text>
            </View>
          </>
        )}
      />
    </View>
  );
}
