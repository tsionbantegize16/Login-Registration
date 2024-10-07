<template>
    <base-card>
      <h2>Login here</h2>
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
      <div>
        <base-button type="submit">Login</base-button> <!-- Fixed typo -->
      </div>
    </form>
  </template>
  
  <script>
  import BaseButton from '../UI/BaseButton.vue'; // Ensure proper import
  
  export default {
    name: 'LoginComponent', // Use a multi-word name
    components: {
      BaseButton, // Register BaseButton
    },
  };
  </script>
  
  <style scoped>
/* Style for the BaseCard container */
base-card {
  background-color: #2b2929;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Form control container */
.form-control {
  margin-bottom: 1.5rem;
}

/* Labels */
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
  color: #333;
}

/* Inputs */
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 0.75rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  color: #333;
}

/* Add some focus styles for inputs */
input[type="email"]:focus,
input[type="password"]:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

/* Style for the base-button */
base-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Button hover state */
base-button:hover {
  background-color: #0056b3;
}
</style>

  