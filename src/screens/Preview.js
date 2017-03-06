import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Container, Header, Title, ListItem, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { takeSnapshot, dirs } from "react-native-view-shot";
// cross platform dirs:
// const { CacheDir, DocumentDir, MainBundleDir, MovieDir, MusicDir, PictureDir } = dirs;

export default class Preview extends Component {

  onExportPress(){
    console.log('export press',this.refs)
//     takeSnapshot(this.refs["viewContainer"], {
//   format: "jpeg",
//   quality: 0.8
// })
// .then(
//   uri => console.log("Image saved to", uri),
//   error => console.error("Oops, snapshot failed", error)
// );

  }

      render() {
        return (

            <View ref="viewContainer" style={{flex:1,backgroundColor:'yellow', padding:10,marginTop:80}}>

              <Image source={require('../images/bg1.png')} style={styles.container} >
                <View style={styles.setlistContainer} >
                    <Text>Dude?</Text>
                    </View>
                  </Image>
                  <Button onPress={this.onExportPress.bind(this)}><Text>export</Text></Button>
                  </View>
        );
      }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  },
  setlistContainer: {
    position:'absolute',
    backgroundColor:'transparent',
    width: 250,
    borderWidth:1,
    borderColor: '#fff',
    marginTop: 25,
  }
});
