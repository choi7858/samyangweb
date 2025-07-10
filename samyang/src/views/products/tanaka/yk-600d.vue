<!-- samyang/src/views/products/tanaka/yk-600d.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <Breadcrumb />

            <!-- 헤더 -->
            <div class="product-header">
                <h2 class="product-title">파이프 홀 절단기</h2>
                <p class="product-code">YK-600D</p>
            </div>
            <div class="product-subtitle">
                <span>제품 명칭 : YK-600D</span>
                <span>상품코드 : YK-600D</span>
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
                    <img :src="mainImage" alt="YK-600D" class="product-main-image" />
                </div>
            </div>

            <!-- 제품 상세 설명 -->
            <div class="product-details">
                <h5 class="section-heading">제품상세설명</h5>
                <p>
                    유광공업 주식회사의 YK-600D 모델은 파이프 홀 가스절단기(Pipe Hole Gas Cutting Machine)로
                    곡면이 있는 파이프 위에서 파이프 원형 절단이 가능합니다.
                </p>
                <img :src="descImage" alt="YK-600D 상세 설명" class="product-desc-image" />
            </div>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import mainImage from '@/assets/images/products/tanaka/yk-600D.jpg'
import descImage from '@/assets/images/products/tanaka/yk-600Ddesc.jpg'

export default {
    name: 'YK600D',
    components: { Breadcrumb },
    data() {
        return { mainImage, descImage }
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

.product-details {
    text-align: left;
    margin-bottom: 2rem;
}

.product-desc-image,
.product-main-image {
    max-width: 100%;
    margin-top: 1rem;
    border: 1px solid #e0e0e0;
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

@media (max-width: 768px) {
    .product-spec-body {
        flex-direction: column;
    }
}
</style>
