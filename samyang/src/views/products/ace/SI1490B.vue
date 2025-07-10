<!-- src/views/products/ace/SI-1490B.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <Breadcrumb />

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">머플러 장착 1/2" 스퀘어 드라이브 공압 임팩트 렌치</h2>
                <p class="product-code">SI-1490B</p>
            </div>

            <!-- 오버뷰: 이미지 & 특징 -->
            <div class="product-overview">
                <div class="image-block">
                    <img :src="mainImage" alt="SI-1490B" class="product-main-image" />
                </div>
                <div class="features">
                    <h5>특징</h5>
                    <ul>
                        <li>고무 그립이 진동을 흡수하고 손을 찬 기운으로부터 보호</li>
                        <li>경량 바디 디자인과 가벼운 터치 트리거</li>
                        <li>핸들 그립 배기구가 공기를 사용자와 작업 공간에서 멀리 배출</li>
                        <li>4단계 조절 다이얼 및 전진/후진 레버로 손쉬운 조정</li>
                        <li>머플러가 소음 수준을 크게 감소</li>
                    </ul>
                </div>
            </div>

            <!-- 사양표 -->
            <h5 class="mt-5 fw-bold">사양</h5>
            <table class="spec-table">
                <tbody>
                    <tr>
                        <th>S 드라이브</th>
                        <td>1/2"</td>
                    </tr>
                    <tr>
                        <th>작동 토크 범위 (N·m)</th>
                        <td>0-620</td>
                    </tr>
                    <tr>
                        <th>최대 토크 (N·m)</th>
                        <td>850</td>
                    </tr>
                    <tr>
                        <th>무부하 속도 (r.p.m)</th>
                        <td>8,000 (전진) / 8,500 (후진)</td>
                    </tr>
                    <tr>
                        <th>볼트 규격 (mm)</th>
                        <td>20</td>
                    </tr>
                    <tr>
                        <th>중량 (kg)</th>
                        <td>1.9</td>
                    </tr>
                    <tr>
                        <th>소음 수준 (dBA)</th>
                        <td>94 / 105</td>
                    </tr>
                    <tr>
                        <th>진동 (m/s²)</th>
                        <td>8.6 / 1.3</td>
                    </tr>
                    <tr>
                        <th>에어 소비량 (CFM)</th>
                        <td>5.1</td>
                    </tr>
                    <tr>
                        <th>에어 인렛</th>
                        <td>1/4"</td>
                    </tr>
                    <tr>
                        <th>호스 규격 (mm)</th>
                        <td>10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import mainImage from '@/assets/images/products/ace/SI-1490B.png'

export default {
    name: 'SI1490B',
    components: { Breadcrumb },
    data() {
        return { mainImage }
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
    gap: 2rem;
    flex-wrap: wrap;
    margin-bottom: 3rem;
}

.image-block {
    flex: 1 1 300px;
    text-align: center;
}

.product-main-image {
    max-width: 100%;
    max-height: 380px;
    object-fit: contain;
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
}

.features li {
    margin-bottom: 0.5rem;
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
    .product-overview {
        flex-direction: column;
    }
}
</style>
