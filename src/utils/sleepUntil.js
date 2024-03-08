const sleepUntil = async (f, timeoutMs) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(f), timeoutMs);
  });
};

export default sleepUntil;
