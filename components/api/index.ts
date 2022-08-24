const api = process.env.NEXT_PUBLIC_API_LINK;

export const API = {
  login: {
    otp: `${api}/store/otp`,
  },
  user: {
    userData: `${api}/auth/users/me/`,
  },
};
