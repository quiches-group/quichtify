<template>
  <button :class="classes" :disabled="disabled || loading" @click="$emit('click', $event)">
    <q-loader v-if="loading" :size="20" :bg-color="loaderBgColor" :accent-color="loaderAccentColor" class="absolute top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2" />
    <div class="q-btn__slot-container" :class="{ invisible: loading }">
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  name: 'QButton',
  props: {
    defaultStyle: {
      type: Boolean,
      default: () => true,
    },
    defaultPositionning: {
      type: Boolean,
      default: () => true,
    },
    size: {
      type: String,
      default: () => 'medium',
      validator(value) {
        const validValues = ['small', 'medium', 'large'];
        return validValues.includes(value);
      },
    },
    variant: {
      type: String,
      default: () => 'plain-rounded',
      validator(value) {
        const validValues = ['plain', 'plain-rounded', 'plain-rounded-full', 'link', 'link-underlined', 'outline'];
        return validValues.includes(value);
      },
    },
    color: {
      type: String,
      default: () => 'primary',
      validator(value) {
        const validValues = ['primary', 'secondary', 'white'];
        return validValues.includes(value);
      },
    },
    animation: {
      type: String,
      default: () => 'default',
      validator(value) {
        const validValues = ['default', 'reduce', 'none'];
        return validValues.includes(value);
      },
    },
    animateOnActive: {
      type: Boolean,
      default: () => false,
    },
    loading: {
      type: Boolean,
      default: () => false,
    },
    disabled: {
      type: Boolean,
      default: () => false,
    },
  },
  emits: ['click'],
  computed: {
    classes() {
      const classes = [];

      // DEFAULT
      classes.push('q-btn');

      if (this.defaultPositionning === true) {
        classes.push('relative');
      }

      if (this.defaultStyle === true) {
        classes.push('q-btn--default');
      }

      // VARIANTS
      if (this.variant === 'plain') {
        classes.push('q-btn--plain');
      }

      if (this.variant === 'plain-rounded') {
        classes.push('q-btn--plain-rounded');
      }

      if (this.variant === 'plain-rounded-full') {
        classes.push('q-btn--plain-rounded-full');
      }

      if (this.variant === 'link') {
        classes.push('q-btn--link');
      }

      if (this.variant === 'link-underlined') {
        classes.push('q-btn--link-underlined');
      }

      if (this.variant === 'outline') {
        classes.push('q-btn--outline');
      }

      // COLORS
      if (this.color === 'primary') {
        classes.push('q-btn--primary');
      }

      if (this.color === 'secondary') {
        classes.push('q-btn--secondary');
      }

      if (this.color === 'white') {
        classes.push('q-btn--white');
      }

      // SIZES
      if (this.size === 'small') {
        classes.push('q-btn--small');
      }

      if (this.size === 'medium') {
        classes.push('q-btn--medium');
      }

      if (this.size === 'large') {
        classes.push('q-btn--large');
      }

      // ANIMATIONS
      if (this.animation === 'reduce') {
        classes.push('q-btn--reduce-anim');
      }

      if (this.animation === 'none') {
        classes.push('q-btn--no-anim');
      }

      if (this.animateOnActive === false) {
        classes.push('q-btn--no-anim-on-active');
      }

      // STATES
      if (this.loading) {
        classes.push('q-btn--loading');
        classes.push('q-btn--disabled');
      }

      if (this.disabled === true) {
        classes.push('q-btn--disabled');
      }

      return classes;
    },
    loaderAccentColor() {
      if (this.color === 'primary') {
        return '#35485F';
      }

      if (this.color === 'secondary') {
        return '#40B883';
      }

      return '#2C3F50';
    },
    loaderBgColor() {
      if (this.color === 'white') {
        return '#40B883';
      }

      return 'white';
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin prefers-reduced-motion($classToApply: null) {
  @if ($classToApply) {
    #{$classToApply} {
      @content;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    @content;
  }
}

.q-btn {
  @apply flex items-center justify-center
    outline-none cursor-pointer select-none
    transition-all duration-150;

  &:after {
    @apply content absolute inset-0;
  }

  &:focus {
    @apply outline-none;
  }

  &--default {
    .q-btn__slot-container {
      @apply flex items-center justify-center text-center;
    }
  }

  /* VARIANTS */
  &--plain {
    /* COLORS */
    &.q-btn--primary {
      @apply bg-primary text-white;

      &::deep * {
        @apply text-white;
      }

      &:visited,
      &:visited::deep * {
        @apply text-white;
      }
    }

    &.q-btn--secondary {
      @apply bg-secondary text-white;

      &::deep * {
        @apply text-white;
      }

      &:visited,
      &:visited::deep * {
        @apply text-white;
      }
    }

    &.q-btn--white {
      @apply bg-white text-primary;

      &::deep * {
        @apply text-primary;
      }

      &:visited,
      &:visited::deep * {
        @apply text-primary;
      }
    }

    /* SIZES */
    &.q-btn--small {
      @apply py-2 px-3.75 text-xs;
    }

    &.q-btn--medium {
      @apply px-6 py-3 text-small;
    }

    &.q-btn--large {
      @apply px-10 py-5 text-base;

      @screen tablet {
        @apply py-6;
      }
    }

    /* ANIMATIONS */
    @apply transform;

    &:hover,
    &:focus,
    &.active:not(.q-btn--no-anim-on-active),
    &.js-active:not(.q-btn--no-anim-on-active) {
      @apply scale-105 shadow-lg;
    }

    &:active:not(.q-btn--loading) {
      @apply scale-95 shadow-md;
    }

    @include prefers-reduced-motion('&.q-btn--reduce-anim') {
      @apply transform-none;

      &:active:not(.q-btn--loading) {
        @apply scale-95 shadow-md;
      }
    }

    &.q-btn--no-anim {
      @apply transform-none;

      &:hover,
      &:focus,
      &.active,
      &.js-active,
      &.nuxt-link-exact-active:not(.q-btn--no-anim-on-active),
      &.nuxt-link-active:not(.q-btn--no-anim-on-active) {
        @apply shadow bg-opacity-75;
      }
    }
  }

  &--plain-rounded {
    @apply rounded shadow;

    /* COLORS */
    &.q-btn--primary {
      @apply bg-primary text-white;

      &::deep * {
        @apply text-white;
      }

      &:visited,
      &:visited::deep * {
        @apply text-white;
      }
    }

    &.q-btn--secondary {
      @apply bg-secondary text-white;

      &::deep * {
        @apply text-white;
      }

      &:visited,
      &:visited::deep * {
        @apply text-white;
      }
    }

    &.q-btn--white {
      @apply bg-white text-primary;

      &::deep * {
        @apply text-primary;
      }

      &:visited,
      &:visited::deep * {
        @apply text-primary;
      }
    }

    /* SIZES */
    &.q-btn--small {
      @apply py-2 px-3.75 text-xs;
    }

    &.q-btn--medium {
      @apply px-6 py-3 text-small;
    }

    &.q-btn--large {
      @apply px-10 py-5 text-base;

      @screen tablet {
        @apply py-6;
      }
    }

    /* ANIMATIONS */
    @apply transform;

    &:hover,
    &:focus,
    &.active:not(.q-btn--no-anim-on-active),
    &.js-active:not(.q-btn--no-anim-on-active) {
      @apply scale-105 shadow-lg;
    }

    &:active:not(.q-btn--loading) {
      @apply scale-95 shadow-md;
    }

    @include prefers-reduced-motion('&.q-btn--reduce-anim') {
      @apply transform-none;

      &:active:not(.q-btn--no-anim-on-active):not(.q-btn--loading) {
        @apply scale-95 shadow-md;
      }
    }

    &.q-btn--no-anim {
      @apply transform-none;

      &:hover,
      &:focus,
      &.active,
      &.js-active,
      &.nuxt-link-exact-active:not(.q-btn--no-anim-on-active),
      &.nuxt-link-active:not(.q-btn--no-anim-on-active) {
        @apply shadow bg-opacity-75;
      }
    }
  }

  &--plain-rounded-full {
    @apply rounded-full shadow;

    /* COLORS */
    &.q-btn--primary {
      @apply bg-primary text-white;

      &::deep * {
        @apply text-white;
      }

      &:visited,
      &:visited::deep * {
        @apply text-white;
      }
    }

    &.q-btn--secondary {
      @apply bg-secondary text-white;

      &::deep * {
        @apply text-white;
      }

      &:visited,
      &:visited::deep * {
        @apply text-white;
      }
    }

    &.q-btn--white {
      @apply bg-white text-primary;

      &::deep * {
        @apply text-primary;
      }

      &:visited,
      &:visited::deep * {
        @apply text-primary;
      }
    }

    /* SIZES */
    &.q-btn--small {
      @apply py-3 px-3 text-xs;
    }

    &.q-btn--medium {
      @apply py-3 px-3 text-small;
    }

    &.q-btn--large {
      @apply py-3 px-3 text-base;
    }

    /* ANIMATIONS */
    @apply transform;

    &:hover,
    &:focus,
    &.active:not(.q-btn--no-anim-on-active),
    &.js-active:not(.q-btn--no-anim-on-active) {
      @apply scale-105 shadow-lg;
    }

    &:active:not(.q-btn--loading) {
      @apply scale-95 shadow-md;
    }

    @include prefers-reduced-motion('&.q-btn--reduce-anim') {
      @apply transform-none;

      &:active:not(.q-btn--no-anim-on-active):not(.q-btn--loading) {
        @apply scale-95 shadow-md;
      }
    }

    &.q-btn--no-anim {
      @apply transform-none;

      &:hover,
      &:focus,
      &.active,
      &.js-active,
      &.nuxt-link-exact-active:not(.q-btn--no-anim-on-active),
      &.nuxt-link-active:not(.q-btn--no-anim-on-active) {
        @apply shadow bg-opacity-75;
      }
    }
  }

  &--link {
    @apply px-1 py-2;

    &:hover,
    &:focus {
      @apply no-underline;
    }

    /* COLORS */
    &.q-btn--primary {
      @apply text-primary;

      &::deep * {
        @apply text-primary;
      }

      &:visited,
      &:visited::deep * {
        @apply text-primary;
      }

      .q-btn__slot-container:after {
        @apply bg-primary;
      }
    }

    &.q-btn--secondary {
      @apply text-secondary;

      &::deep * {
        @apply text-secondary;
      }

      &:visited,
      &:visited::deep * {
        @apply text-secondary;
      }

      .q-btn__slot-container:after {
        @apply bg-secondary;
      }
    }

    &.q-btn--white {
      @apply text-white;

      &::deep * {
        @apply text-white;
      }

      &:visited,
      &:visited::deep * {
        @apply text-white;
      }

      .q-btn__slot-container:after {
        @apply bg-white;
      }
    }

    /* SIZES */
    &.q-btn--small {
      @apply text-xs;
    }

    &.q-btn--medium {
      @apply text-small;
    }

    &.q-btn--large {
      @apply text-base;
    }

    /* ANIMATIONS */
    .q-btn__slot-container {
      @apply relative;

      &:after {
        @apply content absolute top-full left-0
                 h-px w-full
                 rounded
                 transform scale-x-0 origin-right
                 transition-transform duration-200 delay-100;
      }
    }

    &:hover .q-btn__slot-container:after,
    &:focus .q-btn__slot-container:after,
    &.active:not(.q-btn--no-anim-on-active) .q-btn__slot-container:after,
    &.js-active:not(.q-btn--no-anim-on-active) .q-btn__slot-container:after {
      @apply scale-x-100 origin-left;
    }

    @include prefers-reduced-motion('&.q-btn--reduce-anim') {
      .q-btn__slot-container:after,
      .q-btn__slot-container:after {
        @apply transition-none;
      }
    }

    &.q-btn--no-anim {
      .q-btn__slot-container:after,
      .q-btn__slot-container:after {
        @apply content-none;
      }
    }

    /* STATES */
    &.q-btn--disabled {
      .q-btn__slot-container:after,
      .q-btn__slot-container:after {
        @apply content-none;
      }
    }

    &.q-btn--loading {
      @apply bg-gray-400 rounded;

      .q-btn__slot-container:after,
      .q-btn__slot-container:after {
        @apply content-none;
      }
    }
  }

  &--link-underlined {
    @apply px-1 py-2;

    &:hover,
    &:focus {
      @apply no-underline;
    }

    /* COLORS */
    &.q-btn--primary {
      @apply text-primary;

      &::deep * {
        @apply text-primary;
      }

      &:visited,
      &:visited::deep * {
        @apply text-primary;
      }

      .q-btn__slot-container:after {
        @apply bg-primary;
      }
    }

    &.q-btn--secondary {
      @apply text-secondary;

      &::deep * {
        @apply text-secondary;
      }

      &:visited,
      &:visited::deep * {
        @apply text-secondary;
      }

      .q-btn__slot-container:after {
        @apply bg-secondary;
      }
    }

    &.q-btn--white {
      @apply text-white;

      &::deep * {
        @apply text-white;
      }

      &:visited,
      &:visited::deep * {
        @apply text-white;
      }

      .q-btn__slot-container:after {
        @apply bg-white;
      }
    }

    /* SIZES */
    &.q-btn--small {
      @apply text-xs;
    }

    &.q-btn--medium {
      @apply text-small;
    }

    &.q-btn--large {
      @apply text-base;
    }

    /* ANIMATIONS */
    .q-btn__slot-container {
      @apply relative;

      &:after {
        @apply content absolute left-0 w-full rounded;
        top: 120%;
        height: 2px;
      }
    }

    &:hover .q-btn__slot-container:after,
    &:focus .q-btn__slot-container:after,
    &.active:not(.q-btn--no-anim-on-active) .q-btn__slot-container:after,
    &.js-active:not(.q-btn--no-anim-on-active) .q-btn__slot-container:after {
      @apply q-animate-scaleXLeftToRightAndRestore;
    }

    @include prefers-reduced-motion('&.q-btn--reduce-anim') {
      .q-btn__slot-container:after,
      .q-btn__slot-container:after {
        @apply transition-none q-animate-none;
      }
    }

    &.q-btn--no-anim {
      .q-btn__slot-container:after,
      .q-btn__slot-container:after {
        @apply content-none;
      }
    }

    /* STATES */
    &.q-btn--disabled {
      .q-btn__slot-container:after,
      .q-btn__slot-container:after {
        @apply content-none;
      }
    }

    &.q-btn--loading {
      @apply bg-gray-400 rounded;

      .q-btn__slot-container:after,
      .q-btn__slot-container:after {
        @apply content-none;
      }
    }
  }

  &--outline {
    @apply rounded border;

    /* COLORS */
    &.q-btn--primary {
      @apply text-primary border-primary;

      &::deep * {
        @apply text-primary;
      }

      &:visited,
      &:visited::deep * {
        @apply text-primary;
      }
    }

    &.q-btn--secondary {
      @apply border-secondary text-primary;

      &::deep * {
        @apply text-primary;
      }

      &:visited,
      &:visited::deep * {
        @apply text-primary;
      }
    }

    &.q-btn--white {
      @apply border-white text-white;

      &::deep * {
        @apply text-white;
      }

      &:visited,
      &:visited::deep * {
        @apply text-white;
      }
    }

    /* SIZES */
    &.q-btn--small {
      @apply py-2 px-3.75 text-xs;
    }

    &.q-btn--medium {
      @apply px-6 py-3 text-small;
    }

    &.q-btn--large {
      @apply px-10 py-5 text-base;

      @screen tablet {
        @apply py-6;
      }
    }

    /* ANIMATIONS */
    @apply transform;

    &:hover,
    &:focus,
    &.active:not(.q-btn--no-anim-on-active),
    &.js-active:not(.q-btn--no-anim-on-active) {
      @apply scale-105 shadow-lg;
    }

    &:active:not(.q-btn--loading) {
      @apply scale-95 shadow-md;
    }

    @include prefers-reduced-motion('&.q-btn--reduce-anim') {
      @apply transform-none;

      &:active:not(.q-btn--no-anim-on-active):not(.q-btn--loading) {
        @apply scale-95 shadow-md;
      }
    }

    &.q-btn--no-anim {
      @apply transform-none;

      &:hover,
      &:focus,
      &.active,
      &.js-active,
      &.nuxt-link-exact-active:not(.q-btn--no-anim-on-active),
      &.nuxt-link-active:not(.q-btn--no-anim-on-active) {
        @apply shadow opacity-75;
      }
    }
  }

  /* STATES */
  &--disabled {
    @apply opacity-60 transform-none cursor-not-allowed;
  }

  &--loading {
    @apply transform-none cursor-wait;
  }
}
</style>
