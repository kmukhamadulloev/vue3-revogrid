<template>
  <ul>
    <li>
      <router-link to="/" active-class="active" exact-active-class="active">НАЧАЛО</router-link>
    </li>
    <li>
      <router-link to="/purchaser" active-class="active" exact-active-class="active">ЗАКУПЩИК</router-link>
    </li>
    <li>
      <router-link to="/initiator" active-class="active" exact-active-class="active">ИНИЦИАТОР</router-link>
    </li>
    <li>
      <router-link to="/vendor" active-class="active" exact-active-class="active">ПОСТАВЩИК</router-link>
    </li>
    <li>
      <router-link to="/nsi" active-class="active" exact-active-class="active">НСИ</router-link>
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  justify-content: right;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #000;
}

a {
  text-decoration: none;
  color: #efefef;
  padding: 15px;
  display: block;
  background-color: #000;
  min-width: 150px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
}

.active {
  background-color: #27b;
}
</style>