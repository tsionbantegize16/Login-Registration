<template>
    <header>
        <h1>{{  title }}</h1>
    </header>
</template>

<script>
export default {
    name: 'TheHeader',
    props: {
        title: String,
    }
}
</script>


<style scoped>
   header{
    background: rgb(78, 111, 111);
   }
   header h1{
    color: rgb(251, 251, 254);
    text-align: center;
   }
</style>