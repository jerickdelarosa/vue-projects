<template>
    <h3>Add new transaction</h3>
    <form id="form" @submit.prevent="onSubmit">
        <div class="form-control">
            <label for="text">Text:</label>
            <input v-model="text" type="text" name="text" id="text" placeholder="Enter text..." />
        </div>
        <div class="form-control">
            <label for="amount">
                Amount:
                <br />
                <span class="italic text-sm">(negative - expense, positive - income)</span>
            </label>
            <input v-model="amount" type="text" name="amount" id="amount" placeholder="Enter amount..." />
        </div>
        <button type="submit" class="btn">Add transaction</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toastification';

const text = ref('');
const amount = ref('');
const toast = useToast();

const emit = defineEmits(['transactionSubmitted']);

const onSubmit = () => {
    if (!text.value || !amount.value) {
        toast.error('Both fields must be filled');
        return;
    }

    const transactionData = {
        text: text.value,
        amount: parseFloat(amount.value)
    }

    emit('transactionSubmitted', transactionData);

    text.value = '';
    amount.value = '';
}

</script>

<style lang="scss" scoped>
:root {
  --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

h3 {
  border-bottom: 1px solid #bbb;
  padding-bottom: 10px;
  margin: 10px 0 10px;
}

label {
  display: inline-block;
  margin: 10px 0;
}

input[type='text'],
input[type='number'] {
  border: 1px solid #dedede;
  border-radius: 2px;
  display: block;
  font-size: 16px;
  padding: 10px;
  width: 100%;
}


.btn {
  cursor: pointer;
  background-color: #9c88ff;
  box-shadow: var(--box-shadow);
  color: #fff;
  border: 0;
  display: block;
  font-size: 16px;
  margin: 10px 0 30px;
  padding: 10px;
  width: 100%;

  &:focus {
    outline: 0;
  }
}


</style>