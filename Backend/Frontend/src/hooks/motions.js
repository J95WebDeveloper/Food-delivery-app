
export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.6, delay },
});

export const slideDown = (delay = 0) => ({
  initial: { opacity: 0, y: -100 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export const slideDownNav = (delay = 0) => ({
  initial: { opacity: 0, y: -50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export const slideDownStiff = (delay = 0) => ({
  initial: { opacity: 0, y: -100 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, 
    type: "spring",
    stiffness: 100,
    damping: 10,
    delay },
});

export const slideUp = (delay = 0) => ({
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export const slideLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay },
});

export const slideRight = (delay = 0) => ({
  initial: { opacity: 0, x: 100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay },
});

export const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.7, delay },
});


export const removeCartItem = (delay = 0) => ({
  initial: { opacity: 1, x: 0 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -200 },
  transition: { duration: 1, delay }
});