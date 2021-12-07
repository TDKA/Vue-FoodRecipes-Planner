<template>
  <form class="mt-5" @submit.prevent="editRecipe">
    <h3 class="my-4">Edit Recipe</h3>
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
    <button class="btn btn-primary">Save</button>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      description: "",
      title: "",
      url: "http://localhost:3000/recipes/" + this.id,
    };
  },
  mounted() {
    fetch(this.url)
      .then((res) => res.json())
      .then((data) => {
        (this.title = data.title), (this.description = data.description);
      });
  },
  methods: {
    editRecipe() {
      fetch(this.url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: this.title,
          description: this.description,
        }),
      }).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>

<style>
</style>