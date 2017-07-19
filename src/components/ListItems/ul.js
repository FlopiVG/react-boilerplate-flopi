import styled from 'styled-components';

const Ul = styled.ul`
  list-style-type: none;
  margin: 0 auto;
  width: 25%;
  text-align: center;
  padding: 0;
  li {
      background-color: #333;
    color: #CCC;
    cursor: pointer;
    padding: 5px 0;
  }
  li:nth-child(even) {
    background-color: #555;
  }
  li:hover {
    filter: brightness(110%);
  }
  li:active {
    filter: initial;
  }
`;

export default Ul;
