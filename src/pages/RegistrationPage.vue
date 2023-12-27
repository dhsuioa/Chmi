<template>
    <q-page class="flex items-center justify-center column">
      <q-card class="card rounded column items-center justify-around">
        <div>
            <h2 class="text-center">Registration Page</h2>
            <h5 class="text-center">Please fill out the form below to register</h5>
        </div>
        <q-input class="input" outlined label="Name"/>
        <q-input class="input" outlined label="Age"/>
        <q-input class="input" outlined label="Email"/>
        <q-input class="input" outlined label="Sex"/>
        <q-btn class="btn rounded" text-color="white" to="/insight">
            Register
        </q-btn>
      </q-card>
    </q-page>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  .card {
    min-width: 598px;
    min-height: 913px;
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
  