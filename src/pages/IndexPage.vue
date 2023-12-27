<template>
  <q-page class="flex items-center justify-center column">
    <div>
      <h2 class="text-center">Login</h2>
      <h6 class="text-center">Select an account to analyze</h6>
    </div>
    <q-card class="card rounded column items-center justify-center">
      <q-btn
        class="btn twitter-btn rounded"
        text-color="white"
        to="/registration"
      >
        X / Twitter
      </q-btn>
      <q-btn
        class="btn instagram-btn rounded"
        text-color="white"
        to="/registration"
      >
        Instagram
      </q-btn>
      <q-btn
        class="btn vk-btn rounded"
        text-color="white"
        to="/registration"
      >
        Vk
      </q-btn>
    </q-card>
  </q-page>
</template>

<script setup>

</script>

<style scoped>
.card {
  min-width: 416px;
  min-height: 380px;
}

.rounded {
  border-radius: 10px;
}

.btn {
  min-width: 308px;
  min-height: 57px;
  margin-bottom: 20px;
}

.twitter-btn {
  /* background-color: #08A0E9; */
  background-color: black;
}

.instagram-btn {
  background: linear-gradient(to right, #DD2A7B, #8134AF);
}

.vk-btn {
  background-color: #4C75A3;
}
</style>
