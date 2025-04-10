document.addEventListener('DOMContentLoaded', () => {
    // Form handling
    const form = document.querySelector('.contact-form');
    const button = form?.querySelector('button');

    if (form && button) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const originalText = button.textContent;
            
            button.disabled = true;
            button.innerHTML = '<span class="loading">Sending...</span>';
            
            try {
                await new Promise(resolve => setTimeout(resolve, 1500));
                button.innerHTML = '<span class="success">Sent! ✨</span>';
                form.reset();
                
                setTimeout(() => {
                    button.disabled = false;
                    button.textContent = originalText;
                }, 2000);
            } catch (error) {
                button.innerHTML = 'Error ❌';
                setTimeout(() => {
                    button.disabled = false;
                    button.textContent = originalText;
                }, 2000);
            }
        });
    }

    // Text animation
    const textContainer = document.getElementById('text-container-anim');
    if (!textContainer) {
        console.error("Element with ID 'text-container-anim' not found.");
        return;
    }

    const phrase = "together";
    let i = 0;

    function write() {
        if (i < phrase.length) {
            textContainer.innerHTML += phrase[i];
            i++;
            setTimeout(write, 400);
        } else {
            setTimeout(() => {
                textContainer.innerHTML = '';
                i = 0;
                write();
            }, 2000);
        }
    }

    write();
});