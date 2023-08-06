import React, { useState } from 'react';
import { ImageBackground, View } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { WebView } from "react-native-webview";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const HTMLRenderer = ({ htmlString }) => {
  return (
    <View style={{height: 100,}}>
      <WebView source={{ html: htmlString }} />
    </View>
  );
};

const BlogCard = ({
  _id, title, subtitle, coverpicture, avatar, body
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const htmlString = `<h3 style="color: black; font-size: 40px;">${body}</h1>`;

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card
    style={{
      marginBottom:8
    }}
    >
      <Card.Title title={title} subtitle={subtitle} left={LeftContent} />
      <Card.Cover source={{ uri: coverpicture }} />
      <Card.Actions>
        <Button onPress={toggleExpanded}>{isExpanded ? "See Less" : "See More"}</Button>
    
      </Card.Actions>
      {isExpanded && (
        <View
          style={{
            color: "indigo",
          }}
        >
          <Card.Content>
            <View style={{ marginTop: 8 }}>
              <HTMLRenderer htmlString={htmlString} />
            </View>
            <ImageBackground
              source={{ uri: avatar }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 20,
                overflow: "hidden",
              }}
            ></ImageBackground>
          </Card.Content>
         
        </View>
      )}
    </Card>
  );
};

export default BlogCard;
