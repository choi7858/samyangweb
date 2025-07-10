<template>
    <section class="product-list-section">
        <div class="inner-container">
            <h1 class="page-heading">SUWA - A.C.E 에어 임팩트 렌치</h1>
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
import ACE200PN from '@/assets/images/products/ace/ACE-200PN.png'
import ACE535S from '@/assets/images/products/ace/ACE-535S.png'
import ACE2300P from '@/assets/images/products/ace/ACE-2300P.png'
import ACE2500PN from '@/assets/images/products/ace/ACE-2500PN.png'
import ACE3200S from '@/assets/images/products/ace/ACE-3200S.png'
import ACE4000PN from '@/assets/images/products/ace/ACE-4000PN.png'
import ACE4500PN from '@/assets/images/products/ace/ACE-4500PN.png'
import SI1490B from '@/assets/images/products/ace/SI-1490B.png'
import ACE5000SN from '@/assets/images/products/ace/ACE-5000SN.jpg'
import ACE551S from '@/assets/images/products/ace/ACE-551S.jpg'
import Breadcrumb from '@/components/Breadcrumb.vue'

export default {
    name: 'Ace',
    components: { Breadcrumb },
    data() {
        return {
            products: [
                { to: '/products/ace/ACE200PN', img: ACE200PN, code: '3/4 inch', name: 'ACE-200PN' },
                { to: '/products/ace/ACE2300P', img: ACE2300P, code: '3/4 inch', name: 'ACE-2300P' },
                { to: '/products/ace/ACE2500PN', img: ACE2500PN, code: '3/4 inch', name: 'ACE-2500PN' },
                { to: '/products/ace/ACE3200S', img: ACE3200S, code: '1 inch', name: 'ACE-3200S' },
                { to: '/products/ace/ACE4000PN', img: ACE4000PN, code: '1 inch', name: 'ACE-4000PN' },
                { to: '/products/ace/ACE4500PN', img: ACE4500PN, code: '1 inch', name: 'ACE-4500PN' },
                { to: '/products/ace/ACE5000SN', img: ACE5000SN, code: '1 inch', name: 'ACE-5000SN' },
                { to: '/products/ace/ACE535S', img: ACE535S, code: '1 inch', name: 'ACE-535S' },
                { to: '/products/ace/ACE551S', img: ACE551S, code: '1 ½ inch', name: 'ACE-551S' },
                { to: '/products/ace/SI1490B', img: SI1490B, code: '1/2 inch', name: 'SI-1490B' },
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
