<!-- samyang/src/views/products/concreteclamps/BUC240N.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <!-- 라우트 기반 브레드크럼 -->
            <Breadcrumb />

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">
                    U자형 콘크리트 거터용 내부 확장 리프팅 클램프 (패드 타입)
                </h2>
                <p class="product-code">BUC240N</p>
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
                            JIS 규격 철근 콘크리트 U자형 거터 및 JIS 무덤형 U자형 거터(300A 전용,
                            정보함 U자형 거터) 들어 올리기에 최적화된 클램프입니다.
                        </li>
                        <li>
                            U자형 거터 균열 방지용 홀더가 장착되어 있습니다.<br /> (본체와 함께 반드시 사용하세요.)
                        </li>
                        <li>
                            클램프는 수평 줄과 간섭이 없으며 콘크리트 구조물 사이에 별도 <br />여유가 필요하지 않습니다.
                        </li>
                        <li>
                            원터치 스토퍼 조작으로 해제 전환이 간편합니다.
                        </li>
                        <li>
                            적용 가능한 작업: JIS U자형 거터 240, 300A/B/C 및 JIS 무덤형 U자형 거터 250,
                            300A (최대 길이 2m).
                        </li>
                        <li>
                            패드 부분에는 내구성 높은 폴리우레탄 고무가 부착되어 U자형 거터 내부를 손상으로부터 보호합니다.
                        </li>
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
                    <img :src="usageImage1" alt="사용 예시" />
                    <p class="howToUse_caption">사용 예시</p>
                </div>
            </div>

            <!-- 사양 -->
            <h5 class="section-heading">사양</h5>
            <table class="spec-table">
                <tbody>
                    <tr>
                        <th>재질</th>
                        <td>고장력강 / 폴리우레탄</td>
                    </tr>
                    <tr>
                        <th>마감</th>
                        <td>보라색 베이크드-온 처리</td>
                    </tr>
                    <tr>
                        <th>용량</th>
                        <td>500kg</td>
                    </tr>
                    <tr>
                        <th>클램프 범위</th>
                        <td>1단계: 220～240mm, 2단계: 260～290mm</td>
                    </tr>
                    <tr>
                        <th>부속품</th>
                        <td>와이어 로프 / 링</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import mainImage from '@/assets/images/products/concreteclamps/BUC240N.jpg'
import usageImage1 from '@/assets/images/products/concreteclamps/english_products.00215.00000002.jpg'

export default {
    name: 'BUC240N',
    components: { Breadcrumb },
    data() {
        return {
            thumbnails: [mainImage],
            captions: ['BUC240N'],
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
    justify-content: center;
    margin-bottom: 3rem;
}

.bottom-image {
    text-align: center;
}

.bottom-image img {
    max-height: 250px;
    max-width: 100%;
    object-fit: contain;
}

.howToUse_caption {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #555;
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

@media (max-width: 768px) {

    .product-overview,
    .bottom-images {
        flex-direction: column;
    }
}
</style>
