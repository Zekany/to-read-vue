<template lang="html">
  <div id="about">
    <b-card overlay
      id="img-card"
      img="../static/books2.jpeg"
      ><h1 style="color: white;">A To-Read app.</h1>
      <h2 id="about-text" style="color: white;">
        This app lets you list all the books you want to read, give them priorities,
        and keeps track of what you've read so far!
      </h2>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
/* For some reason, only inline styling works */
#about-text: {
  color: white;
}

</style>
