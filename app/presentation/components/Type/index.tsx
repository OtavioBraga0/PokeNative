import React from 'react';
import {Type} from '../../../domain/entities/pokemon';

import {Badge, Card, Name} from './style';
import {TYPE_COLORS} from '../../layout/constants';
// import {TypeIcon} from '../Icons';

export const TypeCard: React.FC<Type> = ({type}) => {
  return (
    <Card background={TYPE_COLORS[type.name]}>
      {/* <TypeIcon name={type.name} color={BACKGROUND_COLOR.white} size={15} /> */}
      <Name>{type.name}</Name>
    </Card>
  );
};

export const TypeBadge: React.FC<{name: string}> = ({name}) => {
  return (
    <Badge background={TYPE_COLORS[name]}>
      {/* <TypeIcon name={name} color={BACKGROUND_COLOR.white} size={15} /> */}
    </Badge>
  );
};
