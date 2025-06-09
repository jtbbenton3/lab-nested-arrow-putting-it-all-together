
function createLoginTracker(userInfo) {
  let attemptCount = 0;
  let isLocked = false;
  


  return (passwordAttempt) => {
    if (isLocked) {
      return `Account locked due to too many failed login attempts`;
    }

    attemptCount = attemptCount + 1;

    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    if(attemptCount < 3) {
      return "Attempt " + attemptCount + ": Login failed";
    }

    if (attemptCount >= 3) {
      isLocked = true;
      return `Account locked due to too many failed login attempts`;
    }
      
  };
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};