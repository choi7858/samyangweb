<!-- samyang/src/views/products/cactus/SEP-30DX.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <Breadcrumb />

            <div class="product-header">
                <h2 class="product-title">전동 펌프 (전기 밸브 타입)</h2>
                <p class="product-code">SEP-30DX</p>
            </div>

            <div class="product-subtitle">
                <span>제품명 : SEP-30DX</span>
                <span>상품코드 : SEP-30DX</span>
            </div>

            <div class="product-body">
                <!-- 왼쪽: 특징 + 사양 -->
                <div class="product-details">
                    <ul class="product-features">
                        <li>● 소형 전동 유압 펌프</li>
                        <li>● 모터는 견고하고 소형 정류자 모터 채택. 고효율이 안정적인 성능을 발휘합니다.</li>
                        <li>● 유압력이 70MPa를 넘으면 자동으로 안전밸브가 작동하여 과도한 압력이 가해지지 않습니다.</li>
                    </ul>

                    <h5 class="section-heading">■ 사양</h5>
                    <table class="spec-table">
                        <tbody>
                            <tr>
                                <th>설정 압력&nbsp;MPa<br>(kgf/cm²)</th>
                                <td>70</td>
                            </tr>
                            <tr>
                                <th>토출유량<br />&nbsp;(l/min)<br>저압 1MPa (10kgf/cm²)</th>
                                <td>2.5</td>
                            </tr>
                            <tr>
                                <th>토출유량<br />&nbsp;(l/min)<br>고압 70MPa (700kgf/cm²)</th>
                                <td>0.35</td>
                            </tr>
                            <tr>
                                <th>모터 전원&nbsp;(V)</th>
                                <td>AC220</td>
                            </tr>
                            <tr>
                                <th>모터 용량&nbsp;(W)</th>
                                <td>450</td>
                            </tr>
                            <tr>
                                <th>탱크용량&nbsp;(ℓ)</th>
                                <td>3 (유효유: 2.0ℓ)</td>
                            </tr>
                            <tr>
                                <th>세로 × 가로 × 높이 (mm)</th>
                                <td>212 × 212 × 342</td>
                            </tr>
                            <tr>
                                <th>질량&nbsp;(kg)</th>
                                <td>18</td>
                            </tr>
                            <tr>
                                <th>비고</th>
                                <td>
                                    ※ 50 / 60Hz 겸용<br>
                                    ※ 유압기기의 램 실린더 전진·후퇴·가압 상태 유지 등 리모컨으로 자유자재<br>
                                    ※ 표준 호스 2.0m 포함<br>
                                    ※ 옵션: 풋 스위치 준비 가능<br>
                                    ※ 오일 보충·교환 시 카투스 파워 팩 오일 (OL-32) 사용
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- 오른쪽: 이미지 + PDF 버튼 -->
                <div class="product-visual">
                    <div class="image-block">
                        <img :src="mainImage" alt="SEP-30DX" class="product-main-image" />
                        <p class="image-note">※ 이미지를 클릭하면 확대됩니다</p>
                        <a :href="pdfUrl" target="_blank" class="pdf-download-btn">PDF다운로드</a>
                    </div>
                </div>
            </div>

            <!-- 적합 공구 -->
            <h5 class="section-heading">■ 적합 공구</h5>
            <div class="product-list-grid">
                <a v-for="att in attachments" :key="att.name" :href="att.link" class="item-link" target="_blank"
                    rel="noopener">
                    <div class="product-card">
                        <div class="image-container">
                            <img :src="att.image" :alt="att.name" />
                        </div>
                        <div class="product-info">
                            <p class="item-name">{{ att.name }}</p>
                        </div>
                    </div>
                </a>
            </div>

            <!-- 상세스펙 -->
            <h5 class="section-heading">상세스펙</h5>
            <div class="detail-box">
                <div class="detail-label">전동 펌프(전기 밸브 타입)</div>
                <div class="detail-value">SEP-30DX</div>
                <a :href="pdfUrl" target="_blank" class="detail-pdf-link">PDF다운로드</a>
            </div>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import mainImage from '@/assets/images/products/cactus/sep-30dx.jpg'
import SH250M from '@/assets/images/products/cactus/sep-30dx.jpg'    // SH-250M 이미지 경로
import SB from '@/assets/images/products/cactus/sb.jpg'
import GB from '@/assets/images/products/cactus/gb.jpg'
import SS325H from '@/assets/images/products/cactus/ss-325.jpg'
import CT700 from '@/assets/images/products/cactus/ct-700.jpg'
import CC3 from '@/assets/images/products/cactus/CC-3.jpg'

export default {
    name: 'SEP30DX',
    components: { Breadcrumb },
    data() {
        return {
            mainImage,
            pdfUrl: 'https://www.ccts.co.jp/wp-content/uploads/23_SEP-12SL_SEP-30DX_SP-2.pdf',
            attachments: [
                { name: 'SH-250M', image: SH250M, link: 'https://www.ccts.co.jp/products/crimping-tool/sh-250m/' },
                { name: 'SB', image: SB, link: 'https://www.ccts.co.jp/products/bender-tool/sb/' },
                { name: 'GB', image: GB, link: 'https://www.ccts.co.jp/products/bender-tool/gb/' },
                { name: 'SS-325H', image: SS325H, link: 'https://www.ccts.co.jp/products/discontinued-products/ss-325h/' },
                { name: 'CT-700', image: CT700, link: 'https://www.ccts.co.jp/products/compression-tool/ct-700/' },
                { name: 'CC-3', image: CC3, link: 'https://www.ccts.co.jp/products/cutter/cc-3/' },
            ],
        }
    },
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
    margin-bottom: 1.5rem;
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
}

.spec-table th,
.spec-table td {
    padding: 0.75rem 1rem;
    border: 1px solid #e0e0e0;
}

.spec-table th {
    background: #f4f8fc;
    width: 30%;
    text-align: left;
}

.spec-table td {
    background: #f9fbfd;
    text-align: center;
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

.product-list-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
}

.item-link {
    text-decoration: none;
}

.product-card {
    border: 1px solid #e0e0e0;
    border-radius: 0.25rem;
    background: #fff;
    overflow: hidden;
}

.image-container {
    position: relative;
    width: 100%;
    padding-top: 56.25%;
}

.image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.product-info {
    padding: 0.5rem;
    text-align: center;
}

.item-name {
    font-size: 0.9rem;
    color: #333;
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
