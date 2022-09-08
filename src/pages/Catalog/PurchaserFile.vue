<template>
  <div class="row p">
    <div class="cl-12 dwn">
      <div class="dbn">
        <h1>DROP FILE TO UPLOAD</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PurchaserFile",
};
</script>

<style scoped>

.row {
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.cl-12 {
  width: 60%;
}

.dwn {
  background-color: #efefef;
  height: 56vh;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dbn {
  border: 10px dashed #ddd;
  color: #888;
  width: 95%;
  height: 90%;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>