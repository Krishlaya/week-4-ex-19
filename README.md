This PR implements async generator-based paginated fetch.

- fetchPages() lazily fetches data page-by-page
- UI loads data on "Load More" button click
- Displays page status
- Stops when no more data is available
- loadAll() fetches all pages using for-await-of

Ensures only one network request per page.
