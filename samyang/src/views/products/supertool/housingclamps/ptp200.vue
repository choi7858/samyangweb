<!-- samyang/src/views/products/housingclamps/ptp200.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <!-- 라우터 기반 브레드크럼 컴포넌트 -->
            <Breadcrumb />

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">패널 풀러</h2>
                <p class="product-code">PTP200</p>
            </div>

            <!-- 오버뷰: 이미지 & 특징 -->
            <div class="product-overview">
                <div class="image-block">
                    <img :src="mainImage" alt="패널 풀러" class="product-main-image" />
                    <div class="thumbnail-list">
                        <img :src="mainImage" class="thumb-img thumb-active" alt="패널 풀러" />
                    </div>
                </div>
                <div class="features">
                    <h5 class="section-heading">특징</h5>
                    <ul>
                        <li>패널 및 2×4 패널을 당길 때 사용합니다.</li>
                        <li>외부 패널을 조정할 때 사용합니다.</li>
                        <li>바닥 및 천장 패널을 당기고 연결할 때 사용합니다.</li>
                        <li>빔끼리 또는 목재 패널을 당기고 조립할 때 사용합니다.</li>
                    </ul>
                    <a href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_catalog_download&entryid=00003&fileid=00000002&/Page%20No.149%EF%BD%9EP154%20LIFTING%20CLAMPS%20FOR%20HOUSING.pdf"
                        class="btn-catalogue" target="_blank">
                        카탈로그 보기
                    </a>
                </div>
            </div>

            <!-- 사용 이미지 -->
            <div class="bottom-images">
                <div class="bottom-image text-center">
                    <img :src="usageImage1" alt="사용 예시 1" />
                </div>
                <div class="bottom-image text-center">
                    <img :src="usageImage2" alt="사용 예시 2" />
                </div>
            </div>

            <!-- 사양표 -->
            <h5 class="section-heading">사양</h5>
            <table class="spec-table">
                <tbody>
                    <tr>
                        <th>재질</th>
                        <td>특수 합금강</td>
                    </tr>
                    <tr>
                        <th>마감</th>
                        <td>니켈 크롬 도금</td>
                    </tr>
                    <tr>
                        <th>제품 사양</th>
                        <td>당김 스트로크: 30mm</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import mainImage from '@/assets/images/products/housingclamps/english_products.00119.00000001.jpg'
import usageImage1 from '@/assets/images/products/housingclamps/english_products.00119.00000002.jpg'
import usageImage2 from '@/assets/images/products/housingclamps/english_products.00119.00000003.jpg'

export default {
    name: 'PTP200',
    components: { Breadcrumb },
    data() {
        return {
            mainImage,
            usageImage1,
            usageImage2
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
    object-fit: contain;
}

.thumbnail-list {
    margin-top: 1rem;
}

.thumb-img {
    width: 60px;
    border: 2px solid #2c4ea0;
    box-sizing: border-box;
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
}

.section-heading {
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 1rem;
}

.bottom-images {
    display: flex;
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
    object-fit: contain;
}

.spec-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 3rem;
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

@media (max-width: 768px) {

    .product-overview,
    .bottom-images {
        flex-direction: column;
    }
}
</style>
