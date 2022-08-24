export const authToken = {
  key: "AUTH_TOKEN",
  get: function (): any | null {
    const data = localStorage.getItem(authToken.key);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  },
  set: (value: any) => {
    localStorage.setItem(authToken.key, JSON.stringify(value));
  },
  remove: () => {
    localStorage.removeItem(authToken.key);
  },
};
