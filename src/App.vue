<template>
<div class="container">
  <div class="row">
    <div class="cl-12 pb">
      <button type="button" v-on:click="addRow">Import</button>
      <button type="button" v-on:click="addRow">Export</button>
      <button type="button" v-on:click="addRow">Add row</button>
    </div>
  </div>
  <div class="row">
    <div class="cl-12">
      <v-grid theme="material" ref="grid" row-size="35" filter resize :source="rows" :columns="columns" :columnTypes="columnTypes" row-class="highlighted" range></v-grid>
    </div>
  </div>
</div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { VGrid, VGridVueTemplate } from "@revolist/vue3-datagrid";
import SelectTypePlugin from "@revolist/revogrid-column-select";
import NumberColumnType from '@revolist/revogrid-column-numeral';
import Plugin from "@revolist/revogrid-column-date";

export default {
  name: "App",
  data() {
    return {
      columnTypes: {
        'date': new Plugin(),
        'select': new SelectTypePlugin(),
        'numeric': new NumberColumnType(0, 0)
      },
      columns: [
        { prop: "id", name: "№", order: "asc", columnType: "numeric", pin: "colPinStart", sortable: true, resize: true },
        { prop: "names", name: "ФИО", order: "asc", columnType: "string", sortable: true, resize: true, size: 250 },
        { prop: "dateofbirth", name: "Дата рождения", order: "asc", columnType: "date", sortable: true, resize: true, size: 200 },
        { prop: "email", name: "Эл. почта", order: "asc", columnType: "string", sortable: true, resize: true, size: 200 },
        { prop: "phone", name: "Телефон", order: "asc", columnType: "string", sortable: true, resize: true, size: 200 },
        { prop: "address", name: "Адресс", order: "asc", columnType: "string", sortable: true, resize: true, size: 200 },
        { prop: "index", name: "Индекс", order: "asc", columnType: "numeric", sortable: true, resize: true, size: 200 },
        { prop: "city", name: "Город", order: "asc", columnType: "select", source: ["Душанбе", "Москва"], sortable: true, resize: true, size: 200 },
        { prop: "country", name: "Страна", order: "asc", columnType: "select", source: ["Таджикистан", "Российская Федерация"], sortable: true, resize: true, size: 200 },
        { prop: "status", name: "Статус", pin: "colPinEnd", order: "asc", columnType: "select", source: ["Доступно", "Недоступно"], sortable: true, resize: true, size: 200 },
      ],
      rows: [
        { id: 1, names: 'Иванов Иван Иванович', email: 'ivanov@gmail.com', dateofbirth: "2000-12-12", phone: '+79996663737', address: 'ул. Пушкина 44 кв 131', index: 700035, city: 'Душанбе', country: 'Таджикистан', status: "Доступно" },
        { id: 2, names: 'Иванов Иван Иванович', email: 'ivanov@gmail.com', dateofbirth: "2000-12-12", phone: '+79996663737', address: 'ул. Пушкина 44 кв 131', index: 700035, city: 'Душанбе', country: 'Таджикистан', status: "Доступно" },
        { id: 3, names: 'Иванов Иван Иванович', email: 'ivanov@gmail.com', dateofbirth: "2000-12-12", phone: '+79996663737', address: 'ул. Пушкина 44 кв 131', index: 700035, city: 'Душанбе', country: 'Таджикистан', status: "Доступно" },
        { id: 4, names: 'Иванов Иван Иванович', email: 'ivanov@gmail.com', dateofbirth: "2000-12-12", phone: '+79996663737', address: 'ул. Пушкина 44 кв 131', index: 700035, city: 'Душанбе', country: 'Таджикистан', status: "Доступно" }
      ]
    };
  },
  components: {
    VGrid,
  },
  methods: {
    addRow() {
      const grid = this.$refs.grid.$el;
      let lastId = this.rows[this.rows.length - 1].id;
      this.rows.push({id: ++lastId});
      grid.columns = [];
      grid.columns = this.columns;
      grid.source = [];
      grid.source = this.rows;
    }
  }
};
</script>

<style>
body {
  margin: 0;
}

.container {
  padding: 1rem;
}

.row {
  
}

.pb {
  padding-bottom: 1rem;
  text-align: right;
}

.cl-12 {
  width: 100%;
}

button {
  padding: 0.5rem 1rem;
  margin-left: 0.15rem;
  border: 1px solid #27b;
  background: transparent;
  color: #27b;
  transition: .3s background-color, .2s color;
  cursor: pointer;
}

button:focus {
  box-shadow: 0px 0px 4px    #27b;
  outline-color: transparent;
  outline-width: 4px;
  outline-style: dotted;
}

button:hover {
  color: #fff;
  background: #27b;
}

revo-grid {
  height: 85vh;
  border: 1px solid #ccc;
}
</style>