import React, {useCallback} from 'react';
import {ModalBase, ModalBaseProps} from '../ModalBase';
import {Title, Description, Content} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {
  filterSelector,
  handleFilterThunk,
} from '../../../domain/ducks/filterReducer';
import {ActionButton} from '../ActionButton';

export const SortFilterModal: React.FC<ModalBaseProps> = ({...modalProps}) => {
  const {sort} = useSelector(filterSelector);

  const dispatch = useDispatch();

  const handleSelectSort = useCallback(
    (selectedSort: string) => {
      dispatch(handleFilterThunk({sort: selectedSort}));
    },
    [dispatch],
  );

  return (
    <ModalBase {...modalProps}>
      <Content>
        <Title>Sort</Title>
        <Description>
          Sort Pokémons alphabetically or by National Pokédex number!
        </Description>
        <ActionButton
          activated={sort === 'asc'}
          onPress={() => handleSelectSort('asc')}>
          Smallest number first
        </ActionButton>
        <ActionButton
          activated={sort === 'desc'}
          onPress={() => handleSelectSort('desc')}>
          Highest number first
        </ActionButton>
        <ActionButton
          activated={sort === 'a-z'}
          onPress={() => handleSelectSort('a-z')}>
          A - Z
        </ActionButton>
        <ActionButton
          activated={sort === 'z-a'}
          onPress={() => handleSelectSort('z-a')}>
          Z - A
        </ActionButton>
      </Content>
    </ModalBase>
  );
};
