<template>
  <div class="recipe" :class="{ complete: recipe.complete }">
    <div class="actions">
      <h3 @click="openDescription()">{{ recipe.title }}</h3>
      <div class="icons">
        <span class="material-icons done" @click="completeRecipe">
          task_alt
        </span>
        <span @click="deleteRecipe" class="material-icons"> delete </span>
        <router-link :to="{ name: 'EditRecipe', params: { id: recipe.id } }">
          <span class="material-icons"> edit </span>
        </router-link>
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
    // Toogle description
    openDescription() {
      this.showDescription = !this.showDescription;
    },
    // Complete Recipe
    completeRecipe() {
      fetch(this.url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          complete: !this.recipe.complete,
        }),
      })
        .then(() => {
          this.$emit("complete", this.recipe.id);
        })
        .catch((err) => console.log(err.message));
    },
    // Delete recipe
    deleteRecipe() {
      fetch(this.url, {
        method: "DELETE",
      })
        .then(() => this.$emit("delete", this.recipe.id))
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style>
h3 {
  cursor: pointer;
}
.recipe {
  background: #f4f4f4;
  margin: 30px auto;
  padding: 10px 26px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  border-left: 10px solid #dd2476;
  color: #dd2476;
  border-radius: 30px;
}
.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.material-icons {
  color: rgb(148, 148, 148);
  font-size: 1.9rem;
  margin-left: 10px;
  cursor: pointer;
}
.material-icons:hover {
  color: #333;
  font-weight: bold;
}
.description {
}
.recipe.complete {
  border-left: 10px solid seagreen;
  color: seagreen;
}
.recipe.complete .done {
  color: seagreen;
}
</style>