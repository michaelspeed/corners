<script lang="ts">
import Vue from 'vue';
import { CornersSample } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    CornersSample,
  }
});
</script>

<template>
  <div id="app">
    <corners-sample />
  </div>
</template>
