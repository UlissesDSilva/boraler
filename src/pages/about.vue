<template>
  <div class="about">
    <div class="about__mascote">
      <p>Este site é fruto do projeto "Conexões Literárias", que foi desenvolvido com os estudantes do 6º ano da Escola Municipal José Fernandes Vieira, sob a orientação da professora Luzia Santana. O objetivo do projeto é incentivar a leitura e a escrita, por meio do compartilhamento de comentários, opiniões e recomendações sobre livros lidos pelos estudantes.</p>
      <img src="../assets/img/mascote2.png" alt="fernandinho sentado">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @media (min-width: 413px) {
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
  }

  @media (max-width: 412px) {
    .about {
      height: 100%;
      padding: 24px;
      background-image: url('../assets/img/fundo.png');
      background-repeat: repeat;
  
      &__mascote{
        display: flex;
        align-items: center;  
        justify-content: center;
        flex-direction: column;
  
        p {
          width: auto;
          padding: 16px;
          background-color: #fff;
          font-size: 16px;
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
  }
</style>