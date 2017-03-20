import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StatusBar,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window')

const styles = {
  wrapper: {
    backgroundColor: '#ccc',
    borderWidth:2,
    borderColor: 'green',
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth:10,
    borderColor: 'red',
    margin:10,
  },

  image: {
    width,
    height,
    flex: 1,


  }
}

const myRenderPagination = (index, total, context) => {
  return <Text>Dude{index}</Text>
}

const swiperConfig = {
  height: height,
  showsPagination: true,
  // renderPagination: myRenderPagination,
  dot: <Text onPress={ ()=> alert('yo') } style={{backgroundColor: 'rgba(255,255,255,.3)', width: 16, height: 26, borderRadius: 7, marginLeft: 7, marginRight: 7}} ></Text>,
  dotStyle: {padding:25},
  dotColor: 'yellow',
  showsButtons: false,
  horizontal: true,
  pagingEnabled: true, // locks screens in place like theyre sticky
  bounces: false, // cannot attempt to swipe beyond the limits

}

export default class extends Component {
  render () {
    return (
      <View style={{backgroundColor: 'blue'}}>


          <Swiper style={styles.wrapper}
            ref={_swiper => { this._swiper = _swiper; }}
            {...swiperConfig}

            activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
            paginationStyle={{
              bottom: 70
            }}
            loop={false}>
            <View style={styles.slide}>
              <Text>hi im first</Text>
            </View>
            <View style={styles.slide}>
              <Text>hi im next</Text>
            </View>
            <View style={styles.slide}>
              <Text>hi im last</Text>
            </View>
          </Swiper>

      </View>
    )
  }
}
