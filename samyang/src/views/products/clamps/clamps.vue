```vue
<!-- src/views/products/clamps/Clamps.vue -->
<template>
    <section class="product-list-section">
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
                    <li>
                        <router-link to="/products">제품 소개</router-link>
                    </li>
                    <li aria-current="page">CLAMPS</li>
                </ol>
            </nav>

            <!-- 페이지 헤딩 -->
            <h1 class="page-heading">CLAMPS</h1>

            <!-- 제품 리스트 그리드 -->
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
import ironman from '@/assets/images/products/clamps/ironman.png'
import bahcoE from '@/assets/images/products/clamps/cclamp-bahco-e.png'
import bahco from '@/assets/images/products/clamps/cclamp-bahco.png'
import heavyWideE from '@/assets/images/products/clamps/cclamp-heavy-wide-e.png'
import heavyWide from '@/assets/images/products/clamps/cclamp-heavy-wide.png'
import lclampHeavy from '@/assets/images/products/clamps/lclamp-heavy.png'
import supersetter from '@/assets/images/products/clamps/supersetter.png'
import supersetterRail from '@/assets/images/products/clamps/supersetter-rail.png'
import weldingMulti from '@/assets/images/products/clamps/welding-multi.png'
import pipeWelding from '@/assets/images/products/clamps/pipe-welding.png'

export default {
    name: 'Clamps',
    data() {
        return {
            products: [
                { to: '/products/clamps/ironman', img: ironman, code: 'AC36 / 45 / 50 / 50H / 60, ACL', name: 'IRON MAN (Clamp for temporary structure)' },
                { to: '/products/clamps/cclamp-bahco-e', img: bahcoE, code: 'BC25E–200E', name: 'C CLAMP (Bahco Type) E' },
                { to: '/products/clamps/cclamp-bahco', img: bahco, code: 'BC25–300', name: 'C CLAMP (Bahco Type)' },
                { to: '/products/clamps/cclamp-heavy-wide-e', img: heavyWideE, code: 'CC50E / 75E / 100E / 125E', name: 'C CLAMP Heavy Duty Wide Type E' },
                { to: '/products/clamps/cclamp-heavy-wide', img: heavyWide, code: 'CC50–200', name: 'C CLAMP Heavy Duty Wide Type' },
                { to: '/products/clamps/lclamp-heavy', img: lclampHeavy, code: 'FC1210E–1240E / 1220–1260 / 1425H–1480H / 1730SH–17100SH', name: 'L CLAMP (Heavy Duty Type) Super Heavy Duty type' },
                { to: '/products/clamps/supersetter', img: supersetter, code: 'FCW210 / FCW410 / 415 / 420', name: 'SUPER SETTER' },
                { to: '/products/clamps/supersetter-rail', img: supersetterRail, code: 'FCW27120 / 30140 / 40175', name: 'SUPER SETTER Rail Type' },
                { to: '/products/clamps/welding-multi', img: weldingMulti, code: 'WMC2 / 4', name: 'WELDING CLAMPS, Multi Type' },
                { to: '/products/clamps/pipe-welding', img: pipeWelding, code: 'WOC6 / 12', name: 'PIPE WELDING CLAMPS' }
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
}

.breadcrumbs-professional li+li::before {
    content: '›';
    margin: 0 1rem;
    color: #cccccc;
}

.breadcrumbs-professional li a,
.breadcrumbs-professional li {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    color: #333333;
    text-decoration: none;
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

/* 페이지 헤딩 */
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
```
