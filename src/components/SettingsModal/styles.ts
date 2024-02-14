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
  gap: 2rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 5rem;
  border-radius: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  h1 {
    font-weight: 500;
    font-size: 3rem;
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
    font-size: 2rem;
  }
  div {
    gap: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const SettingsButton = styled.button<{ $isSelected?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 5rem;
  width: 6rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1.5rem;
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
