import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableHighlight, Animated } from 'react-native';
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
                toValue: this.mode._value === 0 ? 1 : 0,
                duration: 500,
                useNativeDriver: false
            })
        ]).start()
    }

    render() {

        const sizeStyle = {
            transform: [{ scale: this.buttonSize }]
        }

        const rotation = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "45deg"]
        })

        const thermometerX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-24, -100]
        })

        const thermometerY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-37, -100]
        })

        const timeX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-24, -24]
        })

        const timeY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-37, -150]
        })

        const pulseX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-24, 50]
        })

        const pulseY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-37, -100]
        })

        return (
            <View style={{ position: "absolute", alignItems: "center" }}>
                <SafeAreaView />
                <Animated.View style={{ position: "absolute", left: thermometerX, top: thermometerY }}>
                    <View>
                        <View style={styles.secondaryButton}>
                            <Feather name="thermometer" size={24} color="#FFF" />
                        </View>
                    </View>
                </Animated.View>

                <Animated.View style={{ position: "absolute", left: timeX, top: timeY }}>
                    <View>
                        <View style={styles.secondaryButton}>
                            <Feather name="clock" size={24} color="#FFF" />
                        </View>
                    </View>
                </Animated.View>

                <Animated.View style={{ position: "absolute", left: pulseX, top: pulseY }}>
                    <View>
                        <View style={styles.secondaryButton}>
                            <Feather name="thermometer" size={24} color="#FFF" />
                        </View>
                    </View>
                </Animated.View>

                <Animated.View style={[styles.button, sizeStyle]}>
                    <TouchableHighlight underlayColor="#47F58FF"
                        style={styles.mainButton}
                        onPress={this.handlePress}>
                        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
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
        mainButton: {
            width: 72,
            height: 72,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 36,
        },
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
        },
        secondaryButton: {
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: "#7F58FF"
        }
    })