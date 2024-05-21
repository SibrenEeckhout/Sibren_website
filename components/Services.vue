<template>
  <div>
    <h3>My services</h3>
      <div id="flex">
        <div class="service">
          <div class="img">
            <div><img src="/images/web-design.png" alt=""></div>
          </div>
          <div class="text">
            <h4>Website</h4>
            <p>I create websites from design to development, ensuring a seamless process from start to finish. Let's build your online presence together!</p>
          </div>
        </div>
        <div class="service">
          <div class="img">
            <div><img src="/images/phone.png" alt=""></div>
          </div>
          <div class="text">
            <h4>OCR automation</h4>
            <p>I streamline administrative tasks by automating document management with OCR technology. Let's simplify your workflow together!</p>
          </div>
        </div>
        <div class="service">
          <div class="img">
            <div><img src="/images/technical-support.png" alt=""></div>
          </div>
          <div class="text">
            <h4>Support</h4>
            <p>I give support for all the services I offer. Need changes or updates? Just reach out, and I'll ensure your needs are met promptly. Your satisfaction is my priority.</p>
          </div>
        </div>
      </div>

  </div>
</template>

<script setup>

</script>

<style scoped>
  #services{
    width: 80%;
    margin: auto;
    margin-bottom: 20rem;
  }

  h3{
    margin: 0 auto 5rem auto;
    width: 18rem;
  }

  .img{
    margin: 0.2rem 0 0 1rem;
    width: 2rem;
    height: 2rem;
  }

  .service{
    display: flex;
    justify-content: space-between;
    width: 22rem;
    padding: 1rem;
    border-radius: 0.5rem;
  }

  .service .text{
    width: 16rem;
  }

  #flex{
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media screen and (max-width: 1200px) {
    .img{
      margin-right: 1rem;
    }

    #flex{
      width: 100%;
    }

    .service{
      padding: 0;
      width: 100%;
      margin-top: 1rem;
    }
  }
</style>
