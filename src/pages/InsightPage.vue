<template>
    <q-page class="flex items-center justify-center column">
      <div class="">
          <h2 class="text-center">Social Account Insights</h2>
          <h5 class="text-center">@username</h5>
        </div>
      <q-card class="card rounded column items-center justify-around">
        Какой-то график
      </q-card> 
      <div class="row q-pa-md q-gutter-xl">
        <q-card class="card2 rounded ">
          <q-card-section>
        <div class="text-h6">Posts</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        текст
      </q-card-section>
        </q-card>
        <q-card class="card2 rounded">
          <q-card-section>
        <div class="text-h6">Likes</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        текст
      </q-card-section>
        </q-card>
      </div>
      <q-btn class="btn rounded" text-color="white" to="/analysis">Find out what my deviations are</q-btn>
    </q-page>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  .card {
    min-width: 1157px;
    min-height: 642px;
  }

  .card2 {
    min-width: 360px;
    min-height: 257px;
  }
  
  .rounded {
    border-radius: 5px;
  }
  
  .btn {
    min-width: 442px;
    min-height: 51px;
    background-color: #1E1E1E;
  }
  
    .input {
        min-width: 442px;
        min-height: 51px;
    }
  </style>
  