<!-- src/views/Home.vue -->
<template>
    <main class="home">
        <swiper class="home-swiper" :modules="swiperModules" :slides-per-view="'auto'" :centered-slides="true"
            :loop="true" :looped-slides="slides.length" navigation :pagination="{ clickable: true }">
            <swiper-slide v-for="(slide, idx) in slides" :key="idx" class="peeking-slide">
                <div class="slide-container">
                    <img :src="slide" alt="슬라이더 이미지" class="slide-img" />
                </div>
            </swiper-slide>
        </swiper>

        <section class="welcome-text">
            <h1>삼양기공사에 오신 것을 환영합니다</h1>
            <p>
                고품질 수입 공구(SUPER TOOL, SUWA, CACTUS)와<br />
                내수 절단기(유광공업)를 유통합니다.
            </p>
        </section>
        <Products />
        <About />


    </main>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import About from './About.vue'
// CSS
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import slide1 from '@/assets/images/slider/tools1.jpg'
import slide2 from '@/assets/images/slider/slider2.jpg'
import slide3 from '@/assets/images/slider/slider3.jpg'
import slide4 from '@/assets/images/slider/slider4.jpg'
import Products from './products/products.vue'

const slides = [slide1, slide2, slide3, slide4]
// Navigation, Pagination 모듈 등록
const swiperModules = [Navigation, Pagination]
</script>

<style scoped>
.home {
    background: #f9f9f9;
    padding: 2rem 0;
    text-align: center;
}

.home-swiper {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto 2rem;
    overflow: visible;
}

/* 중앙 슬라이드 비율 조정: 좌우 peeking 효과 */
.peeking-slide {
    width: 85% !important;
}

.slide-container {
    position: relative;
    width: 100%;
    padding-top: 40%;
    border-radius: 8px;
    overflow: hidden;
}

.slide-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.peeking-slide:hover .slide-img {
    transform: scale(1.05);
}

.swiper-button-prev,
.swiper-button-next {
    color: #2c4ea0;
    opacity: 0.8;
    transition: opacity 0.3s;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
    opacity: 1;
}

.swiper-pagination-bullet {
    background: rgba(44, 78, 160, 0.4) !important;
}

.swiper-pagination-bullet-active {
    background: #2c4ea0 !important;
}

.welcome-text {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
}

.welcome-text h1 {
    font-size: 2.5rem;
    color: #2c4ea0;
    margin-bottom: 1rem;
}

.welcome-text p {
    font-size: 1.2rem;
    color: #333;
    line-height: 1.6;
}
</style>
