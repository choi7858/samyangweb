<!-- samyang/src/views/products/housingclamps/psb508-610-620.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <!-- 라우트 기반 브레드크럼 컴포넌트 -->
            <Breadcrumb />

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">2점식 리프팅 밸런스</h2>
                <p class="product-code">PSB508 / 610 / 620</p>
            </div>

            <!-- 오버뷰: 이미지 & 특징 -->
            <div class="product-overview">
                <div class="image-block">
                    <img :src="mainImage" alt="2점식 리프팅 밸런스" class="product-main-image" />
                    <div class="thumbnail-list">
                        <img :src="mainImage" class="thumb-img thumb-active" alt="2점식 리프팅 밸런스" />
                    </div>
                </div>
                <div class="features">
                    <h5 class="section-heading">특징</h5>
                    <ul>
                        <li>안전하고 균형 잡힌 작업을 위한 밸런스입니다.</li>
                        <li>
                            구성품: 슬링벨트, 샤클 타입, 슬링벨트, 샤클, 와이어 로프, 리프팅 링
                            총 3종이 제공됩니다.
                        </li>
                    </ul>
                    <a href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_catalog_download&entryid=00003&fileid=00000002&/Page%20No.149%EF%BD%9EP154%20LIFTING%20CLAMPS%20FOR%20HOUSING.pdf"
                        class="btn-catalogue" target="_blank">
                        카탈로그 보기
                    </a>
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
                        <td>베이크 도장</td>
                    </tr>
                    <tr>
                        <th>용량</th>
                        <td>500 / 600kg</td>
                    </tr>
                    <tr>
                        <th>스팬 길이</th>
                        <td>800 – 2,000mm</td>
                    </tr>
                </tbody>
            </table>

            <!-- 관련 정보 -->
            <h5 class="section-heading">관련 정보</h5>
            <div class="related-buttons">
                <a href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_products&entryid=00140&fileid=00000009&/PSB508%2C%20610%2C%20620.pdf"
                    class="btn-catalogue" target="_blank">
                    매뉴얼
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import mainImage from '@/assets/images/products/housingclamps/PSB508.jpg'

export default {
    name: 'PSB508610620',
    components: { Breadcrumb },
    data() {
        return {
            mainImage
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

.related-buttons {
    display: flex;
    margin-top: 1rem;
}

@media (max-width: 768px) {
    .product-overview {
        flex-direction: column;
    }
}
</style>
