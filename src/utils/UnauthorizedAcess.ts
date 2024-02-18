
export const redirectToLogin = () => {
    localStorage.removeItem('authToken')
    window.location.href = '/'; 
  };