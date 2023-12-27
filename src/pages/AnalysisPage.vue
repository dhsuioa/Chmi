<template>
    <q-page class="flex items-center justify-center column">
      <div class="">
          <h2 class="text-center">Social Account analysis</h2>
          <h5 class="text-center">@username</h5>
        </div>
      <q-card class="card rounded">
        <q-card-section>
            <div class="text-h6">Attention</div>
        </q-card-section>
        <q-separator/>
        <q-card-section horizontal>
        <q-card-section>
            <div class="text-h6">You seem to be depressed</div>
        </q-card-section>
        <q-img
          class="col-5"
          src="public/sticker.webp"
        ></q-img>
      </q-card-section>
      <q-card-section class="flex items-center justify-center column">
        <!-- <q-btn class="btn rounded" text-color="white">Ask for help</q-btn> -->
      </q-card-section>
      </q-card>
    </q-page>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  .card {
    min-width: 529px;
    min-height: 337px;
  }
  
  .rounded {
    border-radius: 5px;
  }
  
  .btn {
    min-width: 442px;
    min-height: 51px;
    background-color: #1E1E1E;
  }
  </style>
  