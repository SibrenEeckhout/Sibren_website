<template>
    <div>
        <div id="nav">
            <div id="Logo">
                <a href="#home"><img src="/images/logo.png" alt=""></a>
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#aboutme">About me</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#plan" >Plan</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><NuxtLink to="/blog" class="test" >Blog</NuxtLink></li>
                </ul>
            </nav>
        </div>
        <Header id="home"></Header>
        <AboutMe id="aboutme"></AboutMe>
        <Services id="services"></Services>
        <Plan id="plan"></Plan>
        <Projects id="projects"></Projects>
        <Contact id="contact"></Contact>
        <Footer id="footer"></Footer>
    </div>
</template>

<script setup>
console.log("Welcome!!!");
</script>

<style  scoped>
#nav{
        position: sticky;
        top: 0;
        padding: 0.5rem;
        z-index: 1000; /* Set z-index as needed */
        background-color: white;
        display: flex;
        justify-content: space-between;
        margin: 2rem;
    }

    #Logo{
        width: 20rem;
        height: 3rem;
    }

    img{
        width: 100%;
        height: 100%;
    }

    a{
        color: black;
        text-decoration: none;
        font-weight: bold;
    }

    li{
        color: black;
        text-decoration: none;
        margin: 0rem 1rem 0rem 1rem ;
        font-size: 1.3rem;
        cursor: pointer;
        font-weight: bold;
    }

    ul{
        display: flex;
        list-style-type: none;
    }

    @media screen and (max-width: 1200px) {
    #nav{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0;
        position:relative;

    }
    
    #Logo{
        margin: 2rem auto 2rem auto;
    }

    #nav ul{
        
        padding: 0;
        flex-wrap: wrap;
        justify-content: center;
    }

    #nav ul li{
        margin: 0.5rem;
        
    }

   }
</style>