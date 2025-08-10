// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);
document.querySelectorAll('.card-hover, .fade-in').forEach(el => {
    observer.observe(el);
});

// Ripple effect on buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255,255,255,0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.marginLeft = '-10px';
        ripple.style.marginTop = '-10px';

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Create a case row in the table
function caseCard(bgColorHov, caseID, Title, Type, bgColor, Urgency, DaysPending) {
    let html = `<tr class="${bgColorHov}">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${caseID}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${Title}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${Type}</td>
        <td class="px-6 py-4 whitespace-nowrap">
            <span class="px-2 py-1 text-xs font-semibold rounded-full ${bgColor} text-white">${Urgency}</span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${DaysPending}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
            <button class="text-indigo-600 hover:text-indigo-900 mr-4">Review</button>
            <button class="text-green-600 hover:text-green-900">Assign</button>
        </td>
    </tr>`;
    document.querySelector("tbody").innerHTML += html;
}

// Map urgency to colors
function getUrgencyDetails(urgency) {
    switch(urgency?.toLowerCase()) {
        case 'high':
        case 'critical':
            return { bgColorHov: "hover:bg-red-50", bgColor: "bg-red-500" };
        case 'medium':
            return { bgColorHov: "hover:bg-yellow-50", bgColor: "bg-yellow-500" };
        case 'low':
            return { bgColorHov: "hover:bg-green-50", bgColor: "bg-green-500" };
        default:
            return { bgColorHov: "hover:bg-gray-50", bgColor: "bg-gray-500" };
    }
}

// *** REMOVED loadCases function and event listener ***

// You can manually add rows by calling caseCard() like this:
// caseCard("hover:bg-red-50", "C101", "Sample Case Title", "Civil", "bg-red-500", "HIGH", 120);
