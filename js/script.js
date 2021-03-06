'use strict';
function titleClickHandler(event){
	event.preventDefault();
	const clickedElement = this;
  console.log('Link was clicked!');
  /* remove class 'active' from all article links  */
const activeLinks = document.querySelectorAll('.titles a.active');
for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}

  /* add class 'active' to the clicked link */
  console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active');

  /* remove class 'active' from all articles */
const activeArticles = document.querySelectorAll('.posts article.active');
for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
}

  /* get 'href' attribute from the clicked link */
const articleSelector = clickedElement.getAttribute('href');
console.log(articleSelector);
  
  /* find the correct article using the selector (value of 'href' attribute) */
const targetArticle = document.querySelector(articleSelector);
console.log(targetArticle);
  
  /* add class 'active' to the correct article */
targetArticle.classList.add('active');
}





const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author',
  opttagsListSelector = '.tags .list';

function generateTitleLinks(customSelector = ''){

  /* remove contents of titleList */
const titleList = document.querySelector(optTitleListSelector);
titleList.innerHTML = '';

  /* for each article */
const articles = document.querySelectorAll(optArticleSelector + customSelector);

let html = '';

for (let article of articles){
	 /* get the article id */
	const articleId = article.getAttribute('id');
	console.log(articleId);
	 /* find the title element */
    /* get the title from the title element */
	const articleTitle = article.querySelector(optTitleSelector).innerHTML;
	/* create HTML of the link */
	const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
	console.log(linkHTML);
	 /* insert link into titleList */
	/*titleList.innerHTML = titleList.innerHTML + linkHTML;*/
	html = html + linkHTML;
}
   titleList.innerHTML = html;
}

generateTitleLinks();
const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

function generateTags(){
  /* find all articles */
const articles = document.querySelectorAll('.post');
  /* START LOOP: for every article: */
for (let article of articles){
    /* find tags wrapper */
const tagWrapper = article.querySelector(optArticleTagsSelector);
    /* make html variable with empty string */
let html = '';
    /* get tags from data-tags attribute */
const articleTags = article.getAttribute('data-tags');
console.log(articleTags);
    /* split tags into array */
const articleTagsArray = articleTags.split(' ');
console.log(articleTagsArray);
    /* START LOOP: for each tag */
for(let tag of articleTagsArray){
	console.log(tag);
      /* generate HTML of the link */
const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + ' ' + '</span></a></li>';
      /* add generated code to html variable */
html = html + linkHTML;
    /* END LOOP: for each tag */
}
    /* insert HTML of all the links into the tags wrapper */
tagWrapper.innerHTML = html;
  /* END LOOP: for every article: */
}
}

generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */
  	event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
	const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  	const href = clickedElement.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
  	const tag = href.replace('#tag-', '');
  	console.log(tag);
  /* find all tag links with class active */
  	const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each active tag link */
	for(let tagLink of tagLinks){
    /* remove class active */
    	tagLink.classList.remove('active');
  /* END LOOP: for each active tag link */
}
  /* find all tag links with "href" attribute equal to the "href" constant */
  	const appropriateTagLinks= document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
  	for(let appropriateTagLink of appropriateTagLinks){
    /* add class active */
    	appropriateTagLink.classList.add('active');
  /* END LOOP: for each found tag link */
}
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  /* find all links to tags */
const linksToTags = document.querySelectorAll('.post-tags a');
  /* START LOOP: for each link */
  	for(let linkToTag of linksToTags){
    /* add tagClickHandler as event listener for that link */
    	linkToTag.addEventListener('click', tagClickHandler);
  /* END LOOP: for each link */
}
}
addClickListenersToTags();







function generateAuthor(){
  /* find all articles */
const articles = document.querySelectorAll('.post');
  /* START LOOP: for every article: */
for (let article of articles){
    /* find author's wrapper */
const authorWrapper = article.querySelector(optArticleAuthorSelector);
    /* make html variable with empty string */
let html = '';
    /* get author's from data-author attribute */
const articleAuthor = article.getAttribute('data-author');
console.log(articleAuthor);
      /* generate HTML of the link */
const linkHTML = '<a href="#author-' + articleAuthor + '"><span>' + articleAuthor + '</span></a>';
      /* add generated code to html variable */
html = html + linkHTML;
    /* insert HTML of all the links into the author's wrapper */
authorWrapper.innerHTML = html;
  /* END LOOP: for every article: */
}
}

generateAuthor();




function authorClickHandler(event){
  /* prevent default action for this event */
  	event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
	const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  	const href = clickedElement.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
  	const author = href.replace('#author-', '');
  	console.log(author);
  /* find all tag links with class active */
  	const authorLinks = document.querySelectorAll('a.active[href^="#author-"]');
  /* START LOOP: for each active tag link */
	for(let authorLink of authorLinks){
    /* remove class active */
    	authorLink.classList.remove('active');
  /* END LOOP: for each active tag link */
}
  /* find all tag links with "href" attribute equal to the "href" constant */
  	const appropriateAuthorLinks= document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
  	for(let appropriateAuthorLink of appropriateAuthorLinks){
    /* add class active */
    	appropriateAuthorLink.classList.add('active');
  /* END LOOP: for each found tag link */
}
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-author="' + author + '"]');
}

function addClickListenersToAuthor(){
  /* find all links to tags */
const linksToAuthors = document.querySelectorAll('.post-author a');
  /* START LOOP: for each link */
  	for(let linkToAuthor of linksToAuthors){
    /* add tagClickHandler as event listener for that link */
    	linkToAuthor.addEventListener('click', authorClickHandler);
  /* END LOOP: for each link */
}
}
addClickListenersToAuthor();





