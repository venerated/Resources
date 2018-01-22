const links = [
  // Accessibility
  {category: 'accessibility', url: 'https://the-pastry-box-project.net/anne-gibson/2014-july-31',
   title: 'An Alphabet of Accessibility Issues'},
  {category: 'accessibility', url: 'https://www.axe-core.org/',
   title: 'Easy Accessibility Testing with aXe'},
  {category: 'accessibility', url: 'https://a11yproject.com/',
   title: 'The A11Y Project'},

  // Aggregate
  {category: 'aggregate', url: 'https://tympanus.net/codrops/',
   title: 'Codrops'},
  {category: 'aggregate', url: 'https://frontend.directory/',
   title: 'Frontend Directory'},
  {category: 'aggregate', url: 'https://www.smashingmagazine.com/',
   title: 'Smashing Magazine'},
  
  // Branding
  {category: 'branding', url: 'https://namechk.com/',
   title: 'Namechk'},
  {category: 'branding', url: 'https://www.trademarkia.com/',
   title: 'Trademarkia'},
  {category: 'branding', url: 'http://whois.domaintools.com/',
   title: 'Whois Lookup'},
  
  // Browser Add-Ons
  {category: 'browser-addons', url: 'http://palettab.com/',
   title: 'Palettab'},

  // Colors
  {category: 'colors', url: 'https://color.adobe.com/create/color-wheel/',
   title: 'Adobe Color CC'},
  {category: 'colors', url: 'https://meyerweb.com/eric/tools/color-blend/#:::hex',
   title: 'Color Blender'},
  {category: 'colors', url: 'http://www.colourlovers.com/',
   title: 'Colour Lovers'},
  {category: 'colors', url: 'http://hex2rgba.devoth.com/',
   title: 'Devoth\'s HEX 2 RGBA Color Calculator'},
  {category: 'colors', url: 'https://www.grabient.com/',
   title: 'Grabient'},

  // CSS
  {category: 'css', url: 'http://csscursor.info/',
   title: 'CSS Cursors!'},
  {category: 'css', url: 'https://bitsofco.de/css-font-sizing/',
   title: 'CSS Font Sizing'},
  {category: 'css', url: 'https://css-tricks.com/',
   title: 'CSS-Tricks'},
  {category: 'css', url: 'https://www.noupe.com/design/css-perfect-print-stylesheet-98272.html',
   title: 'Perfect Print Stylesheet'},
  // Move this link https://css-tricks.com/currentcolor/ to CSS helper repo
  
  // Fonts
  {category: 'fonts', url: 'https://fonts.google.com/',
   title: 'Google Fonts'},
  {category: 'fonts', url: 'http://losttype.com/',
   title: 'Lost Type Co-op'},

  // Illustration
  {category: 'illustration', url: 'https://medium.com/@janoskoos/my-vector-workflow-dd1357d28d7c',
   title: 'Vector Workflow'},
  
  // Images
  {category: 'images', url: 'https://unsplash.com/',
   title: 'Unsplash'},
  
  // Inspiration
  {category: 'inspiration', url: 'https://www.awwwards.com/',
   title: 'Awwwards'},
  {category: 'inspiration', url: 'http://www.sharesomecandy.com/',
   title: 'ShareSomeCandy'},
  
  // JavaScript
  {category: 'javascript', url: 'http://phantomjs.org/',
   title: 'PhantomJS | Headless webkit'},
  {category: 'javascript', url: 'http://jariz.github.io/vibrant.js/',
   title: 'Vibrant.js | Extract prominent colors from an image.'},

  // Jobs
  {category: 'jobs', url: 'https://99designs.com/',
   title: '99 Designs'},
  {category: 'jobs', url: 'https://authenticjobs.com/',
   title: 'Authentic Jobs'},
  {category: 'jobs', url: 'https://www.builtinchicago.org/jobs',
   title: 'Chicago Startup & Tech Jobs | Built In Chicago'},
  {category: 'jobs', url: 'https://chicago.craigslist.org/d/jobs/search/jjj',
   title: 'Chicago Jobs | Craigslist'},
  {category: 'jobs', url: 'https://www.indeed.com/',
   title: 'Indeed'},
  {category: 'jobs', url: 'https://codepen.io/jobs/',
   title: 'Jobs on CodePen'},
  {category: 'jobs', url: 'https://www.designernews.co/jobs',
   title: 'Jobs on Designer News'},
  {category: 'jobs', url: 'https://dribbble.com/jobs',
   title: 'Jobs on Dribbble'},
  {category: 'jobs', url: 'https://www.linkedin.com/jobs/',
   title: 'Jobs on LinkedIn'},
  {category: 'jobs', url: 'https://www.reddit.com/me/m/jobs/new/',
   title: 'Jobs on Reddit'},
  {category: 'jobs', url: 'https://stackoverflow.com/jobs',
   title: 'Jobs on Stack Overflow'},
  {category: 'jobs', url: 'https://remoteok.io/',
   title: 'remote|ok'},
  {category: 'jobs', url: 'https://www.upwork.com/',
   title: 'Upwork'},
  {category: 'jobs', url: 'https://weworkremotely.com/',
   title: 'We Work Remotely'},
  {category: 'jobs', url: 'https://www.ziprecruiter.com/',
   title: 'Zip Recruiter'},

  // Networking
  {category: 'networking', url: 'https://hunter.io/',
   title: 'Hunter | Find email addresses in seconds'},

  // Photoshop
  {category: 'photoshop', url: 'http://photoshopetiquette.com/',
   title: 'Photoshop Etiquette'},
  
  // Podcasts
  {category: 'podcasts', url: 'https://responsivewebdesign.com/podcast/',
   title: 'Responsive Web Design'},
  {category: 'podcasts', url: 'http://syntax.fm/',
   title: 'Syntax'},
  
  // Responsive Web Design
  {category: 'responsive', url: 'http://embedresponsively.com/',
   title: 'Embed Responsively'},
  {category: 'responsive', url: 'http://iosres.com/',
   title: 'iOS Resolution Quick Reference'},
  {category: 'responsive', url: 'http://bradfrost.github.io/this-is-responsive/index.html',
   title: 'This Is Responsive | Patterns and Resources for Responsive Web Design'},
  
  // SEO
  {category: 'seo', url: 'https://backlinko.com/keyword-research',
   title: 'Keyword Research | Backlinko.com'},
  
  // Social Media
  {category: 'social-media', url: 'https://www.behance.net/',
   title: 'Behance'},
  {category: 'social-media', url: 'https://codepen.io/',
   title: 'Codepen'},
  {category: 'social-media', url: 'https://dribbble.com/',
   title: 'Dribbble'},
  {category: 'social-media', url: 'https://www.reddit.com/',
   title: 'Reddit'},
  {category: 'social-media', url: 'https://www.tumblr.com/',
   title: 'Tumblr'},
  {category: 'social-media', url: 'https://twitter.com/',
   title: 'Twitter'},
  {category: 'social-media', url: 'https://www.youtube.com/',
   title: 'YouTube'},

  // Task Automation
  {category: 'task-automation', url: 'https://ifttt.com/',
   title: 'IFTTT'},

  // Typography
  {category: 'typography', url: 'http://hellohappy.org/beautiful-web-type/',
   title: 'Beautiful web type — the best typefaces from the Google web fonts directory'},
  {category: 'typography', url: 'https://www.typewolf.com/',
   title: 'Typewolf'},

  // Utilities
  {category: 'utilities', url: 'https://caniuse.com/',
   title: 'Can I use...'},
  {category: 'utilities', url: 'https://www.google.com/alerts',
   title: 'Google Alerts'},
  {category: 'utilities', url: 'https://developers.google.com/web/tools/lighthouse/',
   title: 'Google Lighthouse'},
  {category: 'utilities', url: 'https://placeholder.com/',
   title: 'Placeholder'},
  {category: 'utilities', url: 'http://stylifyme.com/',
   title: 'Stylify'},
  {category: 'utilities', url: 'https://jakearchibald.github.io/svgomg/',
   title: 'SVGOMG'},
  {category: 'utilities', url: 'https://reeddesign.co.uk/test/points-pixels.html',
   title: 'Unit Conversion'},

  // Web Prototyping
  {category: 'web-prototyping', url: 'http://styletil.es/',
   title: 'Style Tiles'},
  
  // Web Testing
  {category: 'web-testing', url: 'https://developers.facebook.com/tools/debug/',
   title: 'Facebook Open Graph Debugger'},
  {category: 'web-testing', url: 'https://developers.google.com/speed/pagespeed/insights/',
   title: 'PageSpeed Insights'},
  {category: 'web-testing', url: 'https://cards-dev.twitter.com/validator',
   title: 'Twitter Card Validator'},
  {category: 'web-testing', url: 'https://varvy.com/',
   title: 'Varvy | SEO Tool for Google Web Master Guidelines'},
  {category: 'web-testing', url: 'https://validator.w3.org/',
   title: 'W3C Markup Validator'},
  
]

function buildLinks(category){
  const resourcesSelector = document.querySelector('.resources');
  resourcesSelector.innerHTML += '<section class="' + category + '"><h4>' + category.replace(/-/, ' ') + '</h4>';
  for(let i=0;i<links.length;i++) {
    if(links[i].category === category) {
      const categorySelector = document.querySelector("." + category);
      categorySelector.innerHTML += '<a href="' + links[i].url + '" target="_blank">' + links[i].title + '</a><br>';
    }
  }
  resourcesSelector.innerHTML += '</section>';
}

buildLinks('accessibility');
buildLinks('aggregate');
buildLinks('branding');
buildLinks('browser-addons');
buildLinks('colors');
buildLinks('css');
buildLinks('fonts');
buildLinks('illustration');
buildLinks('images');
buildLinks('inspiration');
buildLinks('javascript');
buildLinks('jobs');
buildLinks('networking');
buildLinks('podcasts');
buildLinks('photoshop');
buildLinks('responsive');
buildLinks('seo');
buildLinks('social-media');
buildLinks('task-automation');
buildLinks('typography');
buildLinks('utilities');
buildLinks('web-prototyping');
buildLinks('web-testing');