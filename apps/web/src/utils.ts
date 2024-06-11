// check that user is logged
export const isLogged = (token: any): boolean => {
  if (token !== null) {
    return true;
  } else {
    return false;
  }
};

//truncate a string
export const truncate = (str, no_words) => {
  return str.split(" ").splice(0, no_words).join(" ");
};

export const url = "https://www.lereperejuridique.com";
export const urlServer = "https://cozy-creativity-production.up.railway.app";
