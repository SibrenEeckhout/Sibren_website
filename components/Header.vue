<template>
    <div>
        <header>
            <div id="first">
                <div id="title">
                    <h2>Software Developer</h2>
                    <p>Welcome to my site! I am a final year student pursuing Software Engineering at Howest in Bruges, Belgium. As a passionate full-stack developer, I thoroughly enjoy creating applications that solve real-world problems. My interests span from crafting visually appealing websites to diving into the realm of OCR (Optical Character Recognition) automation with Azure AI Document Intelligence. Whether it's designing elegant user interfaces or optimizing backend functionalities, I am committed to delivering high-quality solutions.</p>
                </div>
                <div id="img">
                    <img src="/images/side.JPG" alt="">
                </div>
            </div>
            <div id="second">
                <div id="test">
                    <div>
                        <Button label="Contrast" severity="contrast"><a href="https://www.linkedin.com/in/sibren-eeckhout-542257253/">Contact</a></Button>
                    </div>
                    <div id="stats">
                        <div class="div">
                            <p class="first">1+</p>
                            <p class="last">Projects complete</p>
                        </div>
                        <div class="div">
                            <p class="first">1+</p>
                            <p class="last">Satisfied clients</p>
                        </div>
                        <div class="div">
                            <p class="first">1+</p>
                            <p class="last">Support Given</p>
                        </div>
                    </div>
                </div>
                <div id="imgTwo">
                    <img src="/images/back.JPG" alt="">
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
  mounted() {
    console.log("kasjf;lja;sidjfgoahsoghbop;aushbholu");
  },
  hydrate: true,
}
</script>

<style  scoped>
    header{
        margin: 6rem 2rem 20rem 2rem;
    }

    #first{
        width: 80%;
        margin: auto auto auto auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    img{
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
        object-fit: cover;
    }

    #img{
        width: 25rem;
        height: 20rem;
    }

    #title{
        width: 60%;
    }

    #title h2{
        font-size: 5rem;
        margin: 1rem 0rem 3rem 0rem;
    }

    #second{
    width: 80%;
    padding-right: 5rem;
    margin: 4rem auto;
    display: flex;
    justify-content: space-between;
   }

   #imgTwo{
    width: 30rem;
    height: 18rem;
    object-fit: cover; 
   }

   #test {
    width: 40rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
   }

   #stats{
    width: 100%;
    display: flex;
   }

   #stats .div{
    width: 10rem;
   }

   .first{
    font-size: 3rem;
        height: 4rem;
   }

   .div p{
    margin: 0rem;
   }


   @media screen and (max-width: 1200px) {
    #title{
        width: 100%;
    }

    #img{
        width: 100%;
        height: 18rem;
    }

    #imgTwo{
        display: none;
    }
    #first{
        width: 100%;
    }

    .first{
    font-size: 2rem;
        height: 3rem;
   }

   .last{
    width: 1rem;
    line-height: 1.2rem;
   }

    #stats{
        margin: auto;
        width: 90%;
        justify-content: left;
        margin: 0;
    }

    #second{
        padding: 0;
        margin: 2rem 0;
    }

    #first #title h2{
        font-size: 3rem;
    }

    header{
        overflow: hidden;
    }

    #stats .div{
        width: 7rem;
        margin: 0 0.5rem 0 0;
    }
   }
</style>