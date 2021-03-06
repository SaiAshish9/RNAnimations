import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Deck from "./src/Deck";
import { Card, Button } from "react-native-elements";

export default function App() {
  const DATA = [
    {
      id: 1,
      text: "Card #1",
      uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg",
    },
    {
      id: 2,
      text: "Card #2",
      uri: "http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg",
    },
    {
      id: 3,
      text: "Card #3",
      uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg",
    },
    {
      id: 4,
      text: "Card #4",
      uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg",
    },
    {
      id: 5,
      text: "Card #5",
      uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg",
    },
    {
      id: 6,
      text: "Card #6",
      uri: "http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg",
    },
    {
      id: 7,
      text: "Card #7",
      uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg",
    },
    {
      id: 8,
      text: "Card #8",
      uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg",
    },
  ];

  const renderCard = (item) => {
    return (
      <Card key={item.id} title={item.text} image={{ uri: item.uri }}>
        <Text>Card</Text>
        <Button
          icon={{ name: "code", color: "#fff" }}
          backgroundColor="#03A9F4"
          title="View Now!"
        />
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      {/* <Ball /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Deck
          data={DATA}
          onSwipeRight={() => console.log("something was swiped")}
          renderCard={renderCard}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
});
