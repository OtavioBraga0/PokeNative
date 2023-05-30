import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Button, Text} from './style';

export interface ButtonProps extends TouchableOpacityProps {
  activated: boolean;
}

export const ActionButton: React.FC<ButtonProps> = ({
  children,
  activated,
  ...rest
}) => {
  return (
    <Button activated={activated} {...rest}>
      <Text activated={activated}>{children}</Text>
    </Button>
  );
};
