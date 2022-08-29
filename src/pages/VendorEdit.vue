<template>
  <div class="p">
    <div class="row">
      <div class="cl-12 full-height">
        <v-grid theme="compact" ref="grid" filter resize range :source="rows" :columns="columns"
          :columnTypes="columnTypes"></v-grid>
      </div>
    </div>
    <div class="row ls">
      <div>
        <button type="button" v-on:click="item">Товар</button>
        <button type="button" v-on:click="soft">Софт</button>
      </div>
      <div>
        <button type="button">Импорт</button>
        <button type="button">Экспорт</button>
        <button type="button">Далее</button>
      </div>
    </div>
  </div>
</template>

<script>
import { VGrid, VGridVueTemplate } from "@revolist/vue3-datagrid";
import SelectTypePlugin from "@revolist/revogrid-column-select";
import NumberColumnType from '@revolist/revogrid-column-numeral';
import DateColumnPlugin from "@revolist/revogrid-column-date";

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
      columns: [
        { prop: "id", readonly: true, name: "№ п/п", order: "asc", sortable: true, resize: true, size: 180 },
        { prop: "code", readonly: true, name: "Код прайслиста", order: "asc", sortable: true, resize: true, size: 180 },
        { prop: "title", readonly: true, name: "Наименование", order: "asc", sortable: true, resize: true, size: 250 },
        { prop: "material_group", name: "Тип материала", order: "asc", columnType: "select", sortable: true, resize: true, size: 250, source: ["71021 - Здания сборно-контейнерные", "72200 - Башни, мачты метал.", "72201 - Ограждения, заборы металлические", "72202 - Обор. сигнального освещения мачт", "72203 - Контейнеры аппаратных", "72206 - Киоски", "72209 - Башни, мачты ж/б", "73000 - Стойка унифицированная", "73001 - Вспомогательное технологическое оборудование", "73101 - Коммутатор блок"] },
      ],
      rows: [
        { catalog_id: "1012", id: "1", code: "L1743", title: "Автомобиль ВАЗ 2102 1999", title_long: "Автомобиль ВАЗ 2102 1999 года производства 95 лс", title_short: "ВАЗ 21022 1999", decription: "Автомобиль как автомобиль для езды и тд", purpose: "Просто так", subdivision: null, competition_name: null, vendor: "HUAWEI - HUAWEI", country: "Афганистан", bom_code: "548sad4558", model: "2102 99", item_type: "Товар", material_group: "73001 - Вспомогательное технологическое оборудование", item_unit: "шт", sap_code: "1929812", amount: "1", delivery_time: "30", is_winding: "Нет", weight: null, width: null, length: null, height: null, volume: null, price: "10000.00", currency: "RUB (P)", tax: null, license_right: null },
        { catalog_id: "1012", id: "2", code: "L1743", title: "Кабель трёхслойный", title_long: "Кабель трёхслойный 1999 года производства", title_short: "ВАЗ 21022 1999", decription: "Кабель трёхслойный 1999 года производства", purpose: "Просто так", subdivision: null, competition_name: null, vendor: "HUAWEI - HUAWEI", country: "Афганистан", bom_code: "548sad4558", model: "789", item_type: "Товар", material_group: "73001 - Вспомогательное технологическое оборудование", item_unit: "м", sap_code: "1929812", amount: "1", delivery_time: "30", is_winding: "Да", weight: "0.12", width: null, length: null, height: null, volume: "123", price: "300.00", currency: "USD ($)", tax: null, license_right: null },
        { catalog_id: "1012", id: "2", code: "L1743", title: "Кабель трёхслойный 300м", title_long: "Кабель трёхслойный 1999 года производства", title_short: "ВАЗ 21022 1999", decription: "Автомобиль как автомобиль для езды и тд", purpose: "Просто так", subdivision: null, competition_name: null, vendor: "HUAWEI - HUAWEI", country: null, bom_code: "548sad4558", model: "2102 99", item_type: "Товар", material_group: "73001 - Вспомогательное технологическое оборудование", item_unit: null, sap_code: "1929812", amount: "1", delivery_time: "30", is_winding: "Нет", weight: "9", width: "10", length: "10", height: "10", volume: null, price: "30000.00", currency: "RUB (P)", tax: null, license_right: null },
        { catalog_id: "1012", id: "3", code: "L1743", title: "ПО для панели управления материалов", title_long: "ПО для панели управления материалов 2021 года производства", title_short: "ВАЗ 21022 1999", decription: "ПО для панели управления материалов 2021 года производства", purpose: "Просто так", subdivision: "Что-то там", competition_name: "Кто Что Где Когда", vendor: "HUAWEI - HUAWEI", country: null, bom_code: "548sad4558", model: "2102 99", item_type: "Софт", material_group: "73001 - Вспомогательное технологическое оборудование", item_unit: null, sap_code: "1929812", amount: "1", delivery_time: "30", is_winding: null, weight: null, width: null, length: null, height: null, volume: null, price: "10000.00", currency: "RUB (P)", tax: "С НДС", license_right: "Исключительные" },
        { catalog_id: "1012", id: "4", code: "L1743", title: "Установка программы на панель", title_long: "Установка программы на панель производства 95 лс", title_short: "ВАЗ 21022 1999", decription: "Установка программы на панель для езды и тд", purpose: "Просто так", subdivision: null, competition_name: null, vendor: "HUAWEI - HUAWEI", country: null, bom_code: "548sad4558", model: "2102 99", item_type: "Услуга", material_group: "73001 - Вспомогательное технологическое оборудование", item_unit: null, sap_code: "1929812", amount: "1", delivery_time: "30", is_winding: null, weight: null, width: null, length: null, height: null, volume: null, price: "10000.00", currency: "RUB (P)", tax: null, license_right: null },
      ],
    };
  },
  components: {
    VGrid,
  },
  mounted() {
    setTimeout(() => {
      this.item();
    }, 1000)
  },
  methods: {
    item() {
      const grid = this.$refs.grid.$el;
      grid.columns = [];
      grid.columns = [
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
      ];
      let newRows = this.rows.filter(row => row.item_type == "Товар");
      grid.source = [];
      grid.source = newRows;
    },
    soft() {
      const grid = this.$refs.grid.$el;
      grid.columns = [];
      grid.columns = [
        { prop: "id", readonly: true, name: "№ п/п", order: "asc", sortable: true, resize: true, size: 180 },
        { prop: "code", readonly: true, name: "Код прайслиста", order: "asc", sortable: true, resize: true, size: 180 },
        { prop: "title", readonly: true, name: "Наименование", order: "asc", sortable: true, resize: true, size: 250 },
        { prop: "title_long", name: "Полное название с описанием технических характеристик", order: "asc", sortable: true, resize: true, size: 300 },
        { prop: "purpose", name: "Функциональное назначение", order: "asc", sortable: true, resize: true, size: 300 },
        { prop: "vendor", name: "Производитель", order: "asc", columnType: "select", source: ["HUAWEI - HUAWEI", "ERICSSON - ERICSSON", "A1 TELEKOM - A1 TELEKOM AUSTRIA GROUP", "A1-SYSTEMS - A1 SYSTEMS", "A10 - A10 NETWORKS INC.", "ABACUS - ABACUS GLOBAL", "ABBYY - ABBYY", "ABIQUO - ABIQUO", "ACCELERITE - ACCELERITE", "ACCORDTEC - ACCORDTEC", "ACESOLUTIO - ACE SOLUTIONS", "ACME - ACME CLEANTECH SOLUTIONS PVT. LTD.", "ACS - ACS", "ACTIVESOFT - АКТИВ СОФТ"], sortable: true, resize: true, size: 150 },
        { prop: "bom_code", name: "Код производителя", order: "asc", sortable: true, resize: true, size: 150 },
        { prop: "tax", name: "Налогообложение", order: "asc", columnType: "select", source: ["С НДС", "Без НДС"], sortable: true, resize: true, size: 200 },
        { prop: "license_right", name: "Права на лицензию", order: "asc", columnType: "select", source: ["Исключительные", "Неисключительные"], sortable: true, resize: true, size: 200 }
      ];
      let newRows = this.rows.filter(row => row.item_type == "Софт");
      grid.source = [];
      grid.source = newRows;
    },
    service() {
      const grid = this.$refs.grid.$el;
      grid.columns = [];
      grid.columns = [
        { prop: "id", readonly: true, name: "№ п/п", order: "asc", sortable: true, resize: true, size: 180 },
        { prop: "code", readonly: true, name: "Код прайслиста", order: "asc", sortable: true, resize: true, size: 180 },
        { prop: "title", readonly: true, name: "Наименование", order: "asc", sortable: true, resize: true, size: 250 },
        { prop: "concern", name: "Счёт концерна", order: "asc", columnType: "select", source: ["BI20100210 - Оборудование - (Транспортная сеть)"], sortable: true, resize: true, size: 250 },
        { prop: "material_group", name: "Группа услуг", order: "asc", columnType: "select", sortable: true, resize: true, size: 300, source: ["71021 - Здания сборно-контейнерные", "72200 - Башни, мачты метал.", "72201 - Ограждения, заборы металлические", "72202 - Обор. сигнального освещения мачт", "72203 - Контейнеры аппаратных", "72206 - Киоски", "72209 - Башни, мачты ж/б", "73000 - Стойка унифицированная", "73001 - Вспомогательное технологическое оборудование", "73101 - Коммутатор блок"] },
        { prop: "sap_code", name: "Код SAP", order: "asc", sortable: true, resize: true, size: 200 },
      ];
      let newRows = this.rows.filter(row => row.item_type == "Услуга");
      grid.source = [];
      grid.source = newRows;
    }
  }
}
</script>

<style scoped>
.full-height {
  height: 85vh;
}

.ls {
  background: #000;
  justify-content: space-between;
}

button {
  padding: 0.75rem 1rem;
  margin: 0;
  background: #000;
  color: #efefef;
  transition: .3s background-color, .2s color;
  cursor: pointer;
  min-width: 120px;
  outline: none;
  border: none;
}

button:focus {
  box-shadow: 0px 0px 4px #27b;
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

.bubble {
  background-color: #B27;
  padding: 3px 10px;
  color: #fff;
  border-radius: 25px;
}

.bubble.active {
  background-color: #7B2;
}

.inactive {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 15px;
  background-color: #ccc;
  cursor: not-allowed;
}

revo-grid {
  width: 99.9%;
}

revo-grid[theme=compact] revogr-data .rgRow.focused-rgRow {
  background-color: rgba(238, 255, 246, 1);
}
</style>