<template>
    <section class="product-detail-section">
        <div class="inner-container">
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
                    <li><router-link to="/products">제품 소개</router-link></li>
                    <li><router-link to="/products/supertool/steelclamps">SteelClamps</router-link></li>
                    <li aria-current="page">SVC1HERF</li>
                </ol>
            </nav>

            <div class="product-header">
                <h2 class="product-title">수직 리프팅 클램프 (Lock Handle Type - RF형)</h2>
                <p class="product-code">SVC1HERF ~ SVC3HERF</p>
            </div>

            <div class="comparison-table-wrapper">
                <h5 class="section-heading">★ 신제품(RF-Type) 주요 변경점</h5>
                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th>구분</th>
                            <th>변경 내용</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="label">스마트 관리</td>
                            <td>**RFID 칩 추가**로 디지털 데이터 관리 및 이력 추적 가능</td>
                        </tr>
                        <tr>
                            <td class="label">본체 강성</td>
                            <td>외측 리브 형상 및 디자인 변경, 본체 두께 증대(1.0~1.7mm UP)</td>
                        </tr>
                        <tr>
                            <td class="label">내구성 향상</td>
                            <td>내측 보강 및 볼륨 업, 주요 부품(핀, 볼트 등)의 재질 및 경도 최적화</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="product-overview">
                <div class="image-block">
                    <img :src="mainImage" alt="SVC1HERF 제품 이미지" class="product-main-image" />
                </div>
                <div class="features">
                    <h5>주요 특징</h5>
                    <ul>
                        <li>**RFID 칩 내장**으로 스마트한 유지보수 및 점검 이력 관리 지원</li>
                        <li>스프링 로드 잠금 메커니즘으로 초기 클램핑 힘을 안정적으로 유지</li>
                        <li>하중 중량에 비례하여 클램핑 힘이 자동으로 증가하는 안전 구조</li>
                        <li>단조 특수 합금강 본체와 고주파 담금질 캠으로 최적의 내구성 확보</li>
                        <li>베이크드온(Baked-on) 마감 처리로 부식 방지 및 수명 연장</li>
                    </ul>
                </div>
            </div>

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

            <div class="bottom-images">
                <div class="bottom-image">
                    <h6 class="image-title">[ 카달로그 및 치수도 ]</h6>
                    <img :src="catalogImage" alt="SVC1HERF 카달로그" />
                </div>
                <div class="bottom-image">
                    <h6 class="image-title">[ 제품 분해도 ]</h6>
                    <img :src="explodedView" alt="SVC1HERF 분해도" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import mainImage from '@/assets/images/products/steelclamps/SVC-HERF.jpg'
import catalogImage from '@/assets/images/products/steelclamps/RF-1.jpg'
import explodedView from '@/assets/images/products/steelclamps/SVC-RF.jpg'

export default {
    name: 'SVC1HERF',
    data() {
        return {
            mainImage,
            catalogImage,
            explodedView,
            modelList: [
                { no: 'SVC1HERF', capacity: 1, range: '0~19', weight: '3.8' },
                { no: 'SVC2HERF', capacity: 2, range: '0~25', weight: '6.6' },
                { no: 'SVC3HERF', capacity: 3, range: '0~30', weight: '10.7' }
            ]
        }
    }
}
</script>

<style scoped>
/* 비교표 스타일 */
.comparison-table-wrapper {
    margin-bottom: 2rem;
    background: #fff;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.comparison-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 0.5rem;
}

.comparison-table th,
.comparison-table td {
    border: 1px solid #ddd;
    padding: 10px;
    font-size: 1rem;
}

.comparison-table th {
    background-color: #2c4ea0;
    color: white;
}

.comparison-table td.label {
    background-color: #f4f8fc;
    font-weight: bold;
    width: 25%;
    text-align: center;
}

/* 하단 이미지 섹션 스타일 */
.bottom-images {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 2rem;
}

.image-title {
    font-weight: bold;
    margin-bottom: 1rem;
    color: #333;
    border-left: 3px solid #2c4ea0;
    padding-left: 10px;
}

.bottom-image img {
    max-width: 100%;
    height: auto;
    border: 1px solid #eee;
}

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