<template>
  <div class="chat-list">
    <ul class="list">
      <div v-for="item in data.data" :key="item.id">
        <router-link :to="`/chat/${item.id}`"
          ><chat-item :item="item"
        /></router-link>
      </div>
    </ul>
    <button class="new-message-btn"><i class="fas fa-pen"></i></button>
  </div>
</template>

<script>
  import ChatItem from "./ChatItem.vue"
  import data from "../assets/data.json"

  export default {
    components: { ChatItem },
    name: "ChatList",
    setup() {
      let arr = [1, 2, 3, 4, 5]

      return {
        arr,
        data,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .chat-list {
    position: relative;
    height: 600px;
  }
  .list {
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    overflow-y: scroll;
    height: 100%;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  .new-message-btn {
    position: absolute;
    bottom: 20px;
    right: 30px;
    background: #242e4c;
    border-radius: 22px;
    width: 72px;
    height: 72px;
    border: none;

    i {
      color: #fff;
      font-size: 26px;
    }
  }
  a {
    text-decoration: none;
  }
</style>
