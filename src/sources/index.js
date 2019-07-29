const Airtable = require('airtable');

module.exports = function (api, opts) {
  const base = new Airtable({apiKey: opts.apiKey}).base(opts.base);

  api.loadSource(async store => {
    const contentType = store.addContentType({
        typeName: 'Resources',
        route: '/resources/:slug',
    });

    await base('Resources').select().eachPage((records, fetchNextPage) => {
      records.forEach((record) => {
        const item = record._rawJson;

        contentType.addNode({
          id: item.id,
          ...item.fields
        });
      });
      fetchNextPage();
    });
  });

  api.loadSource(async store => {
    const contentType = store.addContentType({
        typeName: 'Opportunities',
        route: '/opportunities/:slug',
    });

    await base('Opportunities').select().eachPage((records, fetchNextPage) => {
      records.forEach((record) => {
        const item = record._rawJson;

        contentType.addNode({
          id: item.id,
          ...item.fields
        });
      });
      fetchNextPage();
    });
  });
};