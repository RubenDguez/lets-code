const posts = [
    {
        title: `What's the reason behind Coding Best Practices?`,
        img: null,
        message: `In today's dynamic landscape of software development, adhering to coding best practices is no longer merely a choice but a necessity. By embracing these principles, developers can elevate the quality, scalability, and maintainability of their codebase, ultimately delivering robust and efficient solutions that meet the evolving needs of users and stakeholders.`,
        posted: `Wed, May 15 2024`,
        href: `https://rubendguez.github.io/lets-code/pages/best-practices.html`
    },
    {
        title: `Is JavaScript a good choice for beginner developers?`,
        img: {
            src: './assets/images/javascript-powered-multichannel.gif',
            alt: 'JavaScript powered multichannel'
        },
        message: `JavaScript's simplicity, versatility, immediate feedback, rich ecosystem, job market demand, strong community support, and cross-platform capabilities make it an ideal choice for beginner developers. By starting with JavaScript, new developers can quickly build practical skills and gain confidence, setting the stage for a successful career in programming.`,
        posted: 'Mon, May 20 2024',
        href: 'https://rubendguez.github.io/lets-code/pages/javascript-for-beginners',
    },
    {
        title: `Getting Started with Git: A Beginner's Guide to Version Control`,
        img: {
            src: './assets/images/git.jpg',
            alt: 'Git'
        },
        message: `In simple terms, Git is a tool that helps developers keep track of changes in their code and work together. It's like a system for managing different versions of code, so you can easily see what changed, go back to earlier versions, and collaborate with others. Basically, Git is a distributed version control system (DVCS) that helps developers manage and track changes to their code, letting multiple people work on a project at the same time. It keeps a history of all the changes and makes it easier to coordinate updates, making teamwork a lot smoother.`,
        posted: 'Thu, Jun 6 2024',
        href: 'https://rubendguez.github.io/lets-code/pages/git-for-beginners.html',
    },
    {
        title: `Getting Started with HTML: A Beginner's Guide`,
        img: {
            src: './assets/images/html.jpeg',
            alt: 'HTML'
        },
        message: `HTML is the foundation of all web pages. Without HTML, the web as we know it wouldn't exist. It allows content to be structured and presented in a way that is accessible and easy to navigate for users, while also enabling search engines to understand and index the content properly. HTML is a fundamental language for creating web pages, structuring content, and enabling interaction through hyperlinks, making it an essential tool for anyone looking to develop or understand web content.`,
        posted: 'Fri, Jun 7 2024',
        href: 'https://rubendguez.github.io/lets-code/pages/intro-to-html-basics.html',
    },
];

`
		<header style="display: flex; justify-content: space-between; align-items: center" class="p-5 flex">
			<h1 class="text-white text-6xl">Let&apos;s Code</h1>
			<div class="text-white space-x-3">
				<a class="inline-block align-middle px-5" target="_blank" href="https://www.linkedin.com/in/argenis-dominguez/"><i class="fa-brands fa-linkedin-in"></i> </a>
				<a class="inline-block align-middle px-5" target="_blank" href="https://www.facebook.com/argenis.dgz.2008/"><i class="fa-brands fa-facebook"></i></a>
				<a class="inline-block align-middle px-5" target="_blank" href="https://twitter.com/ArgenisDoming18/"><i class="fa-brands fa-x-twitter"></i></a>
				<a class="inline-block align-middle px-5" target="_blank" href="https://github.com/RubenDguez/"><i class="fa-brands fa-github"></i></a>
				<a class="inline-block align-middle px-5" target="_blank" href="https://rubendguez.github.io/rdominguez/"><i class="fa-solid fa-rocket"></i></a>
			</div>
		</header>
`

const headerEl = document.createElement('header');
headerEl.setAttribute('style', 'display: flex; justify-content: space-between; align-items: center');
headerEl.setAttribute('class', 'p-5 flex');

const h1El = document.createElement('h1');
h1El.setAttribute('class', 'text-white text-6xl');
h1El.textContent = `Let's Code`;

const linksWrapper = document.createElement('div');
linksWrapper.setAttribute('class', 'text-white space-x-3');

const linksEls = () => {
    const links = [
        { href: 'https://www.linkedin.com/in/argenis-dominguez/', iconClass: 'fa-brands fa-linkedin-in' },
        { href: 'https://www.facebook.com/argenis.dgz.2008/', iconClass: 'fa-brands fa-facebook' },
        { href: 'https://twitter.com/ArgenisDoming18/', iconClass: 'fa-brands fa-x-twitter' },
        { href: 'https://github.com/RubenDguez/', iconClass: 'fa-brands fa-github' },
        { href: 'https://rubendguez.github.io/rdominguez/', iconClass: 'fa-solid fa-rocket' },
    ]

    return links.map((link) => {
        const linkEl = document.createElement('a');
        linkEl.setAttribute('class', 'inline-block align-middle px-5');
        linkEl.setAttribute('target', '_blank');
        linkEl.setAttribute('href', link.href);

        const iconEl = document.createElement('i');
        iconEl.setAttribute('class', link.iconClass);

        linkEl.appendChild(iconEl);

        return linkEl;
    })
}

linksEls().forEach((el) => (linksWrapper.appendChild(el)));

headerEl.appendChild(h1El);
headerEl.appendChild(linksWrapper);

document.body.appendChild(headerEl);

const mainEl = document.createElement('main');
mainEl.setAttribute('id', 'main');
mainEl.setAttribute('class', 'container flex justify-center gap-4 p-5 flex-wrap mx-auto tracking-wide leading-relaxed');
document.body.appendChild(mainEl);

function addArticle(post) {
    const articleEl = document.createElement('article');
    articleEl.setAttribute('class', "border p-5 rounded max-w-xs bg-blend-normal bg-gradient-to-r from-cyan-500 to-blue-500");

    const postedEl = document.createElement('p');
    postedEl.setAttribute('class', 'text-xs mt-5 italic text-white');
    postedEl.textContent = post.posted;

    const linkEl = document.createElement('a');
    linkEl.setAttribute('href', post.href);

    const h2El = document.createElement('h2');
    h2El.setAttribute('class', 'text-2xl text-white')
    h2El.textContent = post.title;

    linkEl.appendChild(h2El);

    const imgEl = document.createElement('img');
    if (post.img) {
        imgEl.setAttribute('src', post.img.src);
        imgEl.setAttribute('alt', post.img.alt);
    }

    const messageEl = document.createElement('p');
    messageEl.setAttribute('class', 'text-sm mt-5 text-white');
    messageEl.textContent = post.message;

    articleEl.appendChild(postedEl);
    articleEl.appendChild(linkEl);
    articleEl.appendChild(imgEl);
    articleEl.appendChild(messageEl);

    document.getElementById('main').appendChild(articleEl);
}

posts.forEach((post) => addArticle(post));
