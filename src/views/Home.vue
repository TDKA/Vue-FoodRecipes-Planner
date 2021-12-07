<template>
  <div class="home">
    <h1>Recipe Planner</h1>
    <div class="notDone"></div>
    <div class="done"></div>

    <!-- if there is smth in the array "recipes" => show it  -->
    <div v-if="recipes.length">
      <div v-for="recipe in recipes" :key="recipe.id">
        <Recipe :recipe="recipe" @delete="handleDelete" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Recipe from "../components/Recipe.vue";
export default {
  name: "Home",
  components: { Recipe },
  data() {
    return {
      recipes: [],
    };
  },
  methods: {
    handleDelete(idRecipe) {
      this.recipes = this.recipes.filter((recipe) => {
        return recipe.id !== idRecipe;
      });
    },
  },
  mounted() {
    fetch("http://localhost:3000/recipes")
      .then((res) => res.json())
      .then((data) => (this.recipes = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
