<template>
  <div class="home">
    <!-- if there is smth in the array "recipes" => show it  -->
    <div v-if="recipes.length">
      <div v-for="recipe in recipes" :key="recipe.id">
        <Recipe :recipe="recipe" />
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
  mounted() {
    fetch("http://localhost:3000/recipes")
      .then((res) => res.json())
      .then((data) => (this.recipes = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
