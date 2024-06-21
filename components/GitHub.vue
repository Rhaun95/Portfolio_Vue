<template>
    <div class="flex flex-col justify-center items-center">

      <div v-if="pinnedRepos.length" class=" flex flex-row overflow-hidden">
        <HoverScaleCard 
            v-for="repo in pinnedRepos" 
            :key="repo.id" 
            :name="repo.name"
            :description="repo.description"
            @click="moveToRepo(repo.name)" 

            class="w-64 h-52 p-5">
        </HoverScaleCard>
    </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  
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
  