<template>
  <div class="view-content">

    <section class="projects-section">

      <div class="projects-header">
        <div class="header-title">{{ languageData.title }}</div>
        <div class="header-buttons">
          <v-btn-toggle ref="filterButtonToggle" class="filter-button-toggle" mandatory active-class="filter-active" v-model="selectedSortingProp">
            <v-btn class="filter-button" value="date" text @click="sortingButtonClick('date')">
              {{ languageData.dateFilter }}
              <v-icon :class="'filter-icon ' + sortingOrders.date">mdi-arrow-up-drop-circle-outline</v-icon>
            </v-btn>

            <v-btn class="filter-button" value="name" text @click="sortingButtonClick('name')">
              {{ languageData.nameFilter }}
              <v-icon :class="'filter-icon ' + sortingOrders.name">mdi-arrow-up-drop-circle-outline</v-icon>
            </v-btn>
          </v-btn-toggle>
        </div>
      </div>

      <YArticleList :articles="projects" :sortingProp="selectedSortingProp" :sortingOrder="sortingOrder" />
      
    </section>
    
  </div>
</template>

<script src="./ProjectsView.ts" lang="ts">

</script>

<style scoped lang="scss" src="./ProjectsView.scss">
  
</style>
