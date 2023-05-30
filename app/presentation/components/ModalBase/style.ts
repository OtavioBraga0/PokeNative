// @ts-ignore
import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import {BACKGROUND_COLOR} from '../../layout/constants';

export const ModalComponent = styled(Modal)`
  justify-content: flex-end;
  margin: 0;
`;

export const ModalBody = styled.View`
  height: auto;

  background-color: ${BACKGROUND_COLOR.white};

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  padding: 30px 40px;

  overflow: visible;
`;

export const Marker = styled.View`
  border-radius: 50px;
  width: 80px;
  height: 6px;

  position: absolute;
  background-color: ${BACKGROUND_COLOR.white};

  top: -12px;
  left: 50%;
`;
