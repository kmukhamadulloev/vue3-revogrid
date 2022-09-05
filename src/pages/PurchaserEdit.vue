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
        <router-link to="/initiator" class="btn btn-lg btn-success">Далее</router-link>
      </div>
    </div>
    <MDBTabContent contentClasses="px-3">
      <MDBTabPane tabId="ex1-1">
        <tabs>
          <tab index="tab-1" title="Таблица">
            <v-grid theme="compact" ref="item-grid" filter resize range :source="items" :columns="columns"
              :columnTypes="columnTypes"></v-grid>
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
          this.items = response.data.items.concat(response.data.softs.concat(response.data.services));
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