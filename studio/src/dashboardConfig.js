export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f762cc7ab8cdb0233a9a190',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jbi62j9g',
                  apiId: '383999e8-b0c1-4936-8899-356cec7693e0'
                },
                {
                  buildHookId: '5f762cc7d3c9a4a9fb63d047',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-1j71177z',
                  apiId: 'a7712369-2e3c-4689-b1c1-0540dba6ffc1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/icecandy/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-1j71177z.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
