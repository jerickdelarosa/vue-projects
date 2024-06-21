<template>
    <div class="wrapper">
        <h1>We're launching soon.</h1>
        <div class="time-container">
            <p>00</p>
            <p>00</p>
            <p>00</p>
            <p>00</p>
        </div>
        <div class="image-container">
            <img src="@/assets/images/shuttle.svg" alt="launching-logo" />
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.wrapper {
    text-align: center;
    margin-top: 2rem;
    color: #00BFA6;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

h1 {
    font-size: 3rem;
}

.time-container {
    width: 50%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    transform: translateY(100px)
}

.time-container p {
    width: 100px;
    height: 100px;
    line-height: 100px;
    border-radius: 10px;
    background-color: whitesmoke;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    font-size: 1.5rem;

}

.image-container {
    width: 65%;
    margin-top: 4rem;

    img {
        width: 60%;
    }
}
</style>