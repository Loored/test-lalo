
const emailAction = (state = {}, action) => {
  console.log(emailAction);

  switch (action.type) {
  case 'DELETE':
    return {
      id: action.id, 
      text: action.text,
    };

  default:
    return state;
  }
};

export default emailAction;