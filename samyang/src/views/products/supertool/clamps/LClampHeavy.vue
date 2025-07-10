<!-- src/views/products/clamps/LClampHeavy.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <!-- 라우트 기반 브레드크럼 -->
            <Breadcrumb />

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">L-CLAMP (헤비 듀티 타입) 슈퍼 헤비 듀티 타입</h2>
                <p class="product-code">FC1210E–1240E / 1220–1260 / 1425H–1480H / 1730SH–17100SH</p>
            </div>

            <!-- 오버뷰: 이미지 & 특징 -->
            <div class="product-overview">
                <div class="image-block">
                    <img :src="mainImage" alt="L-클램프 헤비 듀티" class="product-main-image" />
                    <div class="thumbnail-list">
                        <img v-for="(thumb, idx) in thumbnails" :key="idx" :src="thumb" class="thumb-img" alt="썸네일" />
                    </div>
                </div>
                <div class="features">
                    <h5>특징</h5>
                    <ul>
                        <li>최대 클램프 힘이 가장 강력합니다.</li>
                        <li>표준 타입용 옵션 액세서리로 아답터 수지 패드 세트를 장착할 수 있습니다.</li>
                        <li>육각 헤드 마지막 회전이 더 안전한 조임을 보장합니다.</li>
                        <li>아답터 기울기 각도(약 15° / 약 35°)에서 V형 옵션 사용 가능.</li>
                        <li>바디에 구멍이 있어 볼트로 고정판을 장착하고 정밀한 위치 조정이 가능합니다.</li>
                    </ul>
                    <a href="https://www.supertool.co.jp/cmsdesigner/dlfile.php?entryname=english_catalog_download&entryid=00015&fileid=00000002&/Page%20No.19%EF%BD%9EP78%20GENERAL%20HAND%20TOOLS%20%26%20CLAMPS.pdf"
                        class="btn-catalogue" target="_blank">
                        카탈로그 보기
                    </a>
                </div>
            </div>

            <!-- 상세 이미지 -->
            <div class="bottom-images">
                <div class="bottom-image text-center">
                    <img :src="leftImage" alt="FC1430H 헤비 듀티 타입" />
                    <p class="text-muted mt-2">FC1430H 헤비 듀티 타입</p>
                </div>
                <div class="bottom-image text-center">
                    <img :src="rightImage" alt="FC1230E 스탠다드 타입" />
                    <p class="text-muted mt-2">FC1230E 스탠다드 타입</p>
                </div>
            </div>

            <!-- 사양표 -->
            <h5 class="mt-5 fw-bold">사양</h5>
            <table class="spec-table">
                <tbody>
                    <tr>
                        <th>재질</th>
                        <td>특수 합금강</td>
                    </tr>
                    <tr>
                        <th>마감</th>
                        <td>니켈 크롬 도금</td>
                    </tr>
                    <tr>
                        <th>최대 클램프 힘</th>
                        <td>6.5 / 11 / 13.5 / 25.0 kN (150mm 기준)</td>
                    </tr>
                    <tr>
                        <th>레일 사이즈</th>
                        <td>22×10.5 / 27×13 / 30×15 / 40×20 mm</td>
                    </tr>
                    <tr>
                        <th>쓰로트 깊이</th>
                        <td>120 / 120 / 140 / 175 mm</td>
                    </tr>
                    <tr>
                        <th>클램프 범위</th>
                        <td>100〜400 / 200〜600 / 400〜800 / 300〜1000 mm</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import mainImage from '@/assets/images/products/clamps/lclamp-heavy-main.png'
import leftImage from '@/assets/images/products/clamps/lclamp-heavy-left.png'
import rightImage from '@/assets/images/products/clamps/lclamp-heavy-right.png'
import Breadcrumb from '@/components/Breadcrumb.vue'

export default {
    name: 'LClampHeavy',
    components: { Breadcrumb },
    data() {
        return {
            mainImage,
            thumbnails: [mainImage],
            leftImage,
            rightImage
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
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* 전문가 브레드크럼 */
.breadcrumb-wrapper.breadcrumbs-professional {
    margin-bottom: 1.5rem;
}

.breadcrumbs-professional ol {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    list-style: none;
}

.breadcrumbs-professional li+li::before {
    content: '›';
    margin: 0 1rem;
    color: #ccc;
}

.breadcrumbs-professional li a,
.breadcrumbs-professional li {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    color: #333;
    text-decoration: none;
}

.breadcrumbs-professional li[aria-current] {
    font-weight: 600;
    color: #2c4ea0;
}

.home-icon {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
    fill: #2c4ea0;
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
    max-height: 280px;
}

.thumbnail-list {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 0.75rem;
}

.thumb-img {
    width: 60px;
    border: 1px solid #ccc;
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
    display: inline-block;
    margin-top: 0.5rem;
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

.bottom-image .text-muted {
    margin-top: 0.5rem;
    color: #666;
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

@media (max-width: 768px) {

    .product-overview,
    .bottom-images {
        flex-direction: column;
    }
}
</style>
