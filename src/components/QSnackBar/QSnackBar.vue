<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div :class="{ 'q-animate-fadeIn': isOpen, 'q-animate-fadeOut': !isOpen}">
    <div v-if="isOpen" :class="allClasses" class="max-w-md mx-auto mb-8 absolute inset-x-0 bottom-0">
      <q-row>
        <q-col :md="10">
          <p class="text-snackbar" :class="colorTextClass">{{ message }}</p>
        </q-col>
        <q-col :md="2">
          <q-button class="button-snackbar" variant="plain-rounded-full" :color="colorButton" size="small" @click="Close">X</q-button>
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
    open: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'primary',
      validator(value) {
        const validColorSnackbar = ['primary', 'error', 'success'];
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
