<template>
    <div>
        <router-link :to=item.path v-for="item in routerData" :key="item.path">{{item.name}}</br></router-link>

    </div>
  
</template>

<script>
export default {
    name : 'pageRoute',
    data(){
        return {
            routerData:this.$router.options.routes
        }

    },
    mounted () {
    }
}
</script>

<style>

</style>