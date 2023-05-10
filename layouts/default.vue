<template>
    <div>
        <AppHeader />
        <div class="content">
            <slot />
        </div>
        <AppFooter />
    </div>
</template>
<style>
.content {
    min-height: calc(100vh - 124px);
}
</style>