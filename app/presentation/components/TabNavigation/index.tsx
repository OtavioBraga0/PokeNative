import React from 'react';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {Bg, Item, ItemText, Navigation} from './style';

// @ts-ignore
import bgDetails from '../../assets/pokeball-white.png';

export const TabNavigation: React.FC<MaterialTopTabBarProps> = ({
  state,
  descriptors,
  navigation,
  position,
}) => {
  return (
    <Navigation>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const inputRange = state.routes.map((_, i) => i);
        const textOpacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0.5)),
        });

        const imageOpacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });

        return (
          <Item
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            key={index}>
            <Bg style={{opacity: imageOpacity}} source={bgDetails} />
            <ItemText
              activated={isFocused}
              style={{
                opacity: textOpacity,
              }}>
              {label}
            </ItemText>
          </Item>
        );
      })}
    </Navigation>
  );
};
