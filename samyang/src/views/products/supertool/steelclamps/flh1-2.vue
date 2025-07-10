<!-- samyang/src/views/products/steelclamps/FLH12.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <Breadcrumb />

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">포크리프트용 리프팅 후크</h2>
                <p class="product-code">FLH1 / FLH2</p>
            </div>

            <!-- 개요: 이미지 & 특징 -->
            <div class="product-overview">
                <div class="image-block">
                    <img :src="mainImage" alt="포크리프트용 리프팅 후크" class="product-main-image" />
                    <div class="thumbnail-list">
                        <img v-for="(thumb, idx) in thumbnails" :key="idx" :src="thumb" :alt="`FLH${idx + 1} 썸네일`"
                            class="thumb-img" />
                    </div>
                </div>
                <div class="features">
                    <h5 class="section-heading">특징</h5>
                    <ul>
                        <li>밸런스를 장착하면 포크리프트가 이동식 크레인으로 변환됩니다.</li>
                        <li>고정 볼트만 조여서 밸런스를 간편하게 장착합니다.</li>
                        <li>스위블 후크에 래치가 부착되어 있어 전 방향에서 사용 가능하며 진동에도 안전합니다.</li>
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

            <!-- 사양 -->
            <h5 class="section-heading">사양</h5>
            <table class="spec-table">
                <tbody>
                    <tr>
                        <th>재질</th>
                        <td>특수 합금강</td>
                    </tr>
                    <tr>
                        <th>마감</th>
                        <td>옐로우 베이킹 처리</td>
                    </tr>
                    <tr>
                        <th>용량</th>
                        <td>1톤 / 2톤</td>
                    </tr>
                    <tr>
                        <th>포크 후크 적용 범위</th>
                        <td>
                            FLH1: 폭 70～120mm × 두께 15～40mm<br>
                            FLH2: 폭 120～150mm × 두께 38～65mm
                        </td>
                    </tr>
                    <tr>
                        <th>추가 설계</th>
                        <td>2톤 모델에는 더 큰 후크 치수가 적용되어 작업이 용이합니다.</td>
                    </tr>
                </tbody>
            </table>

            <!-- 관련 정보 -->
            <h5 class="section-heading">관련 정보</h5>
            <div class="related-buttons">
                <a href="../../cmsdesigner/dlfile.php?entryname=english_products&entryid=00259&fileid=00000009&/FLH1%2C%202.pdf"
                    class="btn-catalogue" target="_blank">
                    매뉴얼 다운로드
                </a>
                <a href="../../cmsdesigner/dlfile.php?entryname=english_products&entryid=00259&fileid=00000011&/FLH1%2C2%20Parts.pdf"
                    class="btn-catalogue" target="_blank">
                    부품 리스트
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import mainImage from '@/assets/images/products/steelclamps/FLH2.jpg'
import usageImage1 from '@/assets/images/products/steelclamps/FLH2.jpg'
export default {
    name: 'FLH12',
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
    gap: 2rem;
    background: #f4f4f4;
    padding: 2rem;
    margin-bottom: 3rem;
}

.bottom-image img {
    max-width: 100%;
    max-height: 250px;
}

.spec-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 2rem;
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

.related-buttons {
    margin-top: 1rem;
}

.related-buttons .btn-catalogue {
    margin-right: 1rem;
}

@media (max-width: 768px) {

    .product-overview,
    .bottom-images {
        flex-direction: column;
    }
}
</style>
