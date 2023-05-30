import React, {useCallback} from 'react';
import {ModalBase, ModalBaseProps} from '../ModalBase';
import {
  Title,
  Description,
  ButtonAction,
  ButtonActionText,
  Grid,
  Background,
  styles,
} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {
  filterSelector,
  handleFilterThunk,
} from '../../../domain/ducks/filterReducer';
import {RomanNumeralConverter} from '../../utils/converter';
import {GenerationIcon} from '../Icons';

export const GenerationFilterModal: React.FC<ModalBaseProps> = ({
  ...modalProps
}) => {
  const {generation} = useSelector(filterSelector);

  const dispatch = useDispatch();

  const handleSelectSort = useCallback(
    (selectedGeneration: string) => {
      dispatch(handleFilterThunk({generation: selectedGeneration}));
    },
    [dispatch],
  );

  const generations = new Array(8).fill('').map((_, index) => index + 1);

  return (
    <ModalBase {...modalProps}>
      <Grid
        ListHeaderComponent={
          <>
            <Title>Generations</Title>
            <Description>
              Use search for generations to explore your Pokémon!
            </Description>
          </>
        }
        data={generations}
        numColumns={2}
        keyExtractor={(item: number) => item.toString()}
        renderItem={({item}: {item: number}) => {
          const romanNumeral = RomanNumeralConverter(item);
          const activated = generation === romanNumeral;

          return (
            <ButtonAction
              activated={activated}
              onPress={() => handleSelectSort(romanNumeral)}>
              <GenerationIcon
                generation={item.toString()}
                width={125}
                height={45}
              />
              <ButtonActionText activated={activated}>
                Generation {romanNumeral.toUpperCase()}
              </ButtonActionText>
              <Background
                source={require('../../assets/generation_bg.png')}
                style={styles.bg}
              />
            </ButtonAction>
          );
        }}
      />
    </ModalBase>
  );
};
