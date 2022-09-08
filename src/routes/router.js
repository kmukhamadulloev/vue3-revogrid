import { createRouter, createWebHistory } from 'vue-router'

import CatalogView from '@/pages/CatalogView'
import PurchaserFile from '@/pages/Catalog/PurchaserView'
import PurchaserView from '@/pages/Catalog/PurchaserView'
import InitiatorView from '@/pages/Catalog/InitiatorView'
import SupplierView from '@/pages/Catalog/SupplierView'
import NsiView from '@/pages/Catalog/NSIView'

const routes = [
  {
    path: '/',
    component: CatalogView
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
        component: PurchaserView
      },
      {
        path: 'initiator',
        name: 'initiator',
        component: InitiatorView
      },
      {
        path: 'supplier',
        name: 'supplier',
        component: SupplierView
      },
      {
        path: 'nsi',
        name: 'nsi',
        component: NsiView
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;