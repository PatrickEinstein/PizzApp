import React, { useState } from 'react';
import {  View ,Image,useWindowDimensions} from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
// import { WebView } from "react-native-webview";
import HTMLRender from 'react-native-render-html';

const LeftContent = props => <Avatar.Icon {...props} icon="pen" />

// const HTMLRenderer = ({ htmlString }) => {
//   return (
//     <View style={{height: 100,}}>
//       <WebView source={{ html: htmlString }} />
//     </View>
//   );
// };

const BlogCard = ({
  _id, title, subtitle, coverpicture, avatar, body
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const windowWidth = useWindowDimensions().width;
  const htmlString = `<h3 style="color: black; font-size: 14px;">${body}</h3>`;

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card
    style={{
      marginBottom:8,
      backgroundColor:"white",
    }}
    onPress={toggleExpanded}
    elevation={4}
    >
      <Card.Title title={title} subtitle={subtitle} left={LeftContent} />
      <Card.Cover source={{ uri: coverpicture }} />
      <Card.Actions>
        <Button >{isExpanded ?<Text>See Less</Text> : <Text>See More</Text>}</Button>
      </Card.Actions>
      
      {isExpanded && (
        <View
          style={{
            color: "indigo",
          }}
        >
           <Card.Content  >
         
            {/* <View style={{ marginTop: 8 }}>
              <HTMLRenderer htmlString={htmlString} />
            </View> */}
             <HTMLRender source={{ html: htmlString }} contentWidth={windowWidth} />
            {/* <Text>{body}</Text> */}
            <Image
              source={{ uri: avatar }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 20,
                overflow: "hidden",
              }}
            ></Image>
        
        </Card.Content>
        </View>
         
      ) }
      
    </Card>
  );
};

export default BlogCard;
