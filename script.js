let currentQuestion = 1;
        const totalQuestions = 5;
        let countdownInterval;

        function startQuiz() {
            document.getElementById('hero').style.display = 'none';
            document.getElementById('progressContainer').classList.remove('hidden');
            document.getElementById('quiz').classList.add('active');
            updateProgress();
            scrollToTop();
        }

        function updateProgress() {
            const progress = (currentQuestion / totalQuestions) * 100;
            document.getElementById('progressBar').style.width = progress + '%';
            document.getElementById('progressText').textContent = `Pergunta ${currentQuestion} de ${totalQuestions}`;
        }

        function selectOption(element, questionNum) {
            const options = element.parentElement.children;
            for (let opt of options) {
                opt.style.background = 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)';
                opt.style.borderColor = 'transparent';
            }
            
            element.style.background = 'linear-gradient(135deg, #FFE66D 0%, #FFC107 100%)';
            element.style.borderColor = '#FF6B35';
            
            setTimeout(() => {
                if (questionNum < 5) {
                    document.getElementById('q' + questionNum).classList.add('hidden');
                    document.getElementById('q' + (questionNum + 1)).classList.remove('hidden');
                    currentQuestion = questionNum + 1;
                    updateProgress();
                    scrollToTop();
                } else {
                    showLoading();
                }
            }, 500);
        }

        function showLoading() {
            document.getElementById('quiz').classList.remove('active');
            document.getElementById('progressContainer').classList.add('hidden');
            document.getElementById('loading').classList.add('active');
            scrollToTop();
            
            setTimeout(() => {
                document.getElementById('loading').classList.remove('active');
                document.getElementById('result').classList.add('active');
                scrollToTop();
            }, 3000);
        }

        function showProof() {
            document.getElementById('result').classList.remove('active');
            document.getElementById('proof').classList.add('active');
            scrollToTop();
        }

        function showCountdown() {
            document.getElementById('proof').classList.remove('active');
            document.getElementById('countdownSection').classList.add('active');
            startCountdown();
            scrollToTop();
        }

        function startCountdown() {
            let minutes = 14;
            let seconds = 59;
            
            countdownInterval = setInterval(() => {
                seconds--;
                
                if (seconds < 0) {
                    seconds = 59;
                    minutes--;
                }
                
                if (minutes < 0) {
                    clearInterval(countdownInterval);
                    document.getElementById('timer').textContent = '00:00';
                    return;
                }
                
                const displayMinutes = minutes.toString().padStart(2, '0');
                const displaySeconds = seconds.toString().padStart(2, '0');
                document.getElementById('timer').textContent = displayMinutes + ':' + displaySeconds;
            }, 1000);
        }

        function showBonus() {
            document.getElementById('countdownSection').classList.remove('active');
            document.getElementById('bonus').classList.add('active');
            scrollToTop();
        }

        function showPrice() {
            document.getElementById('bonus').classList.remove('active');
            document.getElementById('price').classList.add('active');
            scrollToTop();
        }

        function showGuarantee() {
            document.getElementById('price').classList.remove('active');
            document.getElementById('guaranteeSection').classList.add('active');
            scrollToTop();
        }

        function showFAQ() {
            document.getElementById('guaranteeSection').classList.remove('active');
            document.getElementById('faq').classList.add('active');
            scrollToTop();
        }

        function finalCTA() {
            document.getElementById('faq').classList.remove('active');
            document.getElementById('finalCTA').classList.add('active');
            scrollToTop();
        }

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Animação de pulse para o botão final
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
        `;
        document.head.appendChild(style);