import React from 'react'
import Modal from './Modal';
import {CloseSign, DesktopModalContainer, Header, Message,DesktopCloseButton} from './ModalPopup.styled'

export interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
    header: string;
    message?: string;
}

type Props = BaseModalWrapperProps;

const BaseModalWrapper: React.FC<Props> = ({
                                               children,
                                               isModalVisible,
                                               onBackdropClick,
                                               header,
                                               message
                                           }) => {

    if (!isModalVisible) {
        return null
    }

    return (
        <Modal onBackdropClick={onBackdropClick}>
            <DesktopModalContainer>
                <DesktopCloseButton onClick={onBackdropClick}>
                    <CloseSign/>
                </DesktopCloseButton>
                <Header>{header}</Header>
                <Message>{message}</Message>
            </DesktopModalContainer>
        </Modal>);
}

export default BaseModalWrapper