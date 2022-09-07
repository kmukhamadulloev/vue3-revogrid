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
      <q-btn color="negative" glossy icon="cancel" label="Вернуть" />
      <q-btn color="positive" glossy to="nsi" icon-right="done" label="Далее" />
    </q-btn-group>
  </q-toolbar>

  <q-tab-panels v-model="tab" animated>
    <q-tab-panel name="tables">
      <tabs>
        <tab index="tab-1" title="Товары">
          <v-grid theme="compact" ref="grid" filter resize range :source="item_rows" :columns="item_columns"
            :columnTypes="columnTypes"></v-grid>
        </tab>
        <tab index="tab-2" title="Софт">
          <v-grid theme="compact" ref="grid" filter resize range :source="soft_rows" :columns="soft_columns"
            :columnTypes="columnTypes"></v-grid>
        </tab>
        <tab index="tab-3" title="Услуги">
          <v-grid theme="compact" ref="grid" filter resize range :source="service_rows" :columns="service_columns"
            :columnTypes="columnTypes"></v-grid>
        </tab>
      </tabs>
    </q-tab-panel>

    <q-tab-panel name="statuses">
      <div class="text-h6">Alarms</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>

    <q-tab-panel name="comments">
      <div class="text-h6">Movies</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>

    <q-tab-panel name="extras">
      <div class="text-h6">Movies</div>
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
  name: "InitiatorEdit",
  data() {
    return {
      allow: true,
      columnTypes: {
        'date': new DateColumnPlugin(),
        'select': new SelectTypePlugin(),
        'numeric': new NumberColumnType(0, 0)
      },
      item_columns: [
        { prop: "id", readonly: true, name: "№ п/п", order: "asc", sortable: true, resize: true, size: 180 },
        { prop: "code", readonly: true, name: "Код прайслиста", order: "asc", sortable: true, resize: true, size: 180 },
        { prop: "title", readonly: true, name: "Наименование", order: "asc", sortable: true, resize: true, size: 250 },
        { prop: "material_group", name: "Группа материалов", order: "asc", columnType: "select", sortable: true, resize: true, size: 250, source: ["71021 - Здания сборно-контейнерные", "72200 - Башни, мачты метал.", "72201 - Ограждения, заборы металлические", "72202 - Обор. сигнального освещения мачт", "72203 - Контейнеры аппаратных", "72206 - Киоски", "72209 - Башни, мачты ж/б", "73000 - Стойка унифицированная", "73001 - Вспомогательное технологическое оборудование", "73101 - Коммутатор блок"] }
      ],
      item_rows: [],
      soft_columns: [
        { prop: "id", readonly: true, name: "№ п/п", order: "asc", sortable: true, resize: true, size: 180 },
        { prop: "code", readonly: true, name: "Код прайслиста", order: "asc", sortable: true, resize: true, size: 180 },
        { prop: "title", readonly: true, name: "Наименование", order: "asc", sortable: true, resize: true, size: 250 },
        { prop: "title_long", name: "Полное название с описанием технических характеристик", order: "asc", sortable: true, resize: true, size: 300 },
        { prop: "subdivision", name: "Подразделение", order: "asc", sortable: true, resize: true, size: 250 },
        { prop: "soft_competition", name: "Название конкурса", order: "asc", sortable: true, resize: true, size: 250 },
        { prop: "concern", name: "Счёт концерна", order: "asc", columnType: "select", source: ["BI20100210 - Оборудование - (Транспортная сеть)"], sortable: true, resize: true, size: 150 },
        { prop: "purpose", name: "Назначение лицензии", order: "asc", sortable: true, resize: true, size: 300 },
        { prop: "material_group", name: "Оборудование ГМ", order: "asc", columnType: "select", sortable: true, resize: true, size: 150, source: ["71021 - Здания сборно-контейнерные", "72200 - Башни, мачты метал.", "72201 - Ограждения, заборы металлические", "72202 - Обор. сигнального освещения мачт", "72203 - Контейнеры аппаратных", "72206 - Киоски", "72209 - Башни, мачты ж/б", "73000 - Стойка унифицированная", "73001 - Вспомогательное технологическое оборудование", "73101 - Коммутатор блок"] },
        { prop: "tax", name: "Налогообложение", order: "asc", columnType: "select", source: ["С НДС", "Без НДС"], sortable: true, resize: true, size: 200 },
        { prop: "license_right", name: "Права на лицензию", order: "asc", columnType: "select", source: ["Исключительные", "Неисключительные"], sortable: true, resize: true, size: 200 },
        { prop: "separable", name: "Отделимое", order: "asc", columnType: "select", source: ["Отделимое", "Неотделимое"], sortable: true, resize: true, size: 200 }
      ],
      soft_rows: [],
      service_columns: [
        { prop: "id", readonly: true, name: "№ п/п", order: "asc", sortable: true, resize: true, size: 180 },
        { prop: "code", readonly: true, name: "Код прайслиста", order: "asc", sortable: true, resize: true, size: 180 },
        { prop: "title", readonly: true, name: "Наименование", order: "asc", sortable: true, resize: true, size: 250 },
        { prop: "concern", name: "Счёт концерна", order: "asc", columnType: "select", source: ["BI20100210 - Оборудование - (Транспортная сеть)"], sortable: true, resize: true, size: 250 },
        { prop: "material_group", name: "Группа услуг", order: "asc", columnType: "select", sortable: true, resize: true, size: 300, source: ["71021 - Здания сборно-контейнерные", "72200 - Башни, мачты метал.", "72201 - Ограждения, заборы металлические", "72202 - Обор. сигнального освещения мачт", "72203 - Контейнеры аппаратных", "72206 - Киоски", "72209 - Башни, мачты ж/б", "73000 - Стойка унифицированная", "73001 - Вспомогательное технологическое оборудование", "73101 - Коммутатор блок"] },
        { prop: "sap_code", name: "Код SAP", order: "asc", sortable: true, resize: true, size: 200 },
      ],
      service_rows: [],
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
          this.item_rows = response.data.items;
          this.soft_rows = response.data.softs;
          this.service_rows = response.data.services;
          this.statuses = response.statuses;
          this.comments = response.comments;
          this.details = response.details;
        }).catch((error) => {
          console.log(error);
        });
    }
  },
}
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