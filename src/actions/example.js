export const ACTION_TYPES = {
  GET_DATA: 'get_data',
};

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

export const getData = () => ({
  type: ACTION_TYPES.GET_DATA,
  payload: Data,
});
