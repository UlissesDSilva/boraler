<template>
  <div class="home">
    <div class="home__mascote">
      <div class="info">
        <p>
          Olá! Seja bem-vindo(a) ao nosso projeto! Aqui compartilhamos comentários e resenhas sobre as nossas leituras. Esperamos que você aproveite as nossas dicas de livros. E aí, bora ler?
        </p>

      </div>
      <img src="../assets/img/mascote.png" alt="fernandinho">
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .home {
    height: 100%;
    padding: 24px;
    background-image: url('../assets/img/fundo.png');
    background-repeat: repeat;

    &__mascote{
      display: flex;
      align-items: center;  
      justify-content: center;
      margin-top: 90px;

      .info {
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