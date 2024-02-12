import styled from 'styled-components'

export const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div`
  background-color: white;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  h1 {
    font-weight: 500;
    font-size: 1.5rem;
  }
  h2 {
    font-weight: 500;
  }
`

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  div {
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`

export const SettingsButton = styled.button<{ $isSelected?: boolean }>`
  padding: 0.25rem 1rem;
  width: 6rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
  border: 1px solid ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.blue : theme.colors.white};
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.white : theme.colors.blue};
`
