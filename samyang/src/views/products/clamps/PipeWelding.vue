```vue
<!-- src/views/products/clamps/PipeWelding.vue -->
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
                    <li aria-current="page">PIPE WELDING CLAMPS</li>
                </ol>
            </nav>

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">PIPE WELDING CLAMPS</h2>
                <p class="product-code">WOC6 / 12</p>
            </div>

            <!-- 오버뷰: 이미지 & 특징 -->
            <div class="product-overview">
                <div class="image-block">
                    <img :src="mainImage" alt="Pipe Welding Clamps" class="product-main-image" />
                    <div class="thumbnail-list">
                        <img v-for="(thumb, idx) in thumbnails" :key="idx" :src="thumb" class="thumb-img"
                            alt="thumbnail" />
                    </div>
                </div>
                <div class="features">
                    <h5>Features</h5>
                    <ul>
                        <li>Pipe fixing and centering can be done by easy one-touch.</li>
                        <li>Tightening screw on body has quick turning mechanism enabling quick attaching and detaching.
                        </li>
                        <li>Stainless steel on the pipe attaching part suitable for both steel and stainless steel pipe.
                        </li>
                        <li>No need for temporary welding by using these clamps.</li>
                        <li>Base material prevents scratches and defects on pipe surface.</li>
                    </ul>
                    <a href="https://www.supertool.co.jp/english/products/products.php?eid=00597" class="btn-catalogue"
                        target="_blank">
                        View Catalogue
                    </a>
                </div>
            </div>

            <!-- 상세 이미지 -->
            <div class="bottom-images">
                <div class="bottom-image text-center mb-3">
                    <img :src="leftImage" alt="Quick Turning Lever" class="detail-image" />
                    <p class="text-muted mt-2">Quick Turning Lever</p>
                </div>
                <div class="bottom-image text-center">
                    <img :src="rightImage" alt="Example of Use" class="detail-image" />
                    <p class="text-muted mt-2">Example of Use</p>
                </div>
            </div>

            <!-- 사양표 -->
            <h5 class="mt-5 fw-bold">Specifications</h5>
            <table class="spec-table">
                <tbody>
                    <tr>
                        <th>Clamp Range</th>
                        <td>Applicable pipe size: 1〜6B, 4〜12B<br />Applicable diameter: 34〜170, 110〜320mm</td>
                    </tr>
                    <tr>
                        <th>Net Weight</th>
                        <td>5.2kg / 7.9kg</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import mainImage from '@/assets/images/products/clamps/pipe-welding.png'
import leftImage from '@/assets/images/products/clamps/pipe-welding-detail-left.png'
import rightImage from '@/assets/images/products/clamps/pipe-welding-detail-right.png'

export default {
    name: 'PipeWelding',
    data() {
        return {
            mainImage,
            thumbnails: [mainImage],
            leftImage,
            rightImage
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
.breadcrumbs-professional ol {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    list-style: none;
    margin: 0 0 1.5rem 0;
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

/* 제품 헤더 */
.product-header {
    margin-bottom: 2rem;
}

.product-title {
    border-left: 5px solid #2c4ea0;
    padding-left: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
}

.product-code {
    font-size: 1.25rem;
    font-weight: bold;
    color: #2c4ea0;
    margin-top: 0.5rem;
}

/* 오버뷰: 이미지 & 특징 */
.product-overview {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
}

.image-block {
    flex: 0 0 40%;
    text-align: center;
}

.features {
    flex: 1;
    padding-left: 1rem;
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

/* 상세 이미지 */
.bottom-images {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    background: #f4f4f4;
    padding: 2rem;
    margin-bottom: 3rem;
}

.detail-image {
    max-width: 100%;
    max-height: 250px;
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

/* 반응형 */
@media (max-width: 768px) {

    .product-overview,
    .bottom-images {
        flex-direction: column;
        align-items: center;
    }

    .features {
        padding-left: 0;
        margin-top: 1.5rem;
    }
}
</style>
```
