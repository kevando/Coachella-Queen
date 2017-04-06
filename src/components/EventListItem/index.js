import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import moment from 'moment';
import Emoji from 'react-native-emoji';
import * as Animatable from 'react-native-animatable';

import styles from './styles';
import { EMOJIS } from '../../config/styles';

const OPTIONS_WIDTH = 130;

class EventListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // event: this.props.event,
      showOptions: false,
      // selected: this.props.event.selected,
    }
  }
  componentDidMount(){
    // console.log('GOT PROPS for EventListItem')
    // still doesnt quite update this list properly
    // this.setState({selected: this.props.event.selected})
  }
  _onRowPress(){
    const {showOptions}=this.state;
    if(showOptions) {
      this._hideOptions();
    } else {
      this._revealOptions();
    }
  }

  _onOptionPress(interest){
    this.refs.optionsRef.bounceOut(500).then(()=> {
      // calling setInterest lags the app, so i am waiting until the animation
      // completes before calling it. this is not ideal
      this.props.setInterest(this.props.event,interest);
      this._hideOptions()
    })
  }

  _hideOptions(){
    this.refs.bodyRef.transitionTo({opacity: 0.9, marginLeft: 0});
    this.refs.optionsRef.transitionTo({width: 0},400);
    this.refs.leftRef.bounceIn(800);
    this.setState({showOptions: false});
  }
  _revealOptions(){
    this.refs.leftRef.zoomOut(300)
    this.refs.bodyRef.transitionTo({opacity: 1.0, marginLeft: -40});
    this.refs.optionsRef.transitionTo({width: OPTIONS_WIDTH},400);
    this.refs.optionsRef.zoomIn(400);
    this.setState({showOptions: true});
  }

  _renderLeft() {
    const { start, interest } = this.props.event;
    if(interest)
      return <Emoji name={EMOJIS[interest]} />
    else
      return <Text style={styles.time}>{moment(start).format('h:mm')}</Text>
  }

  _getRowStyle() {
      const { interest } = this.props.event;
      if(interest == 'no')
        return {borderWidth: 1, borderColor:'rgba(255,255,255,0.3)'}
      else if(interest == 'maybe')
        return {borderWidth: 1, borderColor:'rgba(255,255,255,0.3)'}
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


    const { event, setInterest } = this.props;
    // console.log('EventListItem Render',event.name)
    return (

        <View style={[styles.row,this._getRowStyle()]}>
          <TouchableOpacity style={styles.rowTouchable} activeOpacity={0.7} onPress={this._onRowPress.bind(this)} >
          <View style={styles.left}>
            <Animatable.Text ref="leftRef" style={{fontSize: 30}}>{this._renderLeft()}</Animatable.Text>

          </View>
          <Animatable.View ref="bodyRef" style={styles.body}>
            {this._renderName()}
            {this._renderStage()}
          </Animatable.View>
          </TouchableOpacity>
          <Animatable.View ref="optionsRef" style={styles.right}>
            <View style={styles.optionContainer}>
              <TouchableOpacity onPress={this._onOptionPress.bind(this,'yes')} >
                <Text style={{fontSize: 25}}><Emoji name={EMOJIS['yes']} /></Text>
              </TouchableOpacity>
            </View>
            <View style={styles.optionContainer}>
              <TouchableOpacity onPress={this._onOptionPress.bind(this,'maybe')} >
                <Text style={{fontSize: 25}}><Emoji name={EMOJIS['maybe']} /></Text>
              </TouchableOpacity>
            </View>
            <View style={styles.optionContainer}>
            <TouchableOpacity onPress={this._onOptionPress.bind(this,'no')} >
              <Text style={{fontSize: 25}}><Emoji name={EMOJIS['no']} /></Text>
            </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
    );

  }

}
export default EventListItem;
