<template>
    <div>
        <section v-if="step == 2">
        <h2 class="welcome-msg">Welcome! let's set up a project.</h2>
        <p> <span class="asterick">&ast;</span> Project Category</p>
        <label>
        <input type="radio" v-model="selectedOption" value="option1">
        Carbon
        </label>
        <label>
        <input type="radio" v-model="selectedOption" value="option2">
        Others
        </label>
        <div v-if="selectedOption === 'option1'">
          <p> <span class="asterick">&ast;</span> Project Name</p>
          <input class="input-field" placeholder="Enter Name" v-model="projectname" @input="updateProjectName">
          <p> <span class="asterick">&ast;</span> Project UID</p>
          <input class="input-field" placeholder="Enter ID" v-model="projectuid" @input="updateProjectuid">
          <p> <span class="asterick">&ast;</span> Project URL</p>
          <input class="input-field" placeholder="Enter URL" v-model="projecturl" @input="updateProjecturl">
          <p> <span class="asterick">&ast;</span> Standard</p>
          <input class="input-field" placeholder="Enter ID" v-model="standard" @input="updateStandard">
          <p> <span class="asterick">&ast;</span> Sector</p>
          <input class="input-field" placeholder="Enter Name" v-model="sector" @input="updateSector">
        </div>

        <div v-else-if="selectedOption === 'option2'">
          <p> <span class="asterick">&ast;</span> Project Name</p>
          <input class="input-field" placeholder="Enter Name" @input="updateProjectName">
          <p> <span class="asterick">&ast;</span> Project UID</p>
          <input class="input-field" placeholder="Enter ID" @input="updateProjectuid">
          <p> <span class="asterick">&ast;</span> Project URL</p>
          <input class="input-field" placeholder="Enter URL" @input="updateProjecturl">
          <p> <span class="asterick">&ast;</span> Sector</p>
          <select class="disabled-select" placeholder="" v-model="sector" @input="updateSector">
            <option  value="" disabled selected>Select Sector</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="HumanRights">Human Rights</option>
        </select>
        </div>
    </section>

    </div>
</template>

<script>
    export default {
        data: () => ({
            step: 2,
            selectedOption: 'option2',
            projectname: "",
            projecuid: "",
            projecturl: "",
            standard: "",
            sector: "",
            selectedSDGs: "",
            country: "",
            province: "",
            startDate: "",
            endDate: "",
        }),
        computed: {
            projectname: {
                get() {
                    return this.$store.state.projectname
                },
                set(value) {
                    this.$store.commit('setProjectname', value)
                }
            },
            projectuid: {
                get() {
                    return this.$store.state.projectuid
                },
                set(value) {
                    this.$store.commit('setProjectuid', value)
                }
            },
            projecturl: {
                get() {
                    return this.$store.state.projecturl
                },
                set(value) {
                    this.$store.commit('setProjecturl', value)
                }
            },
            standard: {
                get() {
                    return this.$store.state.standard
                },
                set(value) {
                    this.$store.commit('setStandard', value)
                }
            },
            sector: {
                get() {
                    return this.$store.state.sector
                },
                set(value) {
                    this.$store.commit('setSector', value)
                }
            },
        }
    }
</script>

<style scoped>
    .welcome-msg {
        text-align: center;
    }

    .asterick {
        color: red;
    }

    .input-field {
        width: 550px;
        height: 33.97px;
        padding: 12px, 16px, 12px, 16px;
        border-radius: 4px;
        border: 1px solid #1F1F1F4D; 
        gap: 4px
  }

    input::placeholder {
        color: #00000040;
        padding: 3px 0px 3px 5px;
  }

    .disabled-select {
        color: #00000040;
        padding: 3px 0px 3px 5px;
        width: 550px;
        height: 33.97px;
        padding: 12px, 16px, 12px, 16px;
        border-radius: 4px;
        border: 1px solid #1F1F1F4D; 
        gap: 4px
  }
</style>