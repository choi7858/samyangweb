<!-- samyang/src/views/products/tanaka/yk.vue -->
<template>
    <section class="product-list-section">
        <div class="inner-container">
            <!-- 페이지 헤딩 -->
            <h1 class="page-heading">유광공업 - 포터블가스절단기</h1>
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
import Breadcrumb from '@/components/Breadcrumb.vue'

// YK 시리즈 이미지
import YK20 from '@/assets/images/products/tanaka/yk-20.jpg'
import YK150 from '@/assets/images/products/tanaka/yk-150.jpg'
import YK200 from '@/assets/images/products/tanaka/yk-200.jpg'
import YK300 from '@/assets/images/products/tanaka/yk-300.jpg'
import YK400 from '@/assets/images/products/tanaka/yk-400.jpg'
import YK450 from '@/assets/images/products/tanaka/yk-450.jpg'
import YK72d from '@/assets/images/products/tanaka/yk-72D.jpg'
import YK600d from '@/assets/images/products/tanaka/yk-600D.jpg'

export default {
    name: 'YK',
    components: { Breadcrumb },
    data() {
        return {
            products: [
                {
                    to: '/products/tanaka/yk-20',
                    img: YK20,
                    code: 'YK-20',
                    name: '수동 파이프 가스 절단기'
                },
                {
                    to: '/products/tanaka/yk-150',
                    img: YK150,
                    code: 'YK-150',
                    name: '경자동 가스 절단기'
                },
                {
                    to: '/products/tanaka/yk-200',
                    img: YK200,
                    code: 'YK-200',
                    name: '자동 파이프 가스 절단기'
                },
                {
                    to: '/products/tanaka/yk-300',
                    img: YK300,
                    code: 'YK-300',
                    name: '자동 가스 절단기'
                },
                {
                    to: '/products/tanaka/yk-400',
                    img: YK400,
                    code: 'YK-400',
                    name: '자동 가스 후판 절단기'
                },
                {
                    to: '/products/tanaka/yk-450',
                    img: YK450,
                    code: 'YK-450',
                    name: '모형 전용 절단기'
                },
                {
                    to: '/products/tanaka/yk-72d',
                    img: YK72d,
                    code: 'YK-72D',
                    name: '3차원 가스 절단기'
                },
                {
                    to: '/products/tanaka/yk-600d',
                    img: YK600d,
                    code: 'YK-600D',
                    name: '파이프 홀 절단기'
                }
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
