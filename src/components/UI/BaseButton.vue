<template>
    <button :class="mode">
        <slot />
    </button>
</template>

<script>
export default {
    name: 'BaseButton',
    props:{
        mode: String,
    }
}
</script>

<style scoped>
   button{
    padding: 0.75rem 1.5rem;
    font-family: inherit;
    background-color: rgb(32, 72, 72);
    border: 1px solid rgb(43, 115, 115);
    color: aliceblue;
    cursor: pointer;
   }

   button:hover,
   button:active {
    background-color:  rgb(32, 72, 72);
    border-color:  rgb(32, 72, 72);
   }
   .default {
    background-color: transparent;
    color: rgb(4, 5, 5);
    border: none;

   }
   .default:hover,
   .default:active {
    background-color: aliceblue;
   }

</style>
