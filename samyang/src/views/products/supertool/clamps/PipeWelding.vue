<!-- src/views/products/clamps/PipeWelding.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <!-- 전문가 브레드크럼 -->
            <Breadcrumb />

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">파이프 용접 클램프</h2>
                <p class="product-code">WOC6 / 12</p>
            </div>

            <!-- 오버뷰: 이미지 & 특징 -->
            <div class="product-overview">
                <div class="image-block">
                    <img :src="mainImage" alt="파이프 용접 클램프" class="product-main-image" />
                    <div class="thumbnail-list">
                        <img v-for="(thumb, idx) in thumbnails" :key="idx" :src="thumb" class="thumb-img"
                            alt="thumbnail" />
                    </div>
                </div>
                <div class="features">
                    <h5>특징</h5>
                    <ul>
                        <li>원터치로 파이프 고정 및 중심 잡기가 가능합니다.</li>
                        <li>
                            본체 조임 나사에 퀵 터닝 메커니즘이 있어 빠르게 부착 및 분리가 가능합니다.
                        </li>
                        <li>
                            파이프 부착 부위에 스테인리스 스틸이 적용되어 강철 및 스테인리스 파이프 모두 사용 가능합니다.
                        </li>
                        <li>이 클램프를 사용하면 임시 용접이 필요 없습니다.</li>
                        <li>베이스 재질이 파이프 표면의 흠집 및 손상을 방지합니다.</li>
                    </ul>
                    <a href="https://www.supertool.co.jp/english/products/products.php?eid=00597" class="btn-catalogue"
                        target="_blank">
                        카탈로그 보기
                    </a>
                </div>
            </div>

            <!-- 상세 이미지 -->
            <div class="bottom-images">
                <div class="bottom-image text-center mb-3">
                    <img :src="leftImage" alt="퀵 터닝 레버" class="detail-image" />
                    <p class="text-muted mt-2">퀵 터닝 레버</p>
                </div>
                <div class="bottom-image text-center">
                    <img :src="rightImage" alt="사용 예시" class="detail-image" />
                    <p class="text-muted mt-2">사용 예시</p>
                </div>
            </div>

            <!-- 사양표 -->
            <h5 class="mt-5 fw-bold">사양</h5>
            <table class="spec-table">
                <tbody>
                    <tr>
                        <th>클램프 범위</th>
                        <td>
                            적용 파이프 사이즈: 1〜6B, 4〜12B<br />
                            적용 직경: 34〜170, 110〜320mm
                        </td>
                    </tr>
                    <tr>
                        <th>순중량</th>
                        <td>5.2kg / 7.9kg</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import mainImage from '@/assets/images/products/clamps/pipe-welding.png'
import leftImage from '@/assets/images/products/clamps/pipe-welding-detail-left.png'
import rightImage from '@/assets/images/products/clamps/pipe-welding-detail-right.png'

export default {
    name: 'PipeWelding',
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
    max-width: 960px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* 전문가 브레드크럼 */
.breadcrumb-wrapper.breadcrumbs-professional {
    margin-bottom: 1.5rem;
}

/* 제품 헤더 */
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
    font-weight: bold;
    color: #2c4ea0;
    margin-top: 0.5rem;
}

/* 오버뷰: 이미지 & 특징 */
.product-overview {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
}

.image-block {
    flex: 0 0 40%;
    text-align: center;
}

.features {
    flex: 1;
    padding-left: 1rem;
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

/* 카탈로그 버튼 (다른 상세 페이지와 동일한 형태) */
.btn-catalogue {
    background-color: #2c4ea0;
    color: #fff;
    font-weight: 500;
    padding: 0.5rem 1.5rem;
    border-radius: 0;
    text-decoration: none;
    margin-right: 1rem;
    display: inline-block;
}

/* 상세 이미지 */
.bottom-images {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    background: #f4f4f4;
    padding: 2rem;
    margin-bottom: 3rem;
}

.detail-image {
    max-width: 100%;
    max-height: 250px;
}

/* 사양표 */
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

/* 반응형 */
@media (max-width: 768px) {

    .product-overview,
    .bottom-images {
        flex-direction: column;
        align-items: center;
    }

    .features {
        padding-left: 0;
        margin-top: 1.5rem;
    }
}
</style>
