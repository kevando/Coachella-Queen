import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';

import styles from './styles';

class EventListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: this.props.event,
      // selected: this.props.event.selected,
    }
  }
  componentDidMount(){
    // console.log('GOT PROPS')
    // still doesnt quite update this list properly
    this.setState({selected: this.props.event.selected})
  }
  _onEventPress(){
    this.setState({selected: !this.state.selected});
    this.props.toggleEvent(this.state.event);
  }

  render() {
    const { event, onPress } = this.props;
// <View style={[styles.container,{backgroundColor: this.state.selected ? '#ddd' : '#fff',borderColor: this.state.selected ? '#333' : '#ccc'}]}>
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={this._onEventPress.bind(this)}>
        <View style={[styles.container,{backgroundColor: this.state.selected ? 'rgba(255,255,255,0.4)' : 'transparent'}]}>
          <Text style={styles.band}>{event.name}</Text>
          <Text style={styles.stage}>{event.stage} {event.selected && 'event'} {this.state.selected && 'state'} </Text>
          <Text style={styles.time}>{moment(event.start).format('h:mm')}</Text>
        </View>
      </TouchableOpacity>
    );

  }

}


export default EventListItem;
