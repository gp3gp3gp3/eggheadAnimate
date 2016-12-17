import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Animated
} from 'react-native'

class App extends Component {

  componentWillMount () {
    this.animatedValue = new Animated.Value(0)
  }

  componentDidMout () {
    Animated.timing(this.animatedValue, {
      toValue: 150,
      duration: 1500
    }).start()
  }

  render () {
    const interpolateColor = this.animatedValue.interpolate({
      inputRange: [0, 150],
      outputRange: ['rgb(0, 0, 0)', 'rgb(51,250, 170)']
    })
    const animatedStyle = {
      backgroundColor: interpolateColor
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    width: 100,
    height: 100
  }
})

export default App
