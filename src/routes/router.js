import { createRouter, createWebHistory } from 'vue-router'
import PurchaserFile from '@/pages/PurchaserFile'
import PurchaserEdit from '@/pages/PurchaserEdit'
import InitiatorEdit from '@/pages/InitiatorEdit'
import VendorEdit from '@/pages/VendorEdit'
import NsiEdit from '@/pages/NsiEdit'

const routes = [
  {
    path: '/',
    component: PurchaserFile
  },
  {
    path: '/purchaser',
    component: PurchaserEdit
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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;