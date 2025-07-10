<template>
    <section class="product-list-section bg-pattern">
        <div class="inner-container">
            <h1 class="page-heading">콘크리트용 리프팅 클램프</h1>
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
import AMC250N from '@/assets/images/products/concreteclamps/AMC250N.jpg'
import BUC1000A from '@/assets/images/products/concreteclamps/BUC1000A.JPG'
import BUC240N from '@/assets/images/products/concreteclamps/BUC240N.jpg'
import CGC250 from '@/assets/images/products/concreteclamps/CGC250.jpg'
import CGC250N from '@/assets/images/products/concreteclamps/CGC250N.jpg'
import KBC500WA from '@/assets/images/products/concreteclamps/KBC500WA-1.jpg'
import KBC500WH from '@/assets/images/products/concreteclamps/KBC500W-1.jpg'
import LSB2H from '@/assets/images/products/concreteclamps/LSB2H-1.jpg'
import SKC150 from '@/assets/images/products/concreteclamps/SKC150.jpg'
import Breadcrumb from '@/components/Breadcrumb.vue'

export default {
    name: 'ConcreteClamps',
    components: { Breadcrumb },
    data() {
        return {
            products: [
                {
                    to: '/products/supertool/concreteclamps/cgc250-500-1000',
                    img: CGC250,
                    code: 'CGC250 / 500 / 1000',
                    name: '콘크리트 자재용 리프팅 클램프 (캠 타입)'
                },
                {
                    to: '/products/supertool/concreteclamps/cgc250n-500n',
                    img: CGC250N,
                    code: 'CGC250N / 500N',
                    name: '콘크리트 자재용 리프팅 클램프 (폴리우레탄 패드 타입)'
                },
                {
                    to: '/products/supertool/concreteclamps/amc250n-500n',
                    img: AMC250N,
                    code: 'AMC250N / 500N',
                    name: '콘크리트 자재용 리프팅 클램프 (폴리우레탄 패드, 클램프 범위 조절 가능)'
                },
                {
                    to: '/products/supertool/concreteclamps/buc1000a',
                    img: BUC1000A,
                    code: 'BUC1000A',
                    name: 'U자형 콘크리트 홈통용 자동 내부 확장 리프팅 클램프 (패드 타입)'
                },
                {
                    to: '/products/supertool/concreteclamps/buc240n',
                    img: BUC240N,
                    code: 'BUC240N',
                    name: 'U자형 콘크리트 홈통용 내부 확장 리프팅 클램프 (패드 타입)'
                },
                {
                    to: '/products/supertool/concreteclamps/kbc500wa',
                    img: KBC500WA,
                    code: 'KBC500WA',
                    name: '콘크리트 뱅크 블록용 자동 배치 리프팅 클램프 (와이어 로프 및 링 포함)'
                },
                {
                    to: '/products/supertool/concreteclamps/kbc500wh',
                    img: KBC500WH,
                    code: 'KBC500WH',
                    name: '콘크리트 뱅크 블록용 배치 리프팅 클램프 (와이어 로프 및 링 포함)'
                },
                {
                    to: '/products/supertool/concreteclamps/lsb2h',
                    img: LSB2H,
                    code: 'LSB2H',
                    name: '밸런스 (링 및 상부 와이어 로프가 있는 조절형 스팬 타입)'
                },
                {
                    to: '/products/supertool/concreteclamps/skc150-1250d',
                    img: SKC150,
                    code: 'SKC150~1250D',
                    name: '콘크리트 자재용 리프팅 클램프 (캐리잉 핸들 / 샤클 타입)'
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
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0, 0.05);
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
