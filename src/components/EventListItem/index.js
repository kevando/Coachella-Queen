import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import moment from 'moment';

import styles from './styles';

const OFF_SCREEN = -110;

class EventListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: this.props.event,
      optionsOffset: new Animated.Value(OFF_SCREEN),
      showSelection: false,
      // selected: this.props.event.selected,
    }
  }
  componentDidMount(){
    // console.log('GOT PROPS')
    // still doesnt quite update this list properly
    this.setState({selected: this.props.event.selected})
  }
  // _onEventPress(){
  //   // this.setState({selected: !this.state.selected});
  //   // this.props.toggleEvent(this.state.event);
  //
  //   this.props.setInterest(this.state.event);
  //
  // }



  _onRowPress(){
    const {showSelection}=this.state;
    if(showSelection) {
      this._hideOptions();

    } else {
      this._revealOptions();
    }
    this.setState({showSelection: !this.state.showSelection})


  }

  _onOptionPress(interest){
    this.props.setInterest(this.state.event,interest);
    this._hideOptions();
  }

  _hideOptions(){
    Animated.timing(
       this.state.optionsOffset,
       {toValue: OFF_SCREEN}
     ).start();
  }
  _revealOptions(){
    Animated.timing(
       this.state.optionsOffset,
       {toValue: 0}
     ).start();

  }

  _renderTime() {
    const { start, interest } = this.props.event;
    if(interest == 'yes')
      return <Text style={styles.time}>👍</Text>
    else if(interest == 'maybe')
      return <Text style={styles.time}>🤔</Text>
    else if(interest == 'no')
      return <Text style={styles.time}>👎</Text>
    else
      return <Text style={styles.time}>{moment(start).format('h:mm')}</Text>
  }

  _getRowStyle() {
      const { interest } = this.props.event;
      if(interest == 'no')
        return {borderWidth: 1, borderColor:'rgba(255,255,255,0.3)', height: 30,}
      else if(interest == 'maybe')
        return {borderWidth: 1, borderColor:'rgba(255,255,255,0.3)', height: 30,}
      else if(interest == 'yes')
        return {backgroundColor: 'rgba(14, 158, 237, 0.1)',borderColor:'rgba(255,255,255,0.2)'}
  }

  _renderStage(){
    const { interest, stage } = this.props.event;
    if(interest == 'no')
      return null;
    else if(interest == 'maybe')
      return null;
    else
      return <Text style={styles.stage}>{stage}</Text>
  }

  _renderName() {
    const { interest, name } = this.props.event;
    return <Text style={styles.band}>{name}</Text>
  }

  render() {
    const { event, onPress, setInterest } = this.props;

    // console.log('new EventItem props',event.interest);

    return (

        <View style={[styles.row,this._getRowStyle()]}>
          <TouchableOpacity style={styles.rowTouchable} activeOpacity={0.7} onPress={this._onRowPress.bind(this)} >
          <View style={styles.left}>
            {this._renderTime()}

          </View>
          <View style={styles.body}>
            {this._renderName()}
            {this._renderStage()}
          </View>
          </TouchableOpacity>
          <Animated.View style={[styles.right,{right:this.state.optionsOffset}]}>
            <View style={styles.optionContainer}>
              <Text onPress={this._onOptionPress.bind(this,'yes')} style={styles.optionIcon}>👍</Text>
            </View>
            <View style={styles.optionContainer}>
              <Text onPress={this._onOptionPress.bind(this,'maybe')} style={styles.optionIcon}>🤔</Text>
            </View>
            <View style={styles.optionContainer}>
              <Text onPress={this._onOptionPress.bind(this,'no')} style={styles.optionIcon}>👎</Text>
            </View>
          </Animated.View>
        </View>


    );

  }
  // <View style={styles.right}>
  //   <Text style={styles.time} onPress={this._onEventPress.bind(this)}>Set Fire</Text>
  //
  // </View>
  render_og() {
    const { event, onPress } = this.props;
// <View style={[styles.container,{backgroundColor: this.state.selected ? '#ddd' : '#fff',borderColor: this.state.selected ? '#333' : '#ccc'}]}>
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={this._onEventPress.bind(this)}>
        <View style={[styles.container,{backgroundColor: this.state.selected ? 'rgba(255,255,255,0.4)' : 'transparent'}]}>
          <Text style={styles.band}>{event.name}</Text>
          <Text style={styles.stage}>{event.stage}</Text>
          <Text style={styles.time}>{moment(event.start).format('h:mm')}</Text>
        </View>
      </TouchableOpacity>
    );

  }

}


export default EventListItem;
