import React from 'react'
import { View, Text, Image } from 'react-native'


export default function About(props) {
    
    const {name, image, price, reviews, rating, categories} = props.route.params;
    

    const formattedCategories = categories.map((cat) => cat.title).join(" • ");

    const description = `${formattedCategories} ${
        price ? " • " + price : ""
    } • 🎫 • ${rating} ⭐ (${reviews}+)`;
    return (
        <View>
            <MagasinImage image={image} />
            <MagasinName name={name} />
            <MagasinDescription description={description} />
        </View>
    );
}

const MagasinImage = (props) => (
    <Image source = {{ uri: props.image }} style={{ width: "100%", height: 150 }} />
);

const MagasinName = (props) => (
    <Text
      style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
      }}
    >
      {props.name}
    </Text>
  );

const MagasinDescription = (props) => (
    <Text
      style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
      }}
    >
      {props.description}
    </Text>
  );