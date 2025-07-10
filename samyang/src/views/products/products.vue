<!-- samyang/src/views/products/products.vue -->
<template>
    <main class="home-section bg-pattern">
        <section class="product-category-section">
            <div class="inner-container">
                <h1 class="category-heading">제품 소개</h1>

                <!-- 파트너 로고 섹션 -->
                <section class="partner-logos">
                    <div class="logos-container">
                        <img v-for="logo in logos" :key="logo.component" :src="logo.src" :alt="logo.alt"
                            :class="{ inactive: selectedCategory && selectedCategory !== logo.component }"
                            @click="selectCategory(logo.component)" class="logo-img" />
                    </div>
                </section>

                <!-- 제품 컴포넌트 출력 -->
                <div class="products-wrapper">
                    <component v-for="name in filteredComponents" :key="name" :is="name" />
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import aceLogo from '@/assets/images/logos/ace.png'
import cactusLogo from '@/assets/images/logos/cactus.png'
import supertoolLogo from '@/assets/images/logos/supertool.png'
import tanakaLogo from '@/assets/images/logos/tanaka.png'
import ykLogo from '@/assets/images/logos/yk.jpg'

import Supertool from '@/views/products/supertool/supertool.vue'
import ACE from '@/views/products/ace/Ace.vue'
import Cactus from '@/views/products/cactus/cactus.vue'
import Tanaka from '@/views/products/tanaka/tanaka.vue'

export default {
    name: 'Products',
    components: { Supertool, ACE, Cactus, Tanaka },
    data() {
        return {
            logos: [
                { src: supertoolLogo, alt: 'Supertool', component: 'Supertool' },
                { src: aceLogo, alt: 'ACE', component: 'ACE' },
                { src: cactusLogo, alt: 'Cactus', component: 'Cactus' },
                { src: tanakaLogo, alt: 'Tanaka', component: 'Tanaka' },
                { src: ykLogo, alt: 'YUKWANG', component: 'Tanaka' }
            ],
            selectedCategory: null
        }
    },
    computed: {
        filteredComponents() {
            const all = ['Supertool', 'ACE', 'Cactus', 'Tanaka']
            return this.selectedCategory ? [this.selectedCategory] : all
        }
    },
    methods: {
        selectCategory(key) {
            this.selectedCategory = this.selectedCategory === key ? null : key
        }
    }
}
</script>

<style scoped>
.inner-container {
    max-width: 90%;
    margin: 0 auto;
    padding: 0 1rem;
}

/* 메인 타이틀 */
.category-heading {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #2c4ea0;
    font-weight: 600;
}

/* 로고 그레이아웃 */
.partner-logos {
    padding: 2rem 1rem;
    background: #fff;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 2rem;
}

.logos-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 6rem;
    row-gap: 3rem;
}

.logo-img {
    height: 60px;
    object-fit: contain;
    cursor: pointer;
    transition: filter 0.3s, opacity 0.3s;
}

.logo-img.inactive {
    filter: grayscale(100%);
    opacity: 0.5;
}

/* 제품 컴포넌트 래퍼 (간격만 예시) */
.products-wrapper>*+* {
    margin-top: 3rem;
}

/* 반응형 */
@media (max-width: 768px) {
    .inner-container {
        padding: 0 0.5rem;
    }
}
</style>
