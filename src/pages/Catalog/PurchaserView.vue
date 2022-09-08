<template>
  <q-toolbar>
    <q-tabs v-model="tab" shrink stretch inline-label class="q-mt-sm text-grey" align="left" style="width: 50%"
      active-color="primary" indicator-color="primary">
      <q-tab name="tables" label="Таблицы" icon="table">
        <q-badge color="primary" class="q-ml-sm">3</q-badge>
      </q-tab>
      <q-tab name="statuses" label="Статусы" icon="alarm">
        <q-badge color="secondary" class="q-ml-sm">3</q-badge>
      </q-tab>
      <q-tab name="comments" label="Комментарии" icon="comments">
        <q-badge color="negative" class="q-ml-sm">1</q-badge>
      </q-tab>
      <q-tab name="extras" label="Дополнительно" icon="information">
      </q-tab>
    </q-tabs>

    <q-space />

    <q-btn-group class="q-mt-sm q-mr-sm">
      <q-btn color="primary" glossy icon="upload" label="Экспорт" />
      <q-btn color="primary" glossy icon-right="download" label="Импорт" />
    </q-btn-group>

    <q-btn-group class="q-mt-sm">
      <q-btn color="positive" glossy to="/catalogs/initiator" icon-right="done" label="Далее" />
    </q-btn-group>
  </q-toolbar>

  <q-tab-panels v-model="tab" animated>
    <q-tab-panel name="tables">
      <tabs>
        <tab index="tab-1" title="Данные">
          <v-grid theme="compact" ref="item-grid" filter resize range :source="items" :columns="columns"
            :columnTypes="columnTypes"></v-grid>
        </tab>
      </tabs>
    </q-tab-panel>

    <q-tab-panel name="statuses">
      <div class="text-h6">Статусы</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>

    <q-tab-panel name="comments">
      <div class="text-h6">Комментарии</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>

    <q-tab-panel name="extras">
      <div class="text-h6">Дополнительно</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>
  </q-tab-panels>
</template>

<script>
import { ref } from 'vue'

import { VGrid, VGridVueTemplate } from "@revolist/vue3-datagrid";
import SelectTypePlugin from "@revolist/revogrid-column-select";
import NumberColumnType from '@revolist/revogrid-column-numeral';
import DateColumnPlugin from "@revolist/revogrid-column-date";

import Tabs from '@/components/Tabs.vue'
import Tab from '@/components/Tab.vue'

export default {
  name: "PurchaserView",
  data() {
    return {
      allow: true,
      columnTypes: {
        'date': new DateColumnPlugin(),
        'select': new SelectTypePlugin(),
        'numeric': new NumberColumnType(0, 0)
      },
      columns: [
        {
          prop: "is_selected", name: "#", sortable: true, resize: true, size: 50,
          cellTemplate: (createElement, props) => {
            const input = createElement("input", {
              type: "checkbox",
              // store is selected in rows "checked" prop
              checked: props.model.is_selected,
              onChange(e) {
                props.model.is_selected = e.target.checked;
                if (input) {
                  input.$attrs$.checked = e.target.checked;
                }
              }
            });
            if ('id' in this.items) {
              if (props.model.id.match('/')) return null;
            }
            return input;
          }
        },
        { prop: "catalog_id", name: "Номер каталога", order: "asc", sortable: true, resize: true, size: 180 },
        { prop: "id", name: "№ п/п", order: "asc", sortable: true, resize: true, size: 180 },
        { prop: "code", name: "Код прайслиста", order: "asc", sortable: true, resize: true, size: 180 },
        { prop: "title", name: "Наименование", order: "asc", sortable: true, resize: true, size: 250 },
        { prop: "price", name: "Цена за единицу", order: "asc", size: 150 },
        { prop: "currency", name: "Валюта", order: "asc", columnType: "select", source: ["USD ($)", "EUR (Э)", "RUB (P)"], size: 100 },
        { prop: "bom_code", name: "Код производителя", order: "asc", sortable: true, resize: true, size: 250 },
        { prop: "vendor", name: "Производитель", order: "asc", columnType: "select", source: ["HUAWEI - HUAWEI", "ERICSSON - ERICSSON", "A1 TELEKOM - A1 TELEKOM AUSTRIA GROUP", "A1-SYSTEMS - A1 SYSTEMS", "A10 - A10 NETWORKS INC.", "ABACUS - ABACUS GLOBAL", "ABBYY - ABBYY", "ABIQUO - ABIQUO", "ACCELERITE - ACCELERITE", "ACCORDTEC - ACCORDTEC", "ACESOLUTIO - ACE SOLUTIONS", "ACME - ACME CLEANTECH SOLUTIONS PVT. LTD.", "ACS - ACS", "ACTIVESOFT - АКТИВ СОФТ"], sortable: true, resize: true, size: 150 },
        { prop: "delivery_time", name: "Срок поставки (дней)", order: "asc", sortable: true, resize: true, size: 200 },
        { prop: "sap_code", name: "Код SAP", order: "asc", sortable: true, resize: true, size: 200 },
        { prop: "decription", name: "Примечание", order: "asc", sortable: true, resize: true, size: 300 },
      ],
      items: [],
      statuses: [],
      details: []
    };
  },
  components: {
    VGrid, Tabs, Tab
  },
  setup() {
    return {
      tab: ref('tables')
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      fetch('http://97f0f272.host/api/linksaver')
        .then(res => res.json()).then((response) => {
          this.items = response.data.items.concat(response.data.softs.concat(response.data.services));
          this.statuses = response.statuses;
          this.comments = response.comments;
          this.details = response.details;
        }).catch((error) => {
          console.log(error);
        });
    }
  },
};
</script>

<style>
revo-grid {
  height: 78vh;
  border: 1px solid #dedede;
}

.focused-rgRow {
  background-color: rgb(200, 255, 225) !important;
}
</style>