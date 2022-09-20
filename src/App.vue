<script setup>
import Sidebar from "./components/Sidebar.vue"
</script>

<template>
  <div class="container-fluid p-0">
    <div class="row g-0">
      <div class="col-2">
        <Sidebar/>
      </div>
      <div class="col-10">
        <div class="page-header">
          <div class="row justify-content-between">
            <div class="col-auto"></div>
            <div class="col-auto">
              <span class="fw-bold">homeworks</span>
            </div>
          </div>
        </div>
        <div class="page-body">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
