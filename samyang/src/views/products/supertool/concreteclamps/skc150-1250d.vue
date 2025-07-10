<!-- samyang/src/views/products/concreteclamps/skc150-1250d.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <!-- 라우트 기반 브레드크럼 -->
            <Breadcrumb />

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">
                    콘크리트 자재용 리프팅 클램프 (핸들/샤클 타입)
                </h2>
                <p class="product-code">SKC150～1250D</p>
            </div>

            <!-- 오버뷰: 이미지 & 특징 -->
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
                            폭이 한쪽으로 두꺼운 U자형 거터, U자형 수로 채널 및 다양한<br /> 콘크리트 구조물을 들어 올리고 취급하는 데 최적입니다.
                        </li>
                        <li>
                            카바라이징 처리된 캠은 매우 내구성이 뛰어납니다 (특수 합금강을 고주파 열처리하여 SKC1250D 캠의 내구성을 강화).
                        </li>
                        <li>
                            클램핑 힘은 리프팅 하중의 무게에 비례하여 증가합니다.
                        </li>
                        <li>
                            핸들 타입(SKC150)은 경량 U자형 거터용이며, 머신 타입(SKC1250D)은 특히 설치용 하수관용 맨홀 리프팅에 적합합니다.
                        </li>
                        <li>※ 안전을 위해 항상 2개 이상의 지점에서 작업물을 들어 올리십시오.</li>
                    </ul>
                    <a href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_catalog_download&entryid=00017&fileid=00000002&/Page%20No.139%EF%BD%9EP148%20LIFTING%20CLAMPS%20FOR%20CONCRETE%20MATERIAL.pdf"
                        class="btn-catalogue" target="_blank">
                        카탈로그 보기
                    </a>
                </div>
            </div>

            <!-- 사용 예시 -->
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
                        <td>니켈 크롬 도금 / 블루 베이크드-온</td>
                    </tr>
                    <tr>
                        <th>용량</th>
                        <td>150～1,250kg</td>
                    </tr>
                    <tr>
                        <th>클램프 범위</th>
                        <td>30～60mm ~ 73～137mm</td>
                    </tr>
                </tbody>
            </table>

            <!-- 관련 정보 -->
            <h5 class="section-heading">관련 정보</h5>
            <div class="related-buttons">
                <a href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_products&entryid=00223&fileid=00000009&/SKC.pdf"
                    class="btn-catalogue" target="_blank">
                    매뉴얼
                </a>
                <a href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_products&entryid=00223&fileid=00000011&/SKC%20Parts.pdf"
                    class="btn-catalogue" target="_blank">
                    부품 목록
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import mainImage from '@/assets/images/products/concreteclamps/SKC150.jpg'
import usageImage1 from '@/assets/images/products/concreteclamps/english_products.00223.00000002.jpg'
import usageImage2 from '@/assets/images/products/concreteclamps/english_products.00223.00000003.jpg'

export default {
    name: 'SKC1501250D',
    components: { Breadcrumb },
    data() {
        return {
            thumbnails: [mainImage],
            captions: ['SKC150～1250D'],
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
    max-height: 380px;
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

.section-heading {
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 1rem;
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
    max-height: 250px;
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
