import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Badge} from './style';
import {
  BACKGROUND_COLOR,
  HEIGHT_COLOR,
  TYPE_COLORS,
  WEIGHT_COLOR,
} from '../../layout/constants';
import {HeightIcon, WeightIcon} from '../Icons';

export interface BadgeProps extends TouchableOpacityProps {
  active: boolean;
  name: string;
}

export const TypeBadge: React.FC<BadgeProps> = ({name, active, ...rest}) => {
  return (
    <Badge
      {...rest}
      active={active}
      name={name}
      type="type"
      background={active ? TYPE_COLORS[name] : BACKGROUND_COLOR.white}>
      {/* <TypeIcon
        name={name}
        color={!active ? TYPE_COLORS[name] : BACKGROUND_COLOR.white}
        size={25}
      /> */}
    </Badge>
  );
};

export const HeightBadge: React.FC<BadgeProps> = ({name, active, ...rest}) => (
  <Badge
    {...rest}
    active={active}
    name={name}
    type="height"
    background={active ? HEIGHT_COLOR[name] : BACKGROUND_COLOR.white}>
    <HeightIcon
      color={!active ? HEIGHT_COLOR[name] : BACKGROUND_COLOR.white}
      name={name}
      size={25}
    />
  </Badge>
);

export const WeightBadge: React.FC<BadgeProps> = ({name, active, ...rest}) => (
  <Badge
    {...rest}
    active={active}
    name={name}
    type="weight"
    background={active ? WEIGHT_COLOR[name] : BACKGROUND_COLOR.white}>
    <WeightIcon
      color={!active ? WEIGHT_COLOR[name] : BACKGROUND_COLOR.white}
      name={name}
      size={25}
    />
  </Badge>
);
