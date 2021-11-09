# Reousrces



### Books <a href="books" id="books"></a>

If you have time, I strongly recommend reading these books to get a deeper understanding of certain software engineering topics. I've read about 60% of their total content, full books in some cases and just several interesting chapters in others, and I feel it helped me a lot.

* [Effective Java](https://amzn.to/2SDGB8Q) – best book on Java, and I would recommend reading it even if you mostly use some other language.
* [Designing Data-Intensive Applications](https://amzn.to/2LEINMP) – a very good overview of the big distributed systems, and one of the best technical books I've ever read.
* [Clean Code](https://amzn.to/2LCBO77) – classic book on writing a good code.
* [Building Microservices](https://amzn.to/2LFzLzk) – good book on microservices (without any unnecessary hype around them) that also provides a good overview of topics of security, testing, deployment and others.
* [Design Patterns by Gang of Four](https://amzn.to/2YgE1qL) – classic book on design patterns. If you don't read all of it, make sure to at least know the following patterns: Singleton, Builder, Observer, Decorator, Facade.
* [Cracking the Coding Interview](https://amzn.to/2YpL4kX) – I've read just several interesting chapters from there, but it's still a solid book about interview preparation in particular.
* [Modern Operating Systems](https://amzn.to/2Ye8rKl) – some chapters in this book provide a nice overview of hardware, memory management and other systems related concepts.
* [Learning PHP, MySQL & JavaScript](https://amzn.to/2YdLCWZ) – this book, which you can just skim in one evening, surprisingly provides a good overview of many important web concepts.
* [Coders at Work](https://amzn.to/30XzmM9) – book of motivating interviews with great programmers.

### Coding interviews <a href="coding-interviews" id="coding-interviews"></a>

Software engineer's interviews usually consist of coding, system design and behavioral rounds. Coding rounds, though, take at least 80% of the process, and by far are the most important. At these rounds you will typically get 1-2 algorithmic problems that you will need to solve in the language of your choice in about 45-60 minutes.

* For practicing solving problems there is nothing better than [Leetcode](https://leetcode.com). It's so good that I feel anybody who solves 300-400 problems there will get a fair chance of clearing almost any interview round.
  * Leetcode has a lot of problems that are asked at the real interviews in big companies. By my estimations, about 25-30% of the problems I was asked to solve during the real interviews I solved on Leetcode before, and about 70% of the problems I was asked have something very similar there.
  * There is also a premium subscription for Leetcode that opens you more problems and features. I found it only somewhat helpful (mostly "problem frequency" feature and company problems lists), so it's up to you if you want to buy it or not. As another bonus, paying for the Leetcode subscription can be an additional motivation to solve it more ;)
  * Problem difficulties are not always very accurate, so don't skip easy problems. Hard problems, on the other hand, may be too tedious and intimidating, so get to them only once you are comfortable, and mix them with easier problems as well. Before my onsite rounds, I solved 333 Leetcode problems (115 easy, 160 medium, 58 hard), including \~100 that I solved several years before.
  * For choosing what to solve next, I recommend filtering problems by company tags (choose companies you want to apply to) and frequency. I also solved all problems from these collections and found them to be very helpful: [top facebook questions](https://leetcode.com/problemset/top-facebook-questions/), [top google questions](https://leetcode.com/problemset/top-google-questions/) and [top interview questions](https://leetcode.com/problemset/top-interview-questions/).
  * I participated in nine Leetcode contests and managed to reach 24th global rank before my onsites. Contests may be helpful to train your speed, but it's important to watch out for your solutions' code quality – you should write very clean code in your real interviews.
  * After solving the problem, be sure to check its discussion and some of the top solutions there. This will help you to learn about any better ways to solve the problem, and also you may find some good code examples for the language of your choice. Generally, at the interviews companies expect you to know at least one language very well, and write real code (not pseudocode) even on a whiteboard.
  * Avoid using IDEs and solve the problems right in the editor on the Leetcode website or on a whiteboard. This will better simulate a real interview environment.
* [Cracking the Coding Interview](https://amzn.to/2YpL4kX) book has a nice collection of problems, though nowadays it's not as useful as Leetcode, where you can compile and test your solution. I mostly just checked the chapters I found interesting to me (for example, I recommend chapters about linked lists and trees).
* During phone interviews you will code in some kind of a web editor while talking with the interviewer on a phone/skype, and on onsite interviews you mostly will code on the whiteboard. Writing a code on a whiteboard is pretty different from coding on the computer, therefore it's important to actually buy a whiteboard and solve more and more problems on it closer you get to the onsites. I got [this one](https://amzn.to/2SCTCQa), and recommend getting at least this size or bigger.
* This will probably be covered by 300-400 problems at Leetcode, but here is a list of algorithms and techniques you absolutely need to know: time and space complexity, sorting (quicksort, mergesort), binary search, hashmaps, trees, graphs, BFS/DFS, union find, tries, bit manipulation, stacks/queues, dynamic programming, priority queue, two pointers, recursion/backtracking, greedy solutions. Knowing this may also help: string hashing (Rabin-Karp algorithm), probability/combinatorics, segment tree, binary indexed tree (Fenwick Tree).
* Note for those who are coming from competitive programming world: interview questions are a bit different than programming competitions problems. For example, in interview problems you may find restrictions that are pretty rare in CP world, like don't use division, don't use extra memory at all, or try solving the problem without using some particular algorithm. Also, code style expected in interviews is much cleaner and more structured than typical competitive programming code. Therefore even if you are pretty good with algorithms and solving competitive programming problems, I'd suggest still solving some Leetcode problems to get used to the format and prepare better.\
  \
  On the other hand, interview problems are much easier :)

### Distributed computing problems <a href="distributed-computing-problems" id="distributed-computing-problems"></a>

Some companies, especially Google, like to ask follow up problems that involve distributed computing – basically the same algorithmic problems, but you need to try to solve them using multiple cores/machines. I still don't know any good thorough source on this (ping me if you know?), but here is some material that I used for preparation:

* [Cormen](https://amzn.to/2SDKZVo) has a nice chapter on parallel computing.
* Some links that discuss certain distributed algorithm problems: [1](https://www.quora.com/What-is-the-distributed-algorithm-to-determine-the-median-of-arrays-of-integers-located-on-different-computers), [2](https://cs.stackexchange.com/questions/21910/parallel-algorithm-for-finding-the-maximum-in-log-n-time-using-n-log-n-p).
* Learn about MapReduce paradigm and Spark framework.

### System design interviews <a href="system-design" id="system-design"></a>

In system design interviews, you are usually given a very vague design problem (like design Twitter), and you need to share your approach in about 45 minutes. The purpose of this interview is to test your experience working with real software systems, and how much you know about these systems in general. Usually, interns and new grads don't get this type of interviews, but otherwise you may expect it at every big tech company.

Here is a list of material you absolutely need to check:

* [Intro to system design interviews with Jackson Gabbard](https://youtu.be/ZgdS0EUmn70) - really helpful video on the topic. I watched it twice.
* [System design course on educative.io](https://www.educative.io/collection/5668639101419520/5649050225344512) - good collection of solutions for common system design problems. It's not free, but well worth it. Several lessons are also available for free preview.
* [Harvard lecture on scalability](https://youtu.be/-W9F\_\_D3oY4).
* Read at least several chapters in [Designing Data-Intensive Applications](https://amzn.to/2y8rACD).
* [Building Microservices](https://amzn.to/2SF6IMS) has nice chapters on security, deployment and other topics you may want to review.

Here are some videos that I found helpful:

* [How We've Scaled Dropbox](https://youtu.be/PE4gwstWhmc) – fascinating story of Dropbox going from one server to massive infrastructure supporting millions of users.
* [What I Wish I Had Known Before Scaling Uber to 1000 Services](https://youtu.be/kb-m2fasdDY).
* [Building Software Systems At Google and Lessons Learned](https://youtu.be/modXC5IWTJI) by Jeff Dean.
* [Facebook and memcached](https://youtu.be/UH7wkvcf0ys)
* [Oversubscribing Apache Spark Resource Usage for Fun and \$$$](https://vimeo.com/274784933) featuring my good friend Sergey :)

I think one of the best ways to prepare for system design interviews is to expose yourself to as much information about designs of the real systems as possible, so here are lots of links to the blog posts, articles, videos and papers I found useful:

* [Highscalability.com](http://highscalability.com) - a nice website with articles on the real scalable systems, though I found the quality of some of the articles to be quite mediocre.
* [System design primer](https://github.com/donnemartin/system-design-primer) - huge collection of materials and links on system design.
* [Nginx book on microservices.](https://www.nginx.com/wp-content/uploads/2015/01/Building\_Microservices\_Nginx.pdf)
* Gainlo has a nice [blog](http://blog.gainlo.co) on system design and generally interview preparation.
* [Uber tech stack](https://eng.uber.com/tech-stack-part-one/)
* [How Uber Engineers an Efficient Route](https://eng.uber.com/engineering-an-efficient-route/)
* [A Look at WhatsApp: Engineering for Success at Scale](https://developers.facebook.com/videos/f8-2016/a-look-at-whatsapp-engineering-for-success-at-scale/)
* [How WhatsApp Reduced Spam for Over 1 Billion People](https://developers.facebook.com/videos/f8-2017/how-whatsapp-reduced-spam-for-over-1-billion-people/)
* [One Year Designing at WhatsApp](https://medium.com/facebook-design/one-year-designing-at-whatsapp-c20b4c46bae6)
* [MySQL at Yelp](https://engineeringblog.yelp.com/2015/01/mysql-at-yelp.html)
* [Quizlet Tests Cloud Spanner](https://quizlet.com/blog/quizlet-cloud-spanner)
* [Google book on SRE](https://landing.google.com/sre/book.html)
* [Command-line Tools can be 235x Faster than your Hadoop Cluster](https://adamdrake.com/command-line-tools-can-be-235x-faster-than-your-hadoop-cluster.html)
* [The biggest smallest website](https://adamdrake.com/the-biggest-smallest-website.html)
* [Why the Hell Would You Use Node.js](https://medium.com/the-node-js-collection/why-the-hell-would-you-use-node-js-4b053b94ab8e)
* [How Twitter is fighting spam and malicious automation](https://blog.twitter.com/official/en\_us/topics/company/2018/how-twitter-is-fighting-spam-and-malicious-automation.html)
* [CAP Twelve Years Later: How the “Rules” Have Changed](https://klevas.mif.vu.lt/\~donatas/PSArchitekturaProjektavimas/Library/EventualConsistency/2012%20Brewer%20CAP%20twelve%20years%20later%20-%20How%20the%20rules%20have%20changed.pdf)
* [Spanner: Google’s Globally-Distributed Database](https://storage.googleapis.com/pub-tools-public-publication-data/pdf/39966.pdf)
* [Spanner, TrueTime & The CAP Theorem](https://storage.googleapis.com/pub-tools-public-publication-data/pdf/45855.pdf)
* [Big Data and Google's Three Papers I - GFS and MapReduce](https://bowenli86.github.io/2016/10/23/distributed%20system/data/Big-Data-and-Google-s-Three-Papers-I-GFS-and-MapReduce/)
* [Designing Schemaless, Uber Engineering’s Scalable Datastore Using MySQL](https://eng.uber.com/schemaless-part-one/)
* [How does HTTPS actually work?](https://robertheaton.com/2014/03/27/how-does-https-actually-work/)
* [BlueGreenDeployment](https://martinfowler.com/bliki/BlueGreenDeployment.html)
* [Under the hood: MySQL Pool Scanner (MPS)](https://www.facebook.com/notes/facebook-engineering/under-the-hood-mysql-pool-scanner-mps/10151750529723920/)
* [(Re)Introducing Edgestore](https://blogs.dropbox.com/tech/2016/08/reintroducing-edgestore/)
* [How We Partitioned Airbnb’s Main Database in Two Weeks](https://medium.com/airbnb-engineering/how-we-partitioned-airbnb-s-main-database-in-two-weeks-55f7e006ff21)
* [Evernote migration to Google Cloud Platform](https://evernote.com/blog/part-1-our-options-to-migrate/)
* [Jepsen: On the perils of network partitions](https://aphyr.com/posts/281-call-me-maybe-carly-rae-jepsen-and-the-perils-of-network-partitions)
* [The Google Technical Interview. How to Get Your Dream Job](https://web.eecs.umich.edu/\~weimerw/481/readings/googleinterview.pdf)
* [Introducing "Testing on the Toilet"](https://testing.googleblog.com/2007/01/introducing-testing-on-toilet.html)
* [Tape Rescues Google in Lost Email Scare](https://blogs.wsj.com/digits/2011/03/01/tape-rescues-google-in-lost-email-scare/) and [Gmail back soon for everyone](https://gmail.googleblog.com/2011/02/gmail-back-soon-for-everyone.html)
* [Google Project Zero](https://googleprojectzero.blogspot.com)
* [How to Solve Google's Crazy Open-Ended Interview Questions](https://www.wired.com/2014/08/how-to-solve-crazy-open-ended-google-interview-questions/)
* [Google’s Site Reliability Engineering Podcast with Todd Underwood](https://softwareengineeringdaily.com/2016/06/14/googles-site-reliability-engineering-todd-underwood/)
* [The Design Interview From the Interviewer's Perspective](https://www.linkedin.com/pulse/design-interview-from-interviewers-perspective-joey-addona/)
* [Computer System Engineering MIT course](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-033-computer-system-engineering-spring-2009/video-lectures/)
* [Awesome public Google postmortem](https://groups.google.com/forum/?fromgroups=#!msg/google-appengine/6SN\_x7CqffU/ecHIgNnelboJ)
* [Java concurrent package](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/package-summary.html)
* [What’s different about the new Google Docs: Conflict resolution](https://drive.googleblog.com/2010/09/whats-different-about-new-google-docs\_22.html)
* [Bunch](https://en.wikipedia.org/wiki/Fallacies\_of\_distributed\_computing) [of](https://en.wikipedia.org/wiki/Robustness\_principle) [Wikipedia](https://en.wikipedia.org/wiki/Reverse\_proxy) [articles](https://en.wikipedia.org/wiki/Push\_technology)
* [Some](https://stackoverflow.com/questions/868568/what-do-the-terms-cpu-bound-and-i-o-bound-mean) [StackOverflow](https://stackoverflow.com/questions/7690230/in-depth-analysis-of-the-difference-between-the-cpu-and-gpu) [questions](https://stackoverflow.com/questions/224664/difference-between-proxy-server-and-reverse-proxy-server)

### Behavioral interviews <a href="behavioral" id="behavioral"></a>

In behavioral interviews, you will typically get asked questions like "What is the most challenging project you worked on?" or "What was your biggest failure during the time at the company X?", but this differs from company to company. At some companies, you may also get these questions asked during the usual coding interview rounds.

It's pretty hard to effectively prepare for this type of interview, but here are some guidelines and materials that will help:

* Start with this [video by Jackson Gabbard](https://www.youtube.com/watch?v=PJKYqLP6MRE).
* Read a related chapter in [Cracking the Coding Interview](https://amzn.to/2YpL4kX).
* [Good list of behavioral questions](https://yangshun.github.io/tech-interview-handbook/behavioral-questions/).
* [Communication: how to be a better software developer](https://medium.com/techspiration-ideas-making-it-happen/communication-how-to-be-a-better-software-developer-869c50767701).

### Mock interviews <a href="mock-interviews" id="mock-interviews"></a>

Real interviews are a pretty unique experience: you have to solve tough algorithmic problems in a limited time with somebody looking how you do it and with you explaining every step aloud. It may be confusing even if you are already a good coder, and this skill requires practice.

The best way to practice this without the risk of failing to get to the company of your dream is doing mock interviews. In these interviews you solve real interview problems in the setting as close to the real thing as possible. Here are the ways how you can do it:

* Practice with friends. I did two mock interviews with friends and found both sessions very helpful. The downside of this approach is that you know your "interviewer" in advance, and, as a result, you are not as nervous as you may be on the real interview.
* [Pramp](https://www.pramp.com) offers free mock interviews with peers, where you interview somebody over the internet for half an hour, and then they interview you. I did four mock interviews on the website, and found some of them to be pretty useful. On the downside, session quality heavily depends on your peer and the problem website chooses for you, and often the experience can be not that good. I also didn't really want to spend the time to interview people. During my time at ipsy I interviewed dozens of people, but if you never did this, I strongly suggest you trying Pramp – taking the side of the interviewer is a valuable experience.
* For best mock interview experience, I strongly suggest [gainlo.co](http://www.gainlo.co). On this website, you arrange paid mock interviews with real engineers from Google, Facebook and other companies. Mock interviews are pretty expensive, but well worth it (partially because when you pay a lot of money for a mock interview, you treat it very seriously).\
  I did four sessions: three with Googlers and one with Facebooker. Three interviews were coding ones, and one was system design. Mocks were awesome in three cases out of four, and these sessions really helped me to prepare better for the real interviews. One session, unfortunately, was quite mediocre.

### Applying to companies <a href="applying" id="applying"></a>

Applying to the companies is an art of its own. Remember that the whole interview process will take some time, so I suggest starting to reach out to the companies earlier. Here are some more additional points on this process:

* Since preparing for the interviews is a big investment of your time and energy, it totally makes sense to apply to many companies at the same time. This way you have more chances that you will succeed, and with multiple offers at hand you can also negotiate a better compensation.
* Best way to apply to the companies is through referrals from somebody who already works there. So reach out to your friends and friends of friends!
* I solved all of Dropbox challenges at [Codesignal](https://codesignal.com/company-challenges/) (former Codefights), and within two weeks got contacted by 4-5 companies, including Twitter and Evernote. You may also try this.
* Keep your LinkedIn updated. It is a good way to get contacted by the recruiters.
* Don't stress out about resume too much. Read a chapter about resume in [Cracking the Coding Interview](http://a.co/3Q56nKo), and check out this [link on Careercup](https://www.careercup.com/resume). Here is a Google Docs resume [template](https://docs.google.com/document/d/1DMwe3DmqwGcOqjzdRge4usbKcB1d4He-I-lzns-rviQ/edit?usp=sharing) that me and several of my friends successfully used to apply to the big tech companies – you can make a copy to create your own similar one! :)

You should also research the companies you apply to. Apart from Google and Wikipedia, here are some helpful links:

* [Glassdoor](https://www.glassdoor.com) is a platform with employee reviews and other details for different companies.
* [Blind](https://www.teamblind.com) is an app and website where employees anonymously discuss their companies and a wide variety of other topics.

I also found that applying to the companies depends on your level of experience:

* Students and new grads usually can apply only to internships and new grad positions respectively.
* People with 3-5+ years of experience usually can easily get interviews almost anywhere.
* Most of the positions require 3+ years of experience to apply for them, so with 1-2 years of experience (like in my case), the choice is somewhat limited and it may be harder to get interviews, especially with smaller companies.

### Offers, negotiations and beyond <a href="offers-and-beyond" id="offers-and-beyond"></a>

Here are some resources that will help you better navigate and negotiate different company offers. Remember that they want to hire you as much or even more as you want to get hired! :)

* [Nice equity compensation guide](https://github.com/jlevy/og-equity-compensation), read it to learn more about stocks, taxes and so on.
* [Salary Negotiation with Haseeb Qureshi](https://softwareengineeringdaily.com/2016/07/11/salary-negotiation-with-haseeb-qureshi/) - a podcast with some interesting ideas about salary negotiating.
* [An Engineer’s guide to Stock Options](https://blog.alexmaccaw.com/an-engineers-guide-to-stock-options).
* [Levels.fyi](https://www.levels.fyi) - here you can compare levels and compensation in different companies.
* [Blind post](https://www.teamblind.com/article/stop-asking-for-tech-company-offer-numbers-read-this-and-thank-me-later-%F0%9F%A4%A6-sN8uYpop) that compares offer numbers for different levels at different tech companies.
* [Ten Rules for Negotiating a Job Offer](https://medium.freecodecamp.org/ten-rules-for-negotiating-a-job-offer-ee17cccbdab6) and [How not to bomb your offer negotiation](https://medium.freecodecamp.org/how-not-to-bomb-your-offer-negotiation-c46bb9bc7dea).

### Misc <a href="misc" id="misc"></a>

* For phone screens make sure you have a reliable internet and phone connection, good headphones with a microphone, and a quiet place where you can be alone for the whole time. I also found that the best time for me to do phone screens is the first thing in the morning (after some breakfast of course). Interviews are a pretty nervous experience so you want to make yourself as comfortable and relaxed as you can.
* Onsite interviews are physically and psychologically demanding, so you should take at least one rest day before and between them. I'd suggest taking something like one-two weeks off specifically to do onsites, and not doing more than three of them per week.
* Good luck! Generally, more you prepare, more you have it :)
