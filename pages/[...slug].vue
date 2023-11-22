<script setup>

const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation();
});

</script>

<template>
  <main class="flex">
    <nav>
      <Menu :navigation="navigation" />
    </nav>
    <div>
      <ContentDoc />
    </div>
    <!-- {{ csvQuery.body }} -->
  </main>
</template>

<style>
body {
  font-family: 'roboto', sans-serif;
  margin: 0;
  padding: 0 20px 0 0;
  min-height: 100%;
}

.flex {
  display: flex;
  gap: 20px;
}

table {
  border: 1px solid;
  border-collapse: collapse
}

td,
th {
  padding: 5px;
  border: 1px solid
}
</style>
