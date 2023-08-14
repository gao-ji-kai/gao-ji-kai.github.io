
<template>
    <Layout>
        <template #layout-bottom>
            <div class="i-footer" :class="{ 'has-sidebar': hasSidebar }">
                <template v-if="theme.footers && theme.footers.length">
                    <div class="i-footer-column" v-for="(item, idx) in theme.footers" v-html="item" :key="idx"></div>
                </template>
               
            </div>
        </template>
    </Layout>
</template>
<script setup>
import DefaultTheme from 'vitepress/theme'
import {useData} from 'vitepress';
import {useSidebar} from 'vitepress/dist/client/theme-default/composables/sidebar'

const {Layout} = DefaultTheme
const {theme} = useData()
const {hasSidebar} = useSidebar()
</script>
<style>
.i-footer {
    position: relative;
    z-index: var(--vp-z-index-footer);
    border-top: 1px solid var(--vp-c-gutter);
    padding: 32px 24px;
    background-color: var(--vp-c-bg);
}

@media (min-width: 768px) {
    .i-footer {
        padding: 32px;
    }
}

.i-footer.has-sidebar {
    display: none;
}

.i-footer-column {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 24px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-text-2);
    margin: 3px 0;
}
</style>

