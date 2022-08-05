// import { Client } from "@notionhq/client"
var client = require("@notionhq/client")
const client = new Client({ auth: process.env.NOTION_KEY })
