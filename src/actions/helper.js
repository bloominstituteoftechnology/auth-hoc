export const getAuthToken = () => localStorage.getItem('ClientAuthApp');
export const setAuthToken = (token) => {
  const bearer = `Bearer ${token}`;
  localStorage.setItem('ClientAuthApp', bearer)
};
