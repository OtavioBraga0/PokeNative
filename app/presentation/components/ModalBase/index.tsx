import React, {Dispatch, SetStateAction, useCallback, useState} from 'react';
import {Marker, ModalBody, ModalComponent} from './style';

import {ViewProps} from 'react-native';

export interface ModalBaseProps extends ViewProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalBase: React.FC<ModalBaseProps> = ({
  open,
  setOpen,
  children,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(false);
    setExpanded(false);
  }, [setOpen]);

  return (
    <ModalComponent
      isVisible={open}
      backdropOpacity={0.25}
      statusBarTranslucent={false}
      onBackdropPress={handleClose}
      swipeDirection={['down']}
      onSwipeComplete={handleClose}>
      <ModalBody expanded={expanded}>
        <Marker />
        {children}
      </ModalBody>
    </ModalComponent>
  );
};
