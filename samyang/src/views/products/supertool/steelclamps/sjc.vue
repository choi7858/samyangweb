<!-- samyang/src/views/products/supertool/steelclamps/SJC.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <Breadcrumb />

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">스크류 캠 클램프 (싱글 아이 타입)</h2>
                <p class="product-code">SJC0.5 / 1 / 2 / 3</p>
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
                        <li>
                            경량·컴팩트 디자인으로 체인 블록/호이스트 구조물 리프팅 및 수평 인양에 최적
                        </li>
                        <li>
                            스크류 캠(구면형) 채용으로 무부하시에도 강력한 초기 클램핑력 제공
                        </li>
                        <li>하중이 증가할수록 클램핑력이 자동으로 강화</li>
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
                    <p class="usage-caption">사용 예시</p>
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
                        <th>마감</th>
                        <td>베이크드-온 처리</td>
                    </tr>
                    <tr>
                        <th>용량</th>
                        <td>0.5 / 1 / 2 / 3톤</td>
                    </tr>
                    <tr>
                        <th>클램핑 범위</th>
                        <td>0～25mm ～ 0～40mm</td>
                    </tr>
                </tbody>
            </table>

            <!-- 관련 정보 -->
            <h5 class="section-heading">관련 정보</h5>
            <div class="related-buttons">
                <a href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_products&entryid=00287&fileid=00000009&/SJC_240810.pdf"
                    class="btn-catalogue" target="_blank">
                    매뉴얼 다운로드
                </a>
                <a href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_products&entryid=00287&fileid=00000011&/SJC_Parts.pdf"
                    class="btn-catalogue" target="_blank">
                    부품 리스트
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import mainImage from '@/assets/images/products/steelclamps/english_products.00287.00000001.jpg'
import usageImage1 from '@/assets/images/products/steelclamps/english_products.00287.00000002.jpg'

export default {
    name: 'SJC',
    components: { Breadcrumb },
    data() {
        return {
            thumbnails: [mainImage],
            captions: ['SJC0.5 / 1 / 2 / 3'],
            selectedIndex: 0,
            usageImage1
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
    background: #f4f8fc;
    text-align: left;
    width: 30%;
}

.spec-table td {
    background: #f9fbfd;
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
