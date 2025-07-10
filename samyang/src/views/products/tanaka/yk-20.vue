<!-- samyang/src/views/products/tanaka/yk-20.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <Breadcrumb />

            <div class="product-header">
                <h2 class="product-title">수동 파이프 가스 절단기</h2>
                <p class="product-code">YK-20</p>
            </div>

            <div class="product-subtitle">
                <span>제품 명칭 : YK-20</span>
                <span>상품코드 : YK-20</span>
            </div>

            <!-- 사양 & 메인 이미지 -->
            <div class="product-spec-body">
                <div class="spec-section">
                    <h5 class="section-heading">■ 사양</h5>
                    <table class="spec-table">
                        <tbody>
                            <tr>
                                <th>전격입력전압</th>
                                <td>220V</td>
                            </tr>
                            <tr>
                                <th>절단두께</th>
                                <td>5~50mm</td>
                            </tr>
                            <tr>
                                <th>개선각도</th>
                                <td>0~45도</td>
                            </tr>
                            <tr>
                                <th>절단반경</th>
                                <td>80~600Ø</td>
                            </tr>
                            <tr>
                                <th>작동방식</th>
                                <td>랙 앤 피니언</td>
                            </tr>
                            <tr>
                                <th>제품크기</th>
                                <td>1050L × 500W × 760H (mm)</td>
                            </tr>
                            <tr>
                                <th>제품무게</th>
                                <td>49Kg</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="visual-section">
                    <img :src="mainImage" alt="YK-20" class="product-main-image" />
                </div>
            </div>

            <!-- 제품 상세 설명 -->
            <div class="product-details">
                <h5 class="section-heading">제품상세설명</h5>
                <p>
                    유광공업 주식회사의 YK-20 모델은 수동 파이프 가스 절단기로, 속도 조절(Speed Control)을
                    수동으로 조절합니다. 기본 2.4m 체인을 사용하며, 체인은 연장하여 사용 가능합니다.
                </p>
                <img :src="descImage" alt="YK-20 상세 설명" class="product-desc-image" />
            </div>

            <!-- 부품 도면 -->
            <div class="product-parts">
                <h5 class="section-heading">제품부품도</h5>
                <div class="parts-block">
                    <img :src="partsImage" alt="YK-20 부품도" class="product-parts-image" />
                    <a :href="partsImage" download class="download-btn">부품도 다운로드</a>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import mainImage from '@/assets/images/products/tanaka/yk-20.jpg'
import descImage from '@/assets/images/products/tanaka/yk-20desc.jpg'
import partsImage from '@/assets/images/products/tanaka/yk-20parts.jpg'

export default {
    name: 'YK20',
    components: { Breadcrumb },
    data() {
        return { mainImage, descImage, partsImage }
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

.breadcrumb-wrapper.breadcrumbs-professional {
    margin-bottom: 1.5rem;
}

.product-header {
    margin-bottom: 1rem;
}

.product-title {
    border-left: 5px solid #2c4ea0;
    padding-left: 0.5rem;
    font-size: 1.75rem;
    font-weight: bold;
    color: #000;
}

.product-code {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c4ea0;
    margin-top: 0.25rem;
}

.product-subtitle {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 2rem;
    display: flex;
    gap: 2rem;
}

/* 사양 & 이미지 레이아웃 */
.product-spec-body {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
}

.spec-section {
    flex: 1;
}

.visual-section {
    flex: 1;
    text-align: center;
}

/* 상세 설명, 부품도 정렬 */
.product-details,
.product-parts {
    text-align: left;
    margin-bottom: 2rem;
}

.product-desc-image,
.product-parts-image,
.product-main-image {
    max-width: 100%;
    margin-top: 1rem;
    border: 1px solid #e0e0e0;
    position: relative;
}

.section-heading {
    border-left: 5px solid #2c4ea0;
    padding-left: 0.5rem;
    font-size: 1.25rem;
    margin: 1.5rem 0 1rem;
}

.spec-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 0.5rem;
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
    text-align: center;
}

/* 부품도 다운로드 버튼 재배치 */
.parts-block {
    position: relative;
    margin-top: 1rem;
}

.download-btn {
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    padding: 0.5rem 1rem;
    background: #2c4ea0;
    color: #fff;
    text-decoration: none;
    border-radius: 0.25rem;
    font-weight: 600;
}

.download-btn:hover {
    background: #233f80;
}

@media (max-width: 768px) {
    .product-spec-body {
        flex-direction: column;
    }

    .parts-block {
        position: static;
        text-align: center;
    }

    .download-btn {
        position: static;
        margin-top: 1rem;
    }
}
</style>
