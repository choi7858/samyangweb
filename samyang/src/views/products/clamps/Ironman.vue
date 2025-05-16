<!-- src/views/products/clamps/Ironman.vue -->
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
                    <li aria-current="page">IRON MAN</li>
                </ol>
            </nav>

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">IRON MAN (Clamp for temporary structure)</h2>
                <p class="product-code">AC36 / 45 / 50 / 50H / 60, ACL</p>
            </div>

            <!-- 오버뷰: 이미지 & 특징 -->
            <div class="product-overview">
                <div class="image-block">
                    <img :src="mainImage" alt="IRON MAN" class="product-main-image" />
                    <div class="thumbnail-list">
                        <img v-for="(thumb, idx) in thumbnails" :key="idx" :src="thumb" class="thumb-img"
                            alt="IRON MAN thumbnail" />
                    </div>
                </div>
                <div class="features">
                    <h5>Features</h5>
                    <ul>
                        <li>Optimal for assembling materials for temporary structures such as working and elevating
                            levels.</li>
                        <li>Quick and safe assembly and disassembly of structures compared to bolted and welded
                            structures.</li>
                        <li>The point of bolt is designed to bite into and firmly hold steel material.</li>
                        <li>AC50 / 50H / 60 is authorized items approved by temporary structure industrial association
                            of Japan.</li>
                    </ul>
                    <a href="https://www.s.co.jp/english/support/catalog_download.php" class="btn-catalogue"
                        target="_blank">View Catalogue</a>
                </div>
            </div>

            <!-- 상세 이미지 -->
            <div class="bottom-images">
                <div class="bottom-image text-center">
                    <img :src="detailLeft" alt="ACL" />
                    <p class="text-muted">ACL</p>
                </div>
                <div class="bottom-image text-center">
                    <img :src="detailRight" alt="Structure Illustration" />
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
                        <td>Colored Chromate</td>
                    </tr>
                    <tr>
                        <th>Clamp Range</th>
                        <td>9〜36 / 9〜45 / 9〜50 / 21〜60mm, ACL: 9〜22 / 5〜19mm</td>
                    </tr>
                    <tr>
                        <th>Sizes</th>
                        <td>All 6 sizes</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import mainImage from '@/assets/images/products/clamps/ironman.png'
import detailLeft from '@/assets/images/products/clamps/ironman-detail-left.png'
import detailRight from '@/assets/images/products/clamps/ironman-detail-right.png'

export default {
    name: 'Ironman',
    data() {
        return {
            mainImage,
            thumbnails: [mainImage],
            detailLeft,
            detailRight
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

/* 오버뷰 레이아웃 */
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
}

.features h5 {
    font-weight: bold;
    margin-bottom: 0.75rem;
}

.features ul {
    padding-left: 1.2rem;
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
    border-radius: 0;
    text-decoration: none;
}

/* 상세 이미지 */
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
    max-height: 250px;
    max-width: 100%;
}

.bottom-image .text-muted {
    margin-top: 0.5rem;
    color: #666;
}

/* 사양표 */
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
