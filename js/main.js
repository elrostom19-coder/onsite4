
        const toggle = document.getElementById('darkToggle');
        const html = document.documentElement;

        // Dark mode toggle functionality
        if (toggle) {
            toggle.addEventListener('change', function () {
                if (toggle.checked) {
                    html.classList.add('dark');
                    localStorage.setItem('theme', 'dark');
                } else {
                    html.classList.remove('dark');
                    localStorage.setItem('theme', 'light');
                }
            });
            
            // Load saved theme
            if (localStorage.getItem('theme') === 'dark') {
                html.classList.add('dark');
                toggle.checked = true;
            }
        }

        // Monthly/Yearly toggle for pricing
        const monthlyBtn = document.querySelectorAll('section:nth-of-type(3) button:first-child');
        const yearlyBtn = document.querySelectorAll('section:nth-of-type(3) button:last-child');
        
        if (monthlyBtn.length > 0 && yearlyBtn.length > 0) {
            monthlyBtn[0].addEventListener('click', function(e) {
                e.preventDefault();
                monthlyBtn[0].classList.add('bg-blue-600', 'text-white');
                monthlyBtn[0].classList.remove('text-gray-700', 'dark:text-gray-300');
                yearlyBtn[0].classList.remove('bg-blue-600', 'text-white');
                yearlyBtn[0].classList.add('text-gray-700', 'dark:text-gray-300');
            });
            
            yearlyBtn[0].addEventListener('click', function(e) {
                e.preventDefault();
                yearlyBtn[0].classList.add('bg-blue-600', 'text-white');
                yearlyBtn[0].classList.remove('text-gray-700', 'dark:text-gray-300');
                monthlyBtn[0].classList.remove('bg-blue-600', 'text-white');
                monthlyBtn[0].classList.add('text-gray-700', 'dark:text-gray-300');
            });
        }
        