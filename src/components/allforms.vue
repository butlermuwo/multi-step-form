<template>
    <div>
      <Addproject @click.prevent="nextStep" v-if="step === 1" />
      <div v-if="step !== 1 && step !== 5" class="overlay">
        <Step1 v-if="step === 2" />
        <Step2 v-if="step === 3" />
        <Step3 v-if="step === 4" />
  
        <div class="buttons">
          <button v-if="step !== 1" @click.prevent="prevStep" class="backbtn">Back &#8592; </button>
          <button v-if="step === totalSteps && step !== 5" @click="finishForm" class="nextbtn">Finish</button>
          <button v-if="step !== totalSteps && step !== 1 && step !== 4" @click.prevent="nextStep" class="nextbtn">Next → </button>
        </div>
        <h4 v-if="step !== 1" @click.prevent="step = 1" class="cancel">cancel</h4>
      </div>
      <Projects v-if="step === 5" />
    </div>
  </template>
  
  <script>
  import Addproject from './Addproject.vue';
  import Step1 from './Step1.vue';
  import Step2 from './Step2.vue';
  import Step3 from './Step3.vue';
  import Projects from './Projects.vue';
  
  export default {
    data: () => ({
      step: 1,
      totalSteps: 4,
    }),
  
    components: {
      Addproject,
      Step1,
      Step2,
      Step3,
      Projects,
    },
  
    methods: {
      nextStep() {
        this.step++;
      },
  
      prevStep() {
        this.step--;
      },
      finishForm() {
      this.$router.push({ name: 'projects' });     }
    },
  };
  </script>
  
  <style scoped>
  .overlay {
    width: 564px;
    height: 704px;
    margin: 100px auto;
    background: #FFFFFF;
    text-align: left;
    padding: 40px;
    border-radius: 16px;
    margin-bottom: 10px;
    box-shadow: 0px 18px 88px -4px #18274B24;
  }
  
  .buttons {
    margin-top: 55px;
    display: flex;
    justify-content: space-between;
  }
  
  .backbtn {
    border: 1px solid transparent;
    border-image: linear-gradient(to right, #0FE056, #00CDAC);
    border-image-slice: 1;
    padding: 16px 32px;
    border-radius: 6px;
    font-weight: bold;
    margin-right: 10px;
    background: #FFFFFF;
    width: 260px;
  }
  
  .nextbtn {
    background: linear-gradient(to right, #0FE056, #00CDAC);
    padding: 16px 32px;
    border-radius: 6px;
    font-weight: bold;
    border: none;
    margin-right: 8px;
    width: 260px;
  }
  
  .cancel {
    text-align: end;
    cursor: pointer;
    color: #00CDAC;
    margin-right: 10px;
  }
  </style>
  