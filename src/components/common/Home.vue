<template>
    <div class="wrapper" >
        <h1>页面1</h1>
        <button @click="btnClick">跳转</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            };
        },
        methods: {
            btnClick() {
                this.$router.push({ path:'/login' });
            }
        }
    }
</script>
