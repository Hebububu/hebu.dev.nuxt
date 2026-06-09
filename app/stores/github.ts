type GithubContribution = {
    date: string
    level: number
}

export const useGithubStore = defineStore('githubStore', {
    state: () => ({
        contributions: [] as GithubContribution[]
    }),
    actions: {
        async fetchGithubContributions() {
            try {
                const url = 'https://github-contributions-api.jogruber.de/v4/Hebububu?y=last';
                const json = await $fetch<{
                    contributions?: GithubContribution[]
                }>(url)
                const days = json.contributions ?? [];
                this.contributions = days.length > 150 ? days.slice(-150) : days
            } catch {
                this.contributions = [];
            }
        }
    }
})
