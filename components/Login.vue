<template>
    <div>

        <UButton v-if="loggedIn" icon="i-heroicons-pencil-square" color="teal" variant="soft" @click="handleLogOut">Logout</UButton>
        <UButton v-else icon="i-heroicons-pencil-square"  color="teal" variant="soft" @click="signInWithGitHub">Admin</UButton>
    </div>

</template>

<script setup lang="ts">
  import { useSession } from '@sidebase/nuxt-auth'

  const { status, signIn, signOut } = useSession()
  const loggedIn = computed(() => status.value === 'authenticated')


  // const loggedIn = computed(() => $auth.status ==='authenticated')
  const signInWithGitHub = async () => {
    // await $auth.signIn()
  }
  const handleLogOut = async () => {
    // await $auth.signOut()
  }
</script>