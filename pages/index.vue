<template>
  <ListEmployees/>
</template>

<script lang="ts">
import Vue from 'vue'
import ListEmployees from '~/components/ListEmployees.vue';

export default Vue.extend({
    name: 'IndexPage',
    components: { ListEmployees }
})
</script>
