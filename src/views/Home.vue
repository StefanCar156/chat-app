<template>
  <div class="home">
    <header>
      <h1>{{ $t("HOME.messages") }}</h1>
      <button class="search-btn"><i class="fas fa-search"></i></button>
    </header>
    <chat-list />
    <navigation />
  </div>
</template>

<script>
  import ChatList from "../components/ChatList.vue"
  import Navigation from "../components/Navigation.vue"
  export default {
    components: { ChatList, Navigation },
    name: "Home",
  }
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    height: 104px;

    h1 {
      font-weight: bold;
      font-size: 35px;
      line-height: 43px;
      color: #242e4c;
      text-transform: capitalize;
    }
  }
  .search-btn {
    background: none;
    border: none;

    i {
      font-size: 26px;
      color: #10182f;
    }
  }
</style>
