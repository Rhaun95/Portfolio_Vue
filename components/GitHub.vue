<template>
    <div class="flex flex-col justify-center items-center">

      <div v-if="pinnedRepos.length" class=" flex flex-row overflow-hidden">
        <div @click="moveToRepo(repo.name)" v-for="repo in pinnedRepos" :key="repo.id" class="flex flex-col justify-center text-center w-64 h-52 p-5 border border-2 border-gray-400 rounded-lg m-3
        cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-105 hover:border-lime-100">
         
            <p>{{ repo.description }}</p>
            <hr class="w-full mb-2"/>
            <div class="text-lg">{{ repo.name }}</div>
          <!-- <p><strong>Stars:</strong> {{ repo.stargazers.totalCount }}</p>
          <p><strong>Forks:</strong> {{ repo.forkCount }}</p> -->
        </div>
    </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRuntimeConfig } from '#app'
  import { GraphQLClient, gql } from 'graphql-request'
  
  const router = useRouter()
  const moveToRepo = (repoName: String) => {
    // code here
    window.open(`https://github.com/Rhaun95/${repoName}` , '_blank')
  }

  const config = useRuntimeConfig()
  const pinnedRepos = ref<any[]>([])
  
  const fetchPinnedRepos = async () => {
    const endpoint = 'https://api.github.com/graphql'
    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: `Bearer ${config.public.githubToken}`
      }
    })
  
    const query = gql`
      {
        user(login: "Rhaun95") {
          pinnedItems(first: 4, types: [REPOSITORY]) {
            nodes {
              ... on Repository {
                id
                name
                description
                stargazers {
                  totalCount
                }
                forkCount
              }
            }
          }
        }
      }
    `
  
    const data = await graphQLClient.request(query)
    pinnedRepos.value = data.user.pinnedItems.nodes
  }
  
  onMounted(() => {
    fetchPinnedRepos()
  })
  </script>
  