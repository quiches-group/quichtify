<template>
  <div id="card-container">
    <div class="heading">
      <h1 class="card-title">{{cardTitle}}</h1>
      <p class="card-subtitle">{{cardSubtitle}}</p>
    </div>
    <p class="card-description">{{cardDescription}}</p>
    <button class="card-btn">Confirm</button>
    <button class="card-btn">Cancel</button>
  </div>
</template>
p
<script>
import './q-card.scss';

export default {
  name: 'q-card',
  props: {
    cardTitle: String,
    cardSubtitle: String,
    cardDescription: String,
  },
};
</script>
