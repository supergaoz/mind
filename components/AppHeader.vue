<template>
    <nav class="navbar navbar-expand-lg py-3 navbar-dark" :style="`background:${navBackground};color:${navColor}`">
        <div class="container-fluid">
            <a :style="`color:${navColor}`" class="navbar-brand" href="#">【超智晓生】</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item" v-for="(item, index) in menuList.slice(0,-1)">
                        <a :style="`color:${navColor}`" class="nav-link" :class="route.fullPath === item.link ? 'active' : ''" :href="item.link">{{ item.name }}
                        </a>
                    </li>
                </ul>
                <span class="navbar-text">                    
                    <a :style="`color:${navColor}`" :href="menuList[menuList.length - 1].link" style="text-decoration: auto;">
                        {{ menuList[menuList.length - 1].name }}
                    </a>
                </span>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
const route = useRoute()
const props = defineProps({
    menuList: {
        type: Array<any>,
        default: [
            // { name: '随便聊聊', link: '/' , bgColor: '#b57b91',color: '#430c73'},
            // { name: '情感顾问', link: '/feeling' , bgColor: '#e3698c',color: '#761217'},
            // { name: '职业规划', link: '/career' , bgColor: '#32b9fd',color: '#311d7a'},
            // { name: '育儿天地', link: '/education' , bgColor: '#93fe93',color: '#402fd6'},
            // { name: '联系作者', link: '/about' , bgColor: '#fafcca',color: '#820bb5'},
            { name: '随便聊聊', link: '/' , bgColor: '#336699',color: 'white'},
            { name: '情感顾问', link: '/feeling' , bgColor: '#336699',color: 'white'},
            { name: '职业规划', link: '/career' , bgColor: '#336699',color: 'white'},
            { name: '育儿天地', link: '/education' , bgColor: '#336699',color: 'white'},
            { name: '联系作者', link: '/about' , bgColor: '#336699',color: 'white'},
        ],
    }
})

const navBackground = computed(() => {
    const menu = props.menuList.filter((item: any)=>{ return item.link === route.fullPath})
    return menu[0]?.bgColor || ''
})

const navColor = computed(() => {
    const menu = props.menuList.filter((item: any)=>{ return item.link === route.fullPath})
    return menu[0]?.color || ''
})

onMounted(() => {
    
})
</script>

<style>
.active{
    font-weight: 900;
    text-decoration: underline;
    text-underline-offset:5px;
}
</style>