function handleIntersection(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                }
            });
        }

        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

        document.querySelectorAll('.animate-card').forEach(card => {
            observer.observe(card);
        });


