// ==========================
// RS PA HAI ASEP
// SCRIPT.JS FINAL VERSION
// ==========================

// ==========================
// CUSTOM CURSOR
// ==========================

const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursor-ring");

if (cursor && ring) {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    cursor.style.display = "none";
    ring.style.display = "none";

    document.addEventListener("mousemove", () => {
        cursor.style.display = "block";
        ring.style.display = "block";
    }, { once: true });

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";
    });

    function lerp(start, end, amount) {
        return start + (end - start) * amount;
    }

    function animateRing() {
        ringX = lerp(ringX, mouseX, 0.12);
        ringY = lerp(ringY, mouseY, 0.12);

        ring.style.left = ringX + "px";
        ring.style.top = ringY + "px";

        requestAnimationFrame(animateRing);
    }

    animateRing();

    const hoverElements = document.querySelectorAll(
        "a, button, input, .service-card, .doctor-card, .facility-card, .stat-item"
    );

    hoverElements.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            cursor.style.transform = "translate(-50%, -50%) scale(1)";
            cursor.style.background = "#56CCF2";

            ring.style.transform = "translate(-50%, -50%) scale(2.5)";
            ring.style.borderColor = "#56CCF2";
            ring.style.opacity = "0.8";
        });

        item.addEventListener("mouseleave", () => {
            cursor.style.transform = "translate(-50%, -50%) scale(1)";
            cursor.style.background = "#2D9CDB";

            ring.style.transform = "translate(-50%, -50%) scale(1)";
            ring.style.borderColor = "#2D9CDB";
            ring.style.opacity = "0.4";
        });
    });
}

// ==========================
// SCROLL REVEAL
// ==========================

const fadeElements = document.querySelectorAll(".fade-in");

if (fadeElements.length > 0) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.15,
        }
    );

    fadeElements.forEach((element) => {
        observer.observe(element);
    });
}

// ==========================
// NAVBAR SHADOW
// ==========================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (!navbar) return;

    if (window.scrollY > 20) {
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

// ==========================
// NEWSLETTER
// ==========================

const subscribeBtn = document.getElementById("subscribeBtn");
const emailInput = document.getElementById("emailInput");

if (subscribeBtn && emailInput) {
    subscribeBtn.addEventListener("click", () => {
        const email = emailInput.value.trim();

        if (
            email === "" ||
            !email.includes("@") ||
            !email.includes(".")
        ) {
            emailInput.style.border = "2px solid #EB5757";
            emailInput.value = "";
            emailInput.placeholder = "Masukkan email yang valid!";

            setTimeout(() => {
                emailInput.style.border = "";
                emailInput.placeholder = "Masukkan email...";
            }, 2000);

            return;
        }

        subscribeBtn.textContent = "✓ Berhasil";
        subscribeBtn.style.background = "#27AE60";

        emailInput.value = "";
        emailInput.placeholder = "Terima kasih sudah mendaftar";

        setTimeout(() => {
            subscribeBtn.textContent = "Daftar";
            subscribeBtn.style.background = "";
            emailInput.placeholder = "Masukkan email...";
        }, 3000);
    });

    emailInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            subscribeBtn.click();
        }
    });
}

// ==========================
// BUTTON CLICK EFFECT
// ==========================

const allButtons = document.querySelectorAll("button");

allButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.95)";

        setTimeout(() => {
            button.style.transform = "";
        }, 150);
    });
});

console.log("RS PA HAI ASEP - Script Loaded");