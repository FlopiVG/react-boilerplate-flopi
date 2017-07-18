import React from 'react';
import ListItems from 'components/ListItems';

const Data = [
  {
    id: 1,
    text: 'Data 1',
  },
  {
    id: 2,
    text: 'Data 2',
  },
  {
    id: 3,
    text: 'Data 3',
  },
  {
    id: 4,
    text: 'Data 4',
  },
];

const Comp = () => (
  <ListItems data={Data} />
);

export default Comp;
