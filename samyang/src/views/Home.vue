<template>
    <main class="home-section">
        <div class="inner-container">
            <!-- Swiper 슬라이더 -->
            <section class="slider-section">
                <swiper class="home-swiper" :modules="swiperModules" :loop="true" :loopedSlides="slides.length"
                    :pagination="{ clickable: true }" :autoplay="{ delay: 3000 }" :breakpoints="breakpoints">
                    <swiper-slide v-for="(slide, idx) in slides" :key="idx" class="slide-item">
                        <div class="slide-container">
                            <img :src="slide" :alt="`슬라이더 이미지 ${idx + 1}`" class="slide-img" />
                        </div>
                    </swiper-slide>
                </swiper>
            </section>

            <!-- 파트너 로고 섹션 (무한 루프) -->
            <section class="partner-logos">
                <div class="logos-marquee">
                    <div class="logos-track">
                        <div v-for="logo in logos" :key="logo.alt + '-1'" class="logo-wrapper">
                            <img :src="logo.src" :alt="logo.alt" class="logo-img" />
                        </div>
                        <div v-for="logo in logos" :key="logo.alt + '-2'" class="logo-wrapper">
                            <img :src="logo.src" :alt="logo.alt" class="logo-img" />
                        </div>
                    </div>
                </div>
            </section>

            <!-- 환영 문구 -->
            <section class="welcome-text">
                <h1>삼양기공사에 오신 것을 환영합니다</h1>
            </section>

            <!-- 회사소개 및 제품 섹션 -->
            <About />
            <Products />
        </div>
    </main>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import slide1 from '@/assets/images/slider/slider1.jpg'
import slide2 from '@/assets/images/slider/slider2.jpg'
import slide3 from '@/assets/images/slider/slider3.jpg'
import slide4 from '@/assets/images/slider/slider4.jpg'
import slide5 from '@/assets/images/slider/slider5.jpg'
import slide6 from '@/assets/images/products/tanaka/yukwang.jpg'

import aceLogo from '@/assets/images/logos/ace.png'
import cactusLogo from '@/assets/images/logos/cactus.png'
import supertoolLogo from '@/assets/images/logos/supertool.png'
import tanakaLogo from '@/assets/images/logos/tanaka.png'
import ykLogo from '@/assets/images/logos/yk.jpg'

import Products from './products/products.vue'
import About from './About.vue'

const slides = [slide1, slide2, slide3, slide4, slide5, slide6]
const swiperModules = [Navigation, Pagination, Autoplay]

// 모바일부터 데스크탑까지 자연스러운 슬라이드 뷰
const breakpoints = {
    320: {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    640: {
        slidesPerView: 1.2,
        spaceBetween: 15,
    },
    768: {
        slidesPerView: 1.5,
        spaceBetween: 20,
    },
    1024: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
}

const logos = [
    { src: aceLogo, alt: 'ACE' },
    { src: cactusLogo, alt: 'CACTUS' },
    { src: supertoolLogo, alt: 'SUPER TOOL' },
    { src: tanakaLogo, alt: 'TANAKA' },
    { src: ykLogo, alt: 'YUKWANG' },
]
</script>

<style scoped>
.home-section {
    background-color: #f9f9f9;
    background-image: url('@/assets/images/backgrounds/bg-pattern.png');
    background-repeat: repeat;
    background-size: 25%;
    padding: 2rem 0;
}

.inner-container {
    max-width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
}

.page-heading {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
    color: #2c4ea0;
}

/* 슬라이더 */
.slider-section {
    margin-bottom: 2rem;
}

.home-swiper {
    width: 100%;
}

/* slide-item 클래스 제거하고, 컨테이너로 제어 */
.slide-container {
    position: relative;
    width: 100%;
    padding-top: 40%;
    /* 2.5:1 비율 */
    overflow: hidden;
    border-radius: 8px;
    background: #fff;
}

.slide-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
}

.slide-container:hover .slide-img {
    transform: scale(1.05);
}

/* 파트너 로고 무한 루프 */
.partner-logos {
    overflow: hidden;
    background: #fff;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 2rem;
}

.logos-marquee {
    width: 100%;
    overflow: hidden;
}

.logos-track {
    display: flex;
    align-items: center;
    animation: scroll-right 20s linear infinite;
}

.logo-wrapper {
    flex: none;
    margin: 0 2rem;
}

.logo-img {
    height: 60px;
    object-fit: contain;
}

/* 애니메이션 */
@keyframes scroll-right {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-50%);
    }
}

/* 환영 문구 */
.welcome-text {
    text-align: center;
    margin: 2rem 0;
}

.welcome-text h1 {
    font-size: 2rem;
    color: #333;
}
</style>
