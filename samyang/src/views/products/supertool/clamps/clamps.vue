<template>
    <section class="product-list-section bg-pattern">
        <div class="inner-container">

            <!-- 페이지 헤딩 -->
            <h1 class="page-heading">파이프 용접용 클램프 외</h1>
            <Breadcrumb />

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
import Breadcrumb from '@/components/Breadcrumb.vue'

export default {
    name: 'Clamps',
    components: { Breadcrumb },
    data() {
        return {
            products: [
                {
                    to: '/products/supertool/clamps/pipe-welding',
                    img: pipeWelding,
                    code: 'WOC6 / 12',
                    name: '파이프 용접 클램프'
                },
                {
                    to: '/products/supertool/clamps/ironman',
                    img: ironman,
                    code: 'AC36 / 45 / 50 / 50H / 60, ACL',
                    name: 'Iron Man (임시 구조용 클램프)'
                },
                {
                    to: '/products/supertool/clamps/cclamp-bahco-e',
                    img: bahcoE,
                    code: 'BC25E–200E',
                    name: 'C 클램프 (Bahco 타입) E'
                },
                {
                    to: '/products/supertool/clamps/cclamp-bahco',
                    img: bahco,
                    code: 'BC25–300',
                    name: 'C 클램프 (Bahco 타입)'
                },
                {
                    to: '/products/supertool/clamps/cclamp-heavy-wide-e',
                    img: heavyWideE,
                    code: 'CC50E / 75E / 100E / 125E',
                    name: 'C 클램프 헤비 듀티 와이드 타입 E'
                },
                {
                    to: '/products/supertool/clamps/cclamp-heavy-wide',
                    img: heavyWide,
                    code: 'CC50–200',
                    name: 'C 클램프 헤비 듀티 와이드 타입'
                },
                {
                    to: '/products/supertool/clamps/lclamp-heavy',
                    img: lclampHeavy,
                    code: 'FC1210E–1240E / 1220–1260 / 1425H–1480H / 1730SH–17100SH',
                    name: 'L 클램프 (헤비 듀티 타입) 슈퍼 헤비 듀티 타입'
                },
                {
                    to: '/products/supertool/clamps/supersetter',
                    img: supersetter,
                    code: 'FCW210 / FCW410 / 415 / 420',
                    name: '슈퍼 세터'
                },
                {
                    to: '/products/supertool/clamps/supersetter-rail',
                    img: supersetterRail,
                    code: 'FCW27120 / 30140 / 40175',
                    name: '슈퍼 세터 레일 타입'
                },
                {
                    to: '/products/supertool/clamps/welding-multi',
                    img: weldingMulti,
                    code: 'WMC2 / 4',
                    name: '용접 클램프 멀티 타입'
                }
            ]
        }
    }
}
</script>

<style scoped>
/* 섹션 래퍼 */
.product-list-section {
    background-color: #f9f9f9;
    padding: 2rem 0;
}

.product-list-section.bg-pattern {
    background: #f9f9f9 url('@/assets/images/backgrounds/bg-pattern.png') repeat;
    background-size: 25%;
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
