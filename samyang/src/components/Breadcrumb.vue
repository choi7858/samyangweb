<template>
    <nav aria-label="breadcrumb" class="breadcrumb-wrapper breadcrumbs-professional">
        <ol>
            <li v-for="(item, idx) in breadcrumbItems" :key="idx" :aria-current="idx === lastIndex ? 'page' : null">
                <template v-if="idx < lastIndex">
                    <router-link :to="item.to">{{ item.text }}</router-link>
                </template>
                <template v-else>
                    {{ item.text }}
                </template>
            </li>
        </ol>
    </nav>
</template>

<script>
export default {
    name: 'Breadcrumb',
    computed: {
        breadcrumbItems() {
            return this.$route.meta?.breadcrumb || []
        },
        lastIndex() {
            return this.breadcrumbItems.length - 1
        }
    }
}
</script>

<style scoped>
.breadcrumb-wrapper.breadcrumbs-professional {
    margin-bottom: 1.5rem;
}

.breadcrumbs-professional ol {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    list-style: none;
}

.breadcrumbs-professional li+li::before {
    content: '›';
    margin: 0 1rem;
    color: #ccc;
}

.breadcrumbs-professional li a,
.breadcrumbs-professional li {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    color: #333;
    text-decoration: none;
}

.breadcrumbs-professional li[aria-current] {
    font-weight: 600;
    color: #2c4ea0;
}
</style>