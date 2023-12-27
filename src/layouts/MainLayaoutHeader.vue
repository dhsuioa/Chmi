<template>
    <q-layout view="hHh lpR fFf">
  
      <q-header elevated style="background-color: #FFFFFF">
        <q-toolbar>
        <q-btn color="black" to="/insight" flat dense>Insight</q-btn>
        <q-btn color="black" to="/analysis" flat dense>Analysis</q-btn>
        </q-toolbar>
      </q-header>
  
      <q-page-container style="background-color: #F5F5F5">
        <router-view />
      </q-page-container>
  
    </q-layout>
  </template>
  
  <script setup lang="ts">
  
  </script>
  