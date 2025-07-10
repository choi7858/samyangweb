<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <Breadcrumb />

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">수평 리프팅 클램프 (Lock Handle Type)</h2>
                <p class="product-code">HLC1HE</p>
            </div>

            <!-- 오버뷰: 이미지 & 특징 & 액션 버튼 -->
            <div class="product-overview">
                <div class="image-block">
                    <img :src="mainImage" alt="HLC1HE" class="product-main-image" />
                </div>
                <div class="features">
                    <h5>주요 특징</h5>
                    <ul>
                        <li>스프링 잠금 장치로 초기 클램핑 힘을 안정적으로 유지</li>
                        <li>하중 중량에 비례하여 클램핑 힘 자동 증가</li>
                        <li>단조 특수 합금강의 본체와 샤클로 최적 강도·내구성 확보</li>
                        <li>고주파 담금질 처리로 캠 내구성 극대화</li>
                        <li>베이크드온 처리 마감으로 부식 방지 및 수명 연장</li>
                        <li>핸들 잠금식으로 안전하고 간편한 설치/해체</li>
                    </ul>
                    <div class="action-buttons">
                        <a :href="explodedPdf" download class="btn-catalogue">
                            분해도(PDF) 다운로드
                        </a>
                    </div>
                </div>
            </div>

            <!-- 사양표: 모델 목록 -->
            <div class="models-table">
                <h5 class="section-heading">모델 및 사양</h5>
                <table class="spec-table">
                    <thead>
                        <tr>
                            <th>모델 NO</th>
                            <th>정격 용량 (ton)</th>
                            <th>클램핑 범위 (mm)</th>
                            <th>중량 (kg)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in modelList" :key="item.no">
                            <td>{{ item.no }}</td>
                            <td>{{ item.capacity }}</td>
                            <td>{{ item.range }}</td>
                            <td>{{ item.weight }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- 사용 예시 & 치수 표 이미지 -->
            <div class="bottom-images">
                <div class="bottom-image text-center">
                    <img :src="usageDiagram" alt="사용 예시" />
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import mainImage from '@/assets/images/products/steelclamps/HLC1HE.jpg'
import usageDiagram from '@/assets/images/products/steelclamps/HLC1HE~12WHE.jpg'
import explodedPdf from '@/assets/images/products/steelclamps/HLC-HE, WHE.pdf'
import Breadcrumb from '@/components/Breadcrumb.vue'

export default {
    name: 'HLC1HE',
    components: { Breadcrumb },
    data() {
        return {
            mainImage,
            usageDiagram,
            dimImage: usageDiagram,
            explodedPdf,
            modelList: [
                { no: 'HLC1HE', capacity: '1', range: '0~25', weight: '30' },
                { no: 'HLC2HE', capacity: '2', range: '0~30', weight: '40' },
                { no: 'HLC2WHE', capacity: '2', range: '0~40', weight: '42' },
                { no: 'HLC3HE', capacity: '3', range: '0~35', weight: '52' },
                { no: 'HLC4HE', capacity: '4', range: '0~35', weight: '60' },
                { no: 'HLC4WHE', capacity: '4', range: '25~60', weight: '75' },
                { no: 'HLC6HE', capacity: '6', range: '0~45', weight: '95' },
                { no: 'HLC6WHE', capacity: '6', range: '25~65', weight: '110' },
                { no: 'HLC8HE', capacity: '8', range: '0~50', weight: '120' },
                { no: 'HLC8WHE', capacity: '8', range: '30~90', weight: '135' },
                { no: 'HLC12HE', capacity: '12', range: '20~80', weight: '160' },
                { no: 'HLC12WHE', capacity: '12', range: '40~100', weight: '180' }
            ]
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
}

.product-code {
    font-size: 1.25rem;
    color: #2c4ea0;
    margin-top: 0.5rem;
}

.product-overview {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 2rem;
}

.image-block {
    flex: 1 1 300px;
    text-align: center;
}

.product-main-image {
    max-width: 100%;
    max-height: 300px;
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
    margin-bottom: 1rem;
}

.features li {
    margin-bottom: 0.5rem;
}

.action-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.btn-catalogue {
    display: inline-block;
    background: #2c4ea0;
    color: #fff;
    padding: 0.5rem 1.5rem;
    text-decoration: none;
    border-radius: 0.25rem;
    font-weight: 600;
}

.models-table {
    margin-bottom: 2rem;
}

.models-table .section-heading {
    font-weight: bold;
    margin-bottom: 0.75rem;
}

.spec-table {
    width: 100%;
    border-collapse: collapse;
}

.spec-table th,
.spec-table td {
    padding: 0.75rem 1rem;
    border: 1px solid #e0e0e0;
    text-align: center;
}

.spec-table th {
    background-color: #f4f8fc;
}

.bottom-images {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}

.bottom-image {
    flex: 1 1 45%;
    text-align: center;
}

.bottom-image img {
    max-width: 100%;
    height: auto;
}

@media (max-width: 768px) {

    .product-overview,
    .bottom-images {
        flex-direction: column;
    }
}
</style>
