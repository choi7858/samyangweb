<!-- samyang/src/views/products/supertool/supertool.vue -->
<template>
    <section class="product-list-section">
        <div class="inner-container">
            <h1 class="page-heading">SUPERTOOL - 리프팅 클램프</h1>
            <div class="supertool-info">
                <p class="made-in">Made in Japan</p>
                <a class="catalogue-btn"
                    href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_catalog_download&entryid=00016&fileid=00000002&/PRODUCT%20CATALOGUE_0126.pdf"
                    target="_blank" rel="noopener">
                    슈퍼툴 전체 카탈로그 다운로드
                </a>
            </div>
            <Breadcrumb />
            <div class="product-list-grid">
                <router-link v-for="item in categories" :key="item.title" :to="item.to" class="item-link">
                    <div class="product-card">
                        <div class="image-container">
                            <img :src="item.img" :alt="item.title" />
                        </div>
                        <div class="product-info">
                            <div class="item-code">{{ item.code || item.title }}</div>
                            <!-- <div class="item-name">{{ item.title }}</div> -->
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import clampImg from '@/assets/images/products/GeneralHandTools&ToggleClamps.jpg'
import steelImg from '@/assets/images/products/LiftingClampsForSteel.jpg'
import concreteImg from '@/assets/images/products/LiftingClampsForConcrete.jpg'
import housingImg from '@/assets/images/products/LiftingClampsForHousing.jpg'
import Breadcrumb from '@/components/Breadcrumb.vue'

export default {
    name: 'Supertool',
    components: { Breadcrumb },
    data() {
        return {
            categories: [
                {
                    to: '/products/supertool/steelclamps',
                    img: steelImg,
                    title: '강재용 리프팅 클램프'
                },
                {
                    to: '/products/supertool/concreteclamps',
                    img: concreteImg,
                    title: '콘크리트용 리프팅 클램프'
                },
                {
                    to: '/products/supertool/housingclamps',
                    img: housingImg,
                    title: '하우징용 리프팅 클램프'
                },
                {
                    to: '/products/supertool/clamps',
                    img: clampImg,
                    title: '파이프 용접용 클램프 외'
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

.supertool-info {
    position: relative;
    margin-bottom: 1.5rem;
    padding: 0.5rem 0;
}

/* 카탈로그 다운로드 버튼 */
.catalogue-btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    font-size: 0.875rem;
    padding: 0.5rem 0.75rem;
    background-color: #2c4ea0;
    color: #ffffff;
    border-radius: 0.25rem;
    text-decoration: none;
    transition: background-color 0.3s;
}

.catalogue-btn:hover {
    background-color: #1f356f;
}

/* Made in Japan 텍스트 */
.made-in {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    font-size: 1rem;
    color: #020202;
}
</style>
