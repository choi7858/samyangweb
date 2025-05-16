<!-- src/views/products/clamps/CclampBahco.vue -->
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
                    <li aria-current="page">C CLAMP (Bahco Type)</li>
                </ol>
            </nav>

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">C CLAMP (Bahco Type)</h2>
                <p class="product-code">BC25–300</p>
            </div>

            <!-- 오버뷰: 이미지 & 특징 -->
            <div class="product-overview">
                <div class="image-block">
                    <img :src="mainImage" alt="C CLAMP" class="product-main-image" />
                    <div class="thumbnail-list">
                        <img v-for="(thumb, idx) in thumbnails" :key="idx" :src="thumb" class="thumb-img"
                            alt="thumbnail" />
                    </div>
                </div>
                <div class="features">
                    <h5>Features</h5>
                    <ul>
                        <li>Convenient for operation such as welding and temporary tightening.</li>
                        <li>Equipped with quick tightening handle.</li>
                        <li>The final turn by hexagonal wrench ensures the secure tightening.</li>
                    </ul>
                    <a href="https://www.supertool.co.jp/english/support/catalog_download.php" class="btn-catalogue"
                        target="_blank">
                        View Catalogue
                    </a>
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
                        <td>Cathodic Electrodeposition Coating</td>
                    </tr>
                    <tr>
                        <th>Clamp Range</th>
                        <td>25〜300mm</td>
                    </tr>
                    <tr>
                        <th>Sizes</th>
                        <td>All 10 sizes</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import bahco from '@/assets/images/products/clamps/cclamp-bahco.png'

export default {
    name: 'CclampBahco',
    data() {
        return {
            mainImage: bahco,
            thumbnails: [bahco]
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
    text-decoration: none;
    display: inline-block;
    margin-top: 0.5rem;
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
    .product-overview {
        flex-direction: column;
    }
}
</style>
