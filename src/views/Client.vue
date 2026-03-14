<script setup>
</script>

<template>

<!-- intro section -->
<section class="clients-intro">
<div class="intro-container">

<h1>
Our Trusted <span>Clients</span>
</h1>

<p>
We are proud to have partnered with these amazing organizations
to deliver exceptional automation solutions.
</p>

</div>
</section>


<!-- client logos -->
<section class="clients-logos">
<div class="clients-grid">

<div class="client-item">
<img src="/src/assets/Clients/aibuddy.png" alt="AI Buddy">
</div>

<div class="client-item">
<img src="/src/assets/Clients/almirah.png" alt="Almirah">
</div>

<div class="client-item">
<img src="/src/assets/Clients/autoflow.png" alt="AutoFlow">
</div>

<div class="client-item">
<img src="/src/assets/Clients/autosmart.png" alt="AutoSmart">
</div>

<div class="client-item">
<img src="/src/assets/Clients/cedar-college.png" alt="Cedar College">
</div>

<div class="client-item">
<img src="/src/assets/Clients/clci.png" alt="CLCI">
</div>

<div class="client-item">
<img src="/src/assets/Clients/dbargain.png" alt="DBargain">
</div>

<div class="client-item">
<img src="/src/assets/Clients/jdot.png" alt="JDOT">
</div>

<div class="client-item">
<img src="/src/assets/Clients/mensapay.png" alt="Mensapay">
</div>

<div class="client-item">
<img src="/src/assets/Clients/mount-sinai.png" alt="Mount Sinai">
</div>

<div class="client-item">
<img src="/src/assets/Clients/nullship.png" alt="Nullship">
</div>

<div class="client-item">
<img src="/src/assets/Clients/organise.png" alt="Organise">
</div>

<div class="client-item">
<img src="/src/assets/Clients/soif.png" alt="SOIF">
</div>

<div class="client-item">
<img src="/src/assets/Clients/vital.png" alt="Vital">
</div>

<div class="client-item">
<img src="/src/assets/Clients/vizii.png" alt="Vizii">
</div>

</div>
</section>



<!-- copy this to other pages (bottom contact bubble) -->
<section class="contact-us-section">
<div class="info-card">

<h2>
Ready to Join Our <span>Network?</span>
</h2>

<p>
Let's discuss how we can build something similar for your business.
We turn ideas into scalable production-ready solutions.
</p>

<router-link to="/contact" class="contact-button">
Become a Client
</router-link>

</div>
</section>

</template>

<style scoped>

/* intro */

.clients-intro{
padding:140px 20px 100px;
text-align:center;
}

.intro-container{
max-width:900px;
margin:auto;
}

.clients-intro h1{
font-size:4.5rem;
font-weight:700;
line-height:1.1;
margin-bottom:30px;
}

.clients-intro span{
background:linear-gradient(90deg,#00A8E8,#0052CC);
-webkit-background-clip:text;
color:transparent;
}

.clients-intro p{
font-size:1.5rem;
line-height:1.6;
color:var(--text-colour-secondary);
}


/* client grid */

.clients-logos{
padding:80px 20px;
}

.clients-grid{
display:grid;
grid-template-columns:repeat(4,180px);
justify-content:center;
gap:40px;
max-width:1200px;
margin:auto;
}


/* logo cards */

.client-item{
width:180px;
height:180px;
display:flex;
align-items:center;
justify-content:center;
border-radius:18px;
padding:20px;
background:#FFFFFF;
border:1px solid var(--faint-border);
transition:0.3s;
}

.client-item img{
max-width:120px;
max-height:80px;
object-fit:contain;
opacity:0.9;
transition:0.25s;
}

.client-item:hover{
transform:translateY(-10px) scale(1.05);
box-shadow:0 10px 30px rgba(0,0,0,0.15);
border-color:var(--primary-colour);
}

.client-item:hover img{
opacity:1;
}


/* dark mode hover */

:global(.dark) .client-item:hover{
box-shadow:
0 0 0 1px var(--primary-colour),
0 12px 30px rgba(0,0,0,0.8),
0 0 25px rgba(77,166,255,0.35);
}


/* responsive */

@media(max-width:1000px){
.clients-grid{grid-template-columns:repeat(3,180px);}
}

@media(max-width:700px){
.clients-grid{grid-template-columns:repeat(2,180px);}
}

@media(max-width:450px){
.clients-grid{grid-template-columns:180px;}
}


/* copy this to other pages (bottom contact bubble styles) */

.contact-us-section{
padding:100px 20px;
display:flex;
justify-content:center;
}

.info-card{
max-width:1100px;
width:100%;
padding:80px 40px;
border-radius:40px;
text-align:center;
background:var(--section-background-colour);
color:var(--text-colour-primary);
box-shadow:var(--box-shadow);
}

.info-card h2{
font-size:2.8rem;
margin-bottom:20px;
}

.info-card span{
background:linear-gradient(90deg,var(--secondary-colour),var(--primary-colour));
-webkit-background-clip:text;
color:transparent;
}

.info-card p{
max-width:700px;
margin:0 auto 40px;
color:var(--text-colour-secondary);
font-size:1.1rem;
}


/* button */

.contact-button{

font-family:var(--font-primary);
font-weight:600;

background:linear-gradient(90deg,#00A8E8,#0052CC);

color:#FFFFFF;
padding:20px 60px;

border-radius:50px;
font-size:1.3rem;

border:none;
text-decoration:none;
display:inline-block;
transition:0.3s;
}

.contact-button:hover{

background:linear-gradient(90deg,#0052CC,#003A99);
color:#FFFFFF;

transform:translateY(-6px) scale(1.05);
}


/* dark mode hover */

:global(.dark) .contact-button:hover{

background:linear-gradient(90deg,#4DA6FF,#1F6FEB);
color:#FFFFFF;

}


/* dark mode card */

:global(.dark) .info-card{
background:#15181D;
color:#E3E6EB;
}

</style>