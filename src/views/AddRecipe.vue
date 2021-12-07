<template>
  <div class="container">
    <form @submit.prevent="addRecipe" class="mt-5">
      <h3 class="my-4">Add new recipe to your planner</h3>
      <div class="mb-3">
        <label for="Title" class="form-label">Title of the recipe:</label>
        <input type="text" class="form-control" id="Title" v-model="title" />
      </div>
      <div class="mb-3">
        <label for="Details" class="form-label">Details of the recipe:</label>
        <textarea
          class="form-control"
          id="Details"
          rows="10"
          v-model="description"
        />
      </div>
      <button class="btn btn-primary">Add to the planner</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: "",
      title: "",
    };
  },
  methods: {
    addRecipe() {
      let recipe = {
        complete: false,
        title: this.title,
        description: this.description,
      };
      fetch("http://localhost:3000/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipe),
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => console.log(err.message));
      console.log(recipe);
    },
  },
};
</script>

<style>
input,
textarea {
  border-radius: 30px !important;
}
</style>