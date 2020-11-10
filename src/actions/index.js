let deleteEmail = false;

export const DeleteEmail = (email) => {
  return {
    type: 'DELETE',
    email
  };
};
