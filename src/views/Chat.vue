<template>
  <div class="chat">
    <header>
      <button class="back-btn" @click="goBack">
        <i class="fas fa-chevron-left"></i>
      </button>
      <div class="user">
        <img
          :src="currentChat.image"
          :alt="currentChat.name"
          class="user-img"
        />
        <div class="user-info">
          <h3 class="user-name">{{ currentChat.name }}</h3>
          <p class="last-seen">Seen 5 minutes ago</p>
        </div>
      </div>
      <div class="cta">
        <button class="call-btn"><i class="fas fa-phone-alt"></i></button>
        <button class="video-btn"><i class="fas fa-video"></i></button>
      </div>
    </header>
    <div class="messages">
      <ul class="messages-list">
        <li
          class="message"
          :class="{ messageSent: message.type === `sent` }"
          v-for="message in currentChat.messages"
          :key="message.id"
        >
          <img
            :src="currentChat.image"
            :alt="currentChat.name"
            class="message-avatar"
            v-if="message.type === `received`"
          />
          <p>
            {{ message.content }}
          </p>
          <p>{{ message.time }}</p>
        </li>
      </ul>
    </div>
    <div class="new-message">
      <div class="new-message-content">
        <input type="text" :placeholder="$t('CHAT.typeMessage')" />
        <ul class="files">
          <li>
            <button><i class="fas fa-ellipsis-h"></i></button>
          </li>
          <li>
            <button><i class="far fa-image"></i></button>
          </li>
          <li>
            <button><i class="fas fa-camera"></i></button>
          </li>
        </ul>
      </div>
      <button class="new-message-btn">
        <i class="fas fa-long-arrow-alt-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
  import { onMounted, ref } from "@vue/runtime-core"
  import { useRoute, useRouter } from "vue-router"
  import data from "../assets/data.json"

  export default {
    name: "Chat",
    setup() {
      const router = useRouter()
      const route = useRoute()
      const currentChat = ref({})

      const goBack = () => {
        router.go(-1)
      }

      onMounted(() => {
        // Scroll to the end of chat
        const messagesList = document.querySelector(".messages-list")
        messagesList.scrollTo(0, 300)

        // get chat data using chatId from params
        let chatId = route.params.chatId

        data.data.map((item) => {
          if (item.id == chatId) {
            currentChat.value = item
          }
        })
      })

      return {
        goBack,
        currentChat,
      }
    },
  }
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    align-items: center;
    padding: 0 30px;
    height: 104px;
    border-bottom: 1px solid rgba(36, 46, 76, 0.15);
  }
  .back-btn {
    border: none;
    background: none;

    i {
      font-size: 20px;
      pointer-events: none;
      color: #242e4c;
    }
  }
  .user {
    display: flex;
    align-items: center;
    margin-left: 25px;
  }
  .user-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
  }
  .user-name {
    margin: 0;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #242e4c;
  }
  .last-seen {
    margin: 0;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #6a738c;
    margin-top: 5px;
  }
  .cta {
    margin-left: auto;
    display: flex;
    gap: 15px;

    button {
      border: none;
      background: none;

      i {
        color: #10182f;
        pointer-events: none;
        font-size: 24px;
      }
    }
  }
  .messages {
    padding: 0 30px;
    height: 600px;
    display: flex;
  }
  .messages-list {
    margin-top: auto;
    height: fit-content;
    max-height: 100%;
    overflow-y: scroll;
    padding: 30px 0 10px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  .message {
    width: fit-content;
    max-width: 331px;
    margin-bottom: 10px;
    margin-left: 40px;
    padding: 15px;
    background: #f2f6f9;
    border-radius: 0px 20px 20px 20px;
    position: relative;

    p {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #242e4c;
      margin-bottom: 5px;

      &:last-child {
        font-size: 12px;
        line-height: 15px;
      }
    }
  }
  .messageSent {
    max-width: 371px;
    background-color: #928af9;
    border-radius: 20px 0px 20px 20px;
    text-align: right;
    margin-left: auto;

    p {
      color: #ffffff;
    }
  }
  .message-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    left: -40px;
    top: 0;
  }
  .new-message {
    background-color: #f8fbfd;
    height: 94px;
    display: flex;
    padding: 0 20px 0 30px;
  }
  .new-message-content {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    input {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #6a738c;
      background: none;
      border: none;
      outline: none;

      &::placeholder {
        opacity: 0.6;
      }
    }
    .files {
      display: flex;
      gap: 26px;
      margin-top: 20px;

      li {
        button {
          background: none;
          border: none;

          i {
            pointer-events: none;
            font-size: 20px;
            color: #82899f;
          }
        }
      }
    }
  }
  .new-message-btn {
    width: 58px;
    height: 63px;
    border: none;
    background-color: #928af9;
    border-radius: 20px;
    margin-left: auto;
    align-self: center;

    i {
      pointer-events: none;
      color: #ffffff;
      font-size: 24px;
    }
  }
</style>
