javascript
document.addEventListener('DOMContentLoaded', () => {
    console.log('Архивные свитки загружены.');

    // 1. Эффект проявления элементов при прокрутке хроники
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const scrollReveal = () => {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            // Если блок появился в поле зрения
            if (rect.top < window.innerHeight - 50) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            }
        });
    };
    
    window.addEventListener('scroll', scrollReveal);
    scrollReveal(); // Проверка при первом открытии свитков

    // 2. Интерактивная форма обратной связи с localStorage
    const contactForm = document.getElementById('historicalForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = contactForm.querySelector('input[type="text"]').value;
            
            // Сохранение имени в localStorage по техническому ТЗ
            localStorage.setItem('last_scribe', name);
            
            alert(`Приветствуем, ${name}! Ваше послание запечатано сургучом и сохранено в localStorage.`);
            contactForm.reset();
        });
    }
});