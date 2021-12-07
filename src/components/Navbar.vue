<template>
  <nav class="main-nav mt-5">
    <router-link :to="{ name: 'Home' }">Recipes</router-link>
    <router-link :to="{ name: 'AddRecipe' }">Add A New Recipe</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.main-nav a {
  text-decoration: none;
  color: #333;
  margin: 0 10px;
  border: 1px solid #333;
  padding: 15px 25px;
  border-radius: 40px;
}
a.router-link-active {
  padding: 15px 25px;
  background: linear-gradient(#dd2476, #e73f0c);
  color: #f4f4f4;
  text-decoration: none;
  border: none;
  border-radius: 40px;
  margin-top: 40px;
}
</style>