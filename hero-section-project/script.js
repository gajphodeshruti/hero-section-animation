document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1.2, delay: 0.5 });
    gsap.from(".hero-subtitle", { opacity: 0, y: 50, duration: 1.2, delay: 0.8 });

    const images = document.querySelectorAll(".hero-image");

    images.forEach((img) => {
        img.addEventListener("mouseover", () => {
            gsap.to(images, { filter: "grayscale(100%) blur(3px)", duration: 0.5 });
            gsap.to(img, { filter: "grayscale(0%) blur(0)", scale: 1.1, duration: 0.5 });
        });

        img.addEventListener("mouseleave", () => {
            gsap.to(images, { filter: "grayscale(100%) blur(3px)", scale: 1, duration: 0.5 });
        });

        img.addEventListener("mousemove", (e) => {
            gsap.to(img, { x: e.offsetX / 10, y: e.offsetY / 10, duration: 0.2 });
        });
    });
});
