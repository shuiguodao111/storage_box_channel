// Contact Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                timestamp: new Date().toISOString()
            };
            
            // Simple validation
            if (!formData.name || !formData.email || !formData.message) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(formData.email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            simulateFormSubmission(formData);
        });
        
        // Add input validation
        const emailInput = document.getElementById('email');
        emailInput.addEventListener('blur', function() {
            if (this.value && !isValidEmail(this.value)) {
                this.style.borderColor = '#ff4444';
                showMessage('Please enter a valid email address.', 'error', true);
            } else {
                this.style.borderColor = '#4CAF50';
            }
        });
    }
    
    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Simulate form submission (in a real app, this would send to a server)
    function simulateFormSubmission(formData) {
        showMessage('Sending your message...', 'info');
        
        // Simulate API call delay
        setTimeout(() => {
            console.log('Form submitted:', formData);
            
            // Show success message
            showMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon!', 'success');
            
            // Reset form
            contactForm.reset();
            
            // Reset border colors
            document.getElementById('email').style.borderColor = '#e0e0e0';
            
        }, 1500);
    }
    
    // Show message to user
    function showMessage(message, type, isSmall = false) {
        // Remove existing messages
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type} ${isSmall ? 'small' : ''}`;
        messageDiv.textContent = message;
        
        // Style based on type
        const styles = {
            success: {
                background: '#4CAF50',
                color: 'white'
            },
            error: {
                background: '#f44336',
                color: 'white'
            },
            info: {
                background: '#2196F3',
                color: 'white'
            }
        };
        
        Object.assign(messageDiv.style, {
            padding: isSmall ? '8px 12px' : '15px 20px',
            borderRadius: '8px',
            marginBottom: '20px',
            textAlign: 'center',
            fontSize: isSmall ? '0.9rem' : '1rem',
            ...styles[type]
        });
        
        // Insert message
        if (isSmall) {
            contactForm.insertBefore(messageDiv, contactForm.firstChild);
        } else {
            contactForm.parentNode.insertBefore(messageDiv, contactForm);
        }
        
        // Auto remove after 5 seconds for small messages
        if (isSmall) {
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.remove();
                }
            }, 5000);
        }
    }
    
    console.log('Contact page loaded successfully!');
});