<!-- samyang/src/views/products/tanaka/3051II.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <Breadcrumb />

            <div class="product-header">
                <h2 class="product-title">3051Ⅱ</h2>
                <p class="product-code">3051II</p>
            </div>

            <div class="product-subtitle">
                <span>스트레이트 화구</span>
            </div>

            <div class="product-body">
                <!-- 좌측: 이미지 -->
                <div class="product-visual">
                    <img :src="mainImage" alt="3051II" class="product-main-image" />
                </div>

                <!-- 우측: 상세 정보 -->
                <div class="product-details">
                    <h5 class="section-heading">특징</h5>
                    <ul class="product-features">
                        <li>내부 화구 재질 변경으로 가열 시 표면 거칠기 증가 억제 및 스패터 부착 저감</li>
                        <li>유지보수 빈도 대폭 감소, 화구 수명 향상으로 작업 효율 증가 </li>
                        <li>포장 폴리에틸렌 봉지 폐지로 환경 부담 경감 </li>
                    </ul>

                    <h5 class="section-heading">스패터 부착 비교 (피어싱 내구 시험)</h5>
                    <table class="spec-table">
                        <tbody>
                            <tr>
                                <th>3051Ⅱ 화구</th>
                                <td>피어싱 100회</td>
                            </tr>
                            <tr>
                                <th>SUS 파이프 입 화구</th>
                                <td>피어싱 50회</td>
                            </tr>
                        </tbody>
                    </table>

                    <h5 class="section-heading">사용 가스 조건</h5>
                    <table class="spec-table">
                        <thead>
                            <tr>
                                <th>판 두께 (mm)</th>
                                <th>절단 속도 (mm/min)</th>
                                <th>절단용 산소 압력 (MPa)</th>
                                <th>예열용 산소 압력 (MPa)</th>
                                <th>LPG 소비량 (L/h)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>6～9</td>
                                <td>740～700</td>
                                <td>0.7</td>
                                <td>0.02</td>
                                <td>1,120</td>
                            </tr>
                            <tr>
                                <td>9～16</td>
                                <td>640～540</td>
                                <td>0.5</td>
                                <td>0.02</td>
                                <td>1,120</td>
                            </tr>
                            <tr>
                                <td>16～32</td>
                                <td>540～470</td>
                                <td>0.5</td>
                                <td>0.025</td>
                                <td>1,300</td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- 표 출처 -->
                    <p class="table-note">※ 조건은 재질 및 환경에 따라 달라질 수 있습니다</p>

                    <img :src="explainImage" alt="스패터 비교 이미지" class="explain-image" />
                </div>
            </div>

            <div class="pdf-download-wrapper">
                <a :href="pdfUrl" target="_blank" class="pdf-download-btn">
                    PDF 다운로드
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import mainImage from '@/assets/images/products/tanaka/3051II.jpg'
import explainImage from '@/assets/images/products/tanaka/3051II-2.jpg'

export default {
    name: '3051II',
    components: { Breadcrumb },
    data() {
        return {
            mainImage,
            explainImage,
            pdfUrl: 'https://nissantanaka.com/Portals/0/images/product/gas_control_equip/E_18_N-105C.pdf'
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

.product-header {
    margin-bottom: 0.5rem;
}

.product-title {
    border-left: 5px solid #2c4ea0;
    padding-left: 0.5rem;
    font-size: 1.75rem;
    font-weight: bold;
}

.product-code {
    font-size: 1.25rem;
    color: #2c4ea0;
    margin-top: 0.25rem;
}

.product-subtitle {
    font-size: 1rem;
    color: #333;
    margin-bottom: 1.5rem;
}

/* 본문 레이아웃 */
.product-body {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}

.product-visual {
    flex: 1;
    min-width: 280px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}

.product-main-image {
    max-width: 100%;
    object-fit: contain;
}

.product-details {
    flex: 1;
    min-width: 280px;
}

.section-heading {
    border-left: 5px solid #2c4ea0;
    padding-left: 0.5rem;
    margin: 1.5rem 0 1rem;
    font-size: 1.25rem;
}

.product-features {
    list-style: disc inside;
    margin-bottom: 1.5rem;
}

.product-features li {
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
}

/* 표 스타일 */
.spec-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1rem;
}

.spec-table th,
.spec-table td {
    padding: 0.75rem 1rem;
    border: 1px solid #e0e0e0;
    text-align: center;
}

.spec-table th {
    background: #f4f8fc;
    text-align: center;
}

.table-note {
    font-size: 0.85rem;
    color: #666;
    margin-bottom: 1.5rem;
}

.explain-image {
    width: 100%;
    margin-top: 1rem;
    object-fit: contain;
}

/* PDF 버튼 */
.pdf-download-wrapper {
    text-align: center;
    margin-top: 2rem;
}

.pdf-download-btn {
    display: inline-block;
    background: #2c4ea0;
    color: #fff;
    padding: 0.75rem 1.5rem;
    text-decoration: none;
    border-radius: 0.25rem;
    font-weight: 600;
}

.pdf-download-btn:hover {
    background: #233f80;
}

@media (max-width: 768px) {
    .product-body {
        flex-direction: column;
    }
}
</style>
