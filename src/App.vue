<!-- SFC -->
<!-- <template>
  <h1>{{ message }}</h1>
</template>

<script>
export default {
  data() {
    return {
      message: 'This is some text'
    };
  }
};
</script>

<style></style> -->

<!-- Components, Props -->
<!-- <template>
  <h1>Food</h1>
  <p>The user can now change the favorite status of the food items with the use of a new data property initialized by the 'is-favorite' prop value.</p>
  <div id="wrapper">
    <food-item 
      food-name="Apples" 
      food-desc="Apples are a type of fruit that grow on trees."
      v-bind:is-favorite="true"/>
    <food-item 
      food-name="Pizza"
      food-desc="Pizza has a bread base with tomato sauce, cheese, and toppings on top."
      v-bind:is-favorite="false"/>
    <food-item 
      food-name="Rice"
      food-desc="Rice is a type of grain that people like to eat."
      v-bind:is-favorite="false"/>
  </div> 
</template>

<script></script>

<style>
  #wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  #wrapper > div {
    border: dashed black 1px;
    flex-basis: 120px;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }
</style>                   -->

<template>
  <h1>Food</h1>
  <p>Components created with v-for based on an array.</p>
  <div id="wrapper">
    <food-item
      v-for="x in foods"
      v-bind:food-name="x"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        foods: ['Apples','Pizza','Rice','Fish','Cake']
      };
    }
  }
</script>

<style>
  #wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  #wrapper > div {
    border: dashed black 1px;
    margin: 10px;
    padding: 0 20px;
    background-color: lightgreen;
  }
</style> 
