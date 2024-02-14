<template>
  <div class="employee-details">
    <div class="card">
      <h1>{{ employee.nome }}</h1>
      <img :src="employee.photo" alt="Employee Photo" class="employee-photo">
      <b>{{ employee.function }}</b>
      <p>{{ employee.description }}</p>
      <button @click="goBack" class="back-btn">Voltar</button>
    </div>
  </div>
</template>

<script>
import { employees } from '../backend/employees';

export default {
  data() {
    return {
      employees: employees.funcionarios,
      employee: null
    };
  },
  created() {
    this.fetchEmployee();
  },
  methods: {
    fetchEmployee() {
      const employeeId = parseInt(this.$route.params.id);
      this.employee = this.employees.find(employee => employee.id === employeeId);
    },
    goBack() {
      this.$router.go(-1); // Voltar para a página anterior
    }
  }
};
</script>

<style>
.employee-details {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
}

.employee-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 20px;
  display: block;
}
</style>