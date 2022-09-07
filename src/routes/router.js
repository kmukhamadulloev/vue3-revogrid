import { createRouter, createWebHistory } from 'vue-router'
import CatalogView from '@/pages/CatalogView'
import PurchaserFile from '@/pages/PurchaserFile'
import PurchaserEdit from '@/pages/PurchaserEdit'
import InitiatorEdit from '@/pages/InitiatorEdit'
import VendorEdit from '@/pages/VendorEdit'
import NsiEdit from '@/pages/NsiEdit'
import ExamplePage from '@/pages/ExamplePage'

const routes = [
  {
    path: '/',
    component: PurchaserFile
  },
  {
    path: '/catalogs',
    component: CatalogView,
    children: [
      {
        path: '',
        name: 'catalogs',
        component: PurchaserFile
      },
      {
        path: 'purchaiser',
        name: 'purchaiser',
        component: PurchaserEdit
      },
      {
        path: 'initiator',
        name: 'initiator',
        component: InitiatorEdit
      },
      {
        path: 'supplier',
        name: 'supplier',
        component: VendorEdit
      },
      {
        path: 'nsi',
        name: 'nsi',
        component: NsiEdit
      },
    ]
  },
  {
    path: '/initiator',
    component: InitiatorEdit
  },
  {
    path: '/vendor',
    component: VendorEdit
  },
  {
    path: '/nsi',
    component: NsiEdit
  },
  {
    path: '/example',
    component: ExamplePage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;