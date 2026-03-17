<script setup lang="ts">
</script>

<template>
  <div class="page">
    <nav class="navbar">
      <div class="nav-container">
        <div class="logo">Era Leap</div>
        <button class="contact-btn">Contact Us</button>
      </div>
    </nav>

    <section class="hero">
      <video
        autoplay
        muted
        loop
        playsinline
        class="background-video"
      >
        <source src="/video/bg_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div class="overlay">
        <h1 class="headline">Decisions Powered by the Intelligent Solutions</h1>
      </div>
    </section>

    <section class="intro">
      <div class="intro-container">
        <h2 class="intro-title">About Us</h2>
        <div class="intro-content">
          <p>
            <span class="company-name">Era Leap</span> is a technology-driven company specializing in artificial intelligence and digital innovation. We leverage advanced AI algorithms, data analytics, and automation tools designed to support fast, accurate decision-making in high-risk, complex environments.
          </p>
          <p>
            Leveraging our expertise in these domains, we provide accessible and efficient AI transformation solutions that help Canadian businesses modernize operations and make smarter, data-driven decisions.
          </p>
          <p>
            Our vision is to be a technology-focused value creator: building AI systems capable of high-stakes decision-making while delivering practical solutions that help enterprises thrive in the era of intelligent automation.
          </p>
        </div>
      </div>
    </section>

    <footer class="site-footer">
      <div class="footer-container">
        <p class="ai-note">
          Pioneered with vibe-coding and the generative models, then manually polished by our humans to ensure everything is just right. We're all about embracing the future, responsibly. If something looks off, please contact us.
        </p>
        <p class="copyright">&copy; 2026 Era Leap. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* IMPORT COMFORTAA FONT */
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap');

/* RESET DEFAULT MARGINS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* FLOATING NAVBAR */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: rgba(0, 0, 0, 0.6); /* Semi-transparent dark background */
  backdrop-filter: blur(10px);    /* Modern frosted glass effect */
  z-index: 1000;                  /* Ensures it stays above everything */
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-container {
  width: 100%;
  margin: 0 30px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: 'Comfortaa', cursive;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.5px;
}

.contact-btn {
  font-family: Arial, sans-serif;
  background-color: #fff;
  color: #000;
  border: none;
  padding: 10px 22px;
  border-radius: 50px; /* Capsule shape */
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
}

.contact-btn:hover {
  background-color: #e5e5e5;
  transform: translateY(-2px);
}

.page {
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
}

/* HERO VIDEO SECTION */
.hero {
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: auto; 
  overflow: hidden;
  line-height: 0;
}

.background-video {
  position: relative; 
  width: 100%;
  height: auto;
  display: block;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  z-index: 2;
}

.headline {
  color: white;
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  font-weight: 700;
  padding-top: 33%; /* Adjusted padding since navbar is fixed at top */
  text-align: center;
  letter-spacing: 4px;
  text-shadow: 1px 1px 8px rgba(0,0,0,0.7);
}

.company-name {
  font-family: 'Comfortaa', cursive;
  font-weight: 700;
  color: #000; /* Keeps it bold and black */
  font-size: 1.2rem; /* Slightly larger to account for Comfortaa's x-height */
  letter-spacing: -0.5px;
}

/* INTRODUCTION SECTION */
.intro {
  padding: 120px 20px;
  background-color: #ffffff;
  color: #222;
  width: 100%;
}

.intro-container {
  max-width: 800px; /* Slightly tighter for better readability */
  margin: 0 auto;    /* Keeps the container centered on the page */
  text-align: left;  /* Aligns the text inside the container to the left */
}

.intro-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 40px;
  color: #000;
  letter-spacing: -1px;
  position: relative;
}

/* Optional: Adds a small accent line under the title to anchor the left-aligned look */
.intro-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: #000; /* You can change this to your --accent color later */
  margin-top: 10px;
}

.intro-content p {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 24px;
  letter-spacing: 0;
}

/* FOOTER STYLES */
.site-footer {
  padding: 60px 20%;
  background-color: #f9f9f9; /* Light grey to distinguish from the white Intro section */
  border-top: 1px solid #eee;
  color: #888; /* Soft grey text */
}

.footer-container {
  width: 100%;
  margin: 0 auto;
  text-align: left; /* Keeping consistency with your left-aligned About section */
}

.ai-note {
  font-size: 0.9rem; /* Smaller "fine print" size */
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: center;
}

.ai-note strong {
  color: #555; /* Slightly darker for emphasis */
  font-weight: 600;
}

.footer-link {
  color: #000;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: opacity 0.2s;
}

.footer-link:hover {
  opacity: 0.7;
}

.copyright {
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  opacity: 0.6;
  text-align: center;
}
</style>