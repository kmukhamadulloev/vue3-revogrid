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
      <q-btn color="positive" glossy to="supplier" icon-right="done" label="Далее" />
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
  name: "SupplierView",
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
        { prop: "title_long", name: "Полное название с описанием технических характеристик", order: "asc", sortable: true, resize: true, size: 300 },
        { prop: "purpose", name: "Функциональное назначение", order: "asc", sortable: true, resize: true, size: 300 },
        { prop: "vendor", name: "Производитель", order: "asc", columnType: "select", source: ["HUAWEI - HUAWEI", "ERICSSON - ERICSSON", "A1 TELEKOM - A1 TELEKOM AUSTRIA GROUP", "A1-SYSTEMS - A1 SYSTEMS", "A10 - A10 NETWORKS INC.", "ABACUS - ABACUS GLOBAL", "ABBYY - ABBYY", "ABIQUO - ABIQUO", "ACCELERITE - ACCELERITE", "ACCORDTEC - ACCORDTEC", "ACESOLUTIO - ACE SOLUTIONS", "ACME - ACME CLEANTECH SOLUTIONS PVT. LTD.", "ACS - ACS", "ACTIVESOFT - АКТИВ СОФТ"], sortable: true, resize: true, size: 150 },
        { prop: "bom_code", name: "Код производителя", order: "asc", sortable: true, resize: true, size: 150 },
        { prop: "model", name: "Модель", order: "asc", sortable: true, resize: true, size: 250 },
        { prop: "country", name: "Страна производства", order: "asc", columnType: "select", source: ["Афганистан", "Аландские острова", "Албания", "Алжир", "Американское Самоа", "Андорра", "Ангола", "Ангилья", "Антарктида", "Антигуа и Барбуда", "Аргентина", "Армения", "Аруба", "Австралия", "Австрия", "Азербайджан", "Багамские острова", "Бахрейн", "Бангладеш", "Барбадос", "Беларусь", "Бельгия", "Белиз", "Бенин", "Бермудские острова", "Бутан", "Боливия", "Босния и Герцеговина", "Ботсвана", "Остров Буве", "Бразилия", "Британская территория в Индийском Океане", "Бруней-Даруссалам", "Болгария", "Буркина-Фасо", "Бурунди", "Камбоджа", "Камерун", "Канада", "Кабо-Верде", "Каймановы острова", "Центральноафриканская Республика", "Чад", "Чили", "Китай", "Остров Рождества", "Кокосовые острова (Килинг) Острова", "Колумбия", "Коморские Острова", "Конго", "Конго Демократическая Республика", "Острова Кука", "Коста-Рика", "Кот-Д'Ивуар", "Хорватия", "Куба", "Кипр", "Чешская Республика", "Дания", "Джибути", "Доминика", "Доминиканская Республика", "Эквадор", "Египет", "Сальвадор", "Экваториальная Гвинея", "Эритрея", "Эстония", "Эфиопия", "Фолклендские (Мальвинские) острова", "Фарерские Острова", "Фиджи", "Финляндия", "Франция", "Французская Гвиана", "Французская Полинезия", "Французские Южные территории", "Габон", "Гамбия", "Грузия", "Германия", "Гана", "Гибралтар", "Греция", "Гренландия", "Гренада", "Гваделупа", "Гуам", "Гватемала", "Гернси", "Гвинея", "Гвинея-Бисау", "Гайана", "Гаити", "Остров Херд и острова Макдональда", "Святой Престол (Ватикан)", "Гондурас", "Гонконг", "Венгрия", "Исландия", "Индия", "Индонезия", "Иран Исламская Республика", "Ирак", "Ирландия", "Остров Мэн", "Израиль", "Италия", "Ямайка", "Япония", "Джерси", "Иордания", "Казахстан", "Кения", "Кирибати", "Корейская Народно-Демократическая Республика", "Корейская Республика", "Кувейт", "Кыргызстан", "Лаосская Народно-Демократическая Республика", "Латвия", "Ливан", "Лесото", "Либерия", "Ливийская Арабская Джамахирия", "Лихтенштейн", "Литва", "Люксембург", "Макао", "Македония Бывшая Югославская Республика", "Мадагаскар", "Малави", "Малайзия", "Мальдивы", "Мали", "Мальта", "Маршалловы острова", "Мартиника", "Мавритания", "Маврикий", "Майотта", "Мексика", "Микронезия Федеративные Штаты", "Республика Молдова", "Монако", "Монголия", "Монтсеррат", "Марокко", "Мозамбик", "Мьянма", "Намибия", "Науру", "Непал", "Нидерланды", "Нидерландские Антильские острова", "Новая Каледония", "Новая Зеландия", "Никарагуа", "Нигер", "Нигерия", "Ниуэ", "Остров Норфолк", "Северные Марианские острова", "Норвегия", "Оман", "Пакистан", "Палау", "оккупированная Палестинская территория", "Панама", "Папуа-Новая Гвинея", "Парагвай", "Перу", "Филиппины", "Питкэрн", "Польша", "Португалия", "Пуэрто-Рико", "Катар", "Реюньон", "Румыния", "Российская Федерация", "Руанда", "Остров Святой Елены", "Сент-Китс и Невис", "Сент-Люсия", "Сен-Пьер и Микелон", "Сент-Винсент и Гренадины", "Самоа", "Сан-Марино", "Сан-Томе и Сан-Томе. Принсипи", "Саудовская Аравия", "Сенегал", "Сербия и Черногория", "Сейшельские Острова", "Сьерра-Леоне", "Сингапур", "Словакия", "Словения", "Соломоновы острова", "Сомали", "Южная Африка", "Южная Георгия и Южные Сандвичевы острова", "Испания", "Шри-Ланка", "Судан", "Суринам", "Шпицберген и Ян-Майен", "Свазиленд", "Швеция", "Швейцария", "Сирийская Арабская Республика", "китайская провинция Тайвань", "Таджикистан", "Объединенная Республика Танзания", "Таиланд", "Тимор-Лешти", "Того", "Токелау", "Тонга", "Тринидад и Тобаго", "Тунис", "Турция", "Туркменистан", "Острова Теркс и Кайкос", "Тувалу", "Уганда", "Украина", "Объединенные Арабские Эмираты", "Соединенное Королевство", "Соединенные Штаты", "малые отдаленные острова Соединенных Штатов", "Уругвай", "Узбекистан", "Вануату", "Венесуэла", "Вьетнам", "Виргинские острова Британские", "Виргинские острова США", "Уоллис и Футуна", "Западная Сахара", "Йемен", "Замбия", "Зимбабве"], sortable: true, resize: true, size: 150 },
        { prop: "item_unit", name: "Единица измерения", order: "asc", columnType: "select", source: ["шт", "м"], sortable: true, resize: true, size: 150 },
        { prop: "is_winding", name: "Намоточное изделие", order: "asc", columnType: "select", source: ['Да', 'Нет'], sortable: true, resize: true, size: 250 },
        { prop: "weight", name: "Вес за единицу", order: "asc", sortable: true, resize: true, size: 200 },
        {
          prop: "width", name: "Ширина", order: "asc", size: 150,
          readonly: ({ model }) => {
            if (model.is_winding === "Нет") {
              return false;
            }
            return true;
          }
        },
        {
          prop: "length", name: "Длина", order: "asc", size: 150,
          readonly: ({ model }) => {
            if (model.is_winding === "Нет") {
              return false;
            }
            return true;
          }
        },
        {
          prop: "height", name: "Высота", order: "asc", size: 150,
          readonly: ({ model }) => {
            if (model.is_winding === "Нет") {
              return false;
            }
            return true;
          }
        },
        {
          prop: "volume", name: "Объём", order: "asc", size: 150,
          readonly: ({ model }) => {
            if (model.is_winding === "Да") {
              return false;
            }
            return true;
          }
        }
      ],
      item_rows: [],
      soft_columns: [
        { prop: "id", readonly: true, name: "№ п/п", order: "asc", sortable: true, resize: true, size: 180 },
        { prop: "code", readonly: true, name: "Код прайслиста", order: "asc", sortable: true, resize: true, size: 180 },
        { prop: "title", readonly: true, name: "Наименование", order: "asc", sortable: true, resize: true, size: 250 },
        { prop: "title_long", name: "Полное название с описанием технических характеристик", order: "asc", sortable: true, resize: true, size: 300 },
        { prop: "purpose", name: "Функциональное назначение", order: "asc", sortable: true, resize: true, size: 300 },
        { prop: "vendor", name: "Производитель", order: "asc", columnType: "select", source: ["HUAWEI - HUAWEI", "ERICSSON - ERICSSON", "A1 TELEKOM - A1 TELEKOM AUSTRIA GROUP", "A1-SYSTEMS - A1 SYSTEMS", "A10 - A10 NETWORKS INC.", "ABACUS - ABACUS GLOBAL", "ABBYY - ABBYY", "ABIQUO - ABIQUO", "ACCELERITE - ACCELERITE", "ACCORDTEC - ACCORDTEC", "ACESOLUTIO - ACE SOLUTIONS", "ACME - ACME CLEANTECH SOLUTIONS PVT. LTD.", "ACS - ACS", "ACTIVESOFT - АКТИВ СОФТ"], sortable: true, resize: true, size: 150 },
        { prop: "bom_code", name: "Код производителя", order: "asc", sortable: true, resize: true, size: 150 },
        { prop: "tax", name: "Налогообложение", order: "asc", columnType: "select", source: ["С НДС", "Без НДС"], sortable: true, resize: true, size: 200 },
        { prop: "license_right", name: "Права на лицензию", order: "asc", columnType: "select", source: ["Исключительные", "Неисключительные"], sortable: true, resize: true, size: 200 }
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