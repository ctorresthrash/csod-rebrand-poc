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
                  buildHookId: '60f05ca72544810daa9488f0',
                  title: 'Sanity Studio',
                  name: 'csod-rebrand-poc-studio',
                  apiId: '6036efa4-2c3a-4da4-9f27-df76c9a92934'
                },
                {
                  buildHookId: '60f05ca70b7b5311ad052e8e',
                  title: 'Landing pages Website',
                  name: 'csod-rebrand-poc',
                  apiId: '99787b91-9029-4c6e-ba43-b4f222bd20f9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ctorresthrash/csod-rebrand-poc',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://csod-rebrand-poc.netlify.app', category: 'apps'}
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
