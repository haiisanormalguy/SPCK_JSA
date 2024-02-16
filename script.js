document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const destinationsLink = document.getElementById('destinations-link');
    const blogLink = document.getElementById('blog-link');
    const contactLink = document.getElementById('contact-link');
    const contentDiv = document.getElementById('content');

    function renderHomeContent() {
        contentDiv.innerHTML = '<h2>Chào mừng bạn đến với MindX Travel!</h2><p>Trang web này cung cấp thông tin về các điểm đến phổ biến, bài viết blog du lịch và cách liên hệ với chúng tôi.</p><h2>Điểm đến phổ biến</h2><section class="destination"><div class="destination-item"><a href="paris.html"><h3>Paris, Pháp</h3></a><img src="paris.jpg" alt="Paris, Pháp"><p>Thành phố ánh sáng nổi tiếng với Tháp Eiffel và Louvre.</p></div><div class="destination-item"><h3>Tokyo, Nhật Bản</h3><img src="nhật.jpg" alt="Tokyo, Nhật Bản"><p>Thủ đô sôi động với công nghệ hiện đại và văn hóa truyền thống.</p></div><div class="destination-item"><h3>Bali, Indonesia</h3><img src="bali.jpg" alt="Bali, Indonesia"><p>Đảo thiên đường với bãi biển đẹp và văn hóa độc đáo.</p></div></section><h2>Bài viết blog</h2><section class="blog"><div class="blog-item"><a href="parisblog.html"><h3>10 hoạt động tuyệt vời bạn nên thử khi du lịch Paris</h3></a><p>Paris là một trong những thành phố nổi tiếng nhất thế giới, với nhiều hoạt động thú vị để trải nghiệm.</p></div><div class="blog-item"><h3>Khám phá Tokyo - Thành phố không bao giờ ngủ</h3><p>Tokyo, thủ đô của Nhật Bản, là một thành phố độc đáo với văn hóa hiện đại và truyền thống pha trộn.</p></div><div class="blog-item"><h3>7 lý do bạn nên đến Bali ít nhất một lần trong đời</h3><p>Bali, một trong những điểm đến du lịch phổ biến nhất thế giới, với cảnh đẹp tự nhiên và văn hóa độc đáo.</p></div></section>';
    }

    function renderAboutContent() {
        contentDiv.innerHTML = '<h2>Giới Thiệu</h2><p>Chúng tôi là một trang web hướng dẫn du lịch cung cấp thông tin hữu ích về các điểm đến trên khắp thế giới.</p>';
    }

    function renderDestinationsContent() {
        contentDiv.innerHTML = '<h2>Điểm đến phổ biến</h2><section class="destination"><div class="destination-item"><a href="paris.html"><h3>Paris, Pháp</h3></a><img src="paris.jpg" alt="Paris, Pháp"><p>Thành phố ánh sáng nổi tiếng với Tháp Eiffel và Louvre.</p></div><div class="destination-item"><h3>Tokyo, Nhật Bản</h3><img src="nhật.jpg" alt="Tokyo, Nhật Bản"><p>Thủ đô sôi động với công nghệ hiện đại và văn hóa truyền thống.</p></div><div class="destination-item"><h3>Bali, Indonesia</h3><img src="bali.jpg" alt="Bali, Indonesia"><p>Đảo thiên đường với bãi biển đẹp và văn hóa độc đáo.</p></div></section>';
    }

    function renderBlogContent() {
        contentDiv.innerHTML = '<h2>Bài viết blog</h2><section class="blog"><div class="blog-item"><a href="parisblog.html"><h3>10 hoạt động tuyệt vời bạn nên thử khi du lịch Paris</h3></a><p>Paris là một trong những thành phố nổi tiếng nhất thế giới, với nhiều hoạt động thú vị để trải nghiệm.</p></div><div class="blog-item"><h3>Khám phá Tokyo - Thành phố không bao giờ ngủ</h3><p>Tokyo, thủ đô của Nhật Bản, là một thành phố độc đáo với văn hóa hiện đại và truyền thống pha trộn.</p></div><div class="blog-item"><h3>7 lý do bạn nên đến Bali ít nhất một lần trong đời</h3><p>Bali, một trong những điểm đến du lịch phổ biến nhất thế giới, với cảnh đẹp tự nhiên và văn hóa độc đáo.</p></div></section>';
    }

    function renderContactContent() {
        contentDiv.innerHTML = '<h2>Liên Hệ</h2><p>Để liên hệ với chúng tôi, vui lòng điền vào biểu mẫu dưới đây:</p><form id="contact-form"><label for="name">Họ và tên:</label><input type="text" id="name" name="name" required><label for="email">Email:</label><input type="email" id="email" name="email" required><label for="message">Tin nhắn:</label><textarea id="message" name="message" required></textarea><button type="submit">Gửi</button></form><p>Hoặc bạn có thể liên hệ qua email: contact@example.com</p>';
    }

    function renderContent(page) {
        switch (page) {
            case 'home':
                renderHomeContent();
                break;
            case 'about':
                renderAboutContent();
                break;
            case 'destinations':
                renderDestinationsContent();
                break;
            case 'blog':
                renderBlogContent();
                break;
            case 'contact':
                renderContactContent();
                break;
            default:
                renderHomeContent();
        }
    }

    renderContent('home');

    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        renderContent('home');
    });

    aboutLink.addEventListener('click', function(e) {
        e.preventDefault();
        renderContent('about');
    });

    destinationsLink.addEventListener('click', function(e) {
        e.preventDefault();
        renderContent('destinations');
    });

    blogLink.addEventListener('click', function(e) {
        e.preventDefault();
        renderContent('blog');
    });

    contactLink.addEventListener('click', function(e) {
        e.preventDefault();
        renderContent('contact');
    });
});