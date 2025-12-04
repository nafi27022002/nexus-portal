document.addEventListener('DOMContentLoaded', () => {
    // Sidebar Toggle Logic
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                if (!sidebar.contains(e.target) && !menuToggle.contains(e.target) && sidebar.classList.contains('active')) {
                    sidebar.classList.remove('active');
                }
            }
        });
    }

    // Dynamic Greeting Logic
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        const hour = new Date().getHours();
        let greetingText = 'Good Morning';

        if (hour >= 12 && hour < 17) {
            greetingText = 'Good Afternoon';
        } else if (hour >= 17) {
            greetingText = 'Good Evening';
        }

        // Keep the name part if it exists in the HTML
        const currentText = greetingElement.innerText;
        const namePart = currentText.includes(',') ? currentText.split(',')[1] : ' Scholar!';

        greetingElement.innerText = `${greetingText}${namePart}`;
    }

    // Add simple animation delay to cards
    const cards = document.querySelectorAll('.card, .login-card, .stat-card, .course-card, .schedule-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
    });

    // Add keyframes for animation if not already in CSS (injecting it here for simplicity)
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(styleSheet);
});
