<template>
  <li class="chat-item" :class="{ newMsg: itemData.newMessage }">
    <img :src="itemData.image" alt="" class="item-img" />
    <div class="item-details">
      <h3 class="item-name">{{ itemData.name }}</h3>
      <p class="item-message">
        {{
          itemData.messages[itemData.messages.length - 1].content.length > 20
            ? itemData.messages[itemData.messages.length - 1].content.substr(
                0,
                20
              ) + "..."
            : itemData.messages[itemData.messages.length - 1].content
        }}
        <span>{{ itemData.messages[itemData.messages.length - 1].time }}</span>
      </p>
    </div>
    <div v-if="itemData.newMessage" class="new-msg-notification"></div>
  </li>
</template>

<script>
  export default {
    name: "ChatItem",
    props: {
      item: Object,
    },
    setup(props) {
      return {
        itemData: props.item,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .chat-item {
    display: flex;
    align-items: center;
    padding: 15px;
    border-radius: 5px;
    position: relative;
  }
  .newMsg {
    background-color: #f2f6f9;
  }
  .item-img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  .item-details {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .item-name,
  .item-message {
    margin: 0;
  }
  .item-name {
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    color: #242e4c;
    margin-bottom: 7px;
  }
  .item-message {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #6a738c;

    span {
      margin-left: 15px;
      font-size: 14px;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: -8px;
        top: 50%;
        transform: translateY(-50%);
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: #242e4c;
      }
    }
  }
  .new-msg-notification {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #928af9;
  }
</style>
