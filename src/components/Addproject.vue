<template>
    <div class="intro-container">
        <div class="intro">
            <p class="heading-word">No project added.</p>
            <button class="firstbtn">+ Add Project</button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .intro-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }
    .intro {
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .heading-word {
        font-weight: 700;
        color: #888888;
    }

    .firstbtn {
        background: linear-gradient(to right, #0FE056, #00CDAC);
        border: none;
        padding: 8px 16px;
        border-radius: 8px;
        font-weight: bold;
        cursor: pointer;
        width: 120px;
        height: 36px;
  }

</style>