<template>
    <div>
            <h3>Plan of approach</h3>
            <div id="flex">
                <div id="bullets">
                    <div class="point">
                <div class="img">
                    <img class="one" src="/images/rocket.png" alt="">
                    <img class="two" src="/images/line.png" alt="">
                </div>
                <div class="text">
                    <h4>Start Project</h4>
                    <p>I actively listen to clients' needs and translate them into a clear overview. Through continuous refinement, I ensure that all client requirements are fully understood and met.</p>
                </div>
            </div>
            <div class="point">
                <div class="img">
                    <img class="one" src="/images/lightbulb.png" alt="">
                    <img class="two" src="/images/line.png" alt="">
                </div>
                <div class="text">
                    <h4>Execute</h4>
                    <p>Once I have gathered all the requirements, I begin working on the project while keeping the client closely updated on the progress.</p>
                </div>
            </div>
            <div class="point">
                <div id="test">
                    <img class="one" src="/images/checked.png" alt="">
                </div>
                <div class="text">
                    <h4>Finalize</h4>
                    <p>After completing the project, we review it together for client satisfaction. Any requested changes are gladly accommodated to ensure the final result meets expectations.</p>
                </div>
            </div>
                </div>
                <div id="img">
                <img src="/images/undraw_chore_list_re_2lq8.svg" alt="">
                </div>
            </div>
        </div>
</template>

<script>

</script>

<style scoped>

    #plan{
        width: 80%;
        margin: 20rem auto auto auto;
    }

    h3{
        margin-bottom: 4rem;
    }
    .point{
        margin: 0 0 1rem 0;
        width: 40rem;
        display: flex;
        flex-direction: row;
    }

    .img{
        width: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    img{
        margin: auto;
    }

    .text{
        width: 100%;
        margin: 0.5rem 0 0 1rem;
    }

    .one{
        width: 4rem;
        height: 4rem;
        margin-bottom: 1rem;
    }

    .two{
        width: 2rem;
        height: 5rem;
    }

    #test{
        width: 5rem;
    }

    #test .one{
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .text p{
        margin-top: 1rem;
    }

    #flex{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    #img{
        margin: auto 0 1rem 0;
        height: 100%;
        width: 40%;
    }

    #bullets{
        width: 45%;
    }


    @media screen and (max-width: 1200px) {
        #flex{
            flex-direction: column;
        }

        #bullets{
            width: 100%;
        }

        .point{
            width: 100%;
        }

        #img{
            position: relative;
    width: 20rem;
    height: 15rem;
    top: 10px; /* Adjust the distance from the top */
    left: -25px; /* Adjust the distance from the left */
    }

    #plan{
        margin-bottom: 0;
    }
    }

    
</style>