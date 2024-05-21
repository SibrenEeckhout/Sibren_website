<template>

    <div >
        <div id="nav">
            <div id="Logo">
                <NuxtLink to="/"><img src="/images/logo.png" alt=""></NuxtLink>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#" >Contact</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>

</script>

<style  scoped>

    #nav{
        position: sticky;
        top: 0;
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
    }
    
    #Logo{
        margin: 2rem auto 2rem auto;
    }

   }
</style>