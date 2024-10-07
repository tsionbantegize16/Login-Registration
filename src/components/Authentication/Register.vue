<template>
    <base-card>
      <h2>Register here</h2>
    </base-card>
    <form>
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" name="email" id="email">
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" name="password" id="password">
      </div>
      <div class="form-control">
        <label for="confirm-password">Confirm Password</label>
        <input type="password" name="confirm-password" id="confirm-password">
      </div>
      <div>
        <base-button type="submit">Register</base-button>
      </div>
    </form>
  </template>
  
  <script>
  import BaseButton from '../UI/BaseButton.vue'; // Ensure proper import
  
  export default {
    name: 'RegisterComponent', // Change to a multi-word name
    components: {
      BaseButton, // Register BaseButton
    },
  };
  </script>
  
  <style scoped>
  /* Add styles similar to the ones used for the Login form */
  .form-control {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    font-size: 1rem;
    color: #333;
  }
  
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 0.75rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1rem;
    color: #333;
  }
  
  input:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
  
  base-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
  }
  
  base-button:hover {
    background-color: #0056b3;
  }
  </style>
  