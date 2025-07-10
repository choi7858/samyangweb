<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <!-- 전문가 브레드크럼 -->
            <nav aria-label="breadcrumb" class="breadcrumb-wrapper breadcrumbs-professional">
                <ol>
                    <li>
                        <router-link to="/">
                            <svg class="home-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 3.293l6 6V15h-4v-4H6v4H2V9.293l6-6z" />
                            </svg>
                            홈
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/products">제품 소개</router-link>
                    </li>
                    <li>
                        <router-link to="/products/supertool">SuperTools</router-link>
                    </li>
                    <li>
                        <router-link to="/products/supertool/steelclamps">SteelClamps</router-link>
                    </li>
                    <li aria-current="page">SVC1HE</li>
                </ol>
            </nav>

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">수직 리프팅 클램프 (Lock Handle Type)</h2>
                <p class="product-code">SVC1HE ~ SVC12WHE</p>
            </div>

            <!-- 오버뷰: 이미지 & 특징 & 액션 버튼 -->
            <div class="product-overview">
                <div class="image-block">
                    <img :src="mainImage" alt="SVC1HE" class="product-main-image" />
                </div>
                <div class="features">
                    <h5>주요 특징</h5>
                    <ul>
                        <li>스프링 로드 잠금 메커니즘으로 초기 클램핑 힘을 안정적으로 유지</li>
                        <li>하중 중량에 비례하여 클램핑 힘이 증가</li>
                        <li>단조 특수 합금강의 본체와 샤클로 최적의 강도·내구성 확보</li>
                        <li>고주파 담금질 처리로 캠 내구성 극대화</li>
                        <li>베이크드온 처리 마감으로 부식 방지</li>
                        <li>8톤 및 12톤 모델에는 잠금 해제 핀 제공</li>
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
                            <th>Jaw Opening (mm)</th>
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
                    <img :src="usageDiagram" alt="사용 예시 및 치수" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import mainImage from '@/assets/images/products/steelclamps/SVC1HE~12WHE.jpg'
import usageDiagram from '@/assets/images/products/steelclamps/SVC1HE~12WHE.jpg'
import explodedPdf from '@/assets/images/products/steelclamps/SVC-HE WHE.pdf'

export default {
    name: 'SVC1HE',
    data() {
        return {
            mainImage,
            usageDiagram,
            explodedPdf,
            modelList: [
                { no: 'SVC1HE', capacity: 1, range: '0~19', weight: '3.0' },
                { no: 'SVC2HE', capacity: 2, range: '0~25', weight: '6.0' },
                { no: 'SVC2WHE', capacity: 2, range: '0~40', weight: '6.2' },
                { no: 'SVC3HE', capacity: 3, range: '0~30', weight: '10.5' },
                { no: 'SVC4HE', capacity: 4, range: '0~35', weight: '12.5' },
                { no: 'SVC4WHE', capacity: 4, range: '25~60', weight: '15.0' },
                { no: 'SVC6HE', capacity: 6, range: '0~40', weight: '21.5' },
                { no: 'SVC6WHE', capacity: 6, range: '25~65', weight: '25.0' },
                { no: 'SVC8HE', capacity: 8, range: '10~70', weight: '44.0' },
                { no: 'SVC8WHE', capacity: 8, range: '30~90', weight: '45.0' },
                { no: 'SVC12HE', capacity: 12, range: '20~80', weight: '56.0' },
                { no: 'SVC12WHE', capacity: 12, range: '40~100', weight: '60.0' }
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
    padding: 0.5rem 1.5rem;
    background: #2c4ea0;
    color: #fff;
    text-decoration: none;
    border-radius: 0.25rem;
    font-weight: 600;
}

.models-table {
    margin-bottom: 2rem;
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
    justify-content: center;
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
