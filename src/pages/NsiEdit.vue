<template>
  <MDBTabs v-model="activeTabId1">
    <div class="row">
      <div class="col-md-8">
        <!-- Tabs navs -->
        <MDBTabNav tabsClasses="mb-3 mt-3">
          <MDBTabItem tabId="ex1-1" href="ex1-1"><i class="fas fa-table"></i> Таблицы <MDBBadge color="primary">3
            </MDBBadge>
          </MDBTabItem>
          <MDBTabItem tabId="ex1-2" href="ex1-2"><i class="fas fa-archive"></i> Журнал изменений <MDBBadge
              color="warning">
              5</MDBBadge>
          </MDBTabItem>
          <MDBTabItem tabId="ex1-3" href="ex1-3"><i class="fas fa-comment"></i> Комментарии <MDBBadge color="danger">3
            </MDBBadge>
          </MDBTabItem>
          <MDBTabItem tabId="ex1-4" href="ex1-4"><i class="fas fa-info-circle"></i> Остальное</MDBTabItem>
        </MDBTabNav>
      </div>
      <div class="col-md-4 pt-3 text-end">
        <button class="btn btn-lg btn-danger">Вернуть</button>
        <router-link to="/" class="btn btn-lg btn-success">Далее</router-link>
      </div>
    </div>
    <MDBTabContent contentClasses="px-3">
      <MDBTabPane tabId="ex1-1">
        <tabs>
          <tab index="tab-1" title="Товар">
            <v-grid theme="compact" ref="item-grid" filter resize range :source="item_rows" :columns="item_columns"
              :columnTypes="columnTypes"></v-grid>
          </tab>
          <tab index="tab-2" title="Софт">
            <v-grid theme="compact" ref="soft-grid" filter resize range :source="soft_rows" :columns="soft_columns"
              :columnTypes="columnTypes"></v-grid>
          </tab>
          <tab index="tab-3" title="Услуга">
            <v-grid theme="compact" ref="service-grid" filter resize range :source="service_rows"
              :columns="service_columns" :columnTypes="columnTypes"></v-grid>
          </tab>
        </tabs>
      </MDBTabPane>
      <MDBTabPane tabId="ex1-2">
        <MDBTable class="align-middle mb-0 bg-white">
          <thead class="bg-light">
            <tr>
              <th>Пользователь</th>
              <th>Дата</th>
              <th>Статус</th>
              <th>Описание</th>
              <th>Дейтсвие</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="status in this.statuses">
              <td>
                <div class="d-flex align-items-center">
                  <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 45px; height: 45px"
                    class="rounded-circle" />
                  <div class="ms-3">
                    <p class="fw-bold mb-1">{{ status.by }}</p>
                    <p class="text-muted mb-0">john.doe@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="fw-normal mb-1">{{ status.datetime }}</p>
              </td>
              <td>
                <MDBBadge badge="success" pill class="d-inline">{{ status.code }}</MDBBadge>
              </td>
              <td>{{ status.title }}</td>
              <td>{{ status.action }}</td>
            </tr>
          </tbody>
        </MDBTable>
      </MDBTabPane>
      <MDBTabPane tabId="ex1-3">Content #3</MDBTabPane>
      <MDBTabPane tabId="ex1-4">Content #4</MDBTabPane>
    </MDBTabContent>
  </MDBTabs>
</template>

<script>
import { MDBTabs, MDBTabNav, MDBTabContent, MDBTabItem, MDBTabPane, MDBBadge, MDBTable, MDBBtn, } from 'mdb-vue-ui-kit';
import { VGrid } from "@revolist/vue3-datagrid";
import SelectTypePlugin from "@revolist/revogrid-column-select";
import NumberColumnType from '@revolist/revogrid-column-numeral';
import DateColumnPlugin from "@revolist/revogrid-column-date";
import { ref } from 'vue';
import Tabs from '@/components/Tabs.vue';
import Tab from '@/components/Tab.vue';

export default {
  name: "ExamplePage",
  data() {
    return {
      columnTypes: {
        'date': new DateColumnPlugin(),
        'select': new SelectTypePlugin(),
        'numeric': new NumberColumnType(0, 0)
      },
      item_columns: [
      { prop: "title_long", name: "Полное название с описанием технических характеристик", order: "asc", sortable: true, resize: true, size: 300 },
        { prop: "purpose", name: "Назначение", order: "asc", sortable: true, resize: true, size: 300 },
        { prop: "material_group", name: "Группа материалов", order: "asc", columnType: "select", sortable: true, resize: true, size: 150, source: ["71021 - Здания сборно-контейнерные", "72200 - Башни, мачты метал.", "72201 - Ограждения, заборы металлические", "72202 - Обор. сигнального освещения мачт", "72203 - Контейнеры аппаратных", "72206 - Киоски", "72209 - Башни, мачты ж/б", "73000 - Стойка унифицированная", "73001 - Вспомогательное технологическое оборудование", "73101 - Коммутатор блок"] },
        { prop: "vendor", name: "Производитель", order: "asc", columnType: "select", source: ["HUAWEI - HUAWEI", "ERICSSON - ERICSSON", "A1 TELEKOM - A1 TELEKOM AUSTRIA GROUP", "A1-SYSTEMS - A1 SYSTEMS", "A10 - A10 NETWORKS INC.", "ABACUS - ABACUS GLOBAL", "ABBYY - ABBYY", "ABIQUO - ABIQUO", "ACCELERITE - ACCELERITE", "ACCORDTEC - ACCORDTEC", "ACESOLUTIO - ACE SOLUTIONS", "ACME - ACME CLEANTECH SOLUTIONS PVT. LTD.", "ACS - ACS", "ACTIVESOFT - АКТИВ СОФТ"], sortable: true, resize: true, size: 200 },
        { prop: "bom_code", name: "Код производителя", order: "asc", sortable: true, resize: true, size: 200 },
        { prop: "model", name: "Модель", order: "asc", sortable: true, resize: true, size: 250 },
        { prop: "country", name: "Страна производства", order: "asc", columnType: "select", source: ["Афганистан", "Аландские острова", "Албания", "Алжир", "Американское Самоа", "Андорра", "Ангола", "Ангилья", "Антарктида", "Антигуа и Барбуда", "Аргентина", "Армения", "Аруба", "Австралия", "Австрия", "Азербайджан", "Багамские острова", "Бахрейн", "Бангладеш", "Барбадос", "Беларусь", "Бельгия", "Белиз", "Бенин", "Бермудские острова", "Бутан", "Боливия", "Босния и Герцеговина", "Ботсвана", "Остров Буве", "Бразилия", "Британская территория в Индийском Океане", "Бруней-Даруссалам", "Болгария", "Буркина-Фасо", "Бурунди", "Камбоджа", "Камерун", "Канада", "Кабо-Верде", "Каймановы острова", "Центральноафриканская Республика", "Чад", "Чили", "Китай", "Остров Рождества", "Кокосовые острова (Килинг) Острова", "Колумбия", "Коморские Острова", "Конго", "Конго Демократическая Республика", "Острова Кука", "Коста-Рика", "Кот-Д'Ивуар", "Хорватия", "Куба", "Кипр", "Чешская Республика", "Дания", "Джибути", "Доминика", "Доминиканская Республика", "Эквадор", "Египет", "Сальвадор", "Экваториальная Гвинея", "Эритрея", "Эстония", "Эфиопия", "Фолклендские (Мальвинские) острова", "Фарерские Острова", "Фиджи", "Финляндия", "Франция", "Французская Гвиана", "Французская Полинезия", "Французские Южные территории", "Габон", "Гамбия", "Грузия", "Германия", "Гана", "Гибралтар", "Греция", "Гренландия", "Гренада", "Гваделупа", "Гуам", "Гватемала", "Гернси", "Гвинея", "Гвинея-Бисау", "Гайана", "Гаити", "Остров Херд и острова Макдональда", "Святой Престол (Ватикан)", "Гондурас", "Гонконг", "Венгрия", "Исландия", "Индия", "Индонезия", "Иран Исламская Республика", "Ирак", "Ирландия", "Остров Мэн", "Израиль", "Италия", "Ямайка", "Япония", "Джерси", "Иордания", "Казахстан", "Кения", "Кирибати", "Корейская Народно-Демократическая Республика", "Корейская Республика", "Кувейт", "Кыргызстан", "Лаосская Народно-Демократическая Республика", "Латвия", "Ливан", "Лесото", "Либерия", "Ливийская Арабская Джамахирия", "Лихтенштейн", "Литва", "Люксембург", "Макао", "Македония Бывшая Югославская Республика", "Мадагаскар", "Малави", "Малайзия", "Мальдивы", "Мали", "Мальта", "Маршалловы острова", "Мартиника", "Мавритания", "Маврикий", "Майотта", "Мексика", "Микронезия Федеративные Штаты", "Республика Молдова", "Монако", "Монголия", "Монтсеррат", "Марокко", "Мозамбик", "Мьянма", "Намибия", "Науру", "Непал", "Нидерланды", "Нидерландские Антильские острова", "Новая Каледония", "Новая Зеландия", "Никарагуа", "Нигер", "Нигерия", "Ниуэ", "Остров Норфолк", "Северные Марианские острова", "Норвегия", "Оман", "Пакистан", "Палау", "оккупированная Палестинская территория", "Панама", "Папуа-Новая Гвинея", "Парагвай", "Перу", "Филиппины", "Питкэрн", "Польша", "Португалия", "Пуэрто-Рико", "Катар", "Реюньон", "Румыния", "Российская Федерация", "Руанда", "Остров Святой Елены", "Сент-Китс и Невис", "Сент-Люсия", "Сен-Пьер и Микелон", "Сент-Винсент и Гренадины", "Самоа", "Сан-Марино", "Сан-Томе и Сан-Томе. Принсипи", "Саудовская Аравия", "Сенегал", "Сербия и Черногория", "Сейшельские Острова", "Сьерра-Леоне", "Сингапур", "Словакия", "Словения", "Соломоновы острова", "Сомали", "Южная Африка", "Южная Георгия и Южные Сандвичевы острова", "Испания", "Шри-Ланка", "Судан", "Суринам", "Шпицберген и Ян-Майен", "Свазиленд", "Швеция", "Швейцария", "Сирийская Арабская Республика", "китайская провинция Тайвань", "Таджикистан", "Объединенная Республика Танзания", "Таиланд", "Тимор-Лешти", "Того", "Токелау", "Тонга", "Тринидад и Тобаго", "Тунис", "Турция", "Туркменистан", "Острова Теркс и Кайкос", "Тувалу", "Уганда", "Украина", "Объединенные Арабские Эмираты", "Соединенное Королевство", "Соединенные Штаты", "малые отдаленные острова Соединенных Штатов", "Уругвай", "Узбекистан", "Вануату", "Венесуэла", "Вьетнам", "Виргинские острова Британские", "Виргинские острова США", "Уоллис и Футуна", "Западная Сахара", "Йемен", "Замбия", "Зимбабве"], sortable: true, resize: true, size: 200 },
        { prop: "item_unit", name: "Единица измерения", order: "asc", columnType: "select", source: ["шт", "м"], sortable: true, resize: true, size: 150 },
        { prop: "is_winding", name: "Намоточное изделие", order: "asc", columnType: "select", source: ['Да', 'Нет'], sortable: true, resize: true, size: 250 },
        {
          prop: "weight", name: "Вес за единицу", order: "asc", sortable: true, resize: true, size: 200,
          readonly: ({ model }) => {
            if (model.is_winding === "Нет") {
              return false;
            }
            return true;
          }
        },
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
        { prop: "soft_competition", name: "Название конкурса", order: "asc", sortable: true, resize: true, size: 250 },
        { prop: "concern", name: "Счёт концерна", order: "asc", columnType: "select", source: ["BI20100210 - Оборудование - (Транспортная сеть)"], sortable: true, resize: true, size: 150 },
        { prop: "purpose", name: "Назначение", order: "asc", sortable: true, resize: true, size: 300 },
        { prop: "material_group", name: "Оборудование ГМ", order: "asc", columnType: "select", sortable: true, resize: true, size: 150, source: ["71021 - Здания сборно-контейнерные", "72200 - Башни, мачты метал.", "72201 - Ограждения, заборы металлические", "72202 - Обор. сигнального освещения мачт", "72203 - Контейнеры аппаратных", "72206 - Киоски", "72209 - Башни, мачты ж/б", "73000 - Стойка унифицированная", "73001 - Вспомогательное технологическое оборудование", "73101 - Коммутатор блок"] },
        { prop: "vendor", name: "Производитель", order: "asc", columnType: "select", source: ["HUAWEI - HUAWEI", "ERICSSON - ERICSSON", "A1 TELEKOM - A1 TELEKOM AUSTRIA GROUP", "A1-SYSTEMS - A1 SYSTEMS", "A10 - A10 NETWORKS INC.", "ABACUS - ABACUS GLOBAL", "ABBYY - ABBYY", "ABIQUO - ABIQUO", "ACCELERITE - ACCELERITE", "ACCORDTEC - ACCORDTEC", "ACESOLUTIO - ACE SOLUTIONS", "ACME - ACME CLEANTECH SOLUTIONS PVT. LTD.", "ACS - ACS", "ACTIVESOFT - АКТИВ СОФТ"], sortable: true, resize: true, size: 200 },
        { prop: "bom_code", name: "Код производителя", order: "asc", sortable: true, resize: true, size: 200 },
        { prop: "tax", name: "Налогообложение", order: "asc", columnType: "select", source: ["С НДС", "Без НДС"], sortable: true, resize: true, size: 200 },
        { prop: "license_right", name: "Права на лицензию", order: "asc", columnType: "select", source: ["Исключительные", "Неисключительные"], sortable: true, resize: true, size: 200 },
        { prop: "separable", name: "Отделимое", order: "asc", columnType: "select", source: ["Отделимое", "Неотделимое"], sortable: true, resize: true, size: 200 }
      ],
      service_rows: [
        { prop: "id", readonly: true, name: "№ п/п", order: "asc", sortable: true, resize: true, size: 180 },
        { prop: "code", readonly: true, name: "Код прайслиста", order: "asc", sortable: true, resize: true, size: 180 },
        { prop: "title", readonly: true, name: "Наименование", order: "asc", sortable: true, resize: true, size: 250 },
        { prop: "concern", name: "Счёт концерна", order: "asc", columnType: "select", source: ["BI20100210 - Оборудование - (Транспортная сеть)"], sortable: true, resize: true, size: 250 },
        { prop: "material_group", name: "Группа услуг", order: "asc", columnType: "select", sortable: true, resize: true, size: 300, source: ["71021 - Здания сборно-контейнерные", "72200 - Башни, мачты метал.", "72201 - Ограждения, заборы металлические", "72202 - Обор. сигнального освещения мачт", "72203 - Контейнеры аппаратных", "72206 - Киоски", "72209 - Башни, мачты ж/б", "73000 - Стойка унифицированная", "73001 - Вспомогательное технологическое оборудование", "73101 - Коммутатор блок"] },
        { prop: "sap_code", name: "Код SAP", order: "asc", sortable: true, resize: true, size: 200 }
      ],
      statuses: [],
      comments: [],
      details: []
    }
  },
  components: {
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
    MDBTable,
    MDBBtn,
    VGrid,
    MDBBadge,
    Tabs,
    Tab
  },
  setup() {
    const activeTabId1 = ref('ex1-1');
    return {
      activeTabId1,
    };
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
  }
};
</script>

<style scoped>
revo-grid {
  height: 85vh;
  border: 1px solid #ccc;
}
</style>