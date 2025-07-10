<!-- samyang/src/views/products/supertool/steelclamps/FKH1.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <Breadcrumb />

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">복공판 리프팅 후크</h2>
                <p class="product-code">FKH1</p>
            </div>

            <!-- 개요: 이미지 + 특징 -->
            <div class="product-overview">
                <div class="image-block">
                    <img :src="mainImage" alt="도로 데킹 패널용 리프팅 후크" class="product-main-image" />
                    <div class="thumbnail-list">
                        <img v-for="(thumb, idx) in thumbnails" :key="idx" :src="thumb" alt="FKH1 썸네일"
                            class="thumb-img" />
                    </div>
                </div>
                <div class="features">
                    <h5 class="section-heading">특징</h5>
                    <ul>
                        <li>철골 데킹 패널및 복공판의 리프팅 및 설치에 최적화된 후크</li>
                        <li>경량·심플 설계로 손쉬운 조작 가능</li>
                        <li>본체는 다이포지드 특수 합금강으로 제작, 최적 템퍼링 처리로 <br />강도와 내구성 우수</li>
                    </ul>
                    <a href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_catalog_download&entryid=00001&fileid=00000002&/Page%20No.113%EF%BD%9EP138%20LIFTING%20CLAMPS%20FOR%20STEEL_0126.pdf"
                        class="btn-catalogue" target="_blank">
                        카탈로그 보기
                    </a>
                </div>
            </div>

            <!-- 사용 예시 이미지 -->
            <div class="bottom-images">
                <div class="bottom-image text-center">
                    <img :src="usageImage1" alt="사용 예시" />
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
                        <th>열처리</th>
                        <td>다이 포징</td>
                    </tr>
                    <tr>
                        <th>표면 마감</th>
                        <td>베이킹 처리</td>
                    </tr>
                    <tr>
                        <th>용량</th>
                        <td>1톤</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import mainImage from '@/assets/images/products/steelclamps/FKH1.jpg'
import usageImage1 from '@/assets/images/products/steelclamps/english_products.00261.00000002.jpg'

export default {
    name: 'FKH1',
    components: { Breadcrumb },
    data() {
        return {
            mainImage,
            thumbnails: [mainImage],
            usageImage1
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
}

.product-code {
    font-size: 1.25rem;
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
    object-fit: contain;
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

.section-heading {
    font-size: 1.25rem;
    color: #2c4ea0;
    margin: 1.5rem 0 1rem;
    font-weight: bold;
}

.features ul {
    padding-left: 1.2rem;
    margin-bottom: 1rem;
}

.features li {
    margin-bottom: 0.5rem;
}

.btn-catalogue {
    display: inline-block;
    background: #2c4ea0;
    color: #fff;
    padding: 0.5rem 1.5rem;
    text-decoration: none;
    font-weight: 500;
    margin-top: 1rem;
}

.bottom-images {
    display: flex;
    justify-content: center;
    background: #f4f4f4;
    padding: 2rem;
    margin-bottom: 3rem;
}

.bottom-image {
    text-align: center;
}

.bottom-image img {
    max-width: 100%;
    max-height: 250px;
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
    background: #f4f8fc;
    text-align: left;
    width: 30%;
}

.spec-table td {
    background: #f9fbfd;
}

@media (max-width: 768px) {

    .product-overview,
    .bottom-images {
        flex-direction: column;
    }
}
</style>
