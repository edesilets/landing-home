type UserResponse = {
  name: {
    full: string;
    first: string;
    last: string;
  },
  location: {
    broad: string;
    state: string;
    region: string;
  },
  occupation: string;
};

export default UserResponse;