<template>
    <div>
        <div id="tse">
                <p id="small">Thank you for viewing my site. This site is made in nuxt and hosted on combell. </p>
                <ul>
                    <li><a href="https://www.facebook.com/sibren.eeckhout.3"><img src="/images/facebook-logo.png" alt=""></a></li>
                    <li><a href="https://www.linkedin.com/in/sibren-eeckhout-542257253/"><img src="/images/linkedin.png" alt=""></a></li>
                    <li><a href="https://www.instagram.com/eeckhoutsibren/"><img src="/images/8434867_instagram_social media_network_icon.png" alt=""></a></li>
                </ul>
            </div>
            <div id="ask">
                <p>Website design</p>
                <p>Website development</p>
                <p>Support</p>
                <p><a href="mailto:sibren2.eeckhout@gmail.com">sibren2.eeckhout@gmail.com</a></p>
                <p>Privacy</p>
                <a href="https://www.flaticon.com/free-icons/idea" title="idea icons">Idea icons created by Good Ware - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/tick" title="tick icons">Tick icons created by Kiranshastry - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/graphic-design" title="graphic design icons">Graphic design icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/ocr" title="ocr icons">Ocr icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/technology" title="technology icons">Technology icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/facebook-logo" title="facebook logo icons">Facebook logo icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Enamo Studios - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by Payungkead - Flaticon</a>
            </div>     

    </div>
        
</template>

<script setup>

</script>

<style scoped>
    #footer{
        width: 100%;
        display: flex;
        justify-content: space-around;
        background-color: #252424;
        color: white;
        height: 40rem;
        margin-top: 10rem;
    }

    #small{

        margin: 3rem;
    }

    a{
        color: white;
        margin: 0.5rem 0.5rem 0.5rem 0;
        display: block;
    }

    ul{
        list-style: none;
        display: flex;
    }

    #ref{
        display: flex;
        flex-direction: column;
    }

    li{
        margin: 0.5rem;
        width: 3rem;
        height: 2rem;
        cursor: pointer;
    }
    
    img{
        filter: invert(100%);
    }

    @media screen and (max-width: 1200px) {

    #footer{
        justify-content: center;
        flex-direction: column;
        height: 50rem;
        margin-top: 20rem;
    }
    #tse{
        margin: 0;
    }
    section{
        display: flex;
    }
    #ask{
        margin: auto;
    }
   }
</style>