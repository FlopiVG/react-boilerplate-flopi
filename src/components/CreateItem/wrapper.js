import styled from 'styled-components';

const Wrapper = styled.div`
  button {
    padding: 5px;
    background: #333;
    color: #CCC;
    border: 0;
    margin: 5px;
    width: 120px;
    height: 40px;
    font-weight: bold;
    outline: 0;
  }
  button:hover {
    filter: brightness(110%);
  }
  button:active {
    filter: initial;
  }
  input {
    margin: 5px;
    height: 20px;
  }
  label {
    font-weight: 300;
    font-size: 18px;
  }
`;

export default Wrapper;
