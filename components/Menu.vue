<script setup>
defineProps({
  navigation: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <ul class="menu">
    <li v-for="(item, index) in navigation" :key="index">
      <NuxtLink v-if="!item.children" :to="item._path">
        {{ item.title }}
      </NuxtLink>
      <span v-else>
        {{ item.title }}
      </span>
      <Menu v-if="item.children" :navigation="item.children" />
    </li>
  </ul>
</template>

<style>
nav li {
  list-style: none;
  padding: 10px 0;
}

nav {
  padding: 50px;
  border-right: 1px solid #dedede;
  margin: 0;
  min-height: 100vh;
}

nav ul {
  padding-left: 0;
}
</style>
