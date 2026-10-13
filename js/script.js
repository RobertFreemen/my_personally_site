document.addEventListener('DOMContentLoaded', () => {
    console.log('Архивные свитки загружены в консоль.');

    // Интерактивная форма обратной связи с localStorage по ТЗ
    const contactForm = document.getElementById('historicalForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = contactForm.querySelector('input[type="text"]');
            const name = nameInput ? nameInput.value : 'Искатель';
            
            // Запись в localStorage
            localStorage.setItem('last_scribe', name);
            
            alert(`Приветствуем, ${name}! Ваше послание запечатано сургучом и сохранено в localStorage.`);
            contactForm.reset();
        });
    }
});
