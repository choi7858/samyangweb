<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-col contact">
                    <p>삼양기공사</p>
                    <p>주소: 서울 중구 충무로9길 14 길영빌딩 2층 201, 203호</p>
                    <p>전화: 02-2267-0066, 0681</p>
                    <p>팩스: 02-2275-5049</p>
                    <p>이메일: sytool09@naver.com</p>
                </div>
                <div class="footer-col copy">
                    <p>&copy; 2025 삼양기공사. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
.footer {
    background-color: #f8f9fa;
    color: #333333;
    padding: 2rem 1rem;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    border-top: 1px solid #e0e0e0;
    margin-top: auto;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.footer-col.contact {
    text-align: left;
    line-height: 1.6;
}

.footer-col.copy {
    text-align: right;
    font-size: 0.9rem;
    opacity: 0.8;
}

@media (max-width: 768px) {
    .footer-content {
        flex-direction: column;
        text-align: center;
    }

    .footer-col.contact,
    .footer-col.copy {
        text-align: center;
    }
}
</style>
