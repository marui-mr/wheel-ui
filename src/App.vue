<template>
  <div>
    导航栏 |
    <router-link to="/">Mark</router-link> |
    <router-link to="/xxx">Mark 2</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
