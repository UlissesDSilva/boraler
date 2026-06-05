<template>
  <div class="about">
    <div class="about__mascote">
      <p>Sobre</p>
      <img src="../assets/img/mascote2.png" alt="fernandinho sentado">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .about {
    height: 100%;
    padding: 24px;
    background-image: url('../assets/img/fundo.png');
    background-repeat: repeat;

    &__mascote{
      display: flex;
      align-items: center;  
      justify-content: center;
      margin-top: 90px;

      p {
        width: 450px;
        padding: 12px;
        background-color: #fff;
        font-size: 28px;
        text-align: center;
        border-radius: 30px;
        box-shadow: 17px 32px 51px -28px rgba(0,0,0,0.38);
      }
      
      img {
        width: 200px;
        height: 300px;
      }
    }
  }
</style>