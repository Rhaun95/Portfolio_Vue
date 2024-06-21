// file: ~/server/api/auth/[...].ts
import { NuxtAuthHandler } from '@sidebase/nuxt-auth'
import GithubProvider from 'next-auth/providers/github'

export default NuxtAuthHandler({
    providers: [
        GithubProvider.default({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        })
    ]
})
