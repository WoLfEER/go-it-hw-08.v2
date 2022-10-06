import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(last-child) {
    margin-bottom: 15px;
  }

  button {
    border-radius: 4px;
    /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
    border-style: none;
    color: #ffffff;
    background: linear-gradient(to right, #88f2f2, #056cf2, #0420bf);
    margin-right: 15px;
    font-size: 12px;
    &:hover,
    &:focus {
      transform: scale(1.03);
      transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
`;

export const Wrap = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Name = styled.p`
  font-size: 17px;
  font-weight: 500;
`;

export const Phone = styled.p`
  color: black;
`;
