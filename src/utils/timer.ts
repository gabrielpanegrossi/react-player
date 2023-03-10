export const timer = (callback: () => void, timeInMiliseconds: number) => {
  setTimeout(() => {
    callback();
    timer(callback, timeInMiliseconds);
  }, timeInMiliseconds);
};
