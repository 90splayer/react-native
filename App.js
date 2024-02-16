import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ActivityIndicator, Button, Image, ImageBackground, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Greet from './components/Greet';

const logoImg = require("./assets/adaptive-icon.png")

export default function App() {

  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60}}>
    <ScrollView>
    <StatusBar backgroundColor='lightgreen' barStyle="light-content"/>
    <Image source={logoImg} style={{width: 300, height: 300}}/>
    <Button title='Press' onPress={()=> setIsModalVisible(true)}
      color="midnightblue"
      disabled={isModalVisible}
    />
    <Greet name="Bruce Wayne"/>
    <Button title='Alert' onPress={() => Alert.alert("Invalid data!", "DOB incorrect", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel pressed")
      },
      {
        text: "OK",
        onPress: () => console.log("OK pressed")
      }
    ])} />
    <ActivityIndicator size="large" color="midnightblue" animating={false} />
    <Pressable onPress={() => console.log("image pressed")}>
    <Image source={logoImg} style={{width: 300, height: 300}}/>
    </Pressable>
    <Modal visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)}
    animationType='slide' presentationStyle='pageSheet'>
      <View style={styles.container}>
        <Text>Modal content</Text>
        <Button 
        title='Close' 
        color="midnightblue"
        onPress={() => setIsModalVisible(false)}
        />
      </View>
    </Modal>
    {/* <Image 
      source={{ url: "https://picsve.photos/300"}}
      style={{width: 300, height: 300}}
    /> */}
    {/* <ImageBackground source={logoImg} style={{flex: 1}}>
    <Text>Awesome feature sharp!</Text>
    </ImageBackground>
      <StatusBar style="auto" /> */}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "lightblue", padding: 60}
})
