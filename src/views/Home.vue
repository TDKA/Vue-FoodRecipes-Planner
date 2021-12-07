<template>
  <div class="home container">
    <h1 class="my-5">Recipes Planner</h1>

    <FilterRecipes @filterChange="current = $event" :current="current" />
    <ul class="dots d-flex align-items-center justify-content-around mb-5">
      <li class="done">
        <p class="my-5">Done</p>
      </li>
      <li class="notDone">
        <p class="my-5">Not</p>
      </li>
    </ul>

    <!-- if there is smth in the array "recipes" => show it  -->
    <div v-if="recipes.length" class="">
      <div v-for="recipe in filterRecipes" :key="recipe.id">
        <Recipe
          :recipe="recipe"
          @delete="handleDelete"
          @complete="completeHandle"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Recipe from "../components/Recipe.vue";
import FilterRecipes from "../components/FilterRecipes.vue";
export default {
  name: "Home",
  components: { Recipe, FilterRecipes },
  data() {
    return {
      recipes: [],
      current: "all",
    };
  },
  methods: {
    // Delete Recipe Handler
    handleDelete(idRecipe) {
      this.recipes = this.recipes.filter((recipe) => {
        return recipe.id !== idRecipe;
      });
    },
    // Complete Recipe Handler
    completeHandle(idRecipe) {
      let recipe = this.recipes.find((recipe) => {
        return recipe.id === idRecipe;
      });
      recipe.complete = !recipe.complete;
    },
  },
  // Get all Recipes
  mounted() {
    fetch("http://localhost:3000/recipes")
      .then((res) => res.json())
      .then((data) => (this.recipes = data))
      .catch((err) => console.log(err.message));
  },
  computed: {
    filterRecipes() {
      if (this.current === "done") {
        return this.recipes.filter((recipe) => recipe.complete);
      }
      if (this.current === "notDone") {
        return this.recipes.filter((recipe) => !recipe.complete);
      }
      return this.recipes;
    },
  },
};
</script>

 <!--------    STYE   ---------->
<style scoped>
.addRecipe {
  padding: 15px 25px;
  background: linear-gradient(#dd2476, #e73f0c);
  color: #f4f4f4;
  text-decoration: none;
  border: none;
  border-radius: 40px;
  margin-top: 40px;
}
.addRecipe:hover {
  background: linear-gradient(#9b1a54, #ac300b);
  color: #f4f4f4;
}
ul {
  padding: 0;
}
.dots {
  margin-top: 30px;
  list-style: none;
}
.done {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: seagreen;
}

.notDone {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: #dd2476;
}
</style>