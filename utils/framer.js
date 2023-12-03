export const slideBottomOnce = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  transition: { duration: 0.5 },
  variants: {
    visible: { opacity: 1, translateY: '0px' },
    hidden: { opacity: 0, translateY: '-16px' },
  }
}
export const slideBottom = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false },
  transition: { duration: 0.5 },
  variants: {
    visible: { opacity: 1, translateY: '0px' },
    hidden: { opacity: 0, translateY: '-16px' },
  }
}
export const slideTop = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false },
  transition: { duration: 0.5 },
  variants: {
    visible: { opacity: 1, translateY: '0px' },
    hidden: { opacity: 0, translateY: '16px' },
  }
}
export const slideRight = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false },
  transition: { duration: 0.5 },
  variants: {
    visible: { opacity: 1, translateX: '16px' },
    hidden: { opacity: 0, translateX: '0px' },
  }
}
export const slideTopOnce = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  transition: { duration: 0.5 },
  variants: {
    visible: { opacity: 1, translateY: '0px' },
    hidden: { opacity: 0, translateY: '16px' },
  }
}
export const slideBottomDelayedTwo = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false },
  transition: { duration: 0.5, delay: 0.2 },
  variants: {
    visible: { opacity: 1, translateY: '0px' },
    hidden: { opacity: 0, translateY: '-16px' },
  }
}
export const slideBottomDelayedTwoOnce = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  transition: { duration: 0.5, delay: 0.2 },
  variants: {
    visible: { opacity: 1, translateY: '0px' },
    hidden: { opacity: 0, translateY: '-16px' },
  }
}
export const slideTopDelayedTwoOnce = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  transition: { duration: 0.5, delay: 0.2 },
  variants: {
    visible: { opacity: 1, translateY: '0px' },
    hidden: { opacity: 0, translateY: '16px' },
  }
}

export const slideLeftDelayedFive = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  transition: { duration: 0.5, delay: 0.5 },
  variants: {
    visible: { opacity: 1, translateX: '0px' },
    hidden: { opacity: 0, translateX: '16px' },
  }
}
export const slideRightDelayedTwo = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false },
  transition: { duration: 0.5, delay: 0.2 },
  variants: {
    visible: { opacity: 1, translateX: '0px' },
    hidden: { opacity: 0, translateX: '16px' },
  }
}
export const slideLeftDelayedTwo = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false },
  transition: { duration: 0.5, delay: 0.2 },
  variants: {
    visible: { opacity: 1, translateX: '0px' },
    hidden: { opacity: 0, translateX: '-16px' },
  }
}
