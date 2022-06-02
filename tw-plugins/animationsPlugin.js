const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addBase, variants }) => {
  // Need to be exact same name that the keyframes
  const animationsName = [
    {
      name: 'ping',
      duration: '1s',
      delay: '300ms',
      iteration: 'infinite',
    },
    {
      name: 'fadeIn',
      duration: '200ms',
    },
    {
      name: 'fadeOut',
      duration: '200ms',
    },
    'fadeOutVisibility',
    'fadeInVisibility',
    {
      name: 'fadeInToTop',
      duration: '400ms',
    },
    'fadeInToRight',
    'fadeInToBottom',
    'fadeInToLeft',
    'zoomIn',
    'waveY',
    'scaleFull',
    'slideInFromRightWithFade',
    'slideInFromLeftWithFade',
    'slideInFromTopWithFade',
    'scaleXLeftToRightAndRestore',
    {
      name: 'oscillations',
      duration: '8s',
      iteration: 'infinite',
      timingFunction: 'linear',
      delay: 'var(--animate-delay, 0s)',
    },
  ];

  const keyframes = {
    ping: {
      '75%': {
        transform: 'scale(2)',
        opacity: '0',
      },
      '100%': {
        transform: 'scale(2)',
        opacity: '0',
      },
    },
    zoomIn: {
      '0%': {
        opacity: 0,
        transform: 'scale(2)',
      },
      '100%': {
        opacity: 1,
        transform: 'scale(1)',
      },
    },
    fadeInToTop: {
      '0%': {
        opacity: 0,
        transform: 'translateY(50px)',
      },
      '100%': {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
    fadeInToRight: {
      '0%': {
        opacity: 0,
        transform: 'translateX(-50px)',
      },
      '100%': {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
    fadeInToBottom: {
      '0%': {
        opacity: 0,
        transform: 'translateY(-50px)',
      },
      '100%': {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
    fadeInToLeft: {
      '0%': {
        opacity: 0,
        transform: 'translateX(50px)',
      },
      '100%': {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
    fadeIn: {
      '0%': {
        opacity: 0,
        'pointer-events': 'none',
      },
      '1%': {
        opacity: 0,
        'pointer-events': 'auto',
      },
      '100%': {
        opacity: 1,
        'pointer-events': 'auto',
      },
    },
    fadeOut: {
      '0%': {
        opacity: 1,
        'pointer-events': 'auto',
      },
      '99%': {
        opacity: 0,
        'pointer-events': 'auto',
      },
      '100%': {
        opacity: 0,
        'pointer-events': 'none',
      },
    },
    fadeOutVisibility: {
      '0%': {
        visibility: 'visible',
        opacity: 1,
      },
      '90%': {
        visibility: 'visible',
        opacity: 0,
      },
      '100%': {
        visibility: 'hidden',
        opacity: 0,
      },
    },
    fadeInVisibility: {
      '0%': {
        visibility: 'hidden',
        opacity: 0,
      },
      '10%': {
        visibility: 'visible',
        opacity: 0,
      },
      '100%': {
        visibility: 'visible',
        opacity: 1,
      },
    },
    waveY: {
      '0%': {
        transform: 'translateY(0)',
      },
      '50%': {
        transform: 'translateY(-10px)',
      },
      '100%': {
        transform: 'translateY(0)',
      },
    },
    scaleFull: {
      '0%': {
        transform: 'scale(0)',
      },
      '50%': {
        transform: 'scale(1)',
      },
      '100%': {
        transform: 'scale(0)',
      },
    },
    slideInFromRightWithFade: {
      '0%': {
        opacity: 0,
        transform: 'translateX(100%)',
      },
      '100%': {
        opacity: 1,
        transform: 'translateX(0)',
      },
    },
    slideInFromLeftWithFade: {
      '0%': {
        opacity: 0,
        transform: 'translateX(-100%)',
      },
      '100%': {
        opacity: 1,
        transform: 'translateX(0)',
      },
    },
    slideInFromTopWithFade: {
      '0%': {
        opacity: 0,
        transform: 'translateY(-100%)',
      },
      '100%': {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
    scaleXLeftToRightAndRestore: {
      '0%': {
        'transition-property': 'transform',
        'transform-origin': 'left',
        'transition-duration': '200ms',
        'transition-delay': '100ms',
        transform: 'scaleX(1)',
      },
      '1%': {
        'transition-property': 'transform',
        'transform-origin': 'right',
        'transition-duration': '200ms',
        'transition-delay': '100ms',
        transform: 'scaleX(1)',
      },
      '50%': {
        'transition-property': 'transform',
        'transition-duration': '200ms',
        'transition-delay': '100ms',
        'transform-origin': 'right',
        transform: 'scaleX(0)',
      },
      '51%': {
        'transition-property': 'transform',
        'transition-duration': '200ms',
        'transition-delay': '100ms',
        'transform-origin': 'left',
        transform: 'scaleX(0)',
      },
      '100%': {
        'transition-property': 'transform',
        'transform-origin': 'left',
        'transition-duration': '200ms',
        'transition-delay': '100ms',
        transform: 'scaleX(1)',
      },
    },
    oscillations: {
      '0%': {
        transform: 'rotate(0)',
      },
      '12.5%': {
        transform: 'rotate(-5deg)',
      },
      '25%': {
        transform: 'rotate(0)',
      },
      '37.5%': {
        transform: 'rotate(5deg)',
      },
      '50%': {
        transform: 'rotate(0)',
      },
    },
  };

  const animationDurations = ['100ms', '200ms', '300ms', '400ms', '500ms', '700ms', { ref: '1000', value: '1s' }];
  // TODO: implement other properties

  const parsedKeyframes = Object.fromEntries(
    Object.entries(keyframes).map(([key, value]) => [
      key,
      {
        [`@keyframes ${key}`]: value,
      },
    ]),
  );

  animationsName.forEach((animation) => {
    const animationName = typeof animation === 'string' ? animation : animation.name;

    const animationDuration = typeof animation === 'object' && animation.duration ? animation.duration : '650ms';
    const animationTimingFunction = typeof animation === 'object' && animation.timingFunction ? animation.timingFunction : 'cubic-bezier(0.65, 0.05, 0.36, 1)';
    const animationDelay = typeof animation === 'object' && animation.delay ? animation.delay : '0s';
    const animationIteration = typeof animation === 'object' && animation.iteration ? animation.iteration : 1;
    const animationDirection = typeof animation === 'object' && animation.direction ? animation.direction : 'normal';
    const animationFillMode = typeof animation === 'object' && animation.fillMode ? animation.fillMode : 'forwards';
    const animationState = typeof animation === 'object' && animation.state ? animation.state : 'running';

    const animationKeyframes = parsedKeyframes[animationName];
    if (!animationKeyframes) {
      throw node.error(`Undefined keyframes for animation ${animationName}`);
    }

    addBase(animationKeyframes, {
      respectImportant: false,
    });

    addBase(
      {
        [`.animate-${animationName}`]: {
          animation: `${animationDuration} ${animationTimingFunction} ${animationDelay} ${animationIteration} ${animationDirection} ${animationFillMode} ${animationState} ${animationName}`,
        },
      },
      variants('mq', ['responsive']),
    );
  });

  animationDurations.forEach((animationDuration) => {
    const index = animationDuration.ref || animationDuration.replace('ms', '').replace('s', '');
    const value = animationDuration.value || animationDuration;
    addBase({
      [`.animate-duration-${index}`]: {
        'animation-duration': value,
      },
    });
  });

  addBase({
    '.animate-none': {
      animation: 'none',
    },
  });

  addBase({
    '.sky-transition-all': {
      transition: 'all 650ms cubic-bezier(0.65, 0.05, 0.36, 1)',
    },
  });
});
