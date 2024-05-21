<template>
    <div>
         <div id="koas">
            <NuxtLink to="/" class="test" ><div id="Logo">
                <a href="#home"><img src="/images/logo.png" alt=""></a>
            </div></NuxtLink>
         </div>
        <section id="blog">
            <h2>Personal blog</h2>
        <p>Welcome to my blog! Here, I'll be sharing intriguing and special moments from my life intertwined with my journey in the world of IT. From the exhilarating triumphs to the insightful challenges, join me as I navigate through the dynamic landscape of my IT career.</p>

            <div id="components">
                <div class="container">
                    <div class="first">
                        <div id="img">
                        <img src="../public/images/seo.png" alt="">
                    </div>
                    <h5>SEO ~ Wiseo</h5>
                    <span>Discover fresh SEO perspectives from a recent guest speaker on the blog.</span>
                    <p class="grey">7 november 2023 </p>
                    </div>
                    <div class="second">
                        <p>Recently, I attended an insightful SEO lecture by Frederik Vermeire, the author of an SEO book and the founder of Wiseo.be. The lecture emphasized the importance of thorough research in SEO strategy, including market research and customer analysis. Frederik shared a structured SEO roadmap, ranging from keyword research to KPI monitoring, and highlighted the three pillars of SEO: technology, content, and authority. The presentation also covered practical SEO basics such as readable URLs and effective meta-tags.</p>
                    </div>
                </div>

                <div class="container">
                    <div class="first">
                        <div id="img">
                        <img src="../public/images/combell.png" alt="">
                    </div>
                    <h5>Combell</h5>
                    <span>Guest speaker insights on Combell's history</span>
                    <p class="grey">7 november 2023 </p>
                    </div>
                    <div class="second">
                        <p>I recently participated in an informative session led by Simon Verdonck, Channel Account Manager at Combell. Established in 1999, Combell has an impressive history of growth and innovation, standing out for its commitment to quality and reliability. Their cutting-edge hosting solutions, featuring SSH access, brute-force protection, and malware prevention, make Combell an attractive choice for those in search of top-notch hosting services.</p>
                    </div>
                </div>

                <div class="container">
                    <div class="first">
                        <div id="img">
                        <img src="../public/images/jungle.png" alt="">
                    </div>
                    <h5>Hack the future</h5>
                    <span>Chronicling my challenge at a Chronos Group convention</span>
                    <p class="grey">9 november 2023 </p>
                    </div>
                    <div class="second">
                        <p>On November 9, 2023, I participated in the Hack the Future hackathon organized by the Chronos Group in Antwerp, alongside my teammate Lukas Olivier. We opted for the 'Save the Nature' challenge by Flexso, utilizing the CAP API to showcase global pollution data on a frontend application.</p>
                    </div>
                </div>

                <div class="container">
                    <div class="first">
                        <div id="img">
                        <img src="../public/images/monneh.png" alt="">
                    </div>
                    <h5>Money</h5>
                    <span>Making my first game using Unity.</span>
                    <p class="grey">12 august 2021 </p>
                    </div>
                    <div class="second">
                        <p>Creating my first game, \"Money,\" in Unity was a thrilling adventure into uncharted territory. Immersing myself in the intricacies of game development, I found the challenges and learning opportunities to be abundant, making the entire experience incredibly enjoyable.</p>
                    </div>
                </div>

                <div class="container">
                    <div class="first">
                        <div id="img">
                        <img src="../public/images/light.png" alt="">
                    </div>
                    <h5>Jumping Light</h5>
                    <span>First time deploying a game on the play store.</span>
                    <p class="grey">21 august 2023 </p>
                    </div>
                    <div class="second">
                        <p>Embarking on the deployment of my inaugural game, \"Jumping Light,\" on the Play Store was a transformative experience that encapsulated the culmination of countless hours of hard work and dedication. From conceptualization to execution, each phase of the development process brought unique challenges and invaluable lessons, shaping my skills as a game developer.</p>
                    </div>
                </div>

                <div class="container">
                    <div class="first">
                        <div id="img">
                        <img src="../public/images/435524333_3115665225237429_3688068538887840962_n.jpg" alt="">
                    </div>
                    <h5>VTI guest lecture</h5>
                    <span>First Guest Lecture</span>
                    <p class="grey">12 February 2024 </p>
                    </div>
                    <div class="second">
                        <p>Sharing my expertise on APIs, websites, and cyber security alongside colleagues, marked my inaugural lecture at VTI Izegem. It was a delightful experience addressing the class, engaging with students, and imparting knowledge in a collaborative setting.</p>
                    </div>
                </div>

                <div class="container">
                    <div class="first">
                        <div id="img">
                        <img src="../public/images/436226893_1536377910243163_1495656683279786838_n.jpg" alt="">
                    </div>
                    <h5>Lieven Scheire</h5>
                    <span>Lieven Scheire on AI.</span>
                    <p class="grey">14 February 2024 </p>
                    </div>
                    <div class="second">
                        <p>I recently attended Lieven Scheire's AI show, where he seamlessly blended fascinating insights about artificial intelligence and its evolution with comedic flair. It was an engaging experience, where learning about AI was as entertaining as it was informative. Scheire's unique blend of humor and expertise kept the audience thoroughly entertained throughout the show.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
#black{
    color: black;
}
#koas #Logo{
        width: 20rem;
        height: 3rem;
        margin: 2rem;
    }

    #blog{
        width: 80%;
        margin: auto;
        text-align: center;
        margin-top: 5rem;
    }

    img{
        width: 100%;
        height: 100%;
    }

    .container {
        width: 50rem;
        display: flex;
        justify-content: space-between;
        margin: 1rem;
        border-bottom: 0.11rem solid black; /* 2px width solid black border */
        padding: 1rem;
        margin: auto;
                margin-top: 15rem;

    }

    #components{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .first{
        width: 15rem;
    }

    .second{
        width: 30rem;
    }

@media screen and (max-width: 1200px) {

     .container{
        display: flex;
        flex-direction: column;
        width: 100%;
     }

     .first{
        width: 100%
    }

    .second{
        width: 100%
    }
   }
</style>