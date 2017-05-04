title: The Browser Strikes Back
description: The Future of the Web, Episode 2. Peter O'Shaughnessy's slides from JSOxford, May 2017.
output: public/index.html
theme: peter-theme
themecolour: FFE300
url: https://poshaughnessy.github.io/browser-strikes-back-jsoxford-2017/
image: https://poshaughnessy.github.io/browser-strikes-back-jsoxford-2017/images/preview.jpg
controls: false

-- intro starfield

# The Browser <br> Strikes Back

## The Future Of The Web, Episode 2*

<div class="contact">
  <p>Peter O'Shaughnessy</p>
  <p>[@poshaughnessy](https://twitter.com/poshaughnessy)</p>
  <p>[@samsunginternet](https://twitter.com/samsunginternet)</p>
</div>

<div class="caption">*I know. It should be Episode 5 to go with the title. But it's Episode 2. Sorry. Please don't send angry tweets.</div>

<div class="font_preload" style="opacity: 0">
    <span style="font-family: 'SF Distant Galaxy', Arial, sans-serif;"></span>
    <span style="font-family: 'Roboto', Arial, sans-serif;"></span>
    <span style="font-family: 'News Cycle', Arial, sans-serif;"></span>
    <span style="font-family: 'SF Distant Galaxy Outline', Arial, sans-serif;"></span>
</div>

-- darth bg-fade quote

>&ldquo;The reality [is] that the web is in crisis. Actual, real, serious crisis.&rdquo;

<div class="caption">[Alex Russell, 2016](https://twitter.com/slightlylate/status/740226825406668800)</div>

<div class="credit">[erprofe](https://www.flickr.com/photos/erprofe/5182289238/)</div>

-- a-short-time-ago starfield

### A decade ago, in a galaxy not<br> far away....

-- iphone-nyt

<div class="credit">[Robert Scoble](https://www.flickr.com/photos/scobleizer/4697192856)</div>

--

![StatCounter mobile vs desktop graph](images/statcounter-mobile-desktop.png)

-- two-quotes stormtrooper1 bg-fade

>&ldquo;Facebook ditched the Mobile Web&rdquo;

<div class="caption">[Read Write Web](http://readwrite.com/2012/08/23/how-facebook-ditched-the-mobile-web-went-native-with-its-new-ios-app/)</div>

>&ldquo;LinkedIn dumped HTML5&rdquo;

<div class="caption">[Venture Beat](http://venturebeat.com/2013/04/17/linkedin-mobile-web-breakup/)</div>

<div class="credit">[evarinaldiphotography](https://www.flickr.com/photos/evarinaldiphotography/6820622585/)</div>

-- img-with-caption

![Address book access](images/address-book.png)

<div class="caption">The web still does not have certain powers (dark side or not)</div>

<div class="credit">[The Next Web](http://thenextweb.com/mobile/2012/02/11/following-paths-contact-fiasco-instagram-silently-adds-a-contact-list-access-prompt/)</div>

-- img-with-caption

![comScore time spent](images/comscore-time-spent.jpg)

<div class="caption">[Reports](http://venturebeat.com/2013/04/03/the-mobile-war-is-over-and-the-app-has-won-80-of-mobile-time-spent-in-apps/) [suggest](http://flurrymobile.tumblr.com/post/127638842745/seven-years-into-the-mobile-revolution-content-is) 80%-90% of time is spent in apps</div>

-- stormtroopers bg-fade

## &ldquo;It is a dark time for the Rebellion...&rdquo;

<div class="credit">[davebass5](https://www.flickr.com/photos/davebass5/32144721124/)</div>

-- leia bg-fade

## &ldquo;Help us, Browsers. You are our only hope.&rdquo;

<div class="credit">[jdhancock](https://www.flickr.com/photos/jdhancock/9123769012/)</div>

-- browsers starfield

### Diverse these browsers are...

![Chrome](images/browsers/chrome.png) ![Safari](images/browsers/safari.png) ![UC Browser](images/browsers/uc.png) ![Firefox](images/browsers/firefox.png) ![IE](images/browsers/internet-explorer.png) ![Opera](images/browsers/opera.png) ![Samsung Internet](images/browsers/sbrowser5.4.png) ![Android](images/browsers/android.png) ![Edge](images/browsers/edge.png) ![Chromium](images/browsers/chromium.png) ![Firefox Nightly](images/browsers/firefox-nightly.png) ![Carmel](images/browsers/carmel.png)

<div class="caption">[bit.ly/think-you-know-the-top-browsers](http://bit.ly/think-you-know-the-top-browsers)</div>

-- rebellion bg-fade img-with-header

### Meet The Rebellion

![PWA Dev Summit "Rebellion forces"](images/pwa-dev-summit.jpg)

<div class="credit">[chrism70](https://www.flickr.com/photos/chrism70/6100411620/)</div>

-- img-with-caption

![comScore mobile web reach](images/comscore-mobile-web-crop.png)

<div class="caption">The 'distribution' force is strong with the Web</div>

-- best-of-both bg-fade

<div class="left">
<h2> Web force 🌎</h2>
<ul>
<li>Multi-platform</li>
<li>Frictionless</li>
<li>Discoverable</li>
<li>Open</li>
</ul>
</div>

<div class="right">
<h2> App force  📱</h2>
<ul>
<li>Add to Home Screen</li>
<li>Offline & instant load</li>
<li>Push notifications</li>
<li>Hardware integration</li>
</ul>
</div>

<div class="caption">Progressive Web Apps combine both.</div> 

<div class="credit">[nukamari](https://www.flickr.com/photos/nukamari/23549285753/)</div>

-- pwa-results starfield

<div class="flex">
  <div class="flex-item">
    <h4>Alibaba</h4>
    <p>76% increase in conversions</p>
    <img src="images/pwa-alibaba.png" alt="Alibaba"/>
  </div>
  <div class="flex-item">
    <h4>AliExpress</h4>
    <p>104% higher conversion rate for new users</p>
    <img src="images/pwa-aliexpress.png" alt="AliExpress"/>
  </div>
  <div class="flex-item">
    <h4>Flipkart</h4>
    <p>Tripled time-on-site</p>
    <img src="images/pwa-flipkart.png" alt="Flipkart"/>
  </div>
  <div class="flex-item">
    <h4>eXtra Electronics</h4>
    <p>100% more sales via push notifications</p>
    <img src="images/pwa-extraelectronics.png" alt="eXtra Electronics"/>
  </div>
  <div class="flex-item">
    <h4>The Weather Channel</h4>
    <p>80% improvement in load time</p>
    <img src="images/pwa-weatherchannel.png" alt="The Weather Channel"/>
  </div>
</div>

<div class="caption">[developers.google.com/web/showcase/](https://developers.google.com/web/showcase/)</div>

-- yoda-luke bg-fade

[![Twitter moved to a PWA](images/twitter-pwa.jpg)](https://twitter.com/necolas/status/829128165314306048)

-- starsword img-with-caption

![Starsword by Ada Rose Edwards](images/starsword-ada.png)

<div class="caption">[ada.is/starsword/](https://ada.is/starsword/)</div>

-- millennium-falcon bg-fade quote

>&ldquo;What we worried... might be too-little-too-late... has turned out to be a real thing that's actually succeeding in improving business outcomes.&rdquo;

<div class="caption">[Alex Russell, 2017](http://info.inspirehub.com/the-future-of-web-apps-whitepaper)</div>

<div class="credit">[evilspoon63](https://www.flickr.com/photos/evilspoon63/15899075368/)</div>

-- mazkanata bg-fade extra-vignette-1 quote

## &ldquo;The longing you seek is not behind you, it is in front of you&rdquo;

<div class="caption">Let's see how [our predictions from 2015](https://future-of-web-dev-2020.herokuapp.com) are going...</div>

<div class="credit">[girlyseb](https://www.flickr.com/photos/girlyseb/33276785244/)</div>

-- starfield

<blockquote>
  <div>
    <p>&ldquo;The Web will catch up on key features&rdquo;</p>
    <p>&ldquo;Web and Native will continue to blur&rdquo;</p>
  </div>
</blockquote>

<div class="caption">[2020: The Future of Web Development](https://future-of-web-dev-2020.herokuapp.com)</div>

-- img-with-caption

![Web nearing parity with native](images/web-native-parity.jpg)

<div class="credit">[What Comes Next For The Web? - Paul Kinlan](https://www.youtube.com/watch?v=YJwrBbze_Ec)</div>

-- snowvader bg-fade img-with-header four-images

## Deeper Android integration

![Add to homescreen (1)](images/snapwat-android-a2h-1.png) ![Add to homescreen (2)](images/snapwat-android-a2h-2.png) ![Add to homescreen (3)](images/snapwat-android-a2h-3.jpg) ![Add to homescreen (4)](images/snapwat-android-a2h-4.png)

<div class="caption">[developers.google.com/web/updates/2017/02/improved-add-to-home-screen](https://developers.google.com/web/updates/2017/02/improved-add-to-home-screen)</div>

<div class="credit">[st3f4n](https://www.flickr.com/photos/st3f4n/4194969521/)</div>

-- han-cantina bg-fade

## Web Payments

<div class="left" style="width:58%; font-size:0.9em;">
<pre style="display:block;"><code class="lang-javascript"><span class="hljs-keyword">new</span> PaymentRequest(methodData, details)
  .show()
  .then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">uiResult</span>) </span>{
    processPayment(uiResult);
  })
  .catch(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">error</span>) </span>{
    handlePaymentError(error);
  });</code></pre>
</div>
<div class="right" style="width:38%">
  <img alt="Payment Request example" src="images/payment-request-crop.png" style="margin:0 0 0 10px">
</div>

<div class="caption">[bit.ly/how-to-take-web-payments](http://bit.ly/how-to-take-web-payments)</div>

<div class="credit">[trollanmagician](https://www.flickr.com/photos/trollanmagician/33304510702/)</div>

-- ewoks bg-fade

## And lots more...

<div class="caption">[Web Sharing API](https://developers.google.com/web/updates/2016/10/navigator-share), Web Target, [Credential Management API](https://developer.mozilla.org/en-US/docs/Web/API/Credential_Management_API)...</div>

<div class="credit">[el_fedora](https://www.flickr.com/photos/el_fedora/4084742000/)</div>

-- starfield

> &ldquo;JavaScript will get better. Or you can use <span class="no-word-break">$your-fave-lang</span>.&rdquo;

<div class="caption">[2020: The Future of Web Development](https://future-of-web-dev-2020.herokuapp.com)</div>

-- stormtroopers-assembly bg-fade img-with-header

## Web Assembly

![Web Assembly demo](images/web-assembly-demo.jpg)

<div class="caption">[webassembly.org/demo/](http://webassembly.org/demo/)</div>

<div class="credit">[patloika](https://www.flickr.com/photos/patloika/14570819278/)</div>

-- two-quotes starfield

<blockquote>
  <div>
    <p>&ldquo;Virtual Reality to make inroads <br> (after the usual Hype Curve)&rdquo;</p>
    <p>&ldquo;VR and AR merging&rdquo;</p>
  </div>
</blockquote>

<div class="caption">[2020: The Future of Web Development](https://future-of-web-dev-2020.herokuapp.com)</div>

-- virtual-jedi bg-fade img-with-header

## WebVR

![A-Painter example](images/apainter-feiss.jpg)

<div class="caption">[A-Frame Gallery](https://github.com/aframevr/a-painter/issues/99)</div>

<div class="credit">[nighthawk-24](https://www.flickr.com/photos/nighthawk-24/13704681673/)</div>

-- starfield

## The legacy web will become a 2D window inside the metaverse

-- ar-helmet bg-fade img-with-header

## WebAR

![AR.js](images/ar-js.jpg)

<div class="caption">[github.com/jeromeetienne/AR.js](https://github.com/jeromeetienne/AR.js)</div>

<div class="credit">[nowhere77](https://www.flickr.com/photos/nowhere77/3873268950/)</div>

-- hololens extra-vignette-1 valign-bottom

<div class="caption">[&ldquo;Using WebVR, Microsoft can implement it... with HoloLens&rdquo;](https://www.onmsft.com/news/microsoft-begins-work-on-webvr-support-for-edge-browser)</div>

<div class="credit">[microsoftsweden](https://www.flickr.com/photos/microsoftsweden/15716942894/)</div>

-- starfield

## The web will become an extension of the world around us.

-- starfield

>&ldquo;Digital and Physical Merging&rdquo;

<div class="caption">[2020: The Future of Web Development](https://future-of-web-dev-2020.herokuapp.com)</div>

-- luke-training bg-fade three-images img-with-header

## Physical Web

![Physical Web](images/physical-web-google.png) ![Project Magnet](images/project-magnet.png) ![CloseBy](images/closeby.png)

<div class="caption">Google's [Physical Web](https://support.google.com/chrome/answer/6239299), Mozilla's [Project Magnet](https://github.com/mozilla-magnet/magnet), Samsung's [CloseBy](https://samsunginter.net/docs/closeby.html)</div>

<div class="credit">[randar](https://www.flickr.com/photos/randar/15059321301/)</div>

-- wiimote bg-fade img-with-header

## Web Bluetooth
 
![Bluetooth pairing prompt](images/bluetooth-pairing-prompt.png)
 
<div class="credit">[st3f4n](https://www.flickr.com/photos/st3f4n/3545741061/)</div>
 
-- img-with-caption

![BB8 control panel](images/bb8-control.png)

<div class="caption">[operasoftware.github.io/bb8/](https://operasoftware.github.io/bb8/)</div>

-- stormtrooper-thinking bg-fade

## Is &ldquo;browser&rdquo; still the right word?

<div class="caption">[bit.ly/is-browser-still-the-right-word](http://bit.ly/is-browser-still-the-right-word)</div>

<div class="credit">[kalexanderson](https://www.flickr.com/photos/kalexanderson/8024368295/)</div>

-- starfield

> &ldquo;AI tools could help us.&rdquo;

<div class="caption">[2020: The Future of Web Development](https://future-of-web-dev-2020.herokuapp.com)</div>

-- stormtroopers-googling quote bg-fade

>&ldquo;Imagine your IDE is connected to an AI service, and polls it for suggestions every keystroke (or few). Now you can have the whole of the machine-crunchable Web behind you.&rdquo;

[peteroshaughnessy.com/posts/artificial-intelligence-future-of-coding/](https://peteroshaughnessy.com/posts/artificial-intelligence-future-of-coding/)

<div class="credit">[st3f4n](https://www.flickr.com/photos/st3f4n/3951143570)</div>

-- img-with-caption robots bg-fade

![Marvin](images/marvin.png)

<div class="caption">"Marvin connects your editor to open source knowledge in real time as you code" - Yonatan Saring</div>

<div class="credit">[donsolo](https://www.flickr.com/photos/donsolo/3768623542/)</div>

-- luke-shooting bg-fade quote

## &ldquo;Stay sharp. There's two more coming in.&rdquo;

<div class="caption">The following ideas do not represent Samsung plans, just personal thoughts...</div>

<div class="credit">[randar](https://www.flickr.com/photos/randar/14953437567/)</div>

-- starfield

## Browsers & AI agents merging

-- c3po ai bg-fade

#### 🗣️ &ldquo;Show me flight options for Alderaan on the 4th May&rdquo;

#### 🗣️ &ldquo;Where are the droids I'm looking for?&rdquo;

#### 🗣️ &ldquo;How do you blow up a Death Star?&rdquo;

<div class="caption">Most browsing tasks could be quicker & easier via AI assistants.</div>

-- r2d2 bg-fade

## &ldquo;Semantic Web&rdquo; v2?

<div class="caption">Imagine booking a hotel by using your AI agent to contact a website's AI agent...</div>

<div class="credit">[Phil Renaud](https://www.flickr.com/photos/59716929@N04/14768709339/)</div>

-- starfield

## AI and VR merging

-- storyteller valign-bottom

<div class="caption">[Storyteller by Dan Zajdband](https://zajdband.com/storyteller/vr.html)</div>

-- yoda1 future bg-fade quote

## &ldquo;Always in motion is the future.&rdquo;

<div class="caption">Yoda</div>

<div class="credit">[korymatthew](https://www.flickr.com/photos/korymatthew/14211839966/)</div>

-- ewok-gamorrean bg-fade

## &ldquo;This time we'll do it together&rdquo;

<div class="caption">Obi-Wan Kenobi</div>

<div class="credit">[st3f4n](https://www.flickr.com/photos/st3f4n/5582582531/)</div>

-- thanks starfield

# Thanks!

### And May the Fourth be with you tomorrow!

<h4 class="slides-link">🌍 [bit.ly/browser-strikes-back-oxford](http://bit.ly/browser-strikes-back-oxford)</h4>

<div class="social">
  <h4 class="twitter">[@poshaughnessy](https://twitter.com/poshaughnessy)</h3>
  <h4 class="twitter">[@samsunginternet](https://twitter.com/samsunginternet)</h3>
  <h4 class="github">[github.com/samsunginternet](https://github.com/SamsungInternet/)</h3>  
</div>
