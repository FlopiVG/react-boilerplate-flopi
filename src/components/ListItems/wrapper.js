import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  margin: 5px;
  width: 12%;
  text-align: center;
  padding: 0;
  color: #CCC;
  a {
    background-color: #333;
    color: #CCC;
    cursor: pointer;
    padding: 5px 0;
    outline: 0;
  }
  a:nth-child(even) {
    background-color: #555;
  }
  a:hover {
    filter: brightness(110%);
  }
  a:active {
    filter: initial;
  }
  .error {
    background: #c00;
    padding: 5px 0;
    font-size: 24px;
  }
  @keyframes blink {
    0% {
      opacity: .2;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: .2;
    }
  }
  .loading {
    width: 100%;
    background: #3b5998;
    padding: 5px 0;
    font-size: 24px;
    span {
      animation-name: blink;
      animation-duration: 1.4s;
      animation-iteration-count: infinite;
      animation-fill-mode: both;
    }
    span:nth-child(2) {
      animation-delay: .2s;
    }
    span:nth-child(3) {
      animation-delay: .4s;
    }
  }
`;

export default Wrapper;
