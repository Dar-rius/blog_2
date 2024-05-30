// check that user is logged
export const isLogged = (token: any): boolean => {
  if (token !== null) {
    return true;
  } else {
    return false;
  }
};

export const url = "http://127.0.0.1:4321";
export const urlServer = "https://cozy-creativity-production.up.railway.app";
