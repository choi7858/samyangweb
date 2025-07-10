<!-- samyang/src/views/products/housingclamps/ugc200w.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <!-- 라우터 기반 브레드크럼 컴포넌트 -->
            <Breadcrumb />

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">ALC 패널용 수평 리프팅 클램프</h2>
                <p class="product-code">UGC200W</p>
            </div>

            <!-- 오버뷰: 이미지 & 특징 -->
            <div class="product-overview">
                <div class="image-block">
                    <img :src="mainImage" alt="ALC 패널용 수평 리프팅 클램프" class="product-main-image" />
                    <div class="thumbnail-list">
                        <img :src="mainImage" class="thumb-img thumb-active" alt="ALC 패널용 수평 리프팅 클램프" />
                    </div>
                </div>
                <div class="features">
                    <h5 class="section-heading">특징</h5>
                    <ul>
                        <li>ALC 바닥 패널용 리프팅 및 설치에 최적화되어 있습니다.</li>
                        <li>
                            걸림 범위는 핸들을 돌려서 작업물 폭에 맞게 조절할 수 있습니다.
                        </li>
                        <li>
                            나사 조임 잠금 장치를 통해 작업물을 단단히 고정하여 안전한<br /> 작업이 가능합니다.
                        </li>
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
                    <img :src="usageImage1" alt="사용 예시" />
                </div>
            </div>

            <!-- 사양표 -->
            <h5 class="section-heading">사양</h5>
            <table class="spec-table">
                <tbody>
                    <tr>
                        <th>재질</th>
                        <td>고강도 강재</td>
                    </tr>
                    <tr>
                        <th>마감</th>
                        <td>노랑색 베이크 도장</td>
                    </tr>
                    <tr>
                        <th>제품 사양</th>
                        <td>용량: 200kg</td>
                    </tr>
                    <tr>
                        <th>제품 사양</th>
                        <td>걸림 범위: 450～610mm</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import mainImage from '@/assets/images/products/housingclamps/UGC200W.jpg'
import usageImage1 from '@/assets/images/products/housingclamps/english_products.00141.00000002.jpg'

export default {
    name: 'UGC200W',
    components: { Breadcrumb },
    data() {
        return {
            mainImage,
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
    justify-content: center;
    background: #f4f4f4;
    padding: 2rem;
    margin-bottom: 3rem;
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
