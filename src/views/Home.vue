<template>
    <div>我是HOME</div>
</template>

<script>
import { getCurrentInstance } from 'vue'
export default {
    name: 'Home',
    setup() {
        const { ctx } = getCurrentInstance()
        console.log(ctx.$router.currentRoute.value)
    }
}
</script>