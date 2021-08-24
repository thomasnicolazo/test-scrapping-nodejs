
const rp = require('request-promise');
const cheerio = require('cheerio');
// const puppet = require('puppeteer')
const target_url = 'https://citation-celebre.leparisien.fr/';
var pageObj = {};
var url = target_url

rp(url)
 .then( (html) =>{
   let $ = cheerio.load(html);
   let citation = $(".laCitation > p > q > a");
   let auteurCitation = $(".auteur > div > cite > a");
   pageObj.citationDay = {  "citation" : citation.html(), "auteur" : auteurCitation.html()};
   //let htmlProverbe = $("");
 })
 .catch(function(err){
   //handle error
 });
module.exports = {pageObj};
