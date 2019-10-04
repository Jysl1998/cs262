import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import{Button, Text} from 'react-native-elements';
import Pic from './Pic'

export default class AssetExample extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      showPicture: 'none',
      showButton: ''
    }
  }

  letShow = () =>{
    this.setState({showPicture: '', showButton: 'none'})
  }

  render() {
    return (
      <View style={styles.container}>
          <Button style = {{ width: '100%', display: this.state.showButton}} 
          buttonStyle= {{backgroundColor: '#EA9B67'}}
          title= "CLICK for a surprise"
          onPress = {this.letShow}
          />
            <Pic source= '../assets/sam.png' text= "Happy Birthday" display= {this.state.showPicture} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FFECBC',
  },
});
