<!-- samyang/src/views/products/tanaka/yk-450.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <Breadcrumb />

            <!-- 헤더 -->
            <div class="product-header">
                <h2 class="product-title">모형 전용 절단기</h2>
                <p class="product-code">YK-450</p>
            </div>
            <div class="product-subtitle">
                <span>제품 명칭 : YK-450</span>
                <span>상품코드 : YK-450</span>
            </div>

            <!-- 사양 & 메인 이미지 -->
            <div class="product-spec-body">
                <div class="spec-section">
                    <h5 class="section-heading">■ 사양</h5>
                    <table class="spec-table">
                        <tbody>
                            <tr>
                                <th>입력전원</th>
                                <td>220V</td>
                            </tr>
                            <tr>
                                <th>절단두께</th>
                                <td>6~50mm</td>
                            </tr>
                            <tr>
                                <th>절단직경</th>
                                <td>20~700mm</td>
                            </tr>
                            <tr>
                                <th>절단속도</th>
                                <td>100~1000mm/min</td>
                            </tr>
                            <tr>
                                <th>절단범위</th>
                                <td>BY 700mm</td>
                            </tr>
                            <tr>
                                <th>절단정밀도</th>
                                <td>0.5mm over 500m</td>
                            </tr>
                            <tr>
                                <th>모터</th>
                                <td>DC Motor</td>
                            </tr>
                            <tr>
                                <th>제품크기</th>
                                <td>600L × 500W × 765H (mm)</td>
                            </tr>
                            <tr>
                                <th>제품무게</th>
                                <td>33Kg</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="visual-section">
                    <img :src="mainImage" alt="YK-450" class="product-main-image" />
                </div>
            </div>

            <!-- 제품 상세 설명 -->
            <div class="product-details">
                <h5 class="section-heading">제품상세설명</h5>
                <p>
                    유광공업 주식회사의 YK-450 모델은 모형 전용 절단기로 다양한 모양으로 모형 절단이 가능한 모델입니다.
                    직경 700mm까지 모형 절단이 가능합니다.
                </p>
                <img :src="descImage" alt="YK-450 상세 설명" class="product-desc-image" />
            </div>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import mainImage from '@/assets/images/products/tanaka/yk-450.jpg'
import descImage from '@/assets/images/products/tanaka/yk-450desc.jpg'

export default {
    name: 'YK450',
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
