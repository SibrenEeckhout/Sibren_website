<template>
    <div>
        <div id="pr">
            <h3>My previous projects</h3>
        <div id="projects">
            <div class="project" id="0">
                <h4>PilsoPoly</h4>
                <p>Pilsopoly was a project in which we gave Monopoly <br> a new twist. Instead of the usual streets and<br> cities, everything revolved around Belgian beers,<br> as a tribute to Belgium's beer culture.<br> We digitized the board game using a server<br> where we used Java for the backend logic.</p>
                <p><span>source</span></p>
                <ul class="tags">
                    <li><Tag severity="secondary" value="HTML"></Tag></li>
                    <li><Tag severity="success" value="CSS"></Tag></li>
                    <li><Tag severity="info" value="Java"></Tag></li>
                    <li><Tag severity="warning" value="Javascript"></Tag></li>
                    <li><Tag severity="danger" value="Gitlab"></Tag></li>
                </ul>
            </div>

            <div class="project" id="1">
                <h4>Mars</h4>
                <p>The MARS project focused on the development of a <br>system designed to facilitate training for safe<br> survival on Mars. This application provided<br> users with the ability to enroll in specific lessons <br>aimed at teaching essential skills and knowledge <br>for Mars missions.</p>
                <p><span>source</span></p>
                <ul class="tags">
                    <li><Tag severity="secondary" value="HTML"></Tag></li>
                    <li><Tag severity="success" value="CSS"></Tag></li>
                    <li><Tag severity="info" value="Java"></Tag></li>
                    <li><Tag severity="warning" value="Javascript"></Tag></li>
                    <li><Tag severity="danger" value="Gitlab"></Tag></li>
                    <li><Tag class="sql" value="SQL"></Tag></li>
                </ul>
            </div>

            <div class="project" id="2">
                <h4>KSA Application</h4>
                <p>The KSA Application project addresses <br>the challenge of scattered information <br>within our youth organization. To centralize data,<br> I created an application that provides <br>contact details for leaders, allows <br>announcements, file uploads, and event scheduling.</p>
                <p><span>source</span></p>
                <ul class="tags">
                    <li><Tag class="jc" value="Jetpack Compose"></Tag></li>
                    <li><Tag class="kotlin" value="Kotlin"></Tag></li>
                    <li><Tag class="php" value="PHP"></Tag></li>
                    <li><Tag class="laravel" value="Laravel"></Tag></li>
                    <li><Tag severity="danger" value="Gitlab"></Tag></li>
                    <li><Tag class="sql" value="SQL"></Tag></li>
                </ul>
            </div>

            <div class="project" id="3">
                <h4>KSA Admin dashboard</h4>
                <p>The KSA Admin website is a platform <br>specifically designed for the head leaders <br>of our youth organization. It enables them <br>to perform various tasks, such as adding <br>new leaders to our KSA API, which <br>communicates with the KSA Application. Additionally, <br>they can manage events and coordinate various <br>KSA information.</p>
                <p><span>source</span></p>
                <ul class="tags">
                    <li><Tag class="laravel" value="Laravel"></Tag></li>
                    <li><Tag class="php" value="PHP"></Tag></li>
                    <li><Tag class="vue" value="Vue.js"></Tag></li>
                    <li><Tag severity="danger" value="Gitlab"></Tag></li>
                </ul>
            </div>

            <div class="project" id="4">
                    <h4>Magic: The Gathering</h4>
                <p>The "Magic: The Gathering" app, <br>developed within the .NET framework, is a custom deck builder<br> that lets users create personalized card decks<br> from a vast card collection.</p>
                <p><span>source</span></p>
                <ul class="tags">
                    <li><Tag class="net" value=".Net"></Tag></li>
                    <li><Tag class="csharp" value="C#"></Tag></li>
                    <li><Tag class="blazor" value="Blazor"></Tag></li>
                </ul>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted");
    // Add any JavaScript code you want to execute here
  },
};
</script>

<style scoped>
    #pr{
        width: 80%;
        margin: 20rem auto auto auto;
        text-align: right;
    }

    #projects{
        text-align: left;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        overflow-x: auto;
        white-space: nowrap;
    }


    .project{
        width: 25rem;
        background-color: #1F1F1F;
        color: white;
        padding: 1rem;
        border-radius: 0.5rem;
        margin: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }

    ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        
    }

    li{
        margin: 0.5rem 0.5rem 0 0;
    }

    @media screen and (max-width: 1200px) {

     h3{
        font-size: 1.9rem;
        margin-right: 1rem;
     }

        #pr{
            margin-bottom: 5rem;
            overflow: hidden;
            width: 95%;
        }
   }
</style>