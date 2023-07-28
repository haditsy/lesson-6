import React from 'react'
import { styled } from 'styled-components'
import Button from '../button/Button'

const Modal = ({onClose, onConfirm}) => {
  return (
    <>
        <Backdrop onClick={onClose}/>
    <StyledContainer>
        <h3>Вы уверены что хотите удалить этот расход?</h3>
        <Button onClick={onConfirm}>Да</Button>
        <Button onClick={onClose}>Нет</Button>
    </StyledContainer>
    </>
  )
}

const Backdrop = styled('div')`
     position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    top: 0;
    left: 0;
`

const StyledContainer = styled('div')`
    width: 400px;
    height: 200px;
    background-color: #ecf2db;
    border-radius: 1rem;
    position: fixed;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
    `

export default Modal