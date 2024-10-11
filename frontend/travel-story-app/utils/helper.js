export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  export const getInitials = (username) => {
    if (!username) return "";
  
    const words = username.split(" ");
    let initials = " ";
  
    for (let i = 0; i < Math.min(words.length, 1); i++) {
      initials += words[i][0];
    }
    return initials.toUpperCase();
  };
  