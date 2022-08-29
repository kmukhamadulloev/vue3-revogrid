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
  name: "PurchaserEdit",
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

            if (props.model.id.match('/')) return null;

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
      rows: [
        { is_selected: true, catalog_id: "1012", id: "1", code: "L1743", title: "Автомобиль ВАЗ 2102 1999", title_long: "Автомобиль ВАЗ 2102 1999 года производства 95 лс", title_short: "ВАЗ 21022 1999", decription: "Автомобиль как автомобиль для езды и тд", purpose: "Просто так", subdivision: null, competition_name: null, vendor: "HUAWEI - HUAWEI", country: "Афганистан", bom_code: "548sad4558", model: "2102 99", item_type: "Товар", material_group: "73001 - Вспомогательное технологическое оборудование", item_unit: "шт", sap_code: "1929812", amount: "1", delivery_time: "30", is_winding: "Нет", weight: null, width: null, length: null, height: null, volume: null, price: "10000.00", currency: "RUB (P)", tax: null, license_right: null },
        { catalog_id: "1012", id: "1/1", code: "L1743", title: "Двигатель ВАЗ 2102 1999", title_long: "Двигатель ВАЗ 2102 1999 года производства 95 лс", title_short: "ВАЗ 21022 1999", decription: "Двигатель как автомобиль для езды и тд", purpose: "Просто так", subdivision: null, competition_name: null, vendor: "HUAWEI - HUAWEI", country: "Афганистан", bom_code: "548sad4558", model: "2102 99", item_type: "Товар", material_group: "73001 - Вспомогательное технологическое оборудование", item_unit: "шт", sap_code: "1929812", amount: "1", delivery_time: "30", is_winding: "Нет", weight: null, width: null, length: null, height: null, volume: null, price: "10000.00", currency: "RUB (P)", tax: null, license_right: null },
        { catalog_id: "1012", id: "1/2", code: "L1743", title: "Шины ВАЗ 2102 1999", title_long: "Шины для ВАЗ 2102 1999 года производства 95 лс", title_short: "ВАЗ 21022 1999", decription: "Шины как шины для езды и тд", purpose: "Просто так", subdivision: null, competition_name: null, vendor: "HUAWEI - HUAWEI", country: "Афганистан", bom_code: "548sad4558", model: "2102 99", item_type: "Товар", material_group: "73001 - Вспомогательное технологическое оборудование", item_unit: "шт", sap_code: "1929812", amount: "1", delivery_time: "30", is_winding: "Нет", weight: null, width: null, length: null, height: null, volume: null, price: "10000.00", currency: "RUB (P)", tax: null, license_right: null },
        { is_selected: false, catalog_id: "1012", id: "2", code: "L1743", title: "Кабель трёхслойный", title_long: "Кабель трёхслойный 1999 года производства", title_short: "ВАЗ 21022 1999", decription: "Кабель трёхслойный 1999 года производства", purpose: "Просто так", subdivision: null, competition_name: null, vendor: "HUAWEI - HUAWEI", country: "Афганистан", bom_code: "548sad4558", model: "789", item_type: "Товар", material_group: "73001 - Вспомогательное технологическое оборудование", item_unit: "м", sap_code: "1929812", amount: "1", delivery_time: "30", is_winding: "Да", weight: "0.12", width: null, length: null, height: null, volume: "123", price: "300.00", currency: "USD ($)", tax: null, license_right: null },
        { catalog_id: "1012", id: "2", code: "L1743", title: "Кабель трёхслойный 300м", title_long: "Кабель трёхслойный 1999 года производства", title_short: "ВАЗ 21022 1999", decription: "Автомобиль как автомобиль для езды и тд", purpose: "Просто так", subdivision: null, competition_name: null, vendor: "HUAWEI - HUAWEI", country: null, bom_code: "548sad4558", model: "2102 99", item_type: "Товар", material_group: "73001 - Вспомогательное технологическое оборудование", item_unit: null, sap_code: "1929812", amount: "1", delivery_time: "30", is_winding: "Нет", weight: "9", width: "10", length: "10", height: "10", volume: null, price: "30000.00", currency: "RUB (P)", tax: null, license_right: null },
        { is_selected: false, catalog_id: "1012", id: "3", code: "L1743", title: "ПО для панели управления материалов", title_long: "ПО для панели управления материалов 2021 года производства", title_short: "ВАЗ 21022 1999", decription: "ПО для панели управления материалов 2021 года производства", purpose: "Просто так", subdivision: "Что-то там", competition_name: "Кто Что Где Когда", vendor: "HUAWEI - HUAWEI", country: null, bom_code: "548sad4558", model: "2102 99", item_type: "Софт", material_group: "73001 - Вспомогательное технологическое оборудование", item_unit: null, sap_code: "1929812", amount: "1", delivery_time: "30", is_winding: null, weight: null, width: null, length: null, height: null, volume: null, price: "10000.00", currency: "RUB (P)", tax: "С НДС", license_right: "Исключительные" },
        { is_selected: false, catalog_id: "1012", id: "4", code: "L1743", title: "Установка программы на панель", title_long: "Установка программы на панель производства 95 лс", title_short: "ВАЗ 21022 1999", decription: "Установка программы на панель для езды и тд", purpose: "Просто так", subdivision: null, competition_name: null, vendor: "HUAWEI - HUAWEI", country: null, bom_code: "548sad4558", model: "2102 99", item_type: "Услуга", material_group: "73001 - Вспомогательное технологическое оборудование", item_unit: null, sap_code: "1929812", amount: "1", delivery_time: "30", is_winding: null, weight: null, width: null, length: null, height: null, volume: null, price: "10000.00", currency: "RUB (P)", tax: null, license_right: null },
      ],
    };
  },
  components: {
    VGrid,
  },
};
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