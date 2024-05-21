<template>
    <div>
        <div id="about">
            <div id="img"><img src="/images/stairs.JPG" alt=""></div>
        <div id="last">
            <h3>About me</h3>
            <p>I'm Sibren Eeckhout, a final-year Applied Computer Science student. Skilled in .NET, Java, JavaScript, CSS, HTML, PHP, and SQL. Passionate about coding and always eager to learn and innovate in software development.</p>
            <p>As a youth movement leader, organizing engaging activities and international camps brings me immense joy and fulfillment. It's a privilege to guide and inspire young individuals, fostering personal growth and unity among participants.</p>
            <p>I love to travel. Discovering new places, meeting diverse people, and experiencing different cultures fuels my soul. It's a constant adventure that keeps me alive and inspired.</p>
            <div><Button label="Contrast" severity="contrast"><a href="https://www.instagram.com/eeckhoutsibren/">Follow me</a></Button></div>
        </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    #about{
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        margin: 10rem  auto 20rem auto;
    }

    #img{
        width: 60%;

    }

    #last{
        width: 30%;
        margin-left: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    @media screen and (max-width: 1200px) {
    #about{
        flex-direction: column;
    }

    #img{
        width: 100%;
        margin-bottom: 3rem;
    }

    #last{
        width: 90%;
        margin: 1rem;
    }
   }
</style>