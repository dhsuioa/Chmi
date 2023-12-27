<template>
  <q-page class="flex items-center justify-center column">
    <q-card class="card rounded column items-center justify-around">
      <div>
        <h2 class="text-center">Registration Page</h2>
        <h5 class="text-center">Please fill out the form below to register</h5>
      </div>
      <q-input v-for="input in inputs"
        :label="input.label"
        v-model="input.value"
        :type="input.type"
        :rules="[val => !!val || 'Required']"
        outlined
        class="input"/>
      <q-select class="input" outlined v-model="select" :rules="[val => !!val || 'Required']" :options="options" label="Gender" />
      <q-btn class="btn rounded" text-color="white" to="/insight">
        Register
      </q-btn>
    </q-card>
  </q-page>
</template>
  
<script setup>
import { ref } from 'vue';

const name = ref('');
const age = ref('');
const email = ref('');
const select = ref(null);
const options = ['Male', 'Female']

const inputs = ref([
  {
    label: 'Name',
    value: name,
    type: 'text',
  },
  {
    label: 'Age',
    value: age,
    type: 'number',
  },
  {
    label: 'Email',
    value: email,
  },
])
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
  