// Countdown Timer
        function updateCountdown() {
            const eventDate = new Date("June 15, 2023 18:30:00").getTime();
            const now = new Date().getTime();
            const difference = eventDate - now;
            
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
        }
        
        setInterval(updateCountdown, 1000);
        updateCountdown();
        
        // RSVP Form Handling
        document.getElementById("rsvpForm").addEventListener("submit", function(e) {
            e.preventDefault();
            
            const name = document.getElementById("name").value;
            const guests = document.getElementById("guests").value;
            const attending = document.querySelector('input[name="attending"]:checked').value;
            
            // In a real app, you would send this data to a server
            alert(`Thank you for your RSVP, ${name}! We have recorded that ${attending === 'yes' ? `you'll be attending with ${guests > 1 ? guests + ' guests' : 'a guest'}.` : "you won't be able to attend."}`);
            
            // Reset form
            if (attending === 'no') {
                this.reset();
            } else {
                document.getElementById("name").value = "";
                document.getElementById("message").value = "";
            }
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
