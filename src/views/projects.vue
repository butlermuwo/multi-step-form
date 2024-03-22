<template>
  <div>
    <div class="above-list">
      <input type="text" placeholder="Search projects" class="search-input">
      <router-link to="/add-projects" class="router-link">
        <button class="add-btn">Add projects</button>
      </router-link>
    </div>
    <div class="layout">
      <div>
        <p class="top-msg">VCS({{ $store.state.province }})-{{ $store.state.projectuid }} 
          <span @click="changeStatus" :class="{ active: isActive, inactive: !isActive }">&bull;
            {{ isActive ? 'Active' : 'Inactive' }}
          </span>
        </p>
        <p class="down-msg">{{ $store.state.projectname }}    
          Project UID: {{ $store.state.projectuid }} {{ $store.state.province }}</p>
      </div>
      <div class="dropdown">
          <span class="ellipsis" @click="toggleDropdown">&vellip;</span>
          <div v-if="isDropdownOpen" class="dropdown-content">
            <p @click="editProject">Edit</p>
            <p @click="deleteProject">Delete</p>
          </div>
    </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isActive: false,
      isDropdownOpen: false
    };
  },
  methods: {
    changeStatus() {
      if (confirm("Please be sure before taking this action. Do you really want Activate this project")) {
        this.isActive = !this.isActive;
      }
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    editProject() {
      this.$store.dispatch('editProjectName', newValue);
      this.$store.dispatch('editProjectUID', newValue);
      this.$store.dispatch('editProvince', newValue);
    },
    deleteProject() {
      this.$store.dispatch('deleteFormData');
    }
  }
};
</script>

<style scoped>
  .search-input {
    width: 228px;
    height: 30px;
    padding: 8px 6px 8px 16px;
    border-radius: 66px;   
    border: 0.6000000238418579px solid #A9A9A9;  
  }

  .search-input::placeholder {
    font-weight: 400;
    color: #000000;
  }
  .add-btn {
    background: linear-gradient(to right, #0FE056, #00CDAC);
    padding: 16px 32px;
    border-radius: 6px;
    font-weight: bold;
    border: none;
    margin-right: 8px;
    width: 260px;
  }
  .above-list {
    display: flex;
    justify-content: space-between;
    margin: 20px 20px;
    top: 100px;
  }
  .layout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1250px;
    height: 72px;
    border-radius: 10px;
    padding: 10px 40px 10px 24px;
    border: 0.30000001192092896px solid #A9A9A9;
    background-color: #FFFFFF;
    margin: 20px 20px;   
  }
  .ellipsis {
    width: 24px;
    border-radius: 4px;
    background-color: #F7F8FC;
    padding: 7px;
  }
  .top-msg {
    font-weight: bolder;
  }
  .down-msg {
    color: #A4A6B3;
    text-transform: capitalize;
  }
  .status {
    cursor: pointer;
    border-radius: 4px;
    padding: 4px;
    background-color: #9C999933;
    font-weight: 300;
  }
  .active {
    color: green;
    cursor: pointer;
    border-radius: 4px;
    padding: 4px;
    background-color: #86f19533;
    font-weight: 300;
  }
  .inactive {
    border-radius: 4px;
    padding: 4px;
    color: #000000;
    background-color: #9C999933;
    font-weight: 300;
    cursor: pointer;
  }
  .dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 20px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content p {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
}

.dropdown-content p:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
