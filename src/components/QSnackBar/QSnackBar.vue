<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div :class="{ 'q-animate-fadeIn': isOpen, 'q-animate-fadeOut': !isOpen}">
    <div v-if="isOpen" :class="allClasses">
      <q-row>
        <q-col :md="10">
          <p class="text-snackbar" :class="colorTextClass">{{ message }}</p>
        </q-col>
        <q-col :md="2">
          <q-button
              class="button-snackbar" variant="plain-rounded-full" :color="colorButton" size="small"
              @click="Close">X
          </q-button>
        </q-col>
      </q-row>
    </div>
  </div>
</template>

<script>

export default {
  name: 'QSnackBar',
  props: {
    variant: {
      type: String,
      default: "tile",
      validator(value) {
        const validVariant = ['tile', 'rounded', 'shaped', 'outline'];
        return validVariant.includes(value);
      },
    },
    position: {
      type: String,
      validator(value) {
        const validPosition = ['top-center', 'bottom-center', 'top-right', 'top-left', 'bottom-left', 'bottom-right'];
        return validPosition.includes(value);
      },
    },
    open: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'primary',
      validator(value) {
        const validColorSnackbar = ['primary', 'error', 'success', 'secondary', 'warning'];
        return validColorSnackbar.includes(value);
      },
    },
    colorButton: {
      type: String,
      default: '#ffffff',
    },
    colorText: {
      type: String,
      default: '#ffffff',
      validator(value) {
        const validColorText = ['white', 'black', 'darkgray'];
        return validColorText.includes(value);
      },
    },
    message: {
      type: String,
      default: 'Votre message ici.'
    },
  },
  data() {
    return {
      isOpen: this.open
    }
  },
  computed: {
    allClasses() {
      const allClasses = [];
      allClasses.push('snackbar');

      if (this.variant === 'tile') {
        allClasses.push('snackbar--tile');
      }
      if (this.variant === 'rounded') {
        allClasses.push('snackbar--rounded');
      }
      if (this.variant === 'shaped') {
        allClasses.push('snackbar--shaped');
      }
      if (this.variant === 'outline') {
        allClasses.push('snackbar--outline');
      }

      // COLORS
      if (this.color === 'primary') {
        allClasses.push('snackbar--primary');
      }
      if (this.color === 'success') {
        allClasses.push('snackbar--success');
      }
      if (this.color === 'error') {
        allClasses.push('snackbar--error');
      }
      if (this.color === 'warning') {
        allClasses.push('snackbar--warning');
      }
      if (this.color === 'secondary') {
        allClasses.push('snackbar--secondary');
      }

      if (this.position === 'top-center') {
        allClasses.push('snackbar--top-center');
      }
      if (this.position === 'top-right') {
        allClasses.push('snackbar--top-right');
      }
      if (this.position === 'top-left') {
        allClasses.push('snackbar--top-left');
      }
      if (this.position === 'bottom-center') {
        allClasses.push('snackbar--bottom-center');
      }
      if (this.position === 'bottom-right') {
        allClasses.push('snackbar--bottom-right');
      }
      if (this.position === 'bottom-left') {
        allClasses.push('snackbar--bottom-left');
      }

      return allClasses;
    },
    colorTextClass() {
      if (this.colorText === 'black')
        return 'text text--black'
      if (this.colorText === 'darkgray')
        return 'text text--darkgray'
      return 'text text--white';
    }
  },
  methods: {
    Close() {
      this.isOpen = false;
    }
  }
}
</script>

<style lang="scss" scoped>

.snackbar {
  @apply max-w-md mx-16 my-8 absolute;
  min-width: 400px;

  &--tile {
    border-radius: 5px;
  }

  &--rounded {
    border-radius: 25px;
  }

  &--outline {
    background-color: white !important;
    border: 2px solid black;
    border-radius: 5px;
  }

  &--shaped {
    border-radius: 30px 0;
  }

  &--primary {
    background-color: #2d93c4;
  }

  &--success {
    background-color: #4caf50;
  }

  &--error {
    background-color: #ff5252;
  }

  &--warning {
    background-color: #f69530;
  }

  &--secondary {
    background-color: #607d8b;
  }

  &--top-center {
    @apply inset-x-0 top-0;
    margin: 32px auto;
  }

  &--top-right {
    @apply top-0 right-0;
  }

  &--top-left {
    @apply left-0 top-0;
  }

  &--bottom-center {
    @apply bottom-0 inset-x-0;
    margin: 32px auto;
  }

  &--bottom-right {
    @apply bottom-0 right-0;
  }

  &--bottom-left {
    @apply bottom-0 left-0;
  }
}

.button-snackbar {
  padding: 10px 15px !important;
}

.text {
  @apply mt-1 font-semibold;

  &--black {
    color: black;
  }

  &--white {
    color: white;
  }

  &--darkgray {
    color: darkgray;
  }
}
</style>
