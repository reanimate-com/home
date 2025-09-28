AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: false,
    mirror: true
});

function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

function togglePricing() {
    const toggle = document.getElementById('elearning-toggle').checked;
    const primaryPrice = document.getElementById('primary-price');
    const highschoolPrice = document.getElementById('highschool-price');
    const collegePrice = document.getElementById('college-price');

    if (toggle) {
        primaryPrice.innerHTML = 'KES 2,500 <span class="text-base font-normal">/student/year</span>';
        highschoolPrice.innerHTML = 'KES 3,000 <span class="text-base font-normal">/student/year</span>';
        collegePrice.innerHTML = 'KES 4,500 <span class="text-base font-normal">/student/year</span>';
    } else {
        primaryPrice.innerHTML = 'KES 1,000 <span class="text-base font-normal">/student/year</span>';
        highschoolPrice.innerHTML = 'KES 1,500 <span class="text-base font-normal">/student/year</span>';
        collegePrice.innerHTML = 'KES 3,000 <span class="text-base font-normal">/student/year</span>';
    }
}