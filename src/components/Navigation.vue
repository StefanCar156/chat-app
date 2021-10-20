<template>
  <nav>
    <ul class="nav-links">
      <router-link to="/" :active="isActive"
        ><i class="fas fa-comments"></i
      ></router-link>
      <router-link to="/"><i class="far fa-id-card"></i></router-link>
      <router-link to="/"><i class="fas fa-user-circle"></i></router-link>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "Navigation",
  }
</script>

<style lang="scss" scoped>
  nav {
    background-color: #f8fbfd;
    height: 94px;
    width: 100%;
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav-links {
    display: flex;
    padding: 0;
    gap: 40px;
  }
  a {
    color: #b3b4b4;

    i {
      font-size: 30px;
    }
  }
  .isActive {
    display: none;
  }
</style>
