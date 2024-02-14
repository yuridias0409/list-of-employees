<template>
  <div id="app" class="container">
    <input type="text" v-model="searchQuery" placeholder="Filtrar" class="search-input">
    
    <ul class="employee-list">
      <li v-for="employee in filteredEmployees" :key="employee.id" class="employee-item">
        <img :src="employee.photo" alt="Employee Photo" class="employee-photo">
        <span class="employee-name">{{ employee.nome }}</span>
        <router-link :to="{ name: 'EmployeeDetails', params: { id: employee.id }}" class="view-details-btn">Detalhes</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { employees } from '../backend/employees';

export default {
  data() {
    return {
      employees: employees.funcionarios,
      searchQuery: ''
    };
  },
  computed: {
    filteredEmployees() {
      return this.employees.filter(employee => {
        return employee.nome.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  }
};
</script>

<style>
  .container {
    padding: 21px;
  }
  .search-input {
    margin-bottom: 20px;
    padding: 8px;
    width: 100%;
    font-size: 16px;
  }
  .employee-list {
    list-style-type: none;
    padding: 0;
  }
  .employee-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  .employee-photo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 20px;
  }
  .employee-name {
    font-size: 18px;
    font-weight: bold;
  }
  .view-details-btn {
    margin-left: auto;
    padding: 8px 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .view-details-btn:hover {
    background-color: #45a049;
  }
</style>
