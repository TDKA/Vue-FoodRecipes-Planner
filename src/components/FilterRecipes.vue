<template>
  <div class="nav-filter">
    <button @click="updateFilter('all')" :class="{ active: current === 'all' }">
      View All Recipes
    </button>
    |
    <button
      @click="updateFilter('done')"
      :class="{ active: current === 'done' }"
    >
      Done Recipes
    </button>
    |
    <button
      @click="updateFilter('notDone')"
      :class="{ active: current === 'notDone' }"
    >
      Not Done Yet
    </button>
  </div>
</template>

<script>
export default {
  props: ["current"],
  methods: {
    updateFilter(by) {
      this.$emit("filterChange", by);
    },
  },
};
</script>

<style>
.nav-filter button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  letter-spacing: 1px;
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: bold;
}

.nav-filter button.active {
  color: #333;
}
</style>