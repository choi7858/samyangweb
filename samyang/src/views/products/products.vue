```vue
<!-- src/views/products/Category.vue -->
<template>
    <section class="product-category-section">
        <div class="inner-container">
            <!-- 전문가 브레드크럼 -->
            <nav aria-label="breadcrumb" class="breadcrumb-wrapper breadcrumbs-professional">
                <ol>
                    <li>
                        <router-link to="/">
                            <svg class="home-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 3.293l6 6V15h-4v-4H6v4H2V9.293l6-6z" />
                            </svg>
                            홈
                        </router-link>
                    </li>

                    <li aria-current="page">제품 소개</li>
                </ol>
            </nav>

            <!-- 메인 타이틀 -->
            <h1 class="category-heading">제품 소개</h1>

            <!-- 카테고리 그리드 -->
            <div class="product-grid">
                <router-link v-for="item in categories" :key="item.title" :to="item.to" class="product-card-link">
                    <div class="product-card">
                        <div class="image-container">
                            <img :src="item.img" :alt="item.title" />
                        </div>
                        <div class="product-title">{{ item.title }}</div>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import clampImg from '@/assets/images/products/GeneralHandTools&ToggleClamps.jpg'
import steelImg from '@/assets/images/products/LiftingClampsForSteel.jpg'
import cranesImg from '@/assets/images/products/Cranes.jpg'
import concreteImg from '@/assets/images/products/LiftingClampsForConcrete.jpg'
import housingImg from '@/assets/images/products/LiftingClampsForHousing.jpg'

export default {
    name: 'Category',
    data() {
        return {
            categories: [
                { to: '/products/clamps', img: clampImg, title: 'CLAMPS' },
                { to: '/products/steel-clamps', img: steelImg, title: 'LIFTING CLAMPS FOR STEEL' },
                { to: '/products/cranes', img: cranesImg, title: 'CRANES' },
                { to: '/products/concrete-clamps', img: concreteImg, title: 'LIFTING CLAMPS FOR CONCRETE' },
                { to: '/products/housing-clamps', img: housingImg, title: 'LIFTING CLAMPS FOR HOUSING' }
            ]
        }
    }
}
</script>

<style scoped>
/* 섹션 래퍼 */
.product-category-section {
    background: #f9f9f9;
    padding: 2rem 0;
}

.inner-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* 전문가 브레드크럼 */
.breadcrumb-wrapper.breadcrumbs-professional {
    margin-bottom: 1.5rem;
}

.breadcrumbs-professional ol {
    display: flex;
    align-items: center;
    background: #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    list-style: none;
    margin: 0;
}

.breadcrumbs-professional li {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    color: #555555;
}

.breadcrumbs-professional li+li::before {
    content: '›';
    margin: 0 1rem;
    color: #cccccc;
}

.breadcrumbs-professional li a {
    display: flex;
    align-items: center;
    color: #333333;
    text-decoration: none;
    font-weight: 500;
}

.breadcrumbs-professional li a:hover {
    color: #2c4ea0;
}

.breadcrumbs-professional li[aria-current] {
    font-weight: 600;
    color: #2c4ea0;
}

.home-icon {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
    fill: #2c4ea0;
}

/* 메인 타이틀 */
.category-heading {
    font-size: 2.25rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #2c4ea0;
    font-weight: 600;
}

/* 카테고리 그리드 */
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2rem;
}

.product-card-link {
    text-decoration: none;
}

.product-card {
    background: #ffffff;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.image-container {
    height: 160px;
    overflow: hidden;
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.product-card:hover .image-container img {
    transform: scale(1.05);
}

.product-title {
    padding: 1rem;
    font-size: 1rem;
    font-weight: 600;
    color: #333333;
    text-align: center;
}

/* 반응형 */
@media (max-width: 768px) {
    .inner-container {
        padding: 0 0.5rem;
    }

    .product-grid {
        gap: 1.5rem;
    }
}
</style>
```
