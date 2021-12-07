<template>
  <div class="recipe" @click="openDescription()">
    <div class="actions">
      <h3>{{ recipe.title }}</h3>
      <div class="icons">
        <span class="material-icons"> task_alt </span>
        <span @click="deleteRecipe" class="material-icons"> delete </span>
        <span class="material-icons"> edit </span>
      </div>
    </div>
    <div class="description" v-if="showDescription">
      <p>{{ recipe.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDescription: false,
      url: "http://localhost:3000/recipes/" + this.recipe.id,
    };
  },
  props: ["recipe"],
  methods: {
    openDescription() {
      this.showDescription = !this.showDescription;
    },
    deleteRecipe() {
      fetch(this.url, { method: "DELETE" }).then(() =>
        this.$emit("delete", this.recipe.id).catch((err) =>
          console.log(err.message)
        )
      );
    },
  },
};
</script>

<style>
h3 {
  cursor: pointer;
}
.recipe {
  background: whitesmoke;
  margin: 30px auto;
  padding: 10px 26px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  border-left: 7px solid rgb(212, 0, 0);
}
.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.material-icons {
  color: #333;
  font-size: 1.8rem;
  margin-left: 10px;
  cursor: pointer;
}
.material-icons:hover {
  border-bottom: 1px solid green;
}
</style>