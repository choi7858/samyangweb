<!-- samyang/src/views/products/ace/ACE5000SN.vue -->
<template>
    <section class="product-detail-section">
        <div class="inner-container">
            <Breadcrumb />

            <!-- 제품 헤더 -->
            <div class="product-header">
                <h2 class="product-title">에어 임팩트 렌치</h2>
                <p class="product-code">ACE-5000SN</p>
            </div>

            <!-- 제품 이미지 -->
            <div class="product-overview">
                <div class="image-block text-center">
                    <img :src="mainImage" alt="ACE-5000SN" class="product-main-image" />
                </div>
            </div>

            <!-- 사양표 -->
            <h5 class="mt-5 fw-bold">사양</h5>
            <table class="spec-table">
                <tbody>
                    <tr>
                        <th>S 드라이브</th>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th>토크 (N·m)</th>
                        <td>1300-2700</td>
                    </tr>
                    <tr>
                        <th>분당 타격수 (b.p.m)</th>
                        <td>380</td>
                    </tr>
                    <tr>
                        <th>볼트 규격 (mm)</th>
                        <td>48</td>
                    </tr>
                    <tr>
                        <th>중량 (kg)</th>
                        <td>17.9</td>
                    </tr>
                    <tr>
                        <th>전체 길이 (mm)</th>
                        <td>640</td>
                    </tr>
                    <tr>
                        <th>에어 인렛 (인치)</th>
                        <td>1/2PT</td>
                    </tr>
                    <tr>
                        <th>호스 규격 (mm)</th>
                        <td>12.7</td>
                    </tr>
                    <tr>
                        <th>해머 메커니즘</th>
                        <td>원 해머</td>
                    </tr>
                </tbody>
            </table>
            <p class="mt-2">*이 모델은 Short Anvil로도 공급가능합니다.</p>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import mainImage from '@/assets/images/products/ace/ACE-5000SN.jpg'

export default {
    name: 'ACE5000SN',
    components: {
        Breadcrumb
    },
    data() {
        return {
            mainImage
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
    justify-content: center;
    margin-bottom: 3rem;
}

.image-block .product-main-image {
    max-width: 100%;
    max-height: 400px;
    object-fit: contain;
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
