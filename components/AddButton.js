import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Animated } from 'react-native';
import { FontAwesome5, Feather } from '@expo/vector-icons';

export default class AddButton extends Component {

    buttonSize = new Animated.Value(1)
    mode = new Animated.Value(0)

    handlePress = () => {
        Animated.sequence([
            Animated.timing(this.buttonSize, {
                toValue: 0.95,
                duration: 200,
                useNativeDriver: true
            }),
            Animated.timing(this.buttonSize, {
                toValue: 1,
                useNativeDriver: true
            }),
            Animated.timing(this.mode, {
                toValue: this.mode  === 0 ? 1 : 0,
                useNativeDriver: false
            })
        ]).start()
    }

    render() {

        const sizeStyle = {
            transform: [{ scale: this.buttonSize}]
        }

        const rotation = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange :["0deg", "45deg"]
        })

        return (
            <View style={{ position: "absolute", alignItems: "center" }}>

                <Animated.View style={[styles.button, sizeStyle]}>
                    <TouchableHighlight underlayColor="#47F58FF" onPress={this.handlePress}>
                        <Animated.View style={{ transform: [{ rotate: rotation }]}}>
                            <FontAwesome5 name="plus" size={24} color="#FFF" />
                        </Animated.View>
                    </TouchableHighlight>
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        button: {
            backgroundColor: '#7F58FF',
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 36,
            position: "absolute",
            top: -60,
            shadowColor: '#7F58FF',
            shadowRadius: 5,
            shadowOffset: { height: 10 },
            shadowOpacity: 0.3,
            borderWidth: 3,
            borderColor: "#FFF"
        }
    }
)