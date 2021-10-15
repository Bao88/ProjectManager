export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61694e8bb0f8a5a68ac7afee',
                  title: 'Sanity Studio',
                  name: 'projectmanager-studio',
                  apiId: 'f86ad0f6-5a00-4e0c-8e47-fa7f29dca9fa'
                },
                {
                  buildHookId: '61694e8b48fee4bc7f3a2831',
                  title: 'Landing pages Website',
                  name: 'projectmanager-web',
                  apiId: '9db56de0-7099-4c98-ae65-db91da831579'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Bao88/ProjectManager',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://projectmanager-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
