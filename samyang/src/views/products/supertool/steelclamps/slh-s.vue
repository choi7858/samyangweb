<!-- samyang/src/views/products/steelclamps/SLH-S.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <!-- 라우트 기반 브레드크럼 -->
            <Breadcrumb />

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">스위블 장착형 슈퍼 락 후크</h2>
                <p class="product-code">SLH2S / 3S</p>
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
                        <li>지반 보호판 설치·제거 작업 및 와이어 로프·슬링 벨트 리프팅에 최적</li>
                        <li>후크 부분에 스위블 아이가 장착되어 와이어 로프의 꼬임을 방지하고 지반 보호판 회전을 막음</li>
                        <li>넓은 후크 입구로 보호판 착탈이 용이</li>
                        <li>리프팅 시 잠금 장치가 자동으로 닫혀 후크 이탈 방지</li>
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
                    <span class="howToUse_caption">사용 예시 1</span>
                </div>
                <div class="bottom-image text-center">
                    <img :src="usageImage2" alt="사용 예시 2" />
                    <span class="howToUse_caption">사용 예시 2</span>
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
                        <td>2 / 3톤</td>
                    </tr>
                    <tr>
                        <th>적용 홀 직경</th>
                        <td>지반 보호판 홀 φ60 이상</td>
                    </tr>
                </tbody>
            </table>

            <!-- 관련 정보 -->
            <h5 class="section-heading">관련 정보</h5>
            <div class="related-buttons">
                <a href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_products&entryid=00271&fileid=00000009&/SLH-N%2C%20S_240822.pdf"
                    class="btn-catalogue" target="_blank">
                    매뉴얼
                </a>
                <a href="https://www.youtube.com/watch?v=SD615V2DrsM" class="btn-catalogue js_colorbox">
                    동영상
                </a>
                <a href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_products&entryid=00271&fileid=00000011&/SLH-N%2C%20S_Parts.pdf"
                    class="btn-catalogue" target="_blank">
                    부품 목록
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import firstImage from '@/assets/images/products/steelclamps/english_products.00271.00000001.jpg'
import usageImage1 from '@/assets/images/products/steelclamps/english_products.00271.00000002.jpg'
import usageImage2 from '@/assets/images/products/steelclamps/english_products.00271.00000003.jpg'

export default {
    name: 'SLH-S',
    components: { Breadcrumb },
    data() {
        return {
            thumbnails: [firstImage],
            captions: ['SLH2S / 3S'],
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
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* 브레드크럼은 별도 컴포넌트로 처리 */

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
    /* 썸네일 공간 확보 */
}

.product-main-image {
    max-width: 100%;
    max-height: 455px;
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

.howToUse_caption {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #555;
}

.bottom-image img {
    max-width: 100%;
    max-height: 250px;
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
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
}

.youtube {
    width: 100%;
    max-width: 560px;
}

.youtube iframe {
    width: 100%;
    height: auto;
}

@media (max-width: 768px) {

    .product-overview,
    .bottom-images {
        flex-direction: column;
    }
}
</style>
