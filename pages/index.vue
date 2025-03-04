<template>
	<div>
		<section>
    <h1 class="text-5xl font-bold mt-20">👋🏻 Hello, I'm Tuan Hiep!</h1>
    <p class="text-base text-gray-900 p-2 italic">Spring Developer Advocate at VMware</p>
  </section>
	<section class="flex flex-col md:flex-row mt-8">
    <div class="md:w-3/4 md:pr-10">
      <h2 class="text-3xl font-bold">My Story</h2>
      <p class="text-lg py-2">
        I am a Software Engineer living just outside of one of my favorite places in the world, Cleveland, Ohio. I am a
        self-taught programmer who firmly believes that you can accomplish anything in this life if you put your mind to
        it,
        roll up your sleeves and are willing to put in the work.
      </p>
      <p class="text-lg py-2">
        I have been writing software for over 20+ years now and I use my knowledge, passion, and influence to help other
        developers achieve their goals. I teach online and currently, have over 160,000 students.
      </p>
      <p class="text-lg py-2">
        In my personal life I am a husband to my best friend in the world and a father of two little girls. I enjoy
        reading,
        running and lifting weights to get me through the week.
      </p>
    </div>
    <div class="md:w-1/4 md:flex">
      <img src="../assets/images/hip-smile.jpg" alt="" class="mx-auto w-1/2 md:w-full mt-10 md:my-auto rounded-full object-cover aspect-square">
    </div>
  </section>
  <section>
    <h2 class="text-3xl font-bold mt-20">Latest Blog Posts</h2>
    <div class="grid md:grid-cols-3 pt-8 gap-10">
      <Post :posts="posts" />
    </div>
  </section>

  <ContentRenderer v-if="home" :value="home" />
	</div>
</template>

<script setup>
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())
</script>

<style lang="scss" scoped>

</style>


