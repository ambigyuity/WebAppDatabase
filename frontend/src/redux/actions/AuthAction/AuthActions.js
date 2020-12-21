export const STORE_USER = "STORE_USER";
export const LOG_OUT = "LOG_OUT";

export const storeUSER = (userData) => {
  return {
    type: STORE_USER,
    userData: userData,
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};
