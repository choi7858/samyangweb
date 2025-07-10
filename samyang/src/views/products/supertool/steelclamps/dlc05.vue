<!-- samyang/src/views/products/steelclamps/DLC05.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <Breadcrumb />

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">드럼 리프트 클램프</h2>
                <p class="product-code">DLC0.5</p>
            </div>

            <!-- 개요: 이미지 & 특징 -->
            <div class="product-overview">
                <div class="image-block">
                    <img :src="mainImage" alt="DLC0.5 드럼 리프트 클램프" class="product-main-image" />
                    <p class="image-caption">DLC0.5 드럼 리프트 클램프</p>

                </div>
                <div class="features">
                    <h5 class="section-heading">특징</h5>
                    <ul>
                        <li>림을 클램핑하여 뚜껑이 있는 드럼 캔 및 뚜껑이 없는 드럼 캔을 모두 들어올릴 수 있습니다.</li>
                        <li>수직 및 수평 방향 모두에서 드럼 캔을 리프팅하고 뒤집을 수 있습니다.</li>
                        <li>본체와 샤클은 다이포지드 특수 합금강으로 제작되어 최적의 템퍼링을 통해 뛰어난 강도와 내구성을 제공합니다.</li>
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
                    <img :src="usageImage1" alt="사용 예시 1" />
                    <p class="usage-caption">사용 예시 1</p>
                </div>
                <div class="bottom-image text-center">
                    <img :src="usageImage2" alt="사용 예시 2" />
                    <p class="usage-caption">사용 예시 2</p>
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
                        <th>열처리</th>
                        <td>다이 포징</td>
                    </tr>
                    <tr>
                        <th>표면처리</th>
                        <td>크롬 도금</td>
                    </tr>
                    <tr>
                        <th>용량</th>
                        <td>0.5톤</td>
                    </tr>
                    <tr>
                        <th>클램핑 범위</th>
                        <td>0～18mm</td>
                    </tr>
                </tbody>
            </table>

            <!-- 관련 정보 -->
            <h5 class="section-heading">관련 정보</h5>
            <div class="related-buttons">
                <a href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_products&entryid=00255&fileid=00000009&/DLC0.5_241227.pdf"
                    class="btn-catalogue" target="_blank">
                    매뉴얼 다운로드
                </a>
                <a href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_products&entryid=00255&fileid=00000011&/DLC0.5_Parts_241227.pdf"
                    class="btn-catalogue" target="_blank">
                    부품 리스트
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import mainImage from '@/assets/images/products/steelclamps/DLC05.jpg'
import usageImage1 from '@/assets/images/products/steelclamps/english_products.00255.00000002.jpg'
import usageImage2 from '@/assets/images/products/steelclamps/english_products.00255.00000003.jpg'

export default {
    name: 'DLC05',
    components: { Breadcrumb },
    data() {
        return {
            mainImage,
            thumbnails: [mainImage],
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
    max-width: 980px;
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
    position: relative;
}

.product-main-image {
    max-width: 100%;
    max-height: 380px;
    object-fit: contain;
}

.image-caption {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #555;
}

.thumbnail-list {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem 0;
}

.thumb-img {
    width: 60px;
    border: 2px solid transparent;
    box-sizing: border-box;
    cursor: pointer;
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

.usage-caption {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #555;
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
    background-color: #f4f8fc;
    text-align: left;
    width: 30%;
}

.spec-table td {
    background-color: #f9fbfd;
}

.related-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

@media (max-width: 768px) {

    .product-overview,
    .bottom-images {
        flex-direction: column;
    }
}
</style>
