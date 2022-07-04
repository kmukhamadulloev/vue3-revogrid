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
    <div class="cl-12 full-height">
      <v-grid theme="material" ref="grid" row-size="35" filter resize :source="rows" :columns="columns" :columnTypes="columnTypes" row-class="highlighted" range></v-grid>
    </div>
  </div>
</div>
</template>

<script>
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
        { prop: "id", name: "№", rowDrag: true, order: "asc", columnType: "numeric", pin: "colPinStart", sortable: true, resize: true },
        { prop: "names", name: "ФИО", order: "asc", columnType: "string", sortable: true, resize: true, size: 250 },
        { prop: "dateofbirth", name: "Дата рождения", order: "asc", columnType: "date", sortable: true, resize: true, size: 150 },
        { prop: "email", name: "Эл. почта", order: "asc", columnType: "string", sortable: true, resize: true, size: 150 },
        { prop: "phone", name: "Телефон", order: "asc", columnType: "string", sortable: true, resize: true, size: 150 },
        { prop: "address", name: "Адрес", order: "asc", columnType: "string", sortable: true, resize: true, size: 250 },
        { prop: "index", name: "Индекс", order: "asc", columnType: "numeric", sortable: true, resize: true, size: 100 },
        { prop: "city", name: "Город", order: "asc", columnType: "select", source: ["Душанбе", "Москва"], sortable: true, resize: true, size: 150 },
        { prop: "country", name: "Страна", order: "asc", columnType: "select", source: ["Таджикистан", "Российская Федерация"], sortable: true, resize: true, size: 200 },
        { prop: "status", name: "Статус", pin: "colPinEnd", order: "asc", columnType: "select", source: ["Доступно", "Недоступно"], sortable: true, resize: true, size: 150 },
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
      this.rows.push({});
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
  height: 100vh;
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

.full-height {
  height: 85vh;
}

button {
  padding: 0.5rem 1rem;
  margin-left: 0.15rem;
  border: 1px solid #27b;
  background: transparent;
  color: #27b;
  border-radius: 25px;
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
  height: 100%;
  border: 1px solid #ccc;
}
</style>