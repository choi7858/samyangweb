<!-- samyang/src/views/products/cactus/Cactus.vue -->
<template>
    <section class="product-list-section">
        <div class="inner-container">
            <h1 class="page-heading">CACTUS - 라쳇 케이블커터, 압착공구, 펌프, 유압 펀칭기 </h1>
            <p style="text-align: center;">Made in Japan</p>
            <Breadcrumb />
            <div class="product-list-grid">
                <router-link v-for="prod in products" :key="prod.code" :to="prod.to" class="item-link">
                    <div class="product-card">
                        <div class="image-container">
                            <img :src="prod.img" :alt="prod.name" />
                        </div>
                        <div class="product-info">
                            <div class="item-code">{{ prod.code }}</div>
                            <div class="item-name">{{ prod.name }}</div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'

// product images
import CC325 from '@/assets/images/products/cactus/CC_325.jpg'
import CC520 from '@/assets/images/products/cactus/CC_520.jpg'
import CC3 from '@/assets/images/products/cactus/CC-3.jpg'
import SH325M from '@/assets/images/products/cactus/SH-325M.jpg'
import CT2 from '@/assets/images/products/cactus/CT-2.jpg'
import SS325 from '@/assets/images/products/cactus/ss-325.jpg'
import SEP30DX from '@/assets/images/products/cactus/sep-30dx.jpg'
import SP2 from '@/assets/images/products/cactus/sp-2.jpg'
import HM650 from '@/assets/images/products/cactus/hm-650.jpg'

export default {
    name: 'Cactus',
    components: { Breadcrumb },
    data() {
        return {
            products: [
                { to: '/products/cactus/cc325', img: CC325, code: 'CC-325', name: '라쳇 케이블 커터' },
                { to: '/products/cactus/cc520', img: CC520, code: 'CC-520', name: '라쳇 케이블 커터' },
                { to: '/products/cactus/cc-3', img: CC3, code: 'CC-3', name: '유압식 케이블 커터' },
                { to: '/products/cactus/sh-325m', img: SH325M, code: 'SH-325M', name: '분리식 압착 헤드' },
                { to: '/products/cactus/ct-2', img: CT2, code: 'CT-2', name: '압축 공구 CT-2' },
                { to: '/products/cactus/ss-325', img: SS325, code: 'SS-325', name: '수동 압착 공구' },
                { to: '/products/cactus/sep-30dx', img: SEP30DX, code: 'SEP-30DX', name: '전동 펌프' },
                { to: '/products/cactus/sp-2', img: SP2, code: 'SP-2', name: '수동 유압 펌프' },
                { to: '/products/cactus/hm-650', img: HM650, code: 'HM-650', name: '유압 펀칭기' }
            ]
        }
    }
}
</script>

<style scoped>
/* 섹션 래퍼 */
.product-list-section {
    background: #f9f9f9;
    padding: 2rem 0;
}

.inner-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

.page-heading {
    font-size: 2.25rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #2c4ea0;
    font-weight: 600;
}

/* 제품 리스트 그리드 */
.product-list-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2rem;
}

/* 박스 통일: flex column, 고정 높이 */
.item-link {
    text-decoration: none;
}

.product-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #ffffff;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s, box-shadow 0.3s;
    height: 300px;
}

.product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

/* 이미지 원본 비율 유지 */
.image-container {
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0f0f0;
}

.image-container img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

/* 정보 영역 정돈 */
.product-info {
    padding: 0.75rem 1rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.item-code {
    font-weight: 600;
    font-size: 0.9rem;
    color: #2c4ea0;
    margin-bottom: 0.5rem;
    text-align: center;
}

.item-name {
    font-size: 1rem;
    color: #333333;
    text-align: center;
}

@media (max-width: 768px) {
    .inner-container {
        padding: 0 0.5rem;
    }

    .product-list-grid {
        gap: 1.5rem;
    }

    .product-card {
        height: auto;
    }
}
</style>
