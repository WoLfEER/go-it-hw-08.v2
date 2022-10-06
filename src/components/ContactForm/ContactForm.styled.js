import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  div {
    margin-bottom: 20px;
  }
  lable {
    display: block;
    font-size: 14px;
    display: block;
    margin-top: 30px;
  }
  input {
    display: block;
    width: 300px;
    height: 20px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-width: px;
    border-image: linear-gradient(to right, #88f2f2, #044bd9);
    border-image-slice: 1;
    background: transparent;
  }
  button {
    display: block;
    margin: 0 auto 20px auto;
    width: 100px;
    height: 30px;
    text-align: center;
    font-size: 12px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    border-style: none;
    color: #ffffff;
    background: linear-gradient(to right, #88f2f2, #3dadf2, #0420bf);
    &:hover,
    &:focus {
      transform: scale(1.05);
      transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
        rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
        rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
        rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
        rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
        rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }
  }
`;
