<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-secondary">
      <q-toolbar>
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" icon="menu" />

        <q-toolbar-title>
          X-SRM
        </q-toolbar-title>

        <q-btn dense round flat icon="notifications" class="q-ml-md">
          <q-badge color="orange" floating>3</q-badge>
        </q-btn>
        <q-btn dense round flat icon="message" class="q-ml-md">
        </q-btn>
        <q-btn dense round flat icon="email" class="q-ml-md q-mr-md">
          <q-badge color="red" floating>2</q-badge>
        </q-btn>
      </q-toolbar>

      <q-toolbar inset class="bg-teal-6">
        <q-breadcrumbs active-color="white" style="font-size: 16px">
          <q-breadcrumbs-el label="Home" icon="home" />
          <q-breadcrumbs-el label="Components" icon="widgets" />
          <q-breadcrumbs-el label="Toolbar" />
        </q-breadcrumbs>
      </q-toolbar>

      <q-banner inline-actions class="text-white bg-negative" style="display: none">
        Файл повреждён, просьба проверить файл на локальном устройстве.
        <template v-slot:action>
          <q-btn flat color="white" label="ОК" @click="messageShowOpen != messageShowOpen" />
        </template>
      </q-banner>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above class="bg-grey-1">
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list padding>
          <template v-for="(link, index) in this.links" :key="index">
            <q-item clickable v-ripple :to="link.path">
              <q-item-section avatar>
                <q-icon :name="link.icon" />
              </q-item-section>
              <q-item-section>
                {{ link.title }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index"  v-if="link.separator" />
          </template>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="@/assets/bg.jpg" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="64px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">Комрон Мухамадуллоев</div>
          <div>komron.mukhamadulloe@megafon.ru</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container class="">
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'LayoutDefault',
  data() {
    return {
      messageShowOpen: true,
      links: [
        {
          path: '/',
          title: 'Главная',
          icon: 'home',
          separator: false
        },
        {
          path: '/',
          title: 'Мои задачи',
          icon: 'tasks',
          separator: false
        },
        {
          path: '/',
          title: 'Аккредитация',
          icon: 'login',
          separator: false
        },
        {
          path: '/',
          title: 'Тендеры',
          icon: 'shop',
          separator: false
        },
        {
          path: '/',
          title: 'Электронные торги',
          icon: 'ping',
          separator: false
        },
        {
          path: '/',
          title: 'Благонадёжность',
          icon: 'scale',
          separator: false
        },
        {
          path: '/',
          title: 'Поставщики',
          icon: 'apartment',
          separator: false
        },
        {
          path: '/catalogs',
          title: 'Каталоги',
          icon: 'bookmarks',
          separator: false
        },
        {
          path: '/',
          title: 'Претензии',
          icon: 'forum',
          separator: false
        },
        {
          path: '/',
          title: 'Аналитика',
          icon: 'analytics',
          separator: false
        },
        {
          path: '/',
          title: 'Администрирование',
          icon: 'engineering',
          separator: true
        },
        {
          path: '/',
          title: 'Документооборот',
          icon: 'folder',
          separator: false
        },
        {
          path: '/',
          title: 'Рабочее время',
          icon: 'work',
          separator: false
        },
      ]
    }
  },
  setup() {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>