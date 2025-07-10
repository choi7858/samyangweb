<template>
    <section class="product-list-section bg-pattern">
        <div class="inner-container">
            <!-- 페이지 헤딩 -->
            <h1 class="page-heading">하우징 클램프</h1>
            <!-- 라우트 기반 브레드크럼 -->
            <Breadcrumb />

            <!-- 제품 리스트 그리드 -->
            <div class="product-list-grid">
                <router-link v-for="prod in products" :key="prod.code" :to="prod.path" class="item-link">
                    <div class="product-card">
                        <div class="image-container">
                            <img :src="prod.image" :alt="prod.alt" />
                        </div>
                        <div class="product-info">
                            <div class="item-code">{{ prod.code }}</div>
                            <div class="item-name">{{ prod.title }}</div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import BLC200 from '@/assets/images/products/housingclamps/BLC200-1.jpg'
import PAC260 from '@/assets/images/products/housingclamps/PAC260.jpg'
import PSB508 from '@/assets/images/products/housingclamps/PSB508.jpg'
import PSC100 from '@/assets/images/products/housingclamps/PSC100.jpg'
import PSC260 from '@/assets/images/products/housingclamps/PSC260.jpg'
import PTC100 from '@/assets/images/products/housingclamps/PTC100-1.jpg'
import PTC150 from '@/assets/images/products/housingclamps/PTC150-1.jpg'
import PTC200 from '@/assets/images/products/housingclamps/PTC200-1.jpg'
import PTP200 from '@/assets/images/products/housingclamps/PTP200.jpg'
import UGC200W from '@/assets/images/products/housingclamps/UGC200W.jpg'
import Breadcrumb from '@/components/Breadcrumb.vue'

export default {
    name: 'HousingClamps',
    components: { Breadcrumb },
    data() {
        return {
            products: [
                {
                    code: 'PTC100',
                    title: '금형 프레임/패널용 리프팅 클램프',
                    path: '/products/supertool/housingclamps/ptc100',
                    image: PTC100,
                    alt: '금형 프레임/패널용 리프팅 클램프'
                },
                {
                    code: 'PTC150 / 250',
                    title: '패널/빔용 리프팅 클램프',
                    path: '/products/supertool/housingclamps/ptc150-250',
                    image: PTC150,
                    alt: '패널/빔용 리프팅 클램프'
                },
                {
                    code: 'PTC200',
                    title: '2x4 패널용 리프팅 클램프',
                    path: '/products/supertool/housingclamps/ptc200',
                    image: PTC200,
                    alt: '2x4 패널용 리프팅 클램프'
                },
                {
                    code: 'BLC200',
                    title: '목재 빔용 리프팅 클램프',
                    path: '/products/supertool/housingclamps/blc200',
                    image: BLC200,
                    alt: '목재 빔용 리프팅 클램프'
                },
                {
                    code: 'PAC260',
                    title: 'ALC 패널용 리프팅 클램프',
                    path: '/products/supertool/housingclamps/pac260',
                    image: PAC260,
                    alt: 'ALC 패널용 리프팅 클램프'
                },
                {
                    code: 'PSB508 / 610 / 620',
                    title: '2점 리프팅 밸런스',
                    path: '/products/supertool/housingclamps/psb508-610-620',
                    image: PSB508,
                    alt: '2점 리프팅 밸런스'
                },
                {
                    code: 'PSC100',
                    title: '패널용 리프팅 클램프',
                    path: '/products/supertool/housingclamps/psc100',
                    image: PSC100,
                    alt: '패널용 리프팅 클램프'
                },
                {
                    code: 'PSC260',
                    title: '몰딩 보드용 리프팅 클램프',
                    path: '/products/supertool/housingclamps/psc260',
                    image: PSC260,
                    alt: '몰딩 보드용 리프팅 클램프'
                },
                {
                    code: 'PTP200',
                    title: '패널 풀러',
                    path: '/products/supertool/housingclamps/ptp200',
                    image: PTP200,
                    alt: '패널 풀러'
                },
                {
                    code: 'UGC200W',
                    title: 'ALC 패널용 수평 리프팅 클램프',
                    path: '/products/supertool/housingclamps/ugc200w',
                    image: UGC200W,
                    alt: 'ALC 패널용 수평 리프팅 클램프'
                }
            ]
        }
    }
}
</script>

<style scoped>
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

.page-heading {
    font-size: 2.25rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #2c4ea0;
    font-weight: 600;
}

.product-list-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2rem;
}

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
