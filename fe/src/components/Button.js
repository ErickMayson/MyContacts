import styled from 'styled-components';

export default styled.button`
  width: 100%;
  max-width: 500px;
  height: 52px;
  background: ${({ theme }) => theme.colors.primary.main};
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0,  0,  0, 0.5);
  outline:none;
  padding: 0 16px;
  font-size: 16px;
  font-weight:bold;
  color: #fff;
  transition: background 0.2s ease-in;

  &:hover{
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &:active{
    background: ${({ theme }) => theme.colors.primary.light}
  }

  &[disabled] {
    background: #cccccc;
    cursor: default;
  }
`;
