<!-- samyang/src/views/products/cactus/HM-650.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <Breadcrumb />

            <div class="product-header">
                <h2 class="product-title">HM-650</h2>
                <p class="product-code">HM-650</p>
            </div>

            <div class="product-subtitle">
                <span>제품명 : HM-650</span>
                <span>상품코드 : HM-650</span>
            </div>

            <div class="product-body">
                <!-- 왼쪽: 특징 + 사양 -->
                <div class="product-details">
                    <ul class="product-features">
                        <li>● 하이드로펀처</li>
                        <li>● 빠른 정밀도 높은 구멍을 뚫을 수 있습니다.</li>
                        <li>● 작업시간은 대폭 단축할 수 있습니다.</li>
                        <li>● 다이스는 특수강으로 내구성이 뛰어납니다.</li>
                        <li>● 표준 다이스 3/8 부속</li>
                    </ul>

                    <h5 class="section-heading">■ 사양</h5>
                    <table class="spec-table">
                        <tbody>
                            <tr>
                                <th>사용 펌프 인정 압력</th>
                                <td>70 MPa</td>
                            </tr>
                            <tr>
                                <th>출력</th>
                                <td>265 kN (27 tonf)</td>
                            </tr>
                            <tr>
                                <th>펀칭 센터보다 후크로 치수(깊이)</th>
                                <td>65 mm</td>
                            </tr>
                            <tr>
                                <th>다이스타출능력 (SS400) 3/8용 (φ11mm)</th>
                                <td>두께 9 mm까지</td>
                            </tr>
                            <tr>
                                <th>다이스타출능력 (SS400) 1/2용 (φ14mm)</th>
                                <td>두께 10 mm까지</td>
                            </tr>
                            <tr>
                                <th>다이스타출능력 (SS400) 5/8용 (φ18mm)</th>
                                <td>두께 10 mm까지</td>
                            </tr>
                            <tr>
                                <th>다이스타출능력 (SS400) 3/4용 (φ21mm)</th>
                                <td>두께 10 mm까지</td>
                            </tr>
                            <tr>
                                <th>질량</th>
                                <td>16 kg</td>
                            </tr>
                            <tr>
                                <th>비고</th>
                                <td>
                                    ※ 3/8 다이스만 표준 세트에 포함됩니다. (그 외는 옵션)<br>
                                    ※ 작업 내용에 따라 다이스 크기를 지정하십시오.<br>
                                    ● 구리·알루미늄판 펀칭 가능 (다이스는 특별 주문품)<br>
                                    ● 추가 다이스 φ5, φ6, φ7, φ8, φ9.3 준비 가능 (옵션)
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- 오른쪽: 이미지 + PDF 버튼 -->
                <div class="product-visual">
                    <div class="image-block">
                        <img :src="mainImage" alt="HM-650" class="product-main-image" />
                        <p class="image-note">※ 이미지를 클릭하면 확대됩니다</p>
                        <a :href="pdfUrl" target="_blank" class="pdf-download-btn">PDF다운로드</a>
                    </div>
                </div>
            </div>

            <!-- 상세스펙 -->
            <h5 class="section-heading">상세스펙</h5>
            <div class="detail-box">
                <div class="detail-label">유압식펀칭기</div>
                <div class="detail-value">HM-650</div>
                <a :href="pdfUrl" target="_blank" class="detail-pdf-link">PDF다운로드</a>
            </div>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import mainImage from '@/assets/images/products/cactus/hm-650.jpg'

export default {
    name: 'HM650',
    components: { Breadcrumb },
    data() {
        return {
            mainImage,
            pdfUrl: 'https://www.ccts.co.jp/wp-content/uploads/HM-650_%E3%82%AB%E3%82%BF%E3%83%AD%E3%82%B0PDF.pdf'
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

.product-body {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
}

.product-details {
    flex: 1;
    min-width: 280px;
}

.product-features {
    list-style: none;
    padding: 0;
    margin-bottom: 2rem;
}

.product-features li {
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
}

.section-heading {
    border-left: 5px solid #2c4ea0;
    padding-left: 0.5rem;
    font-size: 1.25rem;
    margin: 2rem 0 1rem;
}

.spec-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1.5rem;
    box-shadow: none;
}

/* 헤더 위쪽 굵은 라인 */
.spec-table tbody tr:first-child th,
.spec-table tbody tr:first-child td {
    border-top: 2px solid #2c4ea0;
}

/* 셀 기본 테두리 */
.spec-table th,
.spec-table td {
    padding: 0.75rem 1rem;
    border: 1px solid #e0e0e0;
}

/* 헤더 강조 */
.spec-table th {
    background: #f4f8fc;
    font-weight: 600;
    text-align: left;
    border-bottom: 2px solid #2c4ea0;
}

/* zebra-stripe: 짝수행은 회색 배경, 홀수행은 흰색 */
.spec-table tr:nth-child(even) td {
    background: #fafbfc;
}

.spec-table tr:nth-child(odd) td {
    background: #ffffff;
}

/* 마지막 행 아래쪽 굵은 라인 */
.spec-table tbody tr:last-child td {
    border-bottom: 2px solid #2c4ea0;
}

.product-visual {
    flex: 1;
    min-width: 280px;
    text-align: center;
}

.image-block {
    margin-top: 0.5rem;
}

.product-main-image {
    max-width: 100%;
    max-height: 300px;
    object-fit: contain;
}

.image-note {
    font-size: 0.85rem;
    color: #666;
    margin: 0.5rem 0;
}

.pdf-download-btn {
    display: block;
    background: #2c4ea0;
    color: #fff;
    text-decoration: none;
    padding: 0.75rem;
    border-radius: 0.25rem;
    font-weight: 600;
}

.pdf-download-btn:hover {
    background: #233f80;
}

.detail-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #e0e0e0;
    padding: 1rem;
    margin-top: 1rem;
}

.detail-label {
    font-size: 1rem;
    font-weight: bold;
}

.detail-value {
    background: #000;
    color: #fff;
    padding: 0.25rem 0.75rem;
    font-weight: bold;
}

.detail-pdf-link {
    color: #2c4ea0;
    text-decoration: none;
    font-weight: 600;
}

.detail-pdf-link:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .product-body {
        flex-direction: column;
    }

    .product-subtitle {
        flex-direction: column;
        gap: 0.5rem;
    }
}
</style>
