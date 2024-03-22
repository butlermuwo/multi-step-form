<template>
  <div>
    <h3>Almost done</h3>
    <label><span class="asterick">&ast;</span> Country</label><br>
    <select class="disabled-select" v-model="country" @change="updateCountry">
      <option value="" disabled selected>Search & Select Country</option>
      <option value="India">India</option>
      <option value="Zambia">Zambia</option>
      <option value="Bangladesh">Bangladesh</option>
      <option value="Canada">Canada</option>
    </select><br>

    <label><span class="asterick">&ast;</span> Province</label><br>
    <select class="disabled-select" v-model="province" @change="updateProvince">
      <option value="" disabled selected>Search & Select Province</option>
      <option value="Punjab">Punjab</option>
      <option value="Kerala">Kerala</option>
      <option value="Karnataka">Karnataka</option>
    </select><br>

    <label><span class="asterick">&ast;</span> Project Image</label>
    <input type="text" placeholder="Upload Image" class="input-field" v-model="projectimage">
    <label class="recs">Recommended resolution 640*640 with file size less than 5MB</label>

    <div>
      <label for="start-date"><span class="asterick">&ast;</span> Project Duration</label><br>
      <input type="date" id="start-date" placeholder="" v-model="startDate" class="date-input">
      <input type="date" id="end-date" v-model="endDate" class="date-input">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      country: "",
      province: "",
      startDate: "",
      endDate: "",
    }
  },
  methods: {
    updateCountry() {
      this.$store.commit('setCountry', this.country);
    },
    updateProvince() {
      this.$store.commit('setProvince', this.province);
    },
    updateStartDate() {
      this.$store.commit('setStartDate', this.startDate);
    },
    updateEndDate() {
      this.$store.commit('setEndDate', this.endDate);
    }
  }
};
</script>

<style scoped>
.asterick {
  color: red;
}
.disabled-select {
  color: #00000040;
  padding: 3px 0px 3px 5px;
  width: 550px;
  height: 33.97px;
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px solid #1F1F1F4D;
  gap: 4px
}

.input-field {
  width: 550px;
  height: 33.97px;
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px solid #1F1F1F4D;
  gap: 4px
}

input::placeholder {
  color: #00000040;
  padding: 3px 0px 3px 5px;
}

.recs {
  color: #00000040;
}

.date-input {
  height: 33.97px;
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px solid #1F1F1F4D;
  gap: 4px;
  border-radius: 6px;
  width: 200px;
  margin-right: 35px;
}
</style>
