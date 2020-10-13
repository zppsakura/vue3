<template>
    <div>我是CONCAT</div>
</template>

<script>
import { getCurrentInstance } from 'vue'
export default {
    name: 'Contact',
    setup() {
        const { ctx } = getCurrentInstance()
        console.log(ctx.$router.currentRoute.value)
    }
}
</script>