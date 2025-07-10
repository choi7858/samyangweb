<!-- samyang/src/views/products/supertool/steelclamps/HLC-S.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <Breadcrumb />

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">빔 리프팅 클램프</h2>
                <p class="product-code">HLC0.5S～3S</p>
            </div>

            <!-- 개요: 이미지 전환 + 특징 -->
            <div class="product-overview">
                <div class="image-block">
                    <img :src="currentImage" :alt="captions[selectedIndex]" class="product-main-image" />
                    <p class="image-caption">{{ captions[selectedIndex] }}</p>
                    <div class="thumbnail-list">
                        <img v-for="(thumb, idx) in thumbnails" :key="idx" :src="thumb" :alt="captions[idx]"
                            class="thumb-img" :class="{ 'thumb-active': idx === selectedIndex }"
                            @click="selectedIndex = idx" />
                    </div>
                </div>

                <div class="features">
                    <h5 class="section-heading">특징</h5>
                    <ul>
                        <li>“H”, “I”, “T”, “L” 형 빔을 수평으로 리프팅하기에 최적화된<br /> 소형·경량 클램프</li>
                        <li>클램핑 시 구조물이 거의 완벽하게 수평을 유지</li>
                        <li>슬링 와이어 장력 완화 시에도 스프링 초기 클램핑력으로<br /> 클램프가 이탈하지 않음</li>
                        <li>다이포지드 특수 합금강으로 제작되어 강도 및 내구성 우수</li>
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
                        <th>열처리</th>
                        <td>다이 포징</td>
                    </tr>
                    <tr>
                        <th>표면 마감</th>
                        <td>크롬 도금</td>
                    </tr>
                    <tr>
                        <th>용량</th>
                        <td>0.5～3톤</td>
                    </tr>
                    <tr>
                        <th>클램핑 범위</th>
                        <td>1～13mm, 12～35mm</td>
                    </tr>
                </tbody>
            </table>

            <!-- 관련 정보 -->
            <h5 class="section-heading">관련 정보</h5>
            <div class="related-buttons">
                <a href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_products&entryid=00301&fileid=00000009&/HLC-S-W_250324.pdf"
                    class="btn-catalogue" target="_blank">
                    매뉴얼 다운로드
                </a>
                <a href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_products&entryid=00301&fileid=00000011&/HLC-S-W_Parts_250324.pdf"
                    class="btn-catalogue" target="_blank">
                    부품 리스트
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import firstImage from '@/assets/images/products/steelclamps/english_products.00301.00000001.jpg'
import secondImage from '@/assets/images/products/steelclamps/english_products.00301.00000005.jpg'
import usageImage1 from '@/assets/images/products/steelclamps/english_products.00301.00000002.jpg'
import usageImage2 from '@/assets/images/products/steelclamps/english_products.00301.00000003.jpg'

export default {
    name: 'HLC-S',
    components: { Breadcrumb },
    data() {
        return {
            thumbnails: [firstImage],
            captions: ['HLC0.5S～3S'],
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
    max-height: 380px;
    object-fit: contain;
}

.image-caption {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #555;
}

.thumbnail-list {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 0.75rem;
}

.thumb-img {
    width: 60px;
    border: 2px solid transparent;
    cursor: pointer;
}

.thumb-active {
    border-color: #2c4ea0;
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
