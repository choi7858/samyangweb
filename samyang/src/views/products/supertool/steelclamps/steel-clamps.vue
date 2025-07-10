<template>
    <section class="product-list-section bg-pattern">
        <div class="inner-container">
            <h1 class="page-heading">강재용 리프팅 클램프</h1>
            <Breadcrumb />

            <div class="product-list-grid">
                <router-link v-for="prod in products" :key="prod.code" :to="prod.to" class="item-link">
                    <div class="product-card">
                        <div class="image-container">
                            <img :src="prod.img" :alt="prod.name" />
                        </div>
                        <div class="product-info">
                            <div class="item-code">{{ prod.code }}</div>
                            <div class="item-name">{{ prod.name }}</div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import DLC05 from '@/assets/images/products/steelclamps/DLC05.jpg'
import DLC05V from '@/assets/images/products/steelclamps/DLC05V-1.jpg'
import DSB1S from '@/assets/images/products/steelclamps/DSB1S.jpg'
import FKH1 from '@/assets/images/products/steelclamps/FKH1.jpg'
import FLH2 from '@/assets/images/products/steelclamps/FLH2.jpg'
import GVC1E from '@/assets/images/products/steelclamps/GVC1E.jpg'
import GVC1R from '@/assets/images/products/steelclamps/GVC1R.jpg'
import HHC from '@/assets/images/products/steelclamps/HHC.jpg'
import HLC1H from '@/assets/images/products/steelclamps/HLC1H.jpg'
import HLC_S from '@/assets/images/products/steelclamps/HLC_S.jpg'
import HLC1U from '@/assets/images/products/steelclamps/HLC1U.jpg'
import HPC2N from '@/assets/images/products/steelclamps/HPC2N.jpg'
import LSBN from '@/assets/images/products/steelclamps/LSBN.jpg'
import RGC from '@/assets/images/products/steelclamps/RGC.jpg'
import SCC3 from '@/assets/images/products/steelclamps/SCC3.jpg'
import SDC1N from '@/assets/images/products/steelclamps/SDC1N.jpg'
import SDC1S from '@/assets/images/products/steelclamps/english_products.00291.00000001.jpg'
import SDH3 from '@/assets/images/products/steelclamps/SDH3.jpg'
import SJC1 from '@/assets/images/products/steelclamps/SJC1.jpg'
import SJC1S from '@/assets/images/products/steelclamps/SJC1S.jpg'
import SLH_N from '@/assets/images/products/steelclamps/SLH-N.jpg'
import SLH3A_WEB from '@/assets/images/products/steelclamps/SLH3A(WEB).jpg'
import SLH_NC from '@/assets/images/products/steelclamps/SLH-NC.jpg'
import SLH_S from '@/assets/images/products/steelclamps/SLH-S.jpg'
import SLH3ASB_main from '@/assets/images/products/steelclamps/SLH3ASB_main.jpg'
import SSC1N from '@/assets/images/products/steelclamps/SSC1N.jpg'
import SUC1_6 from '@/assets/images/products/steelclamps/SUC1.6.jpg'
import SUC_S from '@/assets/images/products/steelclamps/26_SUC-S_main.jpg'
import SVC1H from '@/assets/images/products/steelclamps/SVC1H.jpg'
import SVC1E from '@/assets/images/products/steelclamps/SVC1E.jpg'
import SVC_L from '@/assets/images/products/steelclamps/SVC_L.jpg'
import SVC3_1 from '@/assets/images/products/steelclamps/SVC3-1.jpg'
import SWC1N from '@/assets/images/products/steelclamps/SWC1N.jpg'
import SWC1S from '@/assets/images/products/steelclamps/SWC1S.jpg'
import TVC from '@/assets/images/products/steelclamps/TVC.jpg'
import TVC1L from '@/assets/images/products/steelclamps/TVC1L.jpg'
import HLC1HE from '@/assets/images/products/steelclamps/HLC1HE.jpg'
import SVC1HE from '@/assets/images/products/steelclamps/SVC1HE~12WHE.jpg'
import Breadcrumb from '@/components/Breadcrumb.vue'

export default {
    name: 'SteelClamps',
    components: { Breadcrumb },
    data() {
        return {
            products: [
                { to: '/products/supertool/steelclamps/hlc-s', img: HLC_S, code: 'HLC0.5S~3S', name: '강재 빔 리프팅 클램프' },
                { to: '/products/supertool/steelclamps/HLC1HE', img: HLC1HE, code: 'HLC1HE~12WHE', name: '수평형 리프팅 클램프 (핸들잠금타입)' },
                { to: '/products/supertool/steelclamps/SVC1HE', img: SVC1HE, code: 'SVC1HE~12WHE', name: '수직형 리프팅 클램프 (핸들잠금타입)' },
                { to: '/products/supertool/steelclamps/hlc-h', img: HLC1H, code: 'HLC-H, HLC-WH, HLC-HN, HLC-WHN', name: '수평형 리프팅 클램프 (핸들잠금타입)' },
                { to: '/products/supertool/steelclamps/svc-h', img: SVC1H, code: 'SVC-H, SVC-WH, SVC-HN, SVC-WHN', name: '수직형 리프팅 클램프 (핸들잠금타입)' },
                { to: '/products/supertool/steelclamps/svc-e', img: SVC1E, code: 'SVC0.3E~2E / 0.3EN~1EN', name: '수직형 리프팅 클램프 (유니버설 샤클 포함, 핸들잠금타입)' },
                { to: '/products/supertool/steelclamps/svc-l', img: SVC_L, code: 'SVC0.5L~5L', name: '수직형 리프팅 클램프 (레버잠금타입)' },
                { to: '/products/supertool/steelclamps/fkh1', img: FKH1, code: 'FKH1', name: '복공판 리프팅 후크' },
                { to: '/products/supertool/steelclamps/scc', img: SCC3, code: 'SCC0.3W~6', name: '스크류 캠 클램프 (범용 타입)' },
                { to: '/products/supertool/steelclamps/sjc', img: SJC1, code: 'SJC0.5 / 1 / 2 / 3', name: '스크류 캠 클램프 (싱글 아이 타입)' },
                { to: '/products/supertool/steelclamps/sdc-n', img: SDC1N, code: 'SDC0.5N~5N', name: '스크류 캠 클램프 (더블 아이 타입)' },
                { to: '/products/supertool/steelclamps/sdc-s', img: SDC1S, code: 'SDC0.5S / 1S / 2S / 3.2S / 6.3S', name: '스크류 캠 클램프 (더블 아이 타입, 트위스트 캠 특허)' },
                { to: '/products/supertool/steelclamps/hhc', img: HHC, code: 'HHC0.5~5', name: '리프팅 후크' },
                { to: '/products/supertool/steelclamps/dlc05', img: DLC05, code: 'DLC0.5', name: '드럼 리프트 클램프' },
                { to: '/products/supertool/steelclamps/dlc05v', img: DLC05V, code: 'DLC0.5V', name: '드럼 리프트 클램프 (수직형 리프팅)' },
                { to: '/products/supertool/steelclamps/dsb1s', img: DSB1S, code: 'DSB1S', name: '드럼 리프트 클램프 밸런스' },
                { to: '/products/supertool/steelclamps/flh1-2', img: FLH2, code: 'FLH1 / 2', name: '포크리프트용 리프팅 후크' },
                { to: '/products/supertool/steelclamps/gvc', img: GVC1E, code: 'GVC0.35E,EN / 0.5E,EN / 1E,EN / 2E', name: '수평형 리프팅 클램프 (유니버설 샤클 포함, 핸들잠금타입)' },
                { to: '/products/supertool/steelclamps/gvc1r', img: GVC1R, code: 'GVC0.5R / 1R', name: '수직형 & 수평형 리프팅 클램프 (핸들잠금타입)' },
                { to: '/products/supertool/steelclamps/hlc1u', img: HLC1U, code: 'HLC0.5U~5U', name: '수평형 리프팅 클램프 (분할 조 타입)' },
                { to: '/products/supertool/steelclamps/hpc', img: HPC2N, code: 'HPC0.5N~5N', name: '수평형 리프팅 클램프' },
                { to: '/products/supertool/steelclamps/lsbn', img: LSBN, code: 'LSBN11~52', name: '밸런스' },
                { to: '/products/supertool/steelclamps/rgc', img: RGC, code: 'RGC10~100', name: '레일 클램프' },
                { to: '/products/supertool/steelclamps/sdh3', img: SDH3, code: 'SDH3', name: '슈퍼 풋 락' },
                { to: '/products/supertool/steelclamps/sjc-s', img: SJC1S, code: 'SJC0.5S / 1S', name: '스크류 캠 클램프 (싱글 아이 타입, 트위스트 캠 특허)' },
                { to: '/products/supertool/steelclamps/slh-n', img: SLH_N, code: 'SLH1N / 2N / 3N', name: '슈퍼 락 후크' },
                { to: '/products/supertool/steelclamps/slh3a', img: SLH3A_WEB, code: 'SLH2A / 3A', name: '슈퍼 락 후크 (열림/닫힘 락 타입)' },
                { to: '/products/supertool/steelclamps/slh-nc', img: SLH_NC, code: 'SLH2NC / 3NC, SLH2SC / 3SC, SLH2AC / 3AC, 3ASBC', name: '체인 슬링 포함 슈퍼 락 후크' },
                { to: '/products/supertool/steelclamps/slh-s', img: SLH_S, code: 'SLH2S / 3S', name: '슈퍼 락 후크 (회전식)' },
                { to: '/products/supertool/steelclamps/slh3asb', img: SLH3ASB_main, code: 'SLH3ASB', name: '슈퍼 락 후크 (열림/닫힘 락 타입, 회전식)' },
                { to: '/products/supertool/steelclamps/ssc', img: SSC1N, code: 'SSC0.5N / 1N / 2N', name: '스크류 캠 클램프 (싱글 아이 타입) 특허' },
                { to: '/products/supertool/steelclamps/suc', img: SUC1_6, code: 'SUC0.5 / 1 / 1.6 / 3.2', name: '스크류 캠 클램프 (유니버설 샤클 타입) 특허' },
                { to: '/products/supertool/steelclamps/suc-s', img: SUC_S, code: 'SUC0.5S, SUC1S', name: '스크류 캠 클램프 (유니버설 샤클 타입, 트위스트 캠 특허)' },
                { to: '/products/supertool/steelclamps/svc', img: SVC3_1, code: 'SVC0.5~5', name: '수직형 리프팅 클램프 (오픈 락 타입)' },
                { to: '/products/supertool/steelclamps/swc', img: SWC1N, code: 'SWC0.5N / 1N / 2N', name: '스크류 캠 클램프 (더블 아이 타입) 특허' },
                { to: '/products/supertool/steelclamps/swc-s', img: SWC1S, code: 'SWC0.5S / 1S / 2S', name: '스크류 캠 클램프 (더블 아이 타입, 트위스트 캠 특허)' },
                { to: '/products/supertool/steelclamps/tvc1', img: TVC, code: 'TVC1', name: '철근용 수직형 리프팅 클램프' },
                { to: '/products/supertool/steelclamps/tvc1l', img: TVC1L, code: 'TVC1L3 / 5', name: '철근용 수직형 리프팅 클램프 (이중 잠금 타입)' },
            ]
        }
    }
}
</script>

<style scoped>
.product-list-section {
    background-color: #f9f9f9;
    padding: 2rem 0;
}

.product-list-section.bg-pattern {
    background: #f9f9f9 url('@/assets/images/backgrounds/bg-pattern.png') repeat;
    background-size: 25%;
}

.inner-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

.breadcrumb-wrapper.breadcrumbs-professional {
    margin-bottom: 1.5rem;
}

.breadcrumbs-professional ol {
    display: flex;
    align-items: center;
    background: #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.breadcrumbs-professional li+li::before {
    content: '›';
    margin: 0 1rem;
    color: #cccccc;
}

.breadcrumbs-professional li a,
.breadcrumbs-professional li {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    color: #333333;
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

.page-heading {
    font-size: 2.25rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #2c4ea0;
    font-weight: 600;
}

.product-list-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2rem;
}

.item-link {
    text-decoration: none;
}

.product-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #ffffff;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s, box-shadow 0.3s;
    height: 300px;
}

.product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.image-container {
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0f0f0;
}

.image-container img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.product-info {
    padding: 0.75rem 1rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.item-code {
    font-weight: 600;
    font-size: 0.9rem;
    color: #2c4ea0;
    margin-bottom: 0.5rem;
    text-align: center;
}

.item-name {
    font-size: 1rem;
    color: #333333;
    text-align: center;
}

@media (max-width: 768px) {
    .inner-container {
        padding: 0 0.5rem;
    }

    .product-list-grid {
        gap: 1.5rem;
    }

    .product-card {
        height: auto;
    }
}
</style>
