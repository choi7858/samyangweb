<template>
    <main>
        <section class="contact-section bg-pattern">
            <div class="inner-container">
                <!-- 페이지 헤딩 -->


                <!-- 연락처 안내 -->
                <div class="contact-info">
                    <h1 class="page-heading">견적 문의</h1><br />
                    <p>견적 문의는 아래 연락처로 연락 주시면 빠르게 답변드리겠습니다.</p>
                    <ul>
                        <li><strong>전화:</strong> 02-2267-0066, 0681</li>
                        <li><strong>팩스:</strong> 02-2275-5049</li>
                        <li>
                            <strong>이메일:</strong>
                            <a href="mailto:sytool09@naver.com">sytool09@naver.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    name: 'Quote'
}
</script>

<style scoped>
/* 패턴 배경이 필요한 경우에만 적용 */
.section-title {
    display: inline-block;
    font-size: 2.75rem;
    font-weight: 700;
    color: #2c4ea0;
    border-bottom: 4px solid #2c4ea0;
    padding-bottom: 0.5rem;
}

.contact-section.bg-pattern {
    background-color: #f9f9f9;
    background-image: url('@/assets/images/backgrounds/bg-pattern.png');
    background-repeat: repeat;
    background-size: 25%;
    padding: 10%;
}

.inner-container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 1rem;
}

.page-heading {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #2c4ea0;
    font-weight: 600;
}

.contact-info {
    background: #fff;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.contact-info p {
    font-size: 1rem;
    margin-bottom: 2rem;
}

.contact-info ul {
    list-style: none;
    padding: 0;
}

.contact-info li {
    margin-bottom: 0.75rem;
    font-size: 1rem;
}

.contact-info a {
    color: #2c4ea0;
    text-decoration: none;
}

.contact-info a:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .inner-container {
        padding: 0 0.5rem;
    }

    .contact-info {
        padding: 1rem;
    }
}
</style>
