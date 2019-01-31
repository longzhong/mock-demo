<template>
    <div class="fillcontain">
        <head-top></head-top>
        <router-view></router-view>
    </div>
</template>

<script>
    import headTop from '../../components/headTop'
    export default {
       
    	components: {
    		headTop,
    	}
    }
</script>

<style lang="less">
	@import '../../style/mixin';
    .table_container{
        padding: 20px;
    }
    .add-btn{
        padding: 20px;
        padding-bottom: 0px;
    }
</style>


