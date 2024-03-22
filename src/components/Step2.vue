<template>
  <div>
    <h3 class="form-header">Let's hear about the project's impact</h3>
    <div class="sdg-container">
      <label v-for="sdg in sdgs" :key="sdg.id" class="checkbox-label">
        <input type="checkbox" :name="sdg.name" :value="sdg.value" class="checkbox-input">
        <span class="custom-checkbox"></span>
        <!-- <img class="sdg-img" src="../assets/E_PRINT_01.jpg" alt="SDG 1"> -->
        <img :src="sdg.image" alt="SDG Image" class="sdg-img">
        <!-- <img class="sdg-img" src="require(`../assets/${sdg.image}`)" alt="SDG 1"> -->
      </label>
    </div>
  </div>
</template>

<script>
import sdg1 from "../assets/E_PRINT_01.jpg"
import sdg2 from "../assets/E_PRINT_02.jpg"
import sdg3 from "../assets/E_PRINT_03.jpg"
import sdg4 from "../assets/E_PRINT_04.jpg"
import sdg5 from "../assets/E_PRINT_05.jpg"
import sdg6 from "../assets/sdg6.png"
import sdg7 from "../assets/sdg7.png"
import sdg8 from "../assets/sdg8.jpg"
import sdg9 from "../assets/9.png"
import sdg10 from "../assets/10.png"
import sdg11 from "../assets/sdg11.png"
import sdg12 from "../assets/sdg12.png"
import sdg13 from "../assets/sdg13.png"
import sdg14 from "../assets/14.png"
import sdg15 from "../assets/15.png"
import sdg16 from "../assets/sdg16.png"
import sdg17 from "../assets/sdg17.jpg"


export default {
  data() {
    return {
      sdgs: [
        { id: 1, name: "sdg1", value: "sdg1", label: "Goal 1: No Poverty", image: sdg1 },
        { id: 2, name: "sdg2", value: "sdg2", label: "Goal 2: No Poverty", image: sdg2 },
        { id: 3, name: "sdg3", value: "sdg3", label: "Goal 3: No Poverty", image: sdg3 },
        { id: 4, name: "sdg4", value: "sdg4", label: "Goal 4: No Poverty", image: sdg4 },
        { id: 5, name: "sdg5", value: "sdg5", label: "Goal 5: No Poverty", image: sdg5 },
        { id: 6, name: "sdg6", value: "sdg6", label: "Goal 6: No Poverty", image: sdg6 },
        { id: 7, name: "sdg7", value: "sdg7", label: "Goal 7: No Poverty", image: sdg7 },
        { id: 8, name: "sdg8", value: "sdg8", label: "Goal 8: No Poverty", image: sdg8},
        { id: 9, name: "sdg9", value: "sdg9", label: "Goal 9: No Poverty", image: sdg9 },
        { id: 10, name: "sdg10", value: "sdg10", label: "Goal 10: No Poverty", image: sdg10 },
        { id: 11, name: "sdg11", value: "sdg11", label: "Goal 11: No Poverty", image: sdg11 },
        { id: 12, name: "sdg12", value: "sdg12", label: "Goal 12: No Poverty", image: sdg12 },
        { id: 13, name: "sdg13", value: "sdg13", label: "Goal 13: No Poverty", image: sdg13 },
        { id: 14, name: "sdg14", value: "sdg14", label: "Goal 14: No Poverty", image: sdg14 },
        { id: 15, name: "sdg15", value: "sdg15", label: "Goal 15: No Poverty", image: sdg15 },
        { id: 16, name: "sdg16", value: "sdg16", label: "Goal 16: No Poverty", image: sdg16 },
        { id: 17, name: "sdg17", value: "sdg17", label: "Goal 17: No Poverty", image: sdg17 },

      ],
    };
  },
};
</script>

<style scoped>
.form-header {
  font-weight: 900;
  color: #000000;
}

.sdg-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 20px;
}

.sdg-img {
  margin: 30px 0px 0px 15px;
  height: 46px;
  width: 46px;
  border-radius: 4px;
}

label {
  display: flex;
  align-items: center;
}
</style>
