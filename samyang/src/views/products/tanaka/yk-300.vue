<!-- samyang/src/views/products/tanaka/yk-300.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <Breadcrumb />

            <!-- 헤더 -->
            <div class="product-header">
                <h2 class="product-title">자동 가스 절단기</h2>
                <p class="product-code">YK-300</p>
            </div>
            <div class="product-subtitle">
                <span>제품 명칭 : YK-300</span>
                <span>상품코드 : YK-300</span>
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
                                <td>6~50mm</td>
                            </tr>
                            <tr>
                                <th>개선각도</th>
                                <td>0~45도</td>
                            </tr>
                            <tr>
                                <th>절단속도</th>
                                <td>100~1000mm/min</td>
                            </tr>
                            <tr>
                                <th>원형절단지름</th>
                                <td>360~1200mm (옵션 사양)</td>
                            </tr>
                            <tr>
                                <th>제품크기</th>
                                <td>310L × 450W × 300H (mm)</td>
                            </tr>
                            <tr>
                                <th>제품무게</th>
                                <td>12Kg</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="visual-section">
                    <img :src="mainImage" alt="YK-300" class="product-main-image" />
                </div>
            </div>

            <!-- 제품 상세 설명 -->
            <div class="product-details">
                <h5 class="section-heading">제품상세설명</h5>
                <p>
                    유광공업 주식회사의 YK-300 모델은 자동 파이프 가스 절단기로 속도 조절(Speed Control)을
                    자동으로 제어합니다. 기본 2.4m 체인을 사용하며, 체인 연장도 가능합니다.
                </p>
                <img :src="descImage" alt="YK-300 상세 설명 1" class="product-desc-image" />
                <img :src="descImage2" alt="YK-300 상세 설명 2" class="product-desc-image" />
            </div>

            <!-- 부품 도면 -->
            <div class="product-parts">
                <h5 class="section-heading">제품부품도</h5>
                <div class="parts-block">
                    <img :src="partsImage" alt="YK-300 부품도" class="product-parts-image" />
                    <a :href="partsImage" download class="download-btn">부품도 다운로드</a>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import mainImage from '@/assets/images/products/tanaka/yk-300.jpg'
import descImage from '@/assets/images/products/tanaka/yk-300desc.jpg'
import descImage2 from '@/assets/images/products/tanaka/yk-300desc2.jpg'
import partsImage from '@/assets/images/products/tanaka/yk-300parts.jpg'

export default {
    name: 'YK300',
    components: { Breadcrumb },
    data() {
        return { mainImage, descImage, descImage2, partsImage }
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
}
</style>
