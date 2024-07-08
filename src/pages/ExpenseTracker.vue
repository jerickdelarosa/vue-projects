<template>
    <div class="main-container">
      <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12 md:col-span-6 lg:col-span-4 p-5">
            <AddTransaction @transactionSubmitted="handleTransactionSubmitted" />
          </div>
          <div class="col-span-12 md:col-span-6 lg:col-span-8 p-5">
            <Balance :total="+total" />
            <IncomingExpenses :income="+income" :expenses="+expenses" />
            <TransactionList :transactions="transactions" @transactionDeleted="handleTransactionDeleted" />
          </div>
      </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useToast } from 'vue-toastification'

import Balance from '@/components/ExpenseTracker/Balance.vue'
import IncomingExpenses from '@/components/ExpenseTracker/IncomeExpenses.vue'
import TransactionList from '@/components/ExpenseTracker/TransactionList.vue';
import AddTransaction from '@/components/ExpenseTracker/AddTransaction.vue';


const toast = useToast();

const transactions = ref([])

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'));

  if (savedTransactions) {
    transactions.value = savedTransactions;
  }
})


const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0)
})

// Get Income
const income = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2);

})

// Get Expenses
const expenses = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2);
})

// Add Transaction
const handleTransactionSubmitted = (transactionData) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount
  })

  saveTransactionsToLocalStorage()

  toast.success('Transaction added')
}

// Generate Unique ID
const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000);
}

// Delete Transaction data
const handleTransactionDeleted = (transactionId) => {
  transactions.value = transactions.value.filter((transaction) => transaction.id !== transactionId)

  saveTransactionsToLocalStorage()

  toast.success('Transaction deleted')
}

// Save to localStorage
const saveTransactionsToLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value))
}

</script>

<style lang="scss" scoped>
:root {
  --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  font-size: 18px;
}

</style>