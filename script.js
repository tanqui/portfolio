
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    window.location.hash = '';
                }
            });
        });

        document.querySelectorAll('.thumbnail').forEach(thumb => {
            thumb.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                
                const modalImage = this.closest('.modal-left').querySelector('.modal-image');
                const images = modalImage.querySelectorAll('img');
                const thumbnails = this.closest('.modal-thumbnails').querySelectorAll('.thumbnail');
                
                images.forEach(img => img.classList.remove('active'));
                thumbnails.forEach(t => t.classList.remove('active'));
                
                images[index].classList.add('active');
                this.classList.add('active');
            });
        });

        document.querySelectorAll('.arrow').forEach(arrow => {
            arrow.addEventListener('click', function(e) {
                e.stopPropagation();
                
                const direction = this.dataset.direction;
                
                const modalImage = this.closest('.modal-image');
                const images = Array.from(modalImage.querySelectorAll('img'));
                const thumbnails = Array.from(this.closest('.modal-left').querySelectorAll('.thumbnail'));
                
                let currentIndex = images.findIndex(img => img.classList.contains('active'));
                let newIndex;
                
                if (direction === 'prev') {
                    newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
                } else {
                    newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
                }
                
                images.forEach(img => img.classList.remove('active'));
                thumbnails.forEach(t => t.classList.remove('active'));
                
                images[newIndex].classList.add('active');
                thumbnails[newIndex].classList.add('active');
            });
        });
