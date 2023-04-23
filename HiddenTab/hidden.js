import React, { useRef } from 'react';
import { View, Text, PanResponder, Animated } from 'react-native';

const InvisibleTab = () => {
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        // Check if the user is swiping horizontally
        return Math.abs(gestureState.dx) > Math.abs(gestureState.dy);
      },
      onPanResponderMove: (evt, gestureState) => {
        // Set the position of the invisible tab based on the user's swipe distance
        Animated.event([{ dx: gestureState.dx }], { useNativeDriver: false })(
          position
        );
      },
      onPanResponderRelease: (evt, gestureState) => {
        // If the user has swiped the tab more than half way, animate it to the end position
        if (gestureState.dx > SWIPE_THRESHOLD) {
          Animated.timing(position, {
            toValue: END_POSITION,
            duration: ANIMATION_DURATION,
            useNativeDriver: false,
          }).start();
        } else if (gestureState.dx < -SWIPE_THRESHOLD) {
          Animated.timing(position, {
            toValue: -END_POSITION,
            duration: ANIMATION_DURATION,
            useNativeDriver: false,
          }).start();
        } else {
          // Otherwise, animate the tab back to its original position
          Animated.spring(position, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  const position = useRef(new Animated.Value(0)).current;

  const SWIPE_THRESHOLD = 100; // Minimum distance required to trigger a swipe
  const END_POSITION = 100; // End position of the invisible tab
  const ANIMATION_DURATION = 200; // Duration of the animation

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }} />

      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'transparent',
          transform: [{ translateX: position }],
        }}
        {...panResponder.panHandlers}
      >
        {/* Content of the invisible tab goes here */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 10,
            margin: 10,
          }}
        >
          <Text>Invisible Tab</Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default InvisibleTab;
