import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:"dhrgd9p6",
  dataset: "production",
  apiVersion: '2025-01-25',
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: "skOLYdIyRPNiUQQKAnyNovsS4ego51Db5DJtr1tQydBQ1QNgUzdD3zYh8XQARocR4Dij1eSK8JClqHIehWlaZ5vn6Jlme1yPVVstMBeE6xPrndop79sDArqiyESwhMBgcjNgPZZNOljeD3589WCwUdeJPTpUIAUShlD7KG1mnusrsQntzhk3",
})
