<!-- samyang/src/views/products/steelclamps/SUC.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <!-- 라우트 기반 브레드크럼 -->
            <Breadcrumb />

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">
                    스크류 캠 클램프 (유니버설 샤클 타입) 특허
                </h2>
                <p class="product-code">SUC0.5 / 1 / 1.6 / 3.2</p>
            </div>

            <!-- 개요: 이미지 + 특징 -->
            <div class="product-overview">
                <div class="image-block">
                    <img :src="currentImage" :alt="captions[selectedIndex]" class="product-main-image" />
                    <p class="image-caption">{{ captions[selectedIndex] }}</p>
                    <div class="thumbnail-list">
                        <img v-for="(thumb, idx) in thumbnails" :key="idx" :src="thumb" class="thumb-img"
                            :class="{ 'thumb-active': idx === selectedIndex }" @click="selectedIndex = idx"
                            :alt="captions[idx]" />
                    </div>
                </div>
                <div class="features">
                    <h5 class="section-heading">특징</h5>
                    <ul>
                        <li>
                            토목·건축·조선·캔 제조 등 다양한 산업에서 강판 및 구조강을 들어 올리기,
                            수평 당김, 뒤집기 작업에 최적
                        </li>
                        <li>
                            샤클이 360° 회전하여 든다거나 당기는 각도를 안정적으로 유지하며,
                            폭넓은 수평 당김 작업이 가능
                        </li>
                        <li>
                            스크루와 특수 스프링 내장 라운드 캠이 무부하 상태에서도 초기 <br />고정력을
                            발생시키며, 진동 발생 시에도 확실히 물림
                        </li>
                        <li>하중이 무거울수록 클램핑력이 더욱 증가</li>
                    </ul>
                    <a href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_catalog_download&entryid=00001&fileid=00000002&/Page%20No.113%EF%BD%9EP138%20LIFTING%20CLAMPS%20FOR%20STEEL_0126.pdf"
                        class="btn-catalogue" target="_blank">
                        카탈로그 보기
                    </a>
                </div>
            </div>

            <!-- 사용 예시 -->
            <div class="bottom-images">
                <div class="bottom-image text-center">
                    <img :src="usageImage1" alt="사용 예시 1" />
                    <p class="howToUse_caption">사용 예시 1</p>
                </div>
                <div class="bottom-image text-center">
                    <img :src="usageImage2" alt="사용 각도" />
                    <p class="howToUse_caption">사용 각도</p>
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
                        <td>단조</td>
                    </tr>
                    <tr>
                        <th>마감</th>
                        <td>베이크드-온 처리</td>
                    </tr>
                    <tr>
                        <th>용량</th>
                        <td>0.5 / 1 / 1.6 / 3.2톤</td>
                    </tr>
                    <tr>
                        <th>클램프 범위</th>
                        <td>0～25mm ~ 0～40mm</td>
                    </tr>
                </tbody>
            </table>

            <!-- 관련 정보 -->
            <h5 class="section-heading">관련 정보</h5>
            <div class="related-buttons">
                <a href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_products&entryid=00285&fileid=00000009&/SUC_2403.pdf"
                    class="btn-catalogue" target="_blank">
                    매뉴얼
                </a>
                <a href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_products&entryid=00285&fileid=00000011&/SUC%20Parts.pdf"
                    class="btn-catalogue" target="_blank">
                    부품 목록
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import mainImage from '@/assets/images/products/steelclamps/english_products.00285.00000001.jpg'
import usageImage1 from '@/assets/images/products/steelclamps/english_products.00285.00000002.jpg'
import usageImage2 from '@/assets/images/products/steelclamps/english_products.00285.00000003.jpg'

export default {
    name: 'SUC',
    components: { Breadcrumb },
    data() {
        return {
            thumbnails: [mainImage],
            captions: ['SUC0.5 / 1 / 1.6 / 3.2'],
            selectedIndex: 0,
            usageImage1,
            usageImage2
        }
    },
    computed: {
        currentImage() {
            return this.thumbnails[this.selectedIndex]
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

/* 브레드크럼은 Breadcrumb 컴포넌트가 처리 */

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
    position: relative;
    flex: 1 1 300px;
    text-align: center;
    padding-bottom: 100px;
}

.product-main-image {
    max-width: 100%;
    max-height: 184px;
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

.thumbnail-list .thumb-img {
    width: 60px;
    border: 2px solid transparent;
    box-sizing: border-box;
    cursor: pointer;
}

.thumbnail-list .thumb-img.thumb-active {
    border-color: #2c4ea0 !important;
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
    margin-right: 1rem;
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

.howToUse_caption {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #555;
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
