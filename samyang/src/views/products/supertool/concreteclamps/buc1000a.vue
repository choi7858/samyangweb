<!-- samyang/src/views/products/concreteclamps/BUC1000A.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <!-- 라우트 기반 브레드크럼 -->
            <Breadcrumb />

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">
                    U자형 콘크리트 홈통용 자동 내부 확장 리프팅 클램프 (패드 타입)
                </h2>
                <p class="product-code">BUC1000A</p>
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
                            철근 콘크리트 U자형 홈통를 들어 올리기 위해 설계된 클램프입니다.
                            자동 부착·탈착 메커니즘으로 생산성이 향상됩니다.
                        </li>
                        <li>
                            U자형 콘크리트 홈통용 균열 방지 홀더가 장착되어 있습니다
                            (본체와 함께 사용).
                        </li>
                        <li>
                            클램프는 수평 줄과 방해되지 않으며 콘크리트 구조 사이에
                            별도 여유가 필요하지 않습니다.
                        </li>
                        <li>
                            이 클램프의 자동 클램핑 및 해제 메커니즘은 생산성과 효율성을
                            높여 작업 시간을 단축합니다.
                        </li>
                        <li>
                            패드에는 내구성이 뛰어난 폴리우레탄 고무가 적용되어
                            U자형 콘크리트 홈통 내부를 손상으로부터 보호합니다.
                        </li>
                        <li>
                            ※ 이 클램프의 클램프 범위는 조정용 롱 플레이트를 교체하여
                            320～480mm (부품 번호: BUM1000A), 320～480 / 480～600mm
                            (부품 번호: BUF1000A)로 확대할 수 있습니다.
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
                    <img :src="usageImage1" alt="별도 판매: 확장 부품 세트" />
                    <p class="howToUse_caption">별도 판매: 확장 부품 세트</p>
                </div>
                <div class="bottom-image text-center">
                    <img :src="usageImage2" alt="사용 예시" />
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
                        <td>1톤</td>
                    </tr>
                    <tr>
                        <th>클램프 범위</th>
                        <td>210～330mm (3단계 조정 가능)</td>
                    </tr>
                </tbody>
            </table>

            <!-- 관련 정보 -->
            <!-- (관련 정보가 없는 경우 빈 영역을 유지하거나 필요 시 제거) -->
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import mainImage from '@/assets/images/products/concreteclamps/BUC1000A.JPG'
import usageImage1 from '@/assets/images/products/concreteclamps/english_products.00209.00000002.jpg'
import usageImage2 from '@/assets/images/products/concreteclamps/english_products.00209.00000003.jpg'

export default {
    name: 'BUC1000A',
    components: { Breadcrumb },
    data() {
        return {
            thumbnails: [mainImage],
            captions: ['BUC1000A'],
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
