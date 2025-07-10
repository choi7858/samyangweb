<!-- samyang/src/views/products/tanaka/tanaka.vue -->
<template>
    <section class="product-list-section">
        <div class="inner-container">
            <h1 class="page-heading">자동절단기용 화구(LPG), 포터블가스절단기</h1>
            <!-- <p style="text-align: center;">Made in Japan</p> -->
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
import Img3051II from '@/assets/images/products/tanaka/3051II.jpg'
import yukwang from '@/assets/images/products/tanaka/yukwang.jpg'
import taewon from '@/assets/images/products/tanaka/taewon.jpg'

export default {
    name: 'Tanaka',
    components: { Breadcrumb },
    data() {
        return {
            products: [
                {
                    to: '/products/tanaka/3051II',
                    img: Img3051II,
                    code: 'TANAKA(Made in Japan)',
                    name: '3051II'
                },
                {
                    to: '/products/tanaka/',
                    img: taewon,
                    code: '태원정공(Made in Korea)',
                    name: 'TW3051'
                },
                {
                    to: '/products/tanaka/yk',
                    img: yukwang,
                    code: '유광공업사(Made in Korea)',
                    name: '포터블가스절단기'
                }
            ]
        }
    }
}
</script>

<style scoped>
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
    width: 70%;
    margin: 0 auto;
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
