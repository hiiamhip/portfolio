<template>
  <ContentRenderer :value="data" class="prose my-10 mx-auto max-w-7xl" />
  <div class="my-8">
    <a v-for="tag in data.meta.tags" :key="tag" :href="`/blog/tags/${tag}`"
      class="inline-flex items-center text-sm font-semibold py-2 px-4 rounded-lg text-gray-100 bg-blue-500 uppercase last:mr-0 mr-4">
      <Icon name="pajamas:label" size="1.5rem" class="text-gray-100 mr-2" /> {{ tag }}
    </a>
  </div>
</template>

<script setup>
	const route = useRoute()
	const { data } = await useAsyncData(route.path, () => {
		return queryCollection('content').path(route.path).first()
	})

	console.log(data.value.meta.tags)


</script>

<style scoped>

</style>