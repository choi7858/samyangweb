<!-- src/views/products/clamps/SuperSetter.vue -->
<template>
    <section class="product-detail-section">
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
                    <li>
                        <router-link to="/products/clamps">CLAMPS</router-link>
                    </li>
                    <li aria-current="page">SUPER SETTER</li>
                </ol>
            </nav>

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">SUPER SETTER</h2>
                <p class="product-code">FCW210 / FCW410 / 415 / 420</p>
            </div>

            <!-- 오버뷰: 이미지 & 특징 -->
            <div class="product-overview">
                <div class="image-block">
                    <img :src="mainImage" alt="Super Setter" class="product-main-image" />
                    <div class="thumbnail-list">
                        <img v-for="(thumb, idx) in thumbnails" :key="idx" :src="thumb" class="thumb-img"
                            alt="thumbnail" />
                    </div>
                </div>
                <div class="features">
                    <h5>Features</h5>
                    <ul>
                        <li>Square pipe is strong and lightweight using high tensile steel (STKT590).</li>
                        <li>Easy and flexible for temporary stabilizing of welded, steel structures, bridges and civil
                            engineering work.</li>
                        <li>Optimal for assembling temporary structures and framing at civil engineering and
                            construction sites.</li>
                        <li>Optimal for tightening and holding work, and also for expanding and supporting work.</li>
                        <li>Full set is available: FCW4000.</li>
                        <li>FCW210 is for light operation.</li>
                    </ul>
                    <a href="https://www.supertool.co.jp/english/support/catalog_download.php" class="btn-catalogue"
                        target="_blank">
                        View Catalogue
                    </a>
                </div>
            </div>

            <!-- 상세 이미지 -->
            <div class="bottom-images">
                <div class="bottom-image text-center">
                    <img :src="imageOne" alt="Super Setter on large structure" />
                    <p class="text-muted mt-2">Super Setter on large structure</p>
                </div>
                <div class="bottom-image text-center">
                    <img :src="imageTwo" alt="Super Setter clamping frame" />
                    <p class="text-muted mt-2">Super Setter clamping frame</p>
                </div>
            </div>

            <!-- 사양표 -->
            <h5 class="mt-5 fw-bold">Specifications</h5>
            <table class="spec-table">
                <tbody>
                    <tr>
                        <th>Material</th>
                        <td>Special Alloy Steel</td>
                    </tr>
                    <tr>
                        <th>Finish</th>
                        <td>Nickel Plate</td>
                    </tr>
                    <tr>
                        <th>FCW210</th>
                        <td>Clamp range 0〜700mm, depth 100mm</td>
                    </tr>
                    <tr>
                        <th>FCW410/415/420</th>
                        <td>Clamp range 0〜750mm, depth 100/150/200mm</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import mainImage from '@/assets/images/products/clamps/supersetter-main.png'
import imageOne from '@/assets/images/products/clamps/supersetter-use1.png'
import imageTwo from '@/assets/images/products/clamps/supersetter-use2.png'

export default {
    name: 'SuperSetter',
    data() {
        return {
            mainImage,
            thumbnails: [mainImage],
            imageOne,
            imageTwo
        }
    }
}
</script>

<style scoped>
.product-detail-section {
    background: #f9f9f9;
    padding: 2rem 0;
}

.inner-container {
    max-width: 960px;
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
    background: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    list-style: none;
}

.breadcrumbs-professional li+li::before {
    content: '›';
    margin: 0 1rem;
    color: #ccc;
}

.breadcrumbs-professional li a,
.breadcrumbs-professional li {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    color: #333;
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

.product-header {
    margin-bottom: 2rem;
}

.product-title {
    border-left: 5px solid #2c4ea0;
    padding-left: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: #000;
}

.product-code {
    font-size: 1.25rem;
    font-weight: bold;
    color: #2c4ea0;
    margin-top: 0.5rem;
}

.product-overview {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 3rem;
}

.image-block {
    flex: 1 1 300px;
    text-align: center;
}

.product-main-image {
    max-width: 100%;
    max-height: 280px;
    margin-top: 50px;
}

.thumbnail-list {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 0.75rem;
}

.thumb-img {
    width: 60px;
    border: 1px solid #ccc;
}

.features {
    flex: 1 1 300px;
    padding-left: 0.9rem;
    padding-right: 0.9rem;
}

.features h5 {
    font-weight: bold;
    margin-bottom: 0.75rem;
}

.features ul {
    padding-left: 0.5rem;
    margin-bottom: 1rem;
}

.features li {
    margin-bottom: 0.5rem;
}

.btn-catalogue {
    background-color: #2c4ea0;
    color: #fff;
    font-weight: 500;
    padding: 0.5rem 1.5rem;
    text-decoration: none;
    display: inline-block;
    margin-top: 0.5rem;
}

.bottom-images {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    background: #f4f4f4;
    padding: 2rem;
    margin-bottom: 3rem;
}

.bottom-image {
    flex: 1 1 45%;
    text-align: center;
}

.bottom-image img {
    max-width: 100%;
    max-height: 250px;
}

.bottom-image .text-muted {
    margin-top: 0.5rem;
    color: #666;
}

.spec-table {
    width: 100%;
    border-collapse: collapse;
}

.spec-table th,
.spec-table td {
    padding: 0.75rem 1rem;
    border: 1px solid #e0e0e0;
}

.spec-table th {
    background-color: #f4f8fc;
    width: 30%;
    text-align: left;
}

.spec-table td {
    background-color: #f9fbfd;
}

@media (max-width: 768px) {

    .product-overview,
    .bottom-images {
        flex-direction: column;
    }
}
</style>
```
